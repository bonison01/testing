
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/AuthContext";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface ApplicationData {
  id: string;
  form_no: string;
  applicant_name: string;
  class: string;
  mobile_number: string;
  payment_verified: boolean;
  created_at: string;
  roll_number: string | null;
  exam_date: string | null;
  exam_time: string | null;
  exam_centre: string | null;
}

const admitCardSchema = z.object({
  roll_number: z.string().min(1, "Roll number is required"),
  exam_date: z.date({
    required_error: "Exam date is required",
  }),
  exam_time: z.string().min(1, "Exam time is required"),
  exam_centre: z.string().min(1, "Exam centre is required"),
});

type AdmitCardFormValues = z.infer<typeof admitCardSchema>;

const AdminApplicationsPage = () => {
  const [applications, setApplications] = useState<ApplicationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { session, isAdmin, isLoading } = useAuth();
  
  const form = useForm<AdmitCardFormValues>({
    resolver: zodResolver(admitCardSchema),
    defaultValues: {
      roll_number: "",
      exam_time: "",
      exam_centre: "",
    },
  });
  
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
  
  const openAdmitCardDialog = (id: string, application: ApplicationData) => {
    setSelectedAppId(id);
    
    // Pre-fill form with existing values if available
    form.reset({
      roll_number: application.roll_number || "",
      exam_date: application.exam_date ? new Date(application.exam_date) : undefined,
      exam_time: application.exam_time || "",
      exam_centre: application.exam_centre || "",
    });
    
    setDialogOpen(true);
  };
  
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
  
  const handleAdmitCardSubmit = async (values: AdmitCardFormValues) => {
    if (!selectedAppId) return;
    
    try {
      const { error } = await supabase
        .from("mental_maths_applications")
        .update({
          roll_number: values.roll_number,
          exam_date: values.exam_date.toISOString(),
          exam_time: values.exam_time,
          exam_centre: values.exam_centre,
        })
        .eq("id", selectedAppId);
        
      if (error) throw error;
      
      // Update local state
      setApplications(applications.map(app => 
        app.id === selectedAppId 
          ? { 
              ...app, 
              roll_number: values.roll_number,
              exam_date: values.exam_date.toISOString(),
              exam_time: values.exam_time,
              exam_centre: values.exam_centre,
            } 
          : app
      ));
      
      toast({
        title: "Admit Card Updated",
        description: "The admit card details have been successfully updated.",
      });
      
      setDialogOpen(false);
      setSelectedAppId(null);
    } catch (error: any) {
      console.error("Error updating admit card:", error);
      toast({
        title: "Error",
        description: "Failed to update admit card details.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading applications...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mental Maths Competition Applications</h1>
        <Button onClick={() => navigate("/admin")}>Back to Admin</Button>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Form No</TableHead>
                <TableHead>Applicant Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Applied On</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Admit Card</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            
            <TableBody>
              {applications.length > 0 ? (
                applications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">{app.form_no}</TableCell>
                    <TableCell>{app.applicant_name}</TableCell>
                    <TableCell>{app.class}</TableCell>
                    <TableCell>{app.mobile_number}</TableCell>
                    <TableCell>{format(new Date(app.created_at), "MMM d, yyyy")}</TableCell>
                    <TableCell>
                      {app.payment_verified ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Verified
                        </span>
                      ) : (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleVerifyPayment(app.id)}
                        >
                          Verify Payment
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {app.roll_number ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Issued
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Not Issued
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        onClick={() => openAdmitCardDialog(app.id, app)}
                      >
                        {app.roll_number ? "Edit Admit Card" : "Issue Admit Card"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-4 text-gray-500">
                    No applications found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Issue/Edit Admit Card</DialogTitle>
            <DialogDescription>
              Enter the details for the applicant's admit card.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAdmitCardSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="roll_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roll Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter roll number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="exam_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Exam Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Select date</span>
                            )}
                            <Calendar className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="exam_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Exam Time</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 10:00 AM - 12:00 PM" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="exam_centre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Exam Centre</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter exam centre name and address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminApplicationsPage;
