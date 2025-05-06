import React, { useState } from "react";
import { FileText, Check } from "lucide-react";
import { FormLabel } from "@/components/ui/form";
import { FileUploader } from "@/components/FileUploader";

interface DocumentUploadsSectionProps {
  fileUploads: {
    aadhaar_front: File | null;
    aadhaar_back: File | null;
    photo: File | null;
    payment_screenshot: File | null;
  };
  handleFileChange: (name: string, file: File | null) => void;
}

const DocumentUploadsSection = ({
  fileUploads,
  handleFileChange,
}: DocumentUploadsSectionProps) => {
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState<string | null>(null);

  const handlePhotoUpload = (file: File | null) => {
    if (file) {
      // Simulate file upload and get the URL
      const photoUrl = URL.createObjectURL(file);
      setUploadedPhotoUrl(photoUrl);
    }
    handleFileChange("photo", file);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FileText size={20} className="mr-2" />
        Document Uploads
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <FormLabel className="mb-2 block">Aadhaar Card Front*</FormLabel>
          <FileUploader
            onFileSelect={(file) => handleFileChange("aadhaar_front", file)}
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
            onFileSelect={(file) => handleFileChange("aadhaar_back", file)}
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
            onFileSelect={handlePhotoUpload}
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
          {uploadedPhotoUrl && (
            <div className="mt-4">
              <img
                src={uploadedPhotoUrl}
                alt="Uploaded Passport Photo"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadsSection;
