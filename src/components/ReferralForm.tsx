'use client';

import { useMemo, useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, ClipboardCheck, FileText, ShieldCheck } from 'lucide-react';

type ReferralFormData = {
  professionalName: string;
  professionalCredentials: string;
  organizationName: string;
  professionalEmail: string;
  professionalPhone: string;
  professionalFax: string;
  professionalNpi: string;
  referralReason: string;
  childFirstName: string;
  childLastName: string;
  childDateOfBirth: string;
  childAge: string;
  childGender: string;
  parentGuardianName: string;
  guardianRelationship: string;
  guardianPhone: string;
  guardianEmail: string;
  addressStreet: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
  primaryDiagnosis: string;
  diagnosisDate: string;
  diagnosingProvider: string;
  currentServices: string;
  referralConcerns: string;
  serviceRequested: string[];
  primaryInsurance: string;
  secondaryInsurance: string;
  insuranceSubscriberName: string;
  insuranceMemberId: string;
  insuranceGroupNumber: string;
  documentsAvailable: string[];
  preferredStartTimeline: string;
  careCoordinationNotes: string;
  consentReleaseInfo: boolean;
  attestationAccurate: boolean;
};

type ErrorMap = Partial<Record<keyof ReferralFormData, string>>;

const steps = [
  {
    id: 0,
    title: 'Referring Professional',
    description: 'Provider and referral source details',
    icon: ClipboardCheck,
  },
  {
    id: 1,
    title: 'Child & Family',
    description: 'Child demographics and guardian contact',
    icon: FileText,
  },
  {
    id: 2,
    title: 'Clinical Profile',
    description: 'Diagnosis, concerns, and requested services',
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: 'Coverage & Records',
    description: 'Insurance, documents, and readiness',
    icon: FileText,
  },
  {
    id: 4,
    title: 'Review & Confirm',
    description: 'Verify referral details and submit',
    icon: CheckCircle2,
  },
];

const initialData: ReferralFormData = {
  professionalName: '',
  professionalCredentials: '',
  organizationName: '',
  professionalEmail: '',
  professionalPhone: '',
  professionalFax: '',
  professionalNpi: '',
  referralReason: '',
  childFirstName: '',
  childLastName: '',
  childDateOfBirth: '',
  childAge: '',
  childGender: '',
  parentGuardianName: '',
  guardianRelationship: '',
  guardianPhone: '',
  guardianEmail: '',
  addressStreet: '',
  addressCity: '',
  addressState: '',
  addressZip: '',
  primaryDiagnosis: '',
  diagnosisDate: '',
  diagnosingProvider: '',
  currentServices: '',
  referralConcerns: '',
  serviceRequested: [],
  primaryInsurance: '',
  secondaryInsurance: '',
  insuranceSubscriberName: '',
  insuranceMemberId: '',
  insuranceGroupNumber: '',
  documentsAvailable: [],
  preferredStartTimeline: '',
  careCoordinationNotes: '',
  consentReleaseInfo: false,
  attestationAccurate: false,
};

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming', 'District of Columbia',
];

const requiredByStep: Record<number, (keyof ReferralFormData)[]> = {
  0: [
    'professionalName',
    'professionalCredentials',
    'organizationName',
    'professionalEmail',
    'professionalPhone',
    'referralReason',
  ],
  1: [
    'childFirstName',
    'childLastName',
    'childDateOfBirth',
    'childGender',
    'parentGuardianName',
    'guardianRelationship',
    'guardianPhone',
    'guardianEmail',
    'addressCity',
    'addressState',
    'addressZip',
  ],
  2: [
    'primaryDiagnosis',
    'serviceRequested',
  ],
  3: [
    'primaryInsurance',
    'preferredStartTimeline',
  ],
  4: ['consentReleaseInfo', 'attestationAccurate'],
};

