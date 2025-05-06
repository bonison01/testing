
import React from "react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImportantInfoCard from "@/components/competition/ImportantInfoCard";
import PersonalInfoSection from "@/components/competition/PersonalInfoSection";
import ContactInfoSection from "@/components/competition/ContactInfoSection";
import EducationalDetailsSection from "@/components/competition/EducationalDetailsSection";
import DocumentUploadsSection from "@/components/competition/DocumentUploadsSection";
import PaymentSection from "@/components/competition/PaymentSection";
import DeclarationSection from "@/components/competition/DeclarationSection";
import { useCompetitionForm } from "@/hooks/useCompetitionForm";

const CompetitionApplicationPage = () => {
  const {
    form,
    isSubmitting,
    fileUploads,
    handleFileChange,
    onSubmit
  } = useCompetitionForm();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Mental Maths Competition Application</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Please fill in all required details to register for the competition</p>
          </div>

          <ImportantInfoCard />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 mt-10">
              {/* Personal Information */}
              <PersonalInfoSection form={form} />
              
              {/* Contact Information */}
              <ContactInfoSection form={form} />
              
              {/* Educational Details */}
              <EducationalDetailsSection form={form} />
              
              {/* Document Uploads */}
              <DocumentUploadsSection 
                fileUploads={fileUploads}
                handleFileChange={handleFileChange}
              />
              
              {/* Payment Section */}
              <PaymentSection 
                fileUploads={fileUploads}
                handleFileChange={handleFileChange}
              />
              
              {/* Declaration */}
              <DeclarationSection />
              
              <div className="flex justify-center pt-8">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="px-12 py-6 text-base rounded-md shadow-md hover:shadow-lg transition-all"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompetitionApplicationPage;
