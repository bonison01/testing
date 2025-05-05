
import React from "react";
import { format } from "date-fns";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ApplicationData } from "@/types/applications";

interface ApplicationsTableProps {
  applications: ApplicationData[];
  onVerifyPayment: (id: string) => Promise<void>;
  onEditAdmitCard: (id: string, application: ApplicationData) => void;
}

const ApplicationsTable: React.FC<ApplicationsTableProps> = ({
  applications,
  onVerifyPayment,
  onEditAdmitCard
}) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Form No</TableHead>
              <TableHead>Applicant Name</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>Applied On</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Admit Card</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          
          <TableBody>
            {applications.length > 0 ? (
              applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.form_no}</TableCell>
                  <TableCell>{app.applicant_name}</TableCell>
                  <TableCell>{app.class}</TableCell>
                  <TableCell>{app.mobile_number}</TableCell>
                  <TableCell>{format(new Date(app.created_at), "MMM d, yyyy")}</TableCell>
                  <TableCell>
                    {app.payment_verified ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Verified
                      </span>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => onVerifyPayment(app.id)}
                      >
                        Verify Payment
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {app.roll_number ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Issued
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Not Issued
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button 
                      size="sm" 
                      onClick={() => onEditAdmitCard(app.id, app)}
                    >
                      {app.roll_number ? "Edit Admit Card" : "Issue Admit Card"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-4 text-gray-500">
                  No applications found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ApplicationsTable;
