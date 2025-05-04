
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { format } from "date-fns";

interface AdmitCardData {
  form_no: string;
  applicant_name: string;
  father_name: string;
  photo_url: string;
  roll_number: string;
  class: string;
  exam_date: string;
  exam_time: string;
  exam_centre: string;
}

const AdmitCardPage = () => {
  const { toast } = useToast();
  const [formNo, setFormNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [admitCardData, setAdmitCardData] = useState<AdmitCardData | null>(null);

  const fetchAdmitCard = async () => {
    if (!formNo) {
      toast({
        title: "Required",
        description: "Please enter your form number",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const { data, error } = await supabase
        .from("mental_maths_applications")
        .select("form_no, applicant_name, father_name, photo_url, roll_number, class, exam_date, exam_time, exam_centre")
        .eq("form_no", formNo)
        .single();
        
      if (error) throw error;
      
      if (!data.roll_number) {
        toast({
          title: "Admit Card Not Available",
          description: "Your admit card has not been issued yet. Please check back later.",
          variant: "destructive"
        });
        setAdmitCardData(null);
        return;
      }
      
      setAdmitCardData(data as AdmitCardData);
    } catch (error: any) {
      console.error("Error fetching admit card:", error);
      toast({
        title: "Error",
        description: "No application found with this form number. Please check and try again.",
        variant: "destructive"
      });
      setAdmitCardData(null);
    } finally {
      setLoading(false);
    }
  };
  
  const printAdmitCard = () => {
    window.print();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Mental Maths Competition Admit Card</h1>
            <p className="text-gray-600">Enter your form number to download your admit card</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-grow">
                <label htmlFor="formNo" className="block text-sm font-medium text-gray-700 mb-1">
                  Form Number
                </label>
                <Input
                  id="formNo"
                  placeholder="Enter your form number (e.g., MMC-2025-00001)"
                  value={formNo}
                  onChange={(e) => setFormNo(e.target.value)}
                />
              </div>
              <Button 
                onClick={fetchAdmitCard} 
                disabled={loading}
                className="md:w-auto w-full"
              >
                {loading ? "Loading..." : "Get Admit Card"}
              </Button>
            </div>
          </div>
          
          {admitCardData && (
            <div className="print:shadow-none" id="admitCard">
              <div className="mb-4 print:hidden">
                <Button onClick={printAdmitCard} variant="outline">
                  Print Admit Card
                </Button>
              </div>
              
              <Card className="border-2 border-gray-300">
                <CardHeader className="border-b-2 border-gray-200 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-xl">Mental Maths Competition 2025</CardTitle>
                      <CardDescription>Mateng Education</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Admit Card</p>
                      <p className="text-xs text-gray-500">Form No: {admitCardData.form_no}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <div className="border border-gray-300 rounded-md overflow-hidden h-40 w-32">
                        <img
                          src={admitCardData.photo_url}
                          alt="Candidate"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-3/4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Roll Number</p>
                          <p className="font-semibold">{admitCardData.roll_number}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Class</p>
                          <p className="font-semibold">{admitCardData.class}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Candidate Name</p>
                        <p className="font-semibold">{admitCardData.applicant_name}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Father's Name</p>
                        <p className="font-semibold">{admitCardData.father_name}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Exam Date</p>
                          <p className="font-semibold">
                            {format(new Date(admitCardData.exam_date), "MMMM d, yyyy")}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Exam Time</p>
                          <p className="font-semibold">{admitCardData.exam_time}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Exam Centre</p>
                        <p className="font-semibold">{admitCardData.exam_centre}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex-col items-start border-t border-gray-200 pt-4">
                  <h4 className="font-semibold mb-2">Important Instructions:</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Please arrive at the exam centre 30 minutes before the scheduled time</li>
                    <li>Bring this admit card along with a valid photo ID</li>
                    <li>Carry basic stationery items (pencils, erasers, etc.)</li>
                    <li>Calculators are not allowed during the competition</li>
                    <li>Mobile phones and electronic devices are strictly prohibited</li>
                  </ul>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdmitCardPage;
