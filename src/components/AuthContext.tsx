
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Session, User } from '@supabase/supabase-js';
import { useToast } from "@/hooks/use-toast";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  profile: any | null;
  isLoading: boolean;
  isAdmin: boolean;
  refreshProfile: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  profile: null,
  isLoading: true,
  isAdmin: false,
  refreshProfile: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) {
        console.error('Error fetching user profile:', error);
        return null;
      } else if (data) {
        setProfile(data);
        setIsAdmin(data.role === 'admin');
        return data;
      }
      return null;
    } catch (err) {
      console.error('Exception fetching profile:', err);
      return null;
    }
  };

  const refreshProfile = async () => {
    if (!user?.id) return;
    await fetchUserProfile(user.id);
  };

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);

        // If user logs out, clear the profile
        if (event === 'SIGNED_OUT' || !currentSession) {
          setProfile(null);
          setIsAdmin(false);
        }
        
        // When user logs in or token is refreshed
        if (currentSession?.user && (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED')) {
          try {
            // Add a delay to avoid potential race conditions with profile creation
            setTimeout(async () => {
              const profile = await fetchUserProfile(currentSession.user.id);
              
              // If profile doesn't exist after signup, we might need to reload
              if (!profile && event === 'SIGNED_IN') {
                toast({
                  title: "Profile setup",
                  description: "Setting up your profile..."
                });
                // Give time for the trigger to create the profile
                setTimeout(() => refreshProfile(), 1000);
              }
            }, 500);
          } catch (err) {
            console.error("Error in auth state change handler:", err);
          }
        }
      }
    );

    // Check for existing session
    const initializeAuth = async () => {
      setIsLoading(true);
      
      const { data: { session: currentSession } } = await supabase.auth.getSession();
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.user) {
        await fetchUserProfile(currentSession.user.id);
      }
      
      setIsLoading(false);
    };

    initializeAuth();

    return () => {
      subscription.unsubscribe();
    };
  }, [toast]);

  return (
    <AuthContext.Provider value={{ session, user, profile, isAdmin, isLoading, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
