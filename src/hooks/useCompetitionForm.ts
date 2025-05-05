
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

// Define the form schema
const formSchema = z.object({
  applicant_name: z.string().min(3, "Name must be at least 3 characters"),
  father_name: z.string().min(3, "Father's name must be at least 3 characters"),
  mother_name: z.string().min(3, "Mother's name must be at least 3 characters"),
  address: z.string().min(10, "Please provide a complete address"),
  mobile_number: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits"),
  aadhaar_number: z.string().regex(/^\d{12}$/, "Aadhaar number must be 12 digits"),
  date_of_birth: z.date({
    required_error: "Date of birth is required",
  }),
  class: z.string({
    required_error: "Please select a class",
  }),
  gender: z.string({
    required_error: "Please select a gender",
  }),
  institute_name: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const useCompetitionForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileUploads, setFileUploads] = useState({
    aadhaar_front: null as File | null,
    aadhaar_back: null as File | null,
    photo: null as File | null,
    payment_screenshot: null as File | null,
  });

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicant_name: "",
      father_name: "",
      mother_name: "",
      address: "",
      mobile_number: "",
      aadhaar_number: "",
      class: "",
      gender: "",
      institute_name: "",
    },
  });

  const handleFileChange = (name: keyof typeof fileUploads, file: File | null) => {
    setFileUploads(prev => ({ ...prev, [name]: file }));
  };

  const uploadFile = async (file: File, path: string) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `${path}/${fileName}`;
      
      const { data, error } = await supabase.storage
        .from('competition_documents')
        .upload(filePath, file);
        
      if (error) throw error;
      
      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('competition_documents')
        .getPublicUrl(filePath);
        
      return publicUrl;
    } catch (error: any) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Validate required file uploads
      if (!fileUploads.aadhaar_front || !fileUploads.aadhaar_back || 
          !fileUploads.photo || !fileUploads.payment_screenshot) {
        toast({
          title: "Missing Files",
          description: "Please upload all required documents",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Generate form number
      const { data: formNo, error: formNoError } = await supabase.rpc('generate_competition_form_number');
      
      if (formNoError) {
        throw formNoError;
      }
      
      // Upload files
      const aadhaarFrontUrl = await uploadFile(fileUploads.aadhaar_front, 'aadhaar');
      const aadhaarBackUrl = await uploadFile(fileUploads.aadhaar_back, 'aadhaar');
      const photoUrl = await uploadFile(fileUploads.photo, 'photos');
      const paymentUrl = await uploadFile(fileUploads.payment_screenshot, 'payments');

      // Insert application to database
      const { error: insertError } = await supabase.from('mental_maths_applications').insert({
        form_no: formNo,
        applicant_name: data.applicant_name,
        father_name: data.father_name,
        mother_name: data.mother_name,
        address: data.address,
        mobile_number: data.mobile_number,
        aadhaar_number: data.aadhaar_number,
        date_of_birth: data.date_of_birth.toISOString().split('T')[0],
        class: data.class,
        gender: data.gender,
        institute_name: data.institute_name || null,
        aadhaar_front_url: aadhaarFrontUrl,
        aadhaar_back_url: aadhaarBackUrl,
        photo_url: photoUrl,
        payment_screenshot_url: paymentUrl,
      });

      if (insertError) throw insertError;

      // Show success toast and navigate
      toast({
        title: "Application Submitted",
        description: `Your application has been received. Your form number is ${formNo}`,
      });
      
      // Redirect to the application success page
      navigate(`/competition/application-success?form_no=${formNo}`);
      
    } catch (error: any) {
      console.error('Application submission error:', error);
      toast({
        title: "Error submitting application",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    fileUploads,
    handleFileChange,
    onSubmit
  };
};
