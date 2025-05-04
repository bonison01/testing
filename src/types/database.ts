
export interface Event {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  image_url?: string;
  is_featured: boolean;
}

export interface Registration {
  id: string;
  created_at: string;
  updated_at: string;
  user_id?: string;
  event_id: string;
  full_name: string;
  email: string;
  phone?: string;
  organization?: string;
  additional_info?: any;
}

export interface FormField {
  id: string;
  created_at: string;
  updated_at: string;
  event_id: string;
  field_name: string;
  field_type: string;
  field_label: string;
  is_required: boolean;
  field_options?: any;
  display_order: number;
}
