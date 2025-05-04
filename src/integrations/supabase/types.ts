export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      deliveries: {
        Row: {
          address: string
          cid: string
          created_at: string
          date: string
          dc_amt: number
          dc_mode: string
          id: string
          mobile: string
          mode: string
          name: string
          note: string | null
          pb_amt: number
          pb_mode: string
          status: string
          status_date: string | null
          team_id: string | null
          tsb: number | null
          updated_at: string
          vendor_id: string | null
        }
        Insert: {
          address: string
          cid: string
          created_at?: string
          date?: string
          dc_amt?: number
          dc_mode: string
          id?: string
          mobile: string
          mode: string
          name: string
          note?: string | null
          pb_amt?: number
          pb_mode: string
          status?: string
          status_date?: string | null
          team_id?: string | null
          tsb?: number | null
          updated_at?: string
          vendor_id?: string | null
        }
        Update: {
          address?: string
          cid?: string
          created_at?: string
          date?: string
          dc_amt?: number
          dc_mode?: string
          id?: string
          mobile?: string
          mode?: string
          name?: string
          note?: string | null
          pb_amt?: number
          pb_mode?: string
          status?: string
          status_date?: string | null
          team_id?: string | null
          tsb?: number | null
          updated_at?: string
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deliveries_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string
          description: string
          event_date: string
          id: string
          image_url: string | null
          is_featured: boolean
          location: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          event_date: string
          id?: string
          image_url?: string | null
          is_featured?: boolean
          location: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          event_date?: string
          id?: string
          image_url?: string | null
          is_featured?: boolean
          location?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      form_fields: {
        Row: {
          created_at: string
          display_order: number
          event_id: string
          field_label: string
          field_name: string
          field_options: Json | null
          field_type: string
          id: string
          is_required: boolean
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_order?: number
          event_id: string
          field_label: string
          field_name: string
          field_options?: Json | null
          field_type: string
          id?: string
          is_required?: boolean
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_order?: number
          event_id?: string
          field_label?: string
          field_name?: string
          field_options?: Json | null
          field_type?: string
          id?: string
          is_required?: boolean
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "form_fields_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      mental_maths_applications: {
        Row: {
          aadhaar_back_url: string
          aadhaar_front_url: string
          aadhaar_number: string
          address: string
          applicant_name: string
          class: string
          created_at: string | null
          date_of_birth: string
          exam_centre: string | null
          exam_date: string | null
          exam_time: string | null
          father_name: string
          form_no: string
          gender: string
          id: string
          institute_name: string | null
          mobile_number: string
          mother_name: string
          payment_screenshot_url: string
          payment_verified: boolean | null
          photo_url: string
          roll_number: string | null
          updated_at: string | null
        }
        Insert: {
          aadhaar_back_url: string
          aadhaar_front_url: string
          aadhaar_number: string
          address: string
          applicant_name: string
          class: string
          created_at?: string | null
          date_of_birth: string
          exam_centre?: string | null
          exam_date?: string | null
          exam_time?: string | null
          father_name: string
          form_no: string
          gender: string
          id?: string
          institute_name?: string | null
          mobile_number: string
          mother_name: string
          payment_screenshot_url: string
          payment_verified?: boolean | null
          photo_url: string
          roll_number?: string | null
          updated_at?: string | null
        }
        Update: {
          aadhaar_back_url?: string
          aadhaar_front_url?: string
          aadhaar_number?: string
          address?: string
          applicant_name?: string
          class?: string
          created_at?: string | null
          date_of_birth?: string
          exam_centre?: string | null
          exam_date?: string | null
          exam_time?: string | null
          father_name?: string
          form_no?: string
          gender?: string
          id?: string
          institute_name?: string | null
          mobile_number?: string
          mother_name?: string
          payment_screenshot_url?: string
          payment_verified?: boolean | null
          photo_url?: string
          roll_number?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          full_name: string | null
          id: string
          role: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          full_name?: string | null
          id: string
          role?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          full_name?: string | null
          id?: string
          role?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      registrations: {
        Row: {
          additional_info: Json | null
          created_at: string
          email: string
          event_id: string
          full_name: string
          id: string
          organization: string | null
          phone: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          additional_info?: Json | null
          created_at?: string
          email: string
          event_id: string
          full_name: string
          id?: string
          organization?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          additional_info?: Json | null
          created_at?: string
          email?: string
          event_id?: string
          full_name?: string
          id?: string
          organization?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          created_at: string
          id: string
          team_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          team_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          team_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_competition_form_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_all_events: {
        Args: Record<PropertyKey, never>
        Returns: {
          created_at: string
          description: string
          event_date: string
          id: string
          image_url: string | null
          is_featured: boolean
          location: string
          title: string
          updated_at: string
        }[]
      }
      get_all_registrations: {
        Args: Record<PropertyKey, never>
        Returns: {
          additional_info: Json | null
          created_at: string
          email: string
          event_id: string
          full_name: string
          id: string
          organization: string | null
          phone: string | null
          updated_at: string
          user_id: string | null
        }[]
      }
      get_featured_events: {
        Args: Record<PropertyKey, never>
        Returns: {
          created_at: string
          description: string
          event_date: string
          id: string
          image_url: string | null
          is_featured: boolean
          location: string
          title: string
          updated_at: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
