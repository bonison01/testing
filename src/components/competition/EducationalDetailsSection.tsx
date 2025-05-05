
import { School } from "lucide-react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface EducationalDetailsSectionProps {
  form: UseFormReturn<any>;
}

const EducationalDetailsSection = ({ form }: EducationalDetailsSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <School size={20} className="mr-2" />
        Educational Details
      </h2>
      <div className="grid grid-cols-1 gap-6">
        <FormField
          control={form.control}
          name="institute_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of School/Institute/Coaching Centre (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Enter institute name if applicable" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="aadhaar_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aadhaar Number*</FormLabel>
              <FormControl>
                <Input placeholder="12-digit Aadhaar number" {...field} />
              </FormControl>
              <FormDescription>
                Required for identity verification
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default EducationalDetailsSection;
