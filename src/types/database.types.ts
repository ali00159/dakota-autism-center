export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      "dakota-autism-center-contact_submissions": {
        Row: {
          child_age: string | null
          child_first_name: string
          created_at: string | null
          email: string
          enrollment_type: string | null
          id: string
          insurance: string
          org_id: string
          parent_first_name: string
          parent_last_name: string
          phone: string
          preferred_setting: string | null
          sms_consent: boolean | null
          zip_code: string
        }
        Insert: {
          child_age?: string | null
          child_first_name: string
          created_at?: string | null
          email: string
          enrollment_type?: string | null
          id?: string
          insurance: string
          org_id: string
          parent_first_name: string
          parent_last_name: string
          phone: string
          preferred_setting?: string | null
          sms_consent?: boolean | null
          zip_code: string
        }
        Update: {
          child_age?: string | null
          child_first_name?: string
          created_at?: string | null
          email?: string
          enrollment_type?: string | null
          id?: string
          insurance?: string
          org_id?: string
          parent_first_name?: string
          parent_last_name?: string
          phone?: string
          preferred_setting?: string | null
          sms_consent?: boolean | null
          zip_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "dakota-autism-center-contact_submissions_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["org_id"]
          },
        ]
      }
      "dakota-autism-center-referral_submissions": {
        Row: {
          address_city: string
          address_state: string
          address_street: string | null
          address_zip: string
          attestation_accurate: boolean
          care_coordination_notes: string | null
          child_age: string | null
          child_date_of_birth: string
          child_first_name: string
          child_gender: string
          child_last_name: string
          consent_release_info: boolean
          created_at: string | null
          current_services: string | null
          diagnosis_date: string | null
          diagnosing_provider: string | null
          documents_available: string[] | null
          guardian_email: string
          guardian_phone: string
          guardian_relationship: string
          id: string
          insurance_group_number: string | null
          insurance_member_id: string | null
          insurance_subscriber_name: string | null
          org_id: string
          organization_name: string
          parent_guardian_name: string
          preferred_start_timeline: string
          primary_diagnosis: string
          primary_insurance: string
          professional_credentials: string
          professional_email: string
          professional_fax: string | null
          professional_name: string
          professional_npi: string | null
          professional_phone: string
          referral_concerns: string | null
          referral_reason: string
          secondary_insurance: string | null
          service_requested: string[]
        }
        Insert: {
          address_city: string
          address_state: string
          address_street?: string | null
          address_zip: string
          attestation_accurate?: boolean
          care_coordination_notes?: string | null
          child_age?: string | null
          child_date_of_birth: string
          child_first_name: string
          child_gender: string
          child_last_name: string
          consent_release_info?: boolean
          created_at?: string | null
          current_services?: string | null
          diagnosis_date?: string | null
          diagnosing_provider?: string | null
          documents_available?: string[] | null
          guardian_email: string
          guardian_phone: string
          guardian_relationship: string
          id?: string
          insurance_group_number?: string | null
          insurance_member_id?: string | null
          insurance_subscriber_name?: string | null
          org_id: string
          organization_name: string
          parent_guardian_name: string
          preferred_start_timeline: string
          primary_diagnosis: string
          primary_insurance: string
          professional_credentials: string
          professional_email: string
          professional_fax?: string | null
          professional_name: string
          professional_npi?: string | null
          professional_phone: string
          referral_concerns?: string | null
          referral_reason: string
          secondary_insurance?: string | null
          service_requested?: string[]
        }
        Update: {
          address_city?: string
          address_state?: string
          address_street?: string | null
          address_zip?: string
          attestation_accurate?: boolean
          care_coordination_notes?: string | null
          child_age?: string | null
          child_date_of_birth?: string
          child_first_name?: string
          child_gender?: string
          child_last_name?: string
          consent_release_info?: boolean
          created_at?: string | null
          current_services?: string | null
          diagnosis_date?: string | null
          diagnosing_provider?: string | null
          documents_available?: string[] | null
          guardian_email?: string
          guardian_phone?: string
          guardian_relationship?: string
          id?: string
          insurance_group_number?: string | null
          insurance_member_id?: string | null
          insurance_subscriber_name?: string | null
          org_id?: string
          organization_name?: string
          parent_guardian_name?: string
          preferred_start_timeline?: string
          primary_diagnosis?: string
          primary_insurance?: string
          professional_credentials?: string
          professional_email?: string
          professional_fax?: string | null
          professional_name?: string
          professional_npi?: string | null
          professional_phone?: string
          referral_concerns?: string | null
          referral_reason?: string
          secondary_insurance?: string | null
          service_requested?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "dakota-autism-center-referral_submissions_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["org_id"]
          },
        ]
      }
      "mali-design-works-contact_submissions": {
        Row: {
          budget: string | null
          company: string | null
          created_at: string
          email: string
          id: string
          interests: string[] | null
          message: string | null
          name: string
          org_id: string
        }
        Insert: {
          budget?: string | null
          company?: string | null
          created_at?: string
          email: string
          id?: string
          interests?: string[] | null
          message?: string | null
          name: string
          org_id: string
        }
        Update: {
          budget?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          interests?: string[] | null
          message?: string | null
          name?: string
          org_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mali-design-works-contact_submissions_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["org_id"]
          },
        ]
      }
      memberships: {
        Row: {
          created_at: string
          org_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          org_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          org_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "memberships_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["org_id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string
          name: string
          org_id: string
          tables: string[] | null
        }
        Insert: {
          created_at?: string
          name: string
          org_id?: string
          tables?: string[] | null
        }
        Update: {
          created_at?: string
          name?: string
          org_id?: string
          tables?: string[] | null
        }
        Relationships: []
      }
      "xtra-hand-solutions-contact_submissions": {
        Row: {
          created_at: string | null
          email: string
          first_name: string
          id: string
          last_name: string
          message: string
          org_id: string
          phone: string | null
          service_type: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          first_name: string
          id?: string
          last_name: string
          message: string
          org_id: string
          phone?: string | null
          service_type?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          message?: string
          org_id?: string
          phone?: string | null
          service_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "xtra-hand-solutions-contact_submissions_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["org_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      dreamlit_auth_admin_executor: {
        Args: { command: string }
        Returns: undefined
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
