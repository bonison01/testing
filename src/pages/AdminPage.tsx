
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  is_featured: boolean;
}

interface Registration {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  organization: string;
  event_id: string;
  created_at: string;
}

const AdminPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }
      
      // Check if user is an admin
      const { data: profileData, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();
      
      if (error || !profileData) {
        console.error("Error fetching profile:", error);
        toast({
          title: "Access Denied",
          description: "You don't have permission to access this area.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }
      
      setUserRole(profileData.role);
      
      if (profileData.role !== 'admin') {
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges.",
          variant: "destructive",
        });
        navigate("/");
      }
    };
    
    checkAuth();
    
    const fetchData = async () => {
      setLoading(true);
      
      // Fetch events
      const { data: eventsData, error: eventsError } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: true });
      
      if (eventsError) {
        console.error("Error fetching events:", eventsError);
        toast({
          title: "Error",
          description: "Failed to load events.",
          variant: "destructive",
        });
      } else if (eventsData) {
        setEvents(eventsData);
      }
      
      // Fetch registrations
      const { data: registrationsData, error: registrationsError } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (registrationsError) {
        console.error("Error fetching registrations:", registrationsError);
        toast({
          title: "Error",
          description: "Failed to load registrations.",
          variant: "destructive",
        });
      } else if (registrationsData) {
        setRegistrations(registrationsData);
      }
      
      setLoading(false);
    };
    
    fetchData();
  }, [navigate, toast]);
  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate("/");
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading admin panel...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleSignOut}>Sign Out</Button>
        </div>
        
        <Tabs defaultValue="events" className="w-full">
          <TabsList>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="registrations">Registrations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="events" className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold">Events</h2>
              <Button size="sm" onClick={() => navigate("/admin/events/new")}>
                Create New Event
              </Button>
            </div>
            
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Featured</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.length > 0 ? (
                    events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>
                          {new Date(event.event_date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell>{event.is_featured ? "Yes" : "No"}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => navigate(`/admin/events/${event.id}`)}
                            >
                              Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                        No events found. Create your first event!
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="registrations" className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Registrations</h2>
            
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {registrations.length > 0 ? (
                    registrations.map((registration) => (
                      <TableRow key={registration.id}>
                        <TableCell className="font-medium">{registration.full_name}</TableCell>
                        <TableCell>{registration.email}</TableCell>
                        <TableCell>{registration.phone || "-"}</TableCell>
                        <TableCell>{registration.organization || "-"}</TableCell>
                        <TableCell>
                          {new Date(registration.created_at).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                        No registrations yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
