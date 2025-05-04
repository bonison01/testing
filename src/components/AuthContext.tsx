
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

  const fetchUserProfile = async (userId: string, retryCount = 0): Promise<any> => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle(); // Using maybeSingle instead of single to handle case where profile doesn't exist yet
      
      if (error) {
        console.error('Error fetching user profile:', error);
        return null;
      } else if (data) {
        setProfile(data);
        setIsAdmin(data.role === 'admin');
        return data;
      } else if (retryCount < 3) {
        // Profile may not be created yet due to trigger timing
        // Wait and retry a few times
        console.log(`Profile not found for user ${userId}, retrying... (${retryCount + 1}/3)`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
        return fetchUserProfile(userId, retryCount + 1);
      }
      
      console.log(`Profile still not found after retries for user ${userId}`);
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
          // Important: Use setTimeout to avoid potential race conditions with Supabase
          setTimeout(async () => {
            try {
              const profile = await fetchUserProfile(currentSession.user.id);
              
              // If profile doesn't exist after signup, we might need to create it manually
              if (!profile && event === 'SIGNED_IN') {
                toast({
                  title: "Profile setup",
                  description: "Setting up your profile..."
                });
                
                // Try to insert the profile manually if the trigger failed
                try {
                  const { error } = await supabase.from('profiles').insert({
                    id: currentSession.user.id,
                    full_name: currentSession.user.user_metadata.full_name || currentSession.user.email,
                    // If no profiles exist, make this user an admin
                    role: await isFirstUser() ? 'admin' : 'user'
                  });
                  
                  if (!error) {
                    // Wait a moment and then fetch the profile again
                    setTimeout(() => refreshProfile(), 1000);
                  } else {
                    console.error("Error creating profile:", error);
                  }
                } catch (err) {
                  console.error("Error in manual profile creation:", err);
                }
              }
            } catch (err) {
              console.error("Error in auth state change handler:", err);
            }
          }, 500);
        }
      }
    );

    // Helper function to check if this is the first user
    const isFirstUser = async (): Promise<boolean> => {
      const { count, error } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });
      
      return !error && count === 0;
    };

    // Check for existing session
    const initializeAuth = async () => {
      setIsLoading(true);
      
      const { data: { session: currentSession } } = await supabase.auth.getSession();
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.user) {
        // Add a delay before fetching profile to ensure DB operations complete
        setTimeout(async () => {
          await fetchUserProfile(currentSession.user.id);
          setIsLoading(false);
        }, 1000);
      } else {
        setIsLoading(false);
      }
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
