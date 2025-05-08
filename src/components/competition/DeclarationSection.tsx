
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const DeclarationSection = () => {
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border">
      <h3 className="font-semibold text-xl mb-5 text-gray-800">Declaration</h3>
      <div className="text-sm text-gray-700 mb-6 leading-relaxed">
        <p>
          I hereby declare that all the information provided in this form is true, complete and correct to the best of my knowledge and belief. 
          I understand that in the event of any information being found false or incorrect at any stage, my application is liable to be rejected.
        </p>
      </div>
      
      <div className="flex items-start space-x-3 mb-4">
        <div className="mt-1">
          <Checkbox 
            id="declaration" 
            required
            className="h-5 w-5"
          />
        </div>
        <div>
          <label htmlFor="declaration" className="text-sm font-medium leading-relaxed">
            I agree to the above declaration and the <Button 
              variant="link" 
              className="p-0 h-auto text-primary underline font-medium" 
              onClick={() => setTermsDialogOpen(true)}
            >
              terms and conditions
            </Button>
          </label>
        </div>
      </div>

      <Dialog open={termsDialogOpen} onOpenChange={setTermsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <FileText className="h-5 w-5" />
              Terms and Conditions
            </DialogTitle>
            <DialogDescription>
              Please read the following terms and conditions carefully
            </DialogDescription>
          </DialogHeader>
          




          <div className="text-sm text-gray-700 space-y-4">
            <h4 className="font-semibold text-base">1. The decision of the Examination Controller shall be final in case of any dispute.</h4>
            <h4 className="font-semibold text-base">2. All questions will be Multiple Choice Questions (MCQs)..</h4>
            <h4 className="font-semibold text-base">3. Answers must be marked on the OMR sheet provided..</h4>
            <h4 className="font-semibold text-base">4. Overwritten answers will be considered incorrect.</h4>
            <h4 className="font-semibold text-base">5. There will be no negative marking during the initial evaluation. However, negative marking may be applied in the case of a tie between award holders.</h4>
            <h4 className="font-semibold text-base">6. Candidates must use only a black ballpoint pen to mark answers.</h4>
            <h4 className="font-semibold text-base">7. The question paper will consist of 50 questions, each carrying 2 marks.</h4>
            <h4 className="font-semibold text-base">8. Requests for rechecking must be submitted within 10 days of result declaration, along with a rechecking fee of Rs. 1000 .</h4>
            <h4 className="font-semibold text-base">9. Candidates must wear their school uniform on the examination day and bring their School ID card.</h4>
            <h4 className="font-semibold text-base">10. Examination results will be announced within the stipulated time .</h4>
            <h4 className="font-semibold text-base">11. Results will be published on the notice board of each participating school and on our official website: www.justmateng.com.</h4>
            <h4 className="font-semibold text-base">12. Submission of application forms will not be accepted after the deadline under any circumstances </h4>
            <h4 className="font-semibold text-base">13. Admit cards without the seal and signature of the competent authority will not be valid for entry into the examination hall.</h4>
            <h4 className="font-semibold text-base">14. The examination fee is Rs. 200 (non-refundable). An additional form fee of Rs. 20 applies for offline submissions .</h4>
          </div>
          {/* <div className="text-sm text-gray-700 space-y-4">
            <h4 className="font-semibold text-base">1. General Terms</h4>
            <p>
              By participating in the Mental Maths Competition, you agree to be bound by these Terms and Conditions, which constitute a binding agreement between you and the competition organizers.
            </p>
            
            <h4 className="font-semibold text-base">2. Eligibility</h4>
            <p>
              The competition is open to students as specified in the competition details. Participants must meet the age and class requirements as indicated. The organizers reserve the right to verify eligibility and to disqualify any participant who does not meet the requirements.
            </p>
            
            <h4 className="font-semibold text-base">3. Registration and Fees</h4>
            <p>
              Registration is considered complete only when all required information is provided and the registration fee is paid. Registration fees are non-refundable except in cases where the competition is canceled by the organizers.
            </p>
            
            <h4 className="font-semibold text-base">4. Competition Rules</h4>
            <p>
              Participants must arrive at the examination center at least 30 minutes before the scheduled start time. Participants must bring their admit card and a valid photo ID. No electronic devices are allowed in the examination hall unless specifically permitted. Any participant found engaging in unfair practices will be disqualified.
            </p>
            
            <h4 className="font-semibold text-base">5. Results and Certificates</h4>
            <p>
              The decision of the judges is final and binding. Results will be announced as per the schedule announced by the organizers. Certificates will be issued to all participants, and special certificates/prizes will be awarded to winners as per the competition rules.
            </p>
            
            <h4 className="font-semibold text-base">6. Privacy Policy</h4>
            <p>
              Personal information collected during registration will be used solely for the purpose of managing the competition and communicating with participants. The organizers will not share this information with third parties except as required by law.
            </p>
            
            <h4 className="font-semibold text-base">7. Intellectual Property</h4>
            <p>
              All intellectual property rights in the competition materials, including but not limited to questions, solutions, and promotional materials, belong to the competition organizers. Participants are prohibited from reproducing, distributing, or creating derivative works from these materials without prior written permission.
            </p>
            
            <h4 className="font-semibold text-base">8. Changes and Cancellation</h4>
            <p>
              The organizers reserve the right to change the competition schedule, venue, or rules, or to cancel the competition in case of unforeseen circumstances. In case of cancellation, the registration fees will be refunded.
            </p>
            
            <h4 className="font-semibold text-base">9. Liability</h4>
            <p>
              The organizers will not be liable for any loss, damage, injury, or disappointment suffered by any participant arising out of or in connection with the competition.
            </p>
            
            <h4 className="font-semibold text-base">10. Governing Law</h4>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </div> */}
          
          <DialogClose asChild>
            <Button className="mt-6">I Understand</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeclarationSection;
