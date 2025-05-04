
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { CalendarDays, Trophy, Flag } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Event } from "@/types/database";

const UpcomingEventsSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        
        // Use raw SQL query instead of from() to handle tables that might not be reflected in TypeScript types yet
        const { data, error } = await supabase.rpc('get_featured_events');
        
        if (error) {
          console.error("Error fetching events:", error);
        } else if (data && data.length > 0) {
          setEvents(data as Event[]);
        } else {
          // If no featured events, fall back to default content
          setEvents([]);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);
  
  // Default event for fallback or while loading
  const defaultEvent = {
    id: "default",
    title: "June Education Competition",
    description: "Join our prestigious education competition with $50,000 in prizes and connect with industry leaders. Open to students in grades 4-6 and 11-12.",
    event_date: "2025-06-15T00:00:00",
    location: "Virtual Event",
    is_featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  // Calculate the countdown time for competition
  const competitionDate = new Date(events[0]?.event_date || 'June 15, 2025 00:00:00');
  const now = new Date();
  const daysLeft = Math.ceil((competitionDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  // Use featured event from DB or fallback to default
  const featuredEvent = events.length > 0 ? events[0] : defaultEvent;
  
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
            <p className="text-gray-600 mt-2">Mark your calendar for these exciting opportunities</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <NavLink to="/events">View All Events</NavLink>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Event */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-xl h-full bg-gradient-to-r from-emerald-600 to-green-500 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 -mt-12 -mr-12">
                <div className="w-full h-full rounded-full bg-white/10"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32 -mb-10 -ml-10">
                <div className="w-full h-full rounded-full bg-white/5"></div>
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="mb-4 flex items-center space-x-2">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white">Featured</Badge>
                  <Badge className="bg-white/20 hover:bg-white/30 text-white">Education</Badge>
                </div>
                
                <div className="flex items-center mb-3">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">
                    {new Date(featuredEvent.event_date).toLocaleDateString(undefined, { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredEvent.title}</h3>
                <p className="mb-6">{featuredEvent.description}</p>
                
                <div className="flex items-center mb-6">
                  <Trophy className="w-5 h-5 mr-2" />
                  <span className="font-medium">$50,000 Prize Pool</span>
                </div>
                
                <div className="mt-auto flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
                    <NavLink to="/competition">Register Now</NavLink>
                  </Button>
                  <div className="flex items-center justify-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-md">
                    <Flag className="w-5 h-5 mr-2" />
                    <span className="font-medium">{daysLeft} days left to register</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Event Details Card */}
          <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={featuredEvent.image_url || "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800"} 
                alt={featuredEvent.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  <span className="text-sm">
                    {new Date(featuredEvent.event_date).toLocaleDateString(undefined, { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Competition Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <Trophy className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Prizes</h4>
                    <p className="text-sm text-gray-600">$50,000 prize pool with awards for all participants</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <CalendarDays className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Schedule</h4>
                    <p className="text-sm text-gray-600">
                      Registration closes {new Date(featuredEvent.event_date).toLocaleDateString(undefined, {month: 'short', day: 'numeric'})}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <Flag className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Eligibility</h4>
                    <p className="text-sm text-gray-600">Open for students of classes 4-6 and 11-12</p>
                  </div>
                </div>
              </div>
              
              <Button asChild variant="outline" className="w-full mt-6">
                <NavLink to="/competition#details">Learn More</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
