import React, { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import AdmitCardDisplay from "@/components/admitCard/AdmitCardDisplay";
import { Button } from "@/components/ui/button";

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

const BulkAdmitCardDownloadPage: React.FC = () => {
    const [admitCards, setAdmitCards] = useState<AdmitCardData[]>([]);
    const [loading, setLoading] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchAllAdmitCards = async () => {
            setLoading(true);

            const { data, error } = await supabase
                .from("mental_maths_applications")
                .select(`
          form_no,
          applicant_name,
          father_name,
          date_of_birth,
          photo_url,
          roll_number,
          class,
          exam_date,
          exam_time,
          exam_centre,
          payment_verified
        `)
                .eq("payment_verified", true)
                .not("roll_number", "is", null)
                .not("exam_date", "is", null)
                .not("exam_time", "is", null)
                .not("exam_centre", "is", null);

            if (error) {
                console.error("Failed to fetch admit cards:", error);
            } else {
                setAdmitCards(data as AdmitCardData[]);
            }

            setLoading(false);
        };

        fetchAllAdmitCards();
    }, []);

    const handleBulkDownload = async () => {
        const pdf = new jsPDF("p", "mm", "a4");

        for (let i = 0; i < admitCards.length; i++) {
            const wrapperId = `admit-card-wrapper-${i}`;
            const el = document.getElementById(wrapperId);

            if (!el) continue;

            const canvas = await html2canvas(el, {
                scale: 2,
                useCORS: true,
            });

            const imgData = canvas.toDataURL("image/png");
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
            const imgWidth = canvas.width * ratio;
            const imgHeight = canvas.height * ratio;
            const x = (pageWidth - imgWidth) / 2;
            const y = 10;

            if (i !== 0) pdf.addPage();
            pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
        }

        pdf.save("All_Admit_Cards.pdf");
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Bulk Admit Card Download</h1>
            <Button onClick={handleBulkDownload} disabled={loading || admitCards.length === 0}>
                {loading ? "Loading..." : "Download All Admit Cards"}
            </Button>

            {/* Hidden container for rendering all admit cards for capturing */}
            <div className="hidden" ref={containerRef}>
                {admitCards.map((card, index) => (
                    <div key={index} id={`admit-card-wrapper-${index}`}>
                        <AdmitCardDisplay data={card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BulkAdmitCardDownloadPage;
