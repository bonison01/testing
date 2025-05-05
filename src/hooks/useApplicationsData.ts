
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/AuthContext";
import { ApplicationData } from "@/types/applications";

export const useApplicationsData = () => {
  const [applications, setApplications] = useState<ApplicationData[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { session, isAdmin, isLoading } = useAuth();

  useEffect(() => {
    const fetchApplications = async () => {
      if (!isLoading && !session) {
        navigate("/auth");
        return;
      }
      
      if (!isLoading && session) {
        if (!isAdmin) {
          toast({
            title: "Access Denied",
            description: "You do not have permission to view this page.",
            variant: "destructive",
          });
          navigate("/");
          return;
        }
        
        try {
          const { data, error } = await supabase
            .from("mental_maths_applications")
            .select("*")
            .order("created_at", { ascending: false });
            
          if (error) throw error;
          
          setApplications(data as ApplicationData[]);
        } catch (error: any) {
          console.error("Error fetching applications:", error);
          toast({
            title: "Error",
            description: "Failed to load application data.",
            variant: "destructive",
          });
        } finally {
          setLoading(false);
        }
      }
    };
    
    fetchApplications();
  }, [isLoading, session, isAdmin, navigate, toast]);

  const handleVerifyPayment = async (id: string) => {
    try {
      const { error } = await supabase
        .from("mental_maths_applications")
        .update({ payment_verified: true })
        .eq("id", id);
        
      if (error) throw error;
      
      // Update local state
      setApplications(applications.map(app => 
        app.id === id ? { ...app, payment_verified: true } : app
      ));
      
      toast({
        title: "Payment Verified",
        description: "The payment has been marked as verified.",
      });
    } catch (error: any) {
      console.error("Error verifying payment:", error);
      toast({
        title: "Error",
        description: "Failed to verify payment.",
        variant: "destructive",
      });
    }
  };

  const updateAdmitCardDetails = async (
    id: string, 
    roll_number: string, 
    exam_date: Date, 
    exam_time: string, 
    exam_centre: string
  ) => {
    try {
      const { error } = await supabase
        .from("mental_maths_applications")
        .update({
          roll_number,
          exam_date: exam_date.toISOString(),
          exam_time,
          exam_centre,
        })
        .eq("id", id);
        
      if (error) throw error;
      
      // Update local state
      setApplications(applications.map(app => 
        app.id === id 
          ? { 
              ...app, 
              roll_number,
              exam_date: exam_date.toISOString(),
              exam_time,
              exam_centre,
            } 
          : app
      ));
      
      toast({
        title: "Admit Card Updated",
        description: "The admit card details have been successfully updated.",
      });
      
      return true;
    } catch (error: any) {
      console.error("Error updating admit card:", error);
      toast({
        title: "Error",
        description: "Failed to update admit card details.",
        variant: "destructive",
      });
      return false;
    }
  };

  return { 
    applications, 
    loading, 
    handleVerifyPayment,
    updateAdmitCardDetails
  };
};
