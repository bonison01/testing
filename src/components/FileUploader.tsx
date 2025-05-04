
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface FileUploaderProps {
  onFileSelect: (file: File | null) => void;
  acceptedFileTypes?: string;
  maxSizeMB?: number;
}

export const FileUploader: React.FC<FileUploaderProps> = ({ 
  onFileSelect, 
  acceptedFileTypes = "*", 
  maxSizeMB = 5 
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setError(null);
    
    if (file) {
      // Check file size (convert MB to bytes)
      if (file.size > maxSizeMB * 1024 * 1024) {
        setError(`File is too large. Maximum size is ${maxSizeMB}MB.`);
        onFileSelect(null);
        return;
      }
      
      onFileSelect(file);
    } else {
      onFileSelect(null);
    }
  };
  
  const handleClick = () => {
    inputRef.current?.click();
  };
  
  const handleClear = () => {
    if (inputRef.current) inputRef.current.value = "";
    onFileSelect(null);
    setError(null);
  };
  
  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
        accept={acceptedFileTypes}
      />
      
      <div className="flex items-center gap-2">
        <Button 
          type="button"
          variant="outline" 
          onClick={handleClick}
          className="flex items-center"
        >
          <Upload size={16} className="mr-2" />
          Select File
        </Button>
        
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleClear}
          className="h-8 w-8 p-0 flex items-center justify-center"
        >
          <X size={16} />
          <span className="sr-only">Clear</span>
        </Button>
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};
