
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ApplicationsTable from "@/components/admin/ApplicationsTable";
import AdmitCardDialog, { AdmitCardFormValues } from "@/components/admin/AdmitCardDialog";
import { useApplicationsData } from "@/hooks/useApplicationsData";
import { ApplicationData } from "@/types/applications";

const AdminApplicationsPage = () => {
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [admitCardDefaults, setAdmitCardDefaults] = useState<Partial<AdmitCardFormValues>>({});
  const navigate = useNavigate();
  
  const { 
    applications, 
    loading, 
    handleVerifyPayment, 
    updateAdmitCardDetails 
  } = useApplicationsData();
  
  const openAdmitCardDialog = (id: string, application: ApplicationData) => {
    setSelectedAppId(id);
    
    // Pre-fill form with existing values if available
    setAdmitCardDefaults({
      roll_number: application.roll_number || "",
      exam_date: application.exam_date ? new Date(application.exam_date) : undefined,
      exam_time: application.exam_time || "",
      exam_centre: application.exam_centre || "",
    });
    
    setDialogOpen(true);
  };
  
  const handleAdmitCardSubmit = async (values: AdmitCardFormValues) => {
    if (!selectedAppId) return;
    
    const success = await updateAdmitCardDetails(
      selectedAppId, 
      values.roll_number, 
      values.exam_date, 
      values.exam_time, 
      values.exam_centre
    );
    
    if (success) {
      setDialogOpen(false);
      setSelectedAppId(null);
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
      
      <ApplicationsTable 
        applications={applications}
        onVerifyPayment={handleVerifyPayment}
        onEditAdmitCard={openAdmitCardDialog}
      />
      
      <AdmitCardDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={handleAdmitCardSubmit}
        defaultValues={admitCardDefaults}
      />
    </div>
  );
};

export default AdminApplicationsPage;
