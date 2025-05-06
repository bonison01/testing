
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, AlertTriangle } from "lucide-react";

interface AdmitCardStatusProps {
  status: string | null;
  isReady: boolean;
}

const AdmitCardStatus: React.FC<AdmitCardStatusProps> = ({ status, isReady }) => {
  if (!status) return null;

  return (
    <Alert className="mb-8" variant={isReady ? "success" : "warning"}>
      {isReady ? (
        <Info className="h-5 w-5" />
      ) : (
        <AlertTriangle className="h-5 w-5" />
      )}
      <AlertTitle>{isReady ? "Admit Card Ready" : "Application Status"}</AlertTitle>
      <AlertDescription className="mt-2">{status}</AlertDescription>
    </Alert>
  );
};

export default AdmitCardStatus;
