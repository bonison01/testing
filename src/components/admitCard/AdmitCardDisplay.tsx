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
  CardTitle,
} from "@/components/ui/card";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
  date_of_birth: string;
}

interface AdmitCardDisplayProps {
  data: AdmitCardData | null;
}

const AdmitCardDisplay: React.FC<AdmitCardDisplayProps> = ({ data }) => {
  if (!data) return null;

  const handleDownloadPdf = async () => {
    const element = document.getElementById("admitCard");
    if (!element) return;

    const actionButtons = document.getElementById("admitCardActions");
    if (actionButtons) actionButtons.style.display = "none";

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth(); // 210mm
    const pageHeight = pdf.internal.pageSize.getHeight(); // 297mm

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const ratio = Math.min(pageWidth * 2.83465 / imgWidth, pageHeight * 2.83465 / imgHeight); // 1mm ≈ 2.83465px

    const finalImgWidth = imgWidth * ratio;
    const finalImgHeight = imgHeight * ratio;

    const x = (pageWidth - finalImgWidth) / 2;
    const y = 10;

    pdf.addImage(imgData, "PNG", x, y, finalImgWidth, finalImgHeight);
    pdf.save(`${data.applicant_name}_AdmitCard.pdf`);

    if (actionButtons) actionButtons.style.display = "flex";
  };

  return (
    <>
      <style>
        {`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body * {
              visibility: hidden !important;
            }
            #admitCard, #admitCard * {
              visibility: visible !important;
            }
            #admitCard {
              position: absolute;
              left: 0;
              top: 0;
              width: 794px;
              height: 1123px;
              padding: 20px;
              margin: 0 auto;
              box-shadow: none !important;
            }
            .print\\:hidden {
              display: none !important;
            }
          }
        `}
      </style>

      {/* Download Button */}
      <div id="admitCardActions" className="mb-4 print:hidden flex gap-2 justify-center">
        <Button onClick={handleDownloadPdf} variant="default" size="lg">
          Download Admit Card as PDF
        </Button>
      </div>

      {/* Admit Card Layout */}
      <div id="admitCard" className="bg-white w-[794px] mx-auto">
        <Card className="border-2 border-black overflow-hidden print:shadow-none">
          <CardHeader className="border-b-2 border-black bg-white px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-bold print:text-xl">
                  Maths Competition 2025
                </CardTitle>
                <CardDescription className="text-base print:text-sm font-medium text-black">
                  Mateng Education
                </CardDescription>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">Admit Card</p>
                <p className="text-xs text-gray-700">Form No: {data.form_no}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-8 px-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Photo */}
              <div className="md:w-1/4">
                <div className="border-2 border-black rounded-md overflow-hidden h-44 w-36 mx-auto md:mx-0">
                  {data.photo_url ? (
                    <img
                      src={data.photo_url}
                      alt="Candidate"
                      crossOrigin="anonymous"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
                      No Photo Available
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="md:w-3/4 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <p className="text-sm text-gray-500">Roll Number</p>
                    <p className="font-semibold text-lg print:text-base">{data.roll_number}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Class</p>
                    <p className="font-semibold text-lg print:text-base">{data.class}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Candidate Name</p>
                  <p className="font-semibold text-lg print:text-base">{data.applicant_name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date of Birth</p>
                  <p className="font-semibold text-lg print:text-base">{data.date_of_birth}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Father's Name</p>
                  <p className="font-semibold text-lg print:text-base">{data.father_name}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Exam Date</p>
                      <p className="font-semibold text-lg print:text-base">
                        {format(new Date(data.exam_date), "MMMM d, yyyy")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Exam Time</p>
                      <p className="font-semibold text-lg print:text-base">{data.exam_time}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Exam Centre</p>
                    <p className="font-semibold text-lg print:text-base">{data.exam_centre}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex-col items-start border-t border-black pt-6 px-8 print:border-none">
            <h4 className="font-semibold text-lg mb-3">Important Instructions:</h4>
            <ul className="text-sm space-y-2 list-disc list-inside mb-6">
              <li>Please arrive at the exam centre 45 minutes before the scheduled time</li>
              <li>Bring this admit card along with a valid photo ID</li>
              <li>Carry basic stationery items (pencils, erasers, etc.)</li>
              <li>Calculators are not allowed during the competition</li>
              <li>Mobile phones and electronic devices are strictly prohibited</li>
              <li>
                Those candidate who submitted the form through online must report before 60 minutes
                in the examination centre.
              </li>
            </ul>

            <div className="w-full flex justify-end mt-8 relative">
              <div className="text-right">
                <p className="text-sm mb-1">Signature of Exam Authority</p>
                <div className="border-t border-black w-48 mt-2" />
                <p className="text-xs text-gray-600 mt-1">Mateng Education</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default AdmitCardDisplay;
