
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar, Clock, MapPin, Info } from "lucide-react";

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
  const [notReadyMessage, setNotReadyMessage] = useState<string | null>(null);

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
    setNotReadyMessage(null);
    
    try {
      const { data, error } = await supabase
        .from("mental_maths_applications")
        .select("form_no, applicant_name, father_name, photo_url, roll_number, class, exam_date, exam_time, exam_centre")
        .eq("form_no", formNo)
        .single();
        
      if (error) throw error;
      
      if (!data.roll_number) {
        setNotReadyMessage("Your admit card has not been generated yet. Please check back later.");
        setAdmitCardData(null);
        return;
      }
      
      // Check if ALL exam details are available
      if (!data.exam_date || !data.exam_time || !data.exam_centre) {
        const missingDetails = [];
        if (!data.exam_date) missingDetails.push("exam date");
        if (!data.exam_time) missingDetails.push("exam time");
        if (!data.exam_centre) missingDetails.push("exam centre");
        
        setNotReadyMessage(`Your admit card is being prepared. ${missingDetails.join(", ")} information is not available yet. Please check back later.`);
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Mental Maths Competition Admit Card</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Enter your form number to download your admit card</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
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
                  className="text-base py-6"
                />
              </div>
              <Button 
                onClick={fetchAdmitCard} 
                disabled={loading}
                className="md:w-auto w-full py-6"
                size="lg"
              >
                {loading ? "Loading..." : "Get Admit Card"}
              </Button>
            </div>
          </div>
          
          {notReadyMessage && (
            <Alert className="mb-8" variant="warning">
              <Info className="h-5 w-5" />
              <AlertTitle>Admit Card Not Available</AlertTitle>
              <AlertDescription className="mt-2">{notReadyMessage}</AlertDescription>
            </Alert>
          )}
          
          {admitCardData && (
            <div className="print:shadow-none" id="admitCard">
              <div className="mb-4 print:hidden flex gap-2">
                <Button onClick={printAdmitCard} variant="outline" size="lg" className="flex items-center gap-2">
                  <span>Print Admit Card</span>
                </Button>
              </div>
              
              <Card className="border-2 border-gray-300 print:border-0 overflow-hidden">
                <CardHeader className="border-b-2 border-gray-200 bg-gray-50 print:bg-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl">Mental Maths Competition 2025</CardTitle>
                      <CardDescription>Mateng Education</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Admit Card</p>
                      <p className="text-xs text-gray-500">Form No: {admitCardData.form_no}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4">
                      <div className="border-2 border-gray-300 rounded-md overflow-hidden h-40 w-32 mx-auto md:mx-0">
                        <img
                          src={admitCardData.photo_url}
                          alt="Candidate"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-3/4 space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <p className="text-sm text-gray-500">Roll Number</p>
                          <p className="font-semibold text-lg">{admitCardData.roll_number}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Class</p>
                          <p className="font-semibold text-lg">{admitCardData.class}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Candidate Name</p>
                        <p className="font-semibold text-lg">{admitCardData.applicant_name}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Father's Name</p>
                        <p className="font-semibold text-lg">{admitCardData.father_name}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex items-start gap-2">
                          <Calendar className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="text-sm text-gray-500">Exam Date</p>
                            <p className="font-semibold text-lg">
                              {format(new Date(admitCardData.exam_date), "MMMM d, yyyy")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="text-sm text-gray-500">Exam Time</p>
                            <p className="font-semibold text-lg">{admitCardData.exam_time}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="text-sm text-gray-500">Exam Centre</p>
                          <p className="font-semibold text-lg">{admitCardData.exam_centre}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex-col items-start border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-lg mb-3">Important Instructions:</h4>
                  <ul className="text-sm space-y-2 list-disc list-inside">
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
