
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AdmitCardFormProps {
  onSubmit: (formNo: string) => void;
  loading: boolean;
}

const AdmitCardForm: React.FC<AdmitCardFormProps> = ({ onSubmit, loading }) => {
  const [formNo, setFormNo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formNo);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
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
          type="submit" 
          disabled={loading}
          className="md:w-auto w-full py-6"
          size="lg"
        >
          {loading ? "Loading..." : "Track Application"}
        </Button>
      </form>
    </div>
  );
};

export default AdmitCardForm;