function formatPhoneValue(raw: string) {
  const digits = raw.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isNpi(value: string) {
  return /^\d{10}$/.test(value.trim());
}

function isUsZip(value: string) {
  return /^\d{5}$/.test(value.trim());
}

function isPhone(value: string) {
  return value.replace(/\D/g, '').length === 10;
}

export default function ReferralForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<ReferralFormData>(initialData);
  const [errors, setErrors] = useState<ErrorMap>({});
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const setField = <K extends keyof ReferralFormData>(key: K, value: ReferralFormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const toggleFromArray = (key: 'serviceRequested' | 'documentsAvailable', value: string) => {
    const current = formData[key];
    const next = current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
    setField(key, next);
  };

  const validateField = (field: keyof ReferralFormData, value: ReferralFormData[keyof ReferralFormData]) => {
    const required = requiredByStep[step].includes(field);

    if (typeof value === 'string') {
      if (required && !value.trim()) return 'This field is required.';
    }
    if (typeof value === 'boolean') {
      if (required && !value) return 'You must confirm this item to continue.';
    }
    if (Array.isArray(value)) {
      if (required && value.length === 0) return 'Select at least one option.';
    }

    if (field === 'professionalEmail' || field === 'guardianEmail') {
      if (value && typeof value === 'string' && !isEmail(value)) return 'Enter a valid email address.';
    }
    if (field === 'professionalPhone' || field === 'guardianPhone') {
      if (value && typeof value === 'string' && !isPhone(value)) {
        return 'Enter a 10-digit phone number.';
      }
    }
    if (field === 'professionalFax') {
      if (value && typeof value === 'string' && !isPhone(value)) {
        return 'Fax must be a valid 10-digit number.';
      }
    }
    if (field === 'professionalNpi') {
      if (value && typeof value === 'string' && !isNpi(value)) {
        return 'NPI must be 10 digits.';
      }
    }
    if (field === 'addressZip') {
      if (value && typeof value === 'string' && !isUsZip(value)) return 'ZIP code must be 5 digits.';
    }
    if (field === 'referralConcerns') {
      if (typeof value === 'string' && value.trim() && value.trim().length < 20) {
        return 'Please include at least 20 characters for clinical context.';
      }
    }
    return undefined;
  };

  const validateCurrentStep = () => {
    const fields = requiredByStep[step];
    const nextErrors: ErrorMap = {};

    fields.forEach((field) => {
      const maybeError = validateField(field, formData[field]);
      if (maybeError) {
        nextErrors[field] = maybeError;
      }
    });

    setErrors((prev) => ({ ...prev, ...nextErrors }));
    return Object.keys(nextErrors).length === 0;
  };

  const onNext = () => {
    if (!validateCurrentStep()) return;
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const onBack = () => setStep((prev) => Math.max(prev - 1, 0));

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateCurrentStep()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border-light bg-white p-8 text-center shadow-xl md:p-12">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mb-3 text-3xl font-semibold text-primary">Referral Submitted</h2>
        <p className="mx-auto max-w-2xl text-text-secondary">
          Thank you. Your professional referral has been recorded. Our intake team will review the
          details and follow up with the family and referring provider to confirm next steps.
        </p>
      </div>
    );
  }

  const stepErrors = requiredByStep[step].filter((field) => errors[field]);

  return (
    <form className="space-y-8" onSubmit={onSubmit} noValidate>
      <div>
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Step {step + 1} of {steps.length}
          </p>
          <p className="text-sm text-text-secondary">{Math.round(progress)}% complete</p>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-bg-secondary">
          <div
            className="h-full rounded-full bg-linear-to-r from-primary via-secondary to-tertiary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <ol className="hidden grid-cols-5 gap-3 lg:grid">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          const active = idx === step;
          const complete = idx < step;

          return (
            <li
              key={item.title}
              className={`rounded-2xl border p-3 transition-all ${
                active
                  ? 'border-primary bg-primary-light'
                  : complete
                    ? 'border-secondary/50 bg-secondary/10'
                    : 'border-border-light bg-white'
              }`}
            >
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                {complete ? <CheckCircle2 className="h-4 w-4 text-secondary" /> : <Icon className="h-4 w-4" />}
              </div>
              <p className="mb-1 text-sm font-semibold text-dark">{item.title}</p>
              <p className="mb-0 text-xs text-text-secondary">{item.description}</p>
            </li>
          );
        })}
      </ol>

      {stepErrors.length > 0 && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-xl border border-error/30 bg-red-50 px-4 py-3 text-sm text-accent"
        >
          Please complete all required fields on this step before continuing.
        </div>
      )}

      {step === 0 && (
        <section className="grid gap-6 md:grid-cols-2">
          <Field
            id="professionalName"
            label="Referring Professional Full Name"
            required
            value={formData.professionalName}
            onChange={(value) => setField('professionalName', value)}
            error={errors.professionalName}
            placeholder="Dr. Jane Smith"
          />
          <Field
            id="professionalCredentials"
            label="Credentials"
            required
            value={formData.professionalCredentials}
            onChange={(value) => setField('professionalCredentials', value)}
            error={errors.professionalCredentials}
            placeholder="MD, PsyD, LP, BCBA"
          />
          <Field
            id="organizationName"
            label="Practice or Agency Name"
            required
            value={formData.organizationName}
            onChange={(value) => setField('organizationName', value)}
            error={errors.organizationName}
            placeholder="Children's Development Clinic"
          />
          <Field
            id="professionalNpi"
            label="NPI (Optional)"
            value={formData.professionalNpi}
            onChange={(value) => setField('professionalNpi', value.replace(/\D/g, '').slice(0, 10))}
            error={errors.professionalNpi}
            placeholder="10-digit NPI"
          />
          <Field
            id="professionalEmail"
            label="Professional Email"
            type="email"
            required
            value={formData.professionalEmail}
            onChange={(value) => setField('professionalEmail', value)}
            error={errors.professionalEmail}
            placeholder="provider@clinic.org"
          />
          <Field
            id="professionalPhone"
            label="Professional Phone"
            required
            value={formData.professionalPhone}
            onChange={(value) => setField('professionalPhone', formatPhoneValue(value))}
            error={errors.professionalPhone}
            placeholder="(555) 123-4567"
          />
          <Field
            id="professionalFax"
            label="Fax (Optional)"
            value={formData.professionalFax}
            onChange={(value) => setField('professionalFax', formatPhoneValue(value))}
            error={errors.professionalFax}
            placeholder="(555) 987-6543"
          />
          <SelectField
            id="referralReason"
            label="Primary Reason for Referral"
            required
            value={formData.referralReason}
            onChange={(value) => setField('referralReason', value)}
            error={errors.referralReason}
            options={[
              'New ABA service request',
              'Transition from another ABA provider',
              'Re-evaluation and updated plan',
              'Parent training and caregiver support',
              'Behavior stabilization and safety concerns',
            ]}
          />
        </section>
      )}

      {step === 1 && (
        <section className="grid gap-6 md:grid-cols-2">
          <Field
            id="childFirstName"
            label="Child First Name"
            required
            value={formData.childFirstName}
            onChange={(value) => setField('childFirstName', value)}
            error={errors.childFirstName}
            placeholder="First name"
          />
          <Field
            id="childLastName"
            label="Child Last Name"
            required
            value={formData.childLastName}
            onChange={(value) => setField('childLastName', value)}
            error={errors.childLastName}
            placeholder="Last name"
          />
          <Field
            id="childDateOfBirth"
            label="Date of Birth"
            type="date"
            required
            value={formData.childDateOfBirth}
            onChange={(value) => setField('childDateOfBirth', value)}
            error={errors.childDateOfBirth}
          />
          <Field
            id="childAge"
            label="Age (Optional)"
            value={formData.childAge}
            onChange={(value) => setField('childAge', value.replace(/\D/g, '').slice(0, 2))}
            error={errors.childAge}
            placeholder="e.g. 5"
          />
          <SelectField
            id="childGender"
            label="Gender"
            required
            value={formData.childGender}
            onChange={(value) => setField('childGender', value)}
            error={errors.childGender}
            options={['Female', 'Male', 'Non-binary', 'Prefer not to say']}
          />
          <Field
            id="parentGuardianName"
            label="Parent/Guardian Full Name"
            required
            value={formData.parentGuardianName}
            onChange={(value) => setField('parentGuardianName', value)}
            error={errors.parentGuardianName}
            placeholder="Parent or guardian name"
          />
          <SelectField
            id="guardianRelationship"
            label="Relationship to Child"
            required
            value={formData.guardianRelationship}
            onChange={(value) => setField('guardianRelationship', value)}
            error={errors.guardianRelationship}
            options={['Mother', 'Father', 'Legal Guardian', 'Grandparent', 'Foster Parent', 'Other']}
          />
          <Field
            id="guardianPhone"
            label="Parent/Guardian Phone"
            required
            value={formData.guardianPhone}
            onChange={(value) => setField('guardianPhone', formatPhoneValue(value))}
            error={errors.guardianPhone}
            placeholder="(555) 123-4567"
          />
          <Field
            id="guardianEmail"
            label="Parent/Guardian Email"
            type="email"
            required
            value={formData.guardianEmail}
            onChange={(value) => setField('guardianEmail', value)}
            error={errors.guardianEmail}
            placeholder="family@email.com"
          />
          <Field
            id="addressStreet"
            label="Street Address (Optional)"
            value={formData.addressStreet}
            onChange={(value) => setField('addressStreet', value)}
            error={errors.addressStreet}
            placeholder="123 Main St"
          />
          <Field
            id="addressCity"
            label="City"
            required
            value={formData.addressCity}
            onChange={(value) => setField('addressCity', value)}
            error={errors.addressCity}
            placeholder="Minneapolis"
          />
          <SelectField
            id="addressState"
            label="State"
            required
            value={formData.addressState}
            onChange={(value) => setField('addressState', value)}
            error={errors.addressState}
            options={US_STATES}
          />
          <Field
            id="addressZip"
            label="ZIP Code"
            required
            value={formData.addressZip}
            onChange={(value) => setField('addressZip', value.replace(/\D/g, '').slice(0, 5))}
            error={errors.addressZip}
            placeholder="55401"
          />
        </section>
      )}

      {step === 2 && (
        <section className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Field
              id="primaryDiagnosis"
              label="Primary Diagnosis"
              required
              value={formData.primaryDiagnosis}
              onChange={(value) => setField('primaryDiagnosis', value)}
              error={errors.primaryDiagnosis}
              placeholder="Autism Spectrum Disorder"
            />
            <Field
              id="diagnosisDate"
              label="Diagnosis Date (Optional)"
              type="date"
              value={formData.diagnosisDate}
              onChange={(value) => setField('diagnosisDate', value)}
              error={errors.diagnosisDate}
            />
            <Field
              id="diagnosingProvider"
              label="Diagnosing Provider or Clinic (Optional)"
              value={formData.diagnosingProvider}
              onChange={(value) => setField('diagnosingProvider', value)}
              error={errors.diagnosingProvider}
              placeholder="Provider name and clinic"
            />
            <Field
              id="currentServices"
              label="Current Services (Optional)"
              value={formData.currentServices}
              onChange={(value) => setField('currentServices', value)}
              error={errors.currentServices}
              placeholder="Speech therapy, OT, school supports"
            />
          </div>

          <fieldset>
            <legend className="form-label form-label-required">Services Requested</legend>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {[
                'Comprehensive ABA therapy',
                'Focused ABA therapy',
                'Parent training',
                'Social skills support',
                'Functional behavior assessment',
                'School collaboration',
              ].map((option) => (
                <label key={option} className="checkbox-wrapper rounded-lg border border-border-light px-3 py-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={formData.serviceRequested.includes(option)}
                    onChange={() => toggleFromArray('serviceRequested', option)}
                  />
                  <span className="text-sm text-text-primary">{option}</span>
                </label>
              ))}
            </div>
            {errors.serviceRequested ? <p className="form-error">{errors.serviceRequested}</p> : null}
          </fieldset>

          <div>
            <label htmlFor="referralConcerns" className="form-label">
              Presenting Concerns and Behavioral Priorities (Optional)
            </label>
            <textarea
              id="referralConcerns"
              className="textarea"
              value={formData.referralConcerns}
              onChange={(event) => setField('referralConcerns', event.target.value)}
              placeholder="Include key concerns, safety issues, communication needs, and skill goals..."
            />
            {errors.referralConcerns ? <p className="form-error">{errors.referralConcerns}</p> : null}
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Field
              id="primaryInsurance"
              label="Primary Insurance"
              required
              value={formData.primaryInsurance}
              onChange={(value) => setField('primaryInsurance', value)}
              error={errors.primaryInsurance}
              placeholder="Aetna, BCBS, Medicaid, etc."
            />
            <Field
              id="secondaryInsurance"
              label="Secondary Insurance (Optional)"
              value={formData.secondaryInsurance}
              onChange={(value) => setField('secondaryInsurance', value)}
              error={errors.secondaryInsurance}
              placeholder="Secondary payer if available"
            />
            <Field
              id="insuranceSubscriberName"
              label="Subscriber Name (Optional)"
              value={formData.insuranceSubscriberName}
              onChange={(value) => setField('insuranceSubscriberName', value)}
              error={errors.insuranceSubscriberName}
              placeholder="Subscriber full name"
            />
            <Field
              id="insuranceMemberId"
              label="Member ID (Optional)"
              value={formData.insuranceMemberId}
              onChange={(value) => setField('insuranceMemberId', value)}
              error={errors.insuranceMemberId}
              placeholder="Policy/member identifier"
            />
            <Field
              id="insuranceGroupNumber"
              label="Group Number (Optional)"
              value={formData.insuranceGroupNumber}
              onChange={(value) => setField('insuranceGroupNumber', value)}
              error={errors.insuranceGroupNumber}
              placeholder="Group number"
            />
          </div>

          <fieldset>
            <legend className="form-label">Available Documentation</legend>
            <p className="mt-1 text-sm text-text-secondary">
              These do not need to be in hand at the time of referral or before intake.
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {[
                'Individualized Treatment Plan (ITP)',
                'Comprehensive Multi-Disciplinary Evaluation (CMDE)',
                'Diagnostic Assessment (DA)',
                'Functional Behavior Assessment (FBA)',
                'Behavior Intervention Plan (BIP)',
                'Insurance Card',
                'Individualized Education Plan (IEP)',
              ].map((option) => (
                <label key={option} className="checkbox-wrapper rounded-lg border border-border-light px-3 py-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={formData.documentsAvailable.includes(option)}
                    onChange={() => toggleFromArray('documentsAvailable', option)}
                  />
                  <span className="text-sm text-text-primary">{option}</span>
                </label>
              ))}
            </div>
            {errors.documentsAvailable ? <p className="form-error">{errors.documentsAvailable}</p> : null}
          </fieldset>

          <div className="grid gap-6 md:grid-cols-2">
            <SelectField
              id="preferredStartTimeline"
              label="Preferred Start Timeline"
              required
              value={formData.preferredStartTimeline}
              onChange={(value) => setField('preferredStartTimeline', value)}
              error={errors.preferredStartTimeline}
              options={['Immediate (0-30 days)', '1-2 months', '2-3 months', 'Flexible']}
            />
            <div>
              <label htmlFor="careCoordinationNotes" className="form-label">
                Care Coordination Notes (Optional)
              </label>
              <textarea
                id="careCoordinationNotes"
                className="textarea"
                value={formData.careCoordinationNotes}
                onChange={(event) => setField('careCoordinationNotes', event.target.value)}
                placeholder="Preferred communication method, care team context, or scheduling notes"
              />
            </div>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="space-y-6">
          <div className="rounded-2xl border border-border-light bg-bg-secondary p-5">
            <h3 className="mb-2 text-xl font-semibold text-primary">Submission Checklist</h3>
            <ul className="mb-0 space-y-2 text-sm text-text-secondary">
              <li>Provider details and referral intent are complete.</li>
              <li>Child demographics and guardian contact information are accurate.</li>
              <li>Clinical concerns, diagnosis history, and requested services are documented.</li>
              <li>Insurance details and available records are included for intake review.</li>
            </ul>
          </div>

          <label className="checkbox-wrapper items-start rounded-xl border border-border-light bg-white p-4">
            <input
              type="checkbox"
              className="checkbox mt-1"
              checked={formData.consentReleaseInfo}
              onChange={(event) => setField('consentReleaseInfo', event.target.checked)}
            />
            <span className="text-sm leading-relaxed text-text-primary">
              I confirm that I have appropriate permission to share this referral information for care
              coordination and intake purposes.
            </span>
          </label>
          {errors.consentReleaseInfo ? <p className="form-error">{errors.consentReleaseInfo}</p> : null}

          <label className="checkbox-wrapper items-start rounded-xl border border-border-light bg-white p-4">
            <input
              type="checkbox"
              className="checkbox mt-1"
              checked={formData.attestationAccurate}
              onChange={(event) => setField('attestationAccurate', event.target.checked)}
            />
            <span className="text-sm leading-relaxed text-text-primary">
              I attest that all information provided is accurate to the best of my knowledge.
            </span>
          </label>
          {errors.attestationAccurate ? <p className="form-error">{errors.attestationAccurate}</p> : null}
        </section>
      )}

      <div className="flex flex-col-reverse gap-3 border-t border-border-light pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={step === 0}
          className="btn btn-tertiary rounded-full disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>

        {step < steps.length - 1 ? (
          <button type="button" onClick={onNext} className="btn btn-primary rounded-full">
            Continue
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button type="submit" className="btn btn-primary rounded-full">
            Submit Professional Referral
            <CheckCircle2 className="h-4 w-4" />
          </button>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'date';
  required?: boolean;
};

function Field({ id, label, value, onChange, error, placeholder, type = 'text', required }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className={required ? 'form-label form-label-required' : 'form-label'}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="input-text"
        placeholder={placeholder}
      />
      {error ? <p className="form-error">{error}</p> : null}
    </div>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options: string[];
  required?: boolean;
};

function SelectField({ id, label, value, onChange, error, options, required }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={required ? 'form-label form-label-required' : 'form-label'}>
        {label}
      </label>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)} className="select">
        <option value="">Please select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <p className="form-error">{error}</p> : null}
    </div>
  );
}
