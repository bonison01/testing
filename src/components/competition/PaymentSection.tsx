
import { IndianRupee, Check } from "lucide-react";
import { FormLabel } from "@/components/ui/form";
import { FileUploader } from "@/components/FileUploader";

interface PaymentSectionProps {
  fileUploads: {
    payment_screenshot: File | null;
  };
  handleFileChange: (name: string, file: File | null) => void;
}

const PaymentSection = ({ fileUploads, handleFileChange }: PaymentSectionProps) => {
  return (
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
  );
};

export default PaymentSection;
