'use client';

import { useMemo, useState, useTransition } from 'react';
import {
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Loader2,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { submitCareerApplication } from '@/app/actions/submitCareerApplication';

type CareerFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zipCode: string;
  roleApplied: string;
  employmentType: string;
  startTimeline: string;
  workAuthorization: string;
  sponsorshipNeeded: string;
  ageOver18: string;
  highestEducation: string;
  rbtCertificationStatus: string;
  bcbaCertificationStatus: string;
  certificationId: string;
  yearsAutismExperience: string;
  yearsAbaExperience: string;
  ageGroupsServed: string[];
  serviceSettings: string[];
  clinicalStrengths: string[];
  hasCprCertification: string;
  willingBackgroundCheck: boolean;
  validDriversLicense: string;
  reliableTransportation: string;
  ableToPerformPhysicalDemands: boolean;
  availabilityWeekdays: string[];
  availabilityTimes: string[];
  preferredServiceLocation: string;
  minimumWeeklyHours: string;
  currentEmploymentStatus: string;
  currentEmployer: string;
  whyDakota: string;
  abaExperienceSummary: string;
  attestInformationAccurate: boolean;
  consentToContact: boolean;
};

type ErrorMap = Partial<Record<keyof CareerFormData, string>>;

const steps = [
  {
    id: 0,
    title: 'Applicant Basics',
    description: 'Contact info and role preference',
    icon: UserCheck,
  },
  {
    id: 1,
    title: 'Clinical Qualifications',
    description: 'ABA credentials and experience profile',
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    title: 'Availability & Logistics',
    description: 'Schedule, setting, and readiness details',
    icon: CalendarClock,
  },
  {
    id: 3,
    title: 'Application Narrative',
    description: 'Why Dakota and ABA approach',
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: 'Review & Submit',
    description: 'Final confirmations',
    icon: CheckCircle2,
  },
];

const initialData: CareerFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  zipCode: '',
  roleApplied: '',
  employmentType: '',
  startTimeline: '',
  workAuthorization: '',
  sponsorshipNeeded: '',
  ageOver18: '',
  highestEducation: '',
  rbtCertificationStatus: '',
  bcbaCertificationStatus: '',
  certificationId: '',
  yearsAutismExperience: '',
  yearsAbaExperience: '',
  ageGroupsServed: [],
  serviceSettings: [],
  clinicalStrengths: [],
  hasCprCertification: '',
  willingBackgroundCheck: false,
  validDriversLicense: '',
  reliableTransportation: '',
  ableToPerformPhysicalDemands: false,
  availabilityWeekdays: [],
  availabilityTimes: [],
  preferredServiceLocation: '',
  minimumWeeklyHours: '',
  currentEmploymentStatus: '',
  currentEmployer: '',
  whyDakota: '',
  abaExperienceSummary: '',
  attestInformationAccurate: false,
  consentToContact: false,
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

