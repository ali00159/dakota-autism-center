'use server'

import { createClient } from '@supabase/supabase-js'

type CareerApplicationData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  state: string
  zipCode: string
  roleApplied: string
  employmentType: string
  startTimeline: string
  workAuthorization: string
  sponsorshipNeeded: string
  ageOver18: string
  highestEducation: string
  rbtCertificationStatus: string
  bcbaCertificationStatus: string
  certificationId: string
  yearsAutismExperience: string
  yearsAbaExperience: string
  ageGroupsServed: string[]
  serviceSettings: string[]
  clinicalStrengths: string[]
  hasCprCertification: string
  willingBackgroundCheck: boolean
  validDriversLicense: string
  reliableTransportation: string
  ableToPerformPhysicalDemands: boolean
  availabilityWeekdays: string[]
  availabilityTimes: string[]
  preferredServiceLocation: string
  minimumWeeklyHours: string
  currentEmploymentStatus: string
  currentEmployer: string
  whyDakota: string
  abaExperienceSummary: string
  attestInformationAccurate: boolean
  consentToContact: boolean
}

const ORG_ID = 'c2118f15-1874-4aa5-8ed3-78746cb74e85'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function submitCareerApplication(data: CareerApplicationData) {
  const digits = (v: string) => v.replace(/\D/g, '')

  const cleanPhone = digits(data.phone).slice(0, 10)
  const cleanZip = digits(data.zipCode).slice(0, 5)
  const cleanAutismYears = digits(data.yearsAutismExperience).slice(0, 2)
  const cleanAbaYears = digits(data.yearsAbaExperience).slice(0, 2)
  const cleanMinHours = digits(data.minimumWeeklyHours).slice(0, 2)

  const { error } = await supabase
    .from('dakota-autism-center-careers_submissions')
    .insert({
      org_id: ORG_ID,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: cleanPhone,
      city: data.city,
      state: data.state,
      zip_code: cleanZip,
      role_applied: data.roleApplied,
      employment_type: data.employmentType,
      start_timeline: data.startTimeline,
      work_authorization: data.workAuthorization,
      sponsorship_needed: data.sponsorshipNeeded,
      age_over_18: data.ageOver18,
      highest_education: data.highestEducation,
      rbt_certification_status: data.rbtCertificationStatus,
      bcba_certification_status: data.bcbaCertificationStatus,
      certification_id: data.certificationId || null,
      years_autism_experience: cleanAutismYears ? parseInt(cleanAutismYears, 10) : null,
      years_aba_experience: cleanAbaYears ? parseInt(cleanAbaYears, 10) : null,
      age_groups_served: data.ageGroupsServed,
      service_settings: data.serviceSettings,
      clinical_strengths: data.clinicalStrengths,
      has_cpr_certification: data.hasCprCertification,
      willing_background_check: data.willingBackgroundCheck,
      valid_drivers_license: data.validDriversLicense,
      reliable_transportation: data.reliableTransportation,
      able_to_perform_physical_demands: data.ableToPerformPhysicalDemands,
      availability_weekdays: data.availabilityWeekdays,
      availability_times: data.availabilityTimes,
      preferred_service_location: data.preferredServiceLocation,
      minimum_weekly_hours: cleanMinHours ? parseInt(cleanMinHours, 10) : null,
      current_employment_status: data.currentEmploymentStatus,
      current_employer: data.currentEmployer || null,
      why_dakota: data.whyDakota,
      aba_experience_summary: data.abaExperienceSummary,
      attest_information_accurate: data.attestInformationAccurate,
      consent_to_contact: data.consentToContact,
    })

  if (error) {
    return { success: false as const, error: error.message }
  }

  return { success: true as const }
}
