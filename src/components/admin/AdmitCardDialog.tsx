
import React from "react";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const admitCardSchema = z.object({
  roll_number: z.string().min(1, "Roll number is required"),
  exam_date: z.date({
    required_error: "Exam date is required",
  }),
  exam_time: z.string().min(1, "Exam time is required"),
  exam_centre: z.string().min(1, "Exam centre is required"),
});

export type AdmitCardFormValues = z.infer<typeof admitCardSchema>;

interface AdmitCardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: AdmitCardFormValues) => Promise<void>;
  defaultValues?: Partial<AdmitCardFormValues>;
}

const AdmitCardDialog: React.FC<AdmitCardDialogProps> = ({
  open,
  onOpenChange,
  onSubmit,
  defaultValues = {}
}) => {
  const form = useForm<AdmitCardFormValues>({
    resolver: zodResolver(admitCardSchema),
    defaultValues: {
      roll_number: defaultValues.roll_number || "",
      exam_date: defaultValues.exam_date,
      exam_time: defaultValues.exam_time || "",
      exam_centre: defaultValues.exam_centre || "",
    },
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Issue/Edit Admit Card</DialogTitle>
          <DialogDescription>
            Enter the details for the applicant's admit card.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="roll_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Roll Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter roll number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="exam_date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Exam Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Select date</span>
                          )}
                          <Calendar className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="exam_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Exam Time</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 10:00 AM - 12:00 PM" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="exam_centre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Exam Centre</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter exam centre name and address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AdmitCardDialog;
