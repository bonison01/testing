
export interface ApplicationData {
  id: string;
  form_no: string;
  applicant_name: string;
  class: string;
  mobile_number: string;
  payment_verified: boolean;
  created_at: string;
  roll_number: string | null;
  exam_date: string | null;
  exam_time: string | null;
  exam_centre: string | null;
}
