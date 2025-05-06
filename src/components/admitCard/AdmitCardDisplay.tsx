
import React from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar, Clock, MapPin } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

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

interface AdmitCardDisplayProps {
  data: AdmitCardData | null;
  onPrint: () => void;
}

const AdmitCardDisplay: React.FC<AdmitCardDisplayProps> = ({ data, onPrint }) => {
  if (!data) return null;

  return (
    <div className="print:shadow-none" id="admitCard">
      <div className="mb-4 print:hidden flex gap-2">
        <Button onClick={onPrint} variant="outline" size="lg" className="flex items-center gap-2">
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
              <p className="text-xs text-gray-500">Form No: {data.form_no}</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <div className="border-2 border-gray-300 rounded-md overflow-hidden h-40 w-32 mx-auto md:mx-0">
                <img
                  src={data.photo_url}
                  alt="Candidate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-3/4 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <p className="text-sm text-gray-500">Roll Number</p>
                  <p className="font-semibold text-lg">{data.roll_number}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Class</p>
                  <p className="font-semibold text-lg">{data.class}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Candidate Name</p>
                <p className="font-semibold text-lg">{data.applicant_name}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Father's Name</p>
                <p className="font-semibold text-lg">{data.father_name}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Exam Date</p>
                    <p className="font-semibold text-lg">
                      {format(new Date(data.exam_date), "MMMM d, yyyy")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Exam Time</p>
                    <p className="font-semibold text-lg">{data.exam_time}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Exam Centre</p>
                  <p className="font-semibold text-lg">{data.exam_centre}</p>
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
  );
};

export default AdmitCardDisplay;
