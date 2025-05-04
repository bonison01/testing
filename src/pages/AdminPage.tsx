import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/AuthContext";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Event, Registration } from "@/types/database";

const AdminPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { session, isAdmin, profile, isLoading } = useAuth();

  useEffect(() => {
    const loadData = async () => {
      // First check if user is authenticated
      if (!isLoading && !session) {
        toast({
          title: "Authentication Required",
          description: "Please log in to access the admin area.",
          variant: "destructive",
        });
        navigate("/auth");
        return;
      }
      
      // Then check if user is admin once profile is loaded
      if (!isLoading && !isAdmin) {
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }
      
      // If authentication checks passed, load data
      if (!isLoading && isAdmin) {
        setLoading(true);
        
        try {
          // Fetch events using RPC
          const { data: eventsData, error: eventsError } = await supabase.rpc('get_all_events');
          
          if (eventsError) {
            console.error("Error fetching events:", eventsError);
            toast({
              title: "Error",
              description: "Failed to load events.",
              variant: "destructive",
            });
          } else if (eventsData) {
            setEvents(eventsData as Event[]);
          }
          
          // Fetch registrations using RPC
          const { data: registrationsData, error: registrationsError } = await supabase.rpc('get_all_registrations');
          
          if (registrationsError) {
            console.error("Error fetching registrations:", registrationsError);
            toast({
              title: "Error",
              description: "Failed to load registrations.",
              variant: "destructive",
            });
          } else if (registrationsData) {
            setRegistrations(registrationsData as Registration[]);
          }
        } catch (err) {
          console.error("Error loading admin data:", err);
        } finally {
          setLoading(false);
        }
      }
    };
    
    loadData();
  }, [isLoading, isAdmin, session, navigate, toast]);
  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate("/");
  };
  
  // Show loading while checking auth or loading data
  if (isLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading admin panel...</p>
      </div>
    );
  }
  
  // Redirect is handled in the useEffect
  if (!isAdmin || !session) {
    return null;
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
