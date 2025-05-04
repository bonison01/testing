
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  User, 
  FileText, 
  Upload, 
  Calendar, 
  IndianRupee, 
  Phone, 
  School, 
  Check, 
  X
} from "lucide-react";
import { format } from "date-fns";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { FileUploader } from "@/components/FileUploader";

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

const CompetitionApplicationPage = () => {
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

  const handleFileChange = (name: keyof typeof fileUploads, file: File | null) => {
    setFileUploads(prev => ({ ...prev, [name]: file }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Mental Maths Competition Application Form</h1>
            <p className="text-gray-600">Please fill in all required details to register for the competition</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
              <CardDescription>Please read before filling the form</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Eligibility:</h3>
                <p>Open to students of Class 4 and Class 5 only</p>
              </div>
              <div>
                <h3 className="font-semibold">Key Dates:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Last date for registration: June 5, 2025</li>
                  <li>Admit card issue: June 10, 2025</li>
                  <li>Competition date: June 15, 2025</li>
                  <li>Award ceremony: June 22, 2025</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Required Documents:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Scanned copy of Aadhaar Card (front and back)</li>
                  <li>Recent passport-size photograph</li>
                  <li>Payment screenshot (₹200 registration fee)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <User size={20} className="mr-2" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="applicant_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name of Applicant*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="father_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Father's Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter father's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mother_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mother's Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter mother's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="date_of_birth"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of Birth*</FormLabel>
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
                            <CalendarComponent
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date(2010, 0, 1)
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          Child must be of appropriate age for Class 4 or 5
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="class"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Class*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select class" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Class 4">Class 4</SelectItem>
                            <SelectItem value="Class 5">Class 5</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Phone size={20} className="mr-2" />
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Complete Address*</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter your complete address with city and pincode" 
                            className="resize-none" 
                            rows={3}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mobile_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number*</FormLabel>
                        <FormControl>
                          <Input placeholder="10-digit mobile number" {...field} />
                        </FormControl>
                        <FormDescription>
                          This will be used for all communications regarding the competition
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Educational Details */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <School size={20} className="mr-2" />
                  Educational Details
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <FormField
                    control={form.control}
                    name="institute_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name of School/Institute/Coaching Centre (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter institute name if applicable" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="aadhaar_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Aadhaar Number*</FormLabel>
                        <FormControl>
                          <Input placeholder="12-digit Aadhaar number" {...field} />
                        </FormControl>
                        <FormDescription>
                          Required for identity verification
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Document Uploads */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText size={20} className="mr-2" />
                  Document Uploads
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <FormLabel className="mb-2 block">Aadhaar Card Front*</FormLabel>
                    <FileUploader
                      onFileSelect={(file) => handleFileChange('aadhaar_front', file)}
                      acceptedFileTypes="image/*"
                      maxSizeMB={2}
                    />
                    {fileUploads.aadhaar_front ? (
                      <div className="mt-2 text-sm text-green-600 flex items-center">
                        <Check size={16} className="mr-1" /> {fileUploads.aadhaar_front.name}
                      </div>
                    ) : (
                      <div className="mt-2 text-sm text-gray-500">
                        Please upload a clear image of the front side of the Aadhaar card
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <FormLabel className="mb-2 block">Aadhaar Card Back*</FormLabel>
                    <FileUploader
                      onFileSelect={(file) => handleFileChange('aadhaar_back', file)}
                      acceptedFileTypes="image/*"
                      maxSizeMB={2}
                    />
                    {fileUploads.aadhaar_back ? (
                      <div className="mt-2 text-sm text-green-600 flex items-center">
                        <Check size={16} className="mr-1" /> {fileUploads.aadhaar_back.name}
                      </div>
                    ) : (
                      <div className="mt-2 text-sm text-gray-500">
                        Please upload a clear image of the back side of the Aadhaar card
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <FormLabel className="mb-2 block">Recent Passport Size Photo*</FormLabel>
                    <FileUploader
                      onFileSelect={(file) => handleFileChange('photo', file)}
                      acceptedFileTypes="image/*"
                      maxSizeMB={1}
                    />
                    {fileUploads.photo ? (
                      <div className="mt-2 text-sm text-green-600 flex items-center">
                        <Check size={16} className="mr-1" /> {fileUploads.photo.name}
                      </div>
                    ) : (
                      <div className="mt-2 text-sm text-gray-500">
                        Please upload a recent passport size photograph with white background
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Payment Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <IndianRupee size={20} className="mr-2" />
                  Payment Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-semibold mb-2">Registration Fee: ₹200</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Please make the payment using any UPI application by scanning the QR code or using the UPI ID.
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border text-center">
                      <div className="mb-2">Scan QR Code to Pay</div>
                      {/* Replace with actual QR code image */}
                      <div className="w-40 h-40 mx-auto bg-gray-200 flex items-center justify-center mb-2">
                        <span className="text-gray-500 text-sm">QR Code Placeholder</span>
                      </div>
                      <div className="text-sm font-medium">UPI ID: mateng@hdfcbank</div>
                    </div>
                  </div>
                  
                  <div>
                    <FormLabel className="mb-2 block">Upload Payment Screenshot*</FormLabel>
                    <FileUploader
                      onFileSelect={(file) => handleFileChange('payment_screenshot', file)}
                      acceptedFileTypes="image/*"
                      maxSizeMB={2}
                    />
                    {fileUploads.payment_screenshot ? (
                      <div className="mt-2 text-sm text-green-600 flex items-center">
                        <Check size={16} className="mr-1" /> {fileUploads.payment_screenshot.name}
                      </div>
                    ) : (
                      <div className="mt-2 text-sm text-gray-500">
                        After completing the payment, take a screenshot and upload it here
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Declaration */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold mb-4">Declaration</h3>
                <div className="text-sm text-gray-700 mb-4">
                  <p>I hereby declare that all the information provided in this form is true, complete and correct to the best of my knowledge and belief. I understand that in the event of any information being found false or incorrect at any stage, my application is liable to be rejected.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="declaration" 
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="declaration" className="text-sm font-medium">
                    I agree to the above declaration
                  </label>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="px-8"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompetitionApplicationPage;
