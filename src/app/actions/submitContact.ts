'use server'

import { createClient } from '@supabase/supabase-js'

type ContactFormData = {
  parentFirstName: string
  parentLastName: string
  email: string
  phone: string
  childFirstName: string
  childAge?: string
  zipCode: string
  insurance: string
  preferredSetting?: string
  enrollmentType?: string
  smsConsent: boolean
}

const ORG_ID = 'c2118f15-1874-4aa5-8ed3-78746cb74e85'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function submitContact(data: ContactFormData) {

  const cleanPhone = data.phone.replace(/\D/g, '')
  const cleanZip = data.zipCode.replace(/\D/g, '').slice(0, 5)
  const cleanAge = data.childAge ? data.childAge.replace(/\D/g, '').slice(0, 2) || null : null

  const { error } = await supabase
    .from('dakota-autism-center-contact_submissions')
    .insert({
      org_id: ORG_ID,
      parent_first_name: data.parentFirstName,
      parent_last_name: data.parentLastName,
      email: data.email,
      phone: cleanPhone,
      child_first_name: data.childFirstName,
      child_age: cleanAge,
      zip_code: cleanZip,
      insurance: data.insurance,
      preferred_setting: data.preferredSetting || null,
      enrollment_type: data.enrollmentType || null,
      sms_consent: data.smsConsent,
    })

  if (error) {
    return { success: false as const, error: error.message }
  }

  return { success: true as const }
}