const requiredByStep: Record<number, (keyof CareerFormData)[]> = {
  0: [
    'firstName',
    'lastName',
    'email',
    'phone',
    'city',
    'state',
    'zipCode',
    'roleApplied',
    'employmentType',
    'startTimeline',
    'workAuthorization',
    'sponsorshipNeeded',
    'ageOver18',
  ],
  1: [
    'highestEducation',
    'rbtCertificationStatus',
    'bcbaCertificationStatus',
    'yearsAutismExperience',
    'yearsAbaExperience',
    'ageGroupsServed',
    'serviceSettings',
    'clinicalStrengths',
    'hasCprCertification',
    'willingBackgroundCheck',
    'validDriversLicense',
    'reliableTransportation',
    'ableToPerformPhysicalDemands',
  ],
  2: [
    'availabilityWeekdays',
    'availabilityTimes',
    'preferredServiceLocation',
    'minimumWeeklyHours',
    'currentEmploymentStatus',
  ],
  3: ['whyDakota', 'abaExperienceSummary'],
  4: ['attestInformationAccurate', 'consentToContact'],
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

function isPhone(value: string) {
  return value.replace(/\D/g, '').length === 10;
}

function isUsZip(value: string) {
  return /^\d{5}$/.test(value.trim());
}

function sanitizeName(value: string) {
  return value.replace(/[^a-zA-Z '-]/g, '').slice(0, 60);
}

function toNumber(value: string) {
  const n = Number.parseInt(value, 10);
  return Number.isNaN(n) ? null : n;
}

export default function CareersApplicationForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<CareerFormData>(initialData);
  const [errors, setErrors] = useState<ErrorMap>({});
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [submitError, setSubmitError] = useState('');

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const setField = <K extends keyof CareerFormData>(key: K, value: CareerFormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const toggleFromArray = (
    key: 'ageGroupsServed' | 'serviceSettings' | 'clinicalStrengths' | 'availabilityWeekdays' | 'availabilityTimes',
    value: string,
  ) => {
    const current = formData[key];
    const next = current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
    setField(key, next);
  };

  const validateField = (field: keyof CareerFormData, value: CareerFormData[keyof CareerFormData]) => {
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

    if (field === 'email') {
      if (value && typeof value === 'string' && !isEmail(value)) return 'Enter a valid email address.';
    }
    if (field === 'phone') {
      if (value && typeof value === 'string' && !isPhone(value)) {
        return 'Enter a 10-digit phone number.';
      }
    }
    if (field === 'zipCode') {
      if (value && typeof value === 'string' && !isUsZip(value)) return 'ZIP code must be 5 digits.';
    }
    if (field === 'ageOver18' && value === 'No') {
      return 'Applicants must be at least 18 years old for these roles.';
    }
    if (field === 'workAuthorization' && value === 'No') {
      return 'Current work authorization is required for employment consideration.';
    }
    if (field === 'yearsAutismExperience' || field === 'yearsAbaExperience') {
      if (typeof value === 'string' && value.trim()) {
        const parsed = toNumber(value);
        if (parsed === null || parsed < 0 || parsed > 40) {
          return 'Enter a number between 0 and 40.';
        }
      }
    }
    if (field === 'minimumWeeklyHours') {
      if (typeof value === 'string' && value.trim()) {
        const parsed = toNumber(value);
        if (parsed === null || parsed < 1 || parsed > 40) {
          return 'Enter weekly hours between 1 and 40.';
        }
      }
    }
    if (field === 'whyDakota' || field === 'abaExperienceSummary') {
      if (typeof value === 'string') {
        const trimmed = value.trim();
        if (required && trimmed.length < 40) {
          return 'Please provide at least 40 characters for a meaningful response.';
        }
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
    setSubmitError('');
    startTransition(async () => {
      const result = await submitCareerApplication(formData);
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(result.error);
      }
    });
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border-light bg-white p-8 text-center shadow-xl md:p-12">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mb-3 text-3xl font-semibold text-primary">Application Submitted</h2>
        <p className="mx-auto max-w-2xl text-text-secondary">
          Thank you for applying to Dakota Autism Center. Our hiring team will review your
          application and contact you about next steps.
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

      {submitError && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-xl border border-error/30 bg-red-50 px-4 py-3 text-sm text-accent"
        >
          Something went wrong submitting your application. Please try again.
        </div>
      )}

      {step === 0 && (
        <section className="grid gap-6 md:grid-cols-2">
          <Field
            id="firstName"
            label="First Name"
            required
            value={formData.firstName}
            onChange={(value) => setField('firstName', sanitizeName(value))}
            error={errors.firstName}
            placeholder="First name"
          />
          <Field
            id="lastName"
            label="Last Name"
            required
            value={formData.lastName}
            onChange={(value) => setField('lastName', sanitizeName(value))}
            error={errors.lastName}
            placeholder="Last name"
          />
          <Field
            id="email"
            label="Email"
            type="email"
            required
            value={formData.email}
            onChange={(value) => setField('email', value.trim())}
            error={errors.email}
            placeholder="you@email.com"
          />
          <Field
            id="phone"
            label="Phone"
            required
            value={formData.phone}
            onChange={(value) => setField('phone', formatPhoneValue(value))}
            error={errors.phone}
            placeholder="(555) 123-4567"
          />
          <Field
            id="city"
            label="City"
            required
            value={formData.city}
            onChange={(value) => setField('city', sanitizeName(value))}
            error={errors.city}
            placeholder="Minneapolis"
          />
          <SelectField
            id="state"
            label="State"
            required
            value={formData.state}
            onChange={(value) => setField('state', value)}
            error={errors.state}
            options={US_STATES}
          />
          <Field
            id="zipCode"
            label="ZIP Code"
            required
            value={formData.zipCode}
            onChange={(value) => setField('zipCode', value.replace(/\D/g, '').slice(0, 5))}
            error={errors.zipCode}
            placeholder="55401"
          />
          <SelectField
            id="roleApplied"
            label="Role You Are Applying For"
            required
            value={formData.roleApplied}
            onChange={(value) => setField('roleApplied', value)}
            error={errors.roleApplied}
            options={[
              'Registered Behavior Technician (RBT)',
              'Behavior Technician (Entry-Level)',
              'Board Certified Behavior Analyst (BCBA)',
              'Clinical Supervisor',
              'Program Coordinator',
              'Other ABA Role',
            ]}
          />
          <SelectField
            id="employmentType"
            label="Employment Type"
            required
            value={formData.employmentType}
            onChange={(value) => setField('employmentType', value)}
            error={errors.employmentType}
            options={['Full-time', 'Part-time', 'Either']}
          />
          <SelectField
            id="startTimeline"
            label="Earliest Start Timeline"
            required
            value={formData.startTimeline}
            onChange={(value) => setField('startTimeline', value)}
            error={errors.startTimeline}
            options={['Immediately', 'Within 2 weeks', 'Within 30 days', 'More than 30 days']}
          />
          <SelectField
            id="workAuthorization"
            label="Authorized to Work in the U.S."
            required
            value={formData.workAuthorization}
            onChange={(value) => setField('workAuthorization', value)}
            error={errors.workAuthorization}
            options={['Yes', 'No']}
          />
          <SelectField
            id="sponsorshipNeeded"
            label="Need Visa Sponsorship Now or in Future?"
            required
            value={formData.sponsorshipNeeded}
            onChange={(value) => setField('sponsorshipNeeded', value)}
            error={errors.sponsorshipNeeded}
            options={['No', 'Yes']}
          />
          <SelectField
            id="ageOver18"
            label="Are You at Least 18 Years Old?"
            required
            value={formData.ageOver18}
            onChange={(value) => setField('ageOver18', value)}
            error={errors.ageOver18}
            options={['Yes', 'No']}
          />
        </section>
      )}

      {step === 1 && (
        <section className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <SelectField
              id="highestEducation"
              label="Highest Education Completed"
              required
              value={formData.highestEducation}
              onChange={(value) => setField('highestEducation', value)}
              error={errors.highestEducation}
              options={[
                'High school diploma / GED',
                'Associate degree',
                'Bachelor degree',
                'Master degree',
                'Doctorate',
              ]}
            />
            <SelectField
              id="rbtCertificationStatus"
              label="RBT Certification Status"
              required
              value={formData.rbtCertificationStatus}
              onChange={(value) => setField('rbtCertificationStatus', value)}
              error={errors.rbtCertificationStatus}
              options={['Active RBT', 'In process', 'Not certified']}
            />
            <SelectField
              id="bcbaCertificationStatus"
              label="BCBA Certification Status"
              required
              value={formData.bcbaCertificationStatus}
              onChange={(value) => setField('bcbaCertificationStatus', value)}
              error={errors.bcbaCertificationStatus}
              options={['Active BCBA', 'BCaBA', 'Pursuing certification', 'Not applicable']}
            />
            <Field
              id="certificationId"
              label="Certification ID (Optional)"
              value={formData.certificationId}
              onChange={(value) => setField('certificationId', value.replace(/[^a-zA-Z0-9-]/g, '').slice(0, 40))}
              error={errors.certificationId}
              placeholder="RBT or BCBA certificate number"
            />
            <Field
              id="yearsAutismExperience"
              label="Years Working with Autism (0-40)"
              required
              value={formData.yearsAutismExperience}
              onChange={(value) => setField('yearsAutismExperience', value.replace(/\D/g, '').slice(0, 2))}
              error={errors.yearsAutismExperience}
              placeholder="e.g. 3"
            />
            <Field
              id="yearsAbaExperience"
              label="Years of ABA Experience (0-40)"
              required
              value={formData.yearsAbaExperience}
              onChange={(value) => setField('yearsAbaExperience', value.replace(/\D/g, '').slice(0, 2))}
              error={errors.yearsAbaExperience}
              placeholder="e.g. 2"
            />
            <SelectField
              id="hasCprCertification"
              label="Current CPR/First Aid Certification"
              required
              value={formData.hasCprCertification}
              onChange={(value) => setField('hasCprCertification', value)}
              error={errors.hasCprCertification}
              options={['Yes', 'No', 'Willing to obtain before start']}
            />
            <SelectField
              id="validDriversLicense"
              label="Valid Driver License"
              required
              value={formData.validDriversLicense}
              onChange={(value) => setField('validDriversLicense', value)}
              error={errors.validDriversLicense}
              options={['Yes', 'No']}
            />
            <SelectField
              id="reliableTransportation"
              label="Reliable Transportation"
              required
              value={formData.reliableTransportation}
              onChange={(value) => setField('reliableTransportation', value)}
              error={errors.reliableTransportation}
              options={['Yes', 'No']}
            />
          </div>

          <fieldset>
            <legend className="form-label form-label-required">Age Groups You Have Worked With</legend>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {[
                'Early intervention (0-3)',
                'Preschool (3-5)',
                'School-age (6-12)',
                'Adolescents (13-17)',
                'Adults (18+)',
              ].map((option) => (
                <label key={option} className="checkbox-wrapper rounded-lg border border-border-light px-3 py-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={formData.ageGroupsServed.includes(option)}
                    onChange={() => toggleFromArray('ageGroupsServed', option)}
                  />
                  <span className="text-sm text-text-primary">{option}</span>
                </label>
              ))}
            </div>
            {errors.ageGroupsServed ? <p className="form-error">{errors.ageGroupsServed}</p> : null}
          </fieldset>

          <fieldset>
            <legend className="form-label form-label-required">Service Settings Experience</legend>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {[
                'Center-based ABA',
                'In-home ABA',
                'School-based support',
                'Telehealth parent coaching',
                'Group social skills',
              ].map((option) => (
                <label key={option} className="checkbox-wrapper rounded-lg border border-border-light px-3 py-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={formData.serviceSettings.includes(option)}
                    onChange={() => toggleFromArray('serviceSettings', option)}
                  />
                  <span className="text-sm text-text-primary">{option}</span>
                </label>
              ))}
            </div>
            {errors.serviceSettings ? <p className="form-error">{errors.serviceSettings}</p> : null}
          </fieldset>

          <fieldset>
            <legend className="form-label form-label-required">Clinical Strengths</legend>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {[
                'Behavior reduction and safety plans',
                'Functional communication training',
                'Parent and caregiver coaching',
                'Data collection and treatment integrity',
                'Toilet training and adaptive living skills',
                'School readiness and transitions',
              ].map((option) => (
                <label key={option} className="checkbox-wrapper rounded-lg border border-border-light px-3 py-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={formData.clinicalStrengths.includes(option)}
                    onChange={() => toggleFromArray('clinicalStrengths', option)}
                  />
                  <span className="text-sm text-text-primary">{option}</span>
                </label>
              ))}
            </div>
            {errors.clinicalStrengths ? <p className="form-error">{errors.clinicalStrengths}</p> : null}
          </fieldset>

          <label className="checkbox-wrapper items-start rounded-xl border border-border-light bg-white p-4">
            <input
              type="checkbox"
              className="checkbox mt-1"
              checked={formData.willingBackgroundCheck}
              onChange={(event) => setField('willingBackgroundCheck', event.target.checked)}
            />
            <span className="text-sm leading-relaxed text-text-primary">
              I understand this role may require state and federal background checks and I am willing
              to complete all required screenings.
            </span>
          </label>
          {errors.willingBackgroundCheck ? <p className="form-error">{errors.willingBackgroundCheck}</p> : null}

          <label className="checkbox-wrapper items-start rounded-xl border border-border-light bg-white p-4">
            <input
              type="checkbox"
              className="checkbox mt-1"
              checked={formData.ableToPerformPhysicalDemands}
              onChange={(event) => setField('ableToPerformPhysicalDemands', event.target.checked)}
            />
            <span className="text-sm leading-relaxed text-text-primary">
              I can perform the physical responsibilities of ABA work (standing, moving quickly,
              floor play, and assisting with client safety as needed).
            </span>
          </label>
          {errors.ableToPerformPhysicalDemands ? <p className="form-error">{errors.ableToPerformPhysicalDemands}</p> : null}
        </section>
      )}

      {step === 2 && (
        <section className="space-y-6">
          <fieldset>
            <legend className="form-label form-label-required">Weekday Availability</legend>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((option) => (
                <label key={option} className="checkbox-wrapper rounded-lg border border-border-light px-3 py-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={formData.availabilityWeekdays.includes(option)}
                    onChange={() => toggleFromArray('availabilityWeekdays', option)}
                  />
                  <span className="text-sm text-text-primary">{option}</span>
                </label>
              ))}
            </div>
            {errors.availabilityWeekdays ? <p className="form-error">{errors.availabilityWeekdays}</p> : null}
          </fieldset>

          <fieldset>
            <legend className="form-label form-label-required">Preferred Shift Windows</legend>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {[
                'Morning (7am-12pm)',
                'Midday (11am-3pm)',
                'Afternoon (3pm-6pm)',
                'Evening (after 6pm)',
              ].map((option) => (
                <label key={option} className="checkbox-wrapper rounded-lg border border-border-light px-3 py-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={formData.availabilityTimes.includes(option)}
                    onChange={() => toggleFromArray('availabilityTimes', option)}
                  />
                  <span className="text-sm text-text-primary">{option}</span>
                </label>
              ))}
            </div>
            {errors.availabilityTimes ? <p className="form-error">{errors.availabilityTimes}</p> : null}
          </fieldset>

          <div className="grid gap-6 md:grid-cols-2">
            <SelectField
              id="preferredServiceLocation"
              label="Preferred Service Location"
              required
              value={formData.preferredServiceLocation}
              onChange={(value) => setField('preferredServiceLocation', value)}
              error={errors.preferredServiceLocation}
              options={['Center-based', 'In-home', 'Both']}
            />
            <Field
              id="minimumWeeklyHours"
              label="Minimum Weekly Hours You Can Commit"
              required
              value={formData.minimumWeeklyHours}
              onChange={(value) => setField('minimumWeeklyHours', value.replace(/\D/g, '').slice(0, 2))}
              error={errors.minimumWeeklyHours}
              placeholder="e.g. 25"
            />
            <SelectField
              id="currentEmploymentStatus"
              label="Current Employment Status"
              required
              value={formData.currentEmploymentStatus}
              onChange={(value) => setField('currentEmploymentStatus', value)}
              error={errors.currentEmploymentStatus}
              options={['Employed full-time', 'Employed part-time', 'Not currently employed', 'Student']}
            />
            <Field
              id="currentEmployer"
              label="Current Employer (Optional)"
              value={formData.currentEmployer}
              onChange={(value) => setField('currentEmployer', value.slice(0, 100))}
              error={errors.currentEmployer}
              placeholder="Organization name"
            />
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="space-y-6">
          <div>
            <label htmlFor="whyDakota" className="form-label form-label-required">
              Why do you want to join Dakota Autism Center?
            </label>
            <textarea
              id="whyDakota"
              className="textarea min-h-36"
              value={formData.whyDakota}
              onChange={(event) => setField('whyDakota', event.target.value.slice(0, 1200))}
              placeholder="Share your motivation, team fit, and what drew you to this role..."
            />
            <div className="mt-1 flex items-center justify-between">
              {errors.whyDakota ? <p className="form-error">{errors.whyDakota}</p> : <span className="text-xs text-text-muted">Minimum 40 characters.</span>}
              <span className="text-xs text-text-muted">{formData.whyDakota.length}/1200</span>
            </div>
          </div>

          <div>
            <label htmlFor="abaExperienceSummary" className="form-label form-label-required">
              Briefly describe your ABA approach and client support style
            </label>
            <textarea
              id="abaExperienceSummary"
              className="textarea min-h-40"
              value={formData.abaExperienceSummary}
              onChange={(event) => setField('abaExperienceSummary', event.target.value.slice(0, 1500))}
              placeholder="Include examples of data-informed decision making, collaboration, and family-centered care..."
            />
            <div className="mt-1 flex items-center justify-between">
              {errors.abaExperienceSummary ? <p className="form-error">{errors.abaExperienceSummary}</p> : <span className="text-xs text-text-muted">Minimum 40 characters.</span>}
              <span className="text-xs text-text-muted">{formData.abaExperienceSummary.length}/1500</span>
            </div>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="space-y-6">
          <div className="rounded-2xl border border-border-light bg-bg-secondary p-5">
            <h3 className="mb-2 text-xl font-semibold text-primary">Application Checklist</h3>
            <ul className="mb-0 space-y-2 text-sm text-text-secondary">
              <li>Your contact details and role preferences are complete.</li>
              <li>Your credentials, ABA experience, and compliance readiness are included.</li>
              <li>Your availability and weekly commitment are accurate.</li>
              <li>Your written responses reflect your experience and care approach.</li>
            </ul>
          </div>

          <label className="checkbox-wrapper items-start rounded-xl border border-border-light bg-white p-4">
            <input
              type="checkbox"
              className="checkbox mt-1"
              checked={formData.attestInformationAccurate}
              onChange={(event) => setField('attestInformationAccurate', event.target.checked)}
            />
            <span className="text-sm leading-relaxed text-text-primary">
              I attest that the information provided in this application is true and complete to the
              best of my knowledge.
            </span>
          </label>
          {errors.attestInformationAccurate ? <p className="form-error">{errors.attestInformationAccurate}</p> : null}

          <label className="checkbox-wrapper items-start rounded-xl border border-border-light bg-white p-4">
            <input
              type="checkbox"
              className="checkbox mt-1"
              checked={formData.consentToContact}
              onChange={(event) => setField('consentToContact', event.target.checked)}
            />
            <span className="text-sm leading-relaxed text-text-primary">
              I consent to be contacted by Dakota Autism Center regarding this job application.
            </span>
          </label>
          {errors.consentToContact ? <p className="form-error">{errors.consentToContact}</p> : null}
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
          <button type="submit" disabled={isPending} className="btn btn-primary rounded-full disabled:opacity-60">
            {isPending ? (
              <>
                Submitting...
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                Submit Application
                <CheckCircle2 className="h-4 w-4" />
              </>
            )}
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
  type?: 'text' | 'email';
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
