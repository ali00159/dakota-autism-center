'use server'

import { createClient } from '@supabase/supabase-js'

type ReferralFormData = {
  professionalName: string
  professionalCredentials: string
  organizationName: string
  professionalEmail: string
  professionalPhone: string
  professionalFax: string
  professionalNpi: string
  referralReason: string
  childFirstName: string
  childLastName: string
  childDateOfBirth: string
  childAge: string
  childGender: string
  parentGuardianName: string
  guardianRelationship: string
  guardianPhone: string
  guardianEmail: string
  addressStreet: string
  addressCity: string
  addressState: string
  addressZip: string
  primaryDiagnosis: string
  diagnosisDate: string
  diagnosingProvider: string
  currentServices: string
  referralConcerns: string
  serviceRequested: string[]
  primaryInsurance: string
  secondaryInsurance: string
  insuranceSubscriberName: string
  insuranceMemberId: string
  insuranceGroupNumber: string
  documentsAvailable: string[]
  preferredStartTimeline: string
  careCoordinationNotes: string
  consentReleaseInfo: boolean
  attestationAccurate: boolean
}

const ORG_ID = 'c2118f15-1874-4aa5-8ed3-78746cb74e85'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function submitReferral(data: ReferralFormData) {
  const digits = (v: string) => v.replace(/\D/g, '')

  const cleanProfPhone = digits(data.professionalPhone)
  const cleanProfFax = data.professionalFax ? digits(data.professionalFax) || null : null
  const cleanProfNpi = data.professionalNpi ? digits(data.professionalNpi).slice(0, 10) || null : null
  const cleanGuardianPhone = digits(data.guardianPhone)
  const cleanZip = digits(data.addressZip).slice(0, 5)
  const cleanAge = data.childAge ? digits(data.childAge).slice(0, 2) || null : null

  const { error } = await supabase
    .from('dakota-autism-center-referral_submissions')
    .insert({
      org_id: ORG_ID,
      professional_name: data.professionalName,
      professional_credentials: data.professionalCredentials,
      organization_name: data.organizationName,
      professional_email: data.professionalEmail,
      professional_phone: cleanProfPhone,
      professional_fax: cleanProfFax,
      professional_npi: cleanProfNpi,
      referral_reason: data.referralReason,
      child_first_name: data.childFirstName,
      child_last_name: data.childLastName,
      child_date_of_birth: data.childDateOfBirth,
      child_age: cleanAge,
      child_gender: data.childGender,
      parent_guardian_name: data.parentGuardianName,
      guardian_relationship: data.guardianRelationship,
      guardian_phone: cleanGuardianPhone,
      guardian_email: data.guardianEmail,
      address_street: data.addressStreet || null,
      address_city: data.addressCity,
      address_state: data.addressState,
      address_zip: cleanZip,
      primary_diagnosis: data.primaryDiagnosis,
      diagnosis_date: data.diagnosisDate || null,
      diagnosing_provider: data.diagnosingProvider || null,
      current_services: data.currentServices || null,
      referral_concerns: data.referralConcerns || null,
      service_requested: data.serviceRequested,
      primary_insurance: data.primaryInsurance,
      secondary_insurance: data.secondaryInsurance || null,
      insurance_subscriber_name: data.insuranceSubscriberName || null,
      insurance_member_id: data.insuranceMemberId || null,
      insurance_group_number: data.insuranceGroupNumber || null,
      documents_available: data.documentsAvailable,
      preferred_start_timeline: data.preferredStartTimeline,
      care_coordination_notes: data.careCoordinationNotes || null,
      consent_release_info: data.consentReleaseInfo,
      attestation_accurate: data.attestationAccurate,
    })

  if (error) {
    return { success: false as const, error: error.message }
  }

  return { success: true as const }
}
