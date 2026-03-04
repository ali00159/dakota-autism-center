import Link from 'next/link';
import { Icon } from '@iconify/react';
import { ShieldCheck, FileText, Users, HeartHandshake, MapPin } from 'lucide-react';
import InsuranceProvidersSection from './InsuranceProvidersSection';
import FAQ from '@/components/FAQ';

const marketPatterns = [
  {
    focus: 'Insurance pages usually emphasize',
    commonPattern:
      'A list of accepted plans and a general instruction to call the insurance carrier for details.',
    dakotaDifference:
      'A guided verification workflow with plain-language explanations, billing code support, and a family-specific next-step plan.',
  },
  {
    focus: 'Funding support usually includes',
    commonPattern:
      'Broad mention of EIDBI or public programs with limited operational detail.',
    dakotaDifference:
      'A step-by-step roadmap for documentation, timeline expectations, and coordination with your child’s clinical priorities.',
  },
  {
    focus: 'Cultural responsiveness is usually',
    commonPattern:
      'Implied but not clearly operationalized in financial navigation or care planning language.',
    dakotaDifference:
      'Explicit support for language preference, family values, and culturally aligned communication throughout authorization and treatment planning.',
  },
];

const culturalPillars = [
  {
    title: 'Language-Respectful Communication',
    description:
      'We adapt explanations to your preferred communication style and avoid billing jargon that creates confusion.',
    icon: 'solar:translation-2-bold-duotone',
    bg: 'bg-[#F3FBF8]',
  },
  {
    title: 'Family Values in Goal Design',
    description:
      'Treatment priorities are co-developed with caregivers so goals reflect daily life, identity, and routines that matter most.',
    icon: 'solar:users-group-two-rounded-bold-duotone',
    bg: 'bg-[#FFF5EC]',
  },
  {
    title: 'Trust-Centered Onboarding',
    description:
      'Our process is paced with empathy, giving families time to ask questions and understand each decision point with confidence.',
    icon: 'solar:heart-angle-bold-duotone',
    bg: 'bg-[#EEF8FF]',
  },
  {
    title: 'Cross-Setting Alignment',
    description:
      'Insurance and treatment choices are aligned with home, school, and community realities to reduce disruption and improve consistency.',
    icon: 'solar:route-bold-duotone',
    bg: 'bg-[#F8F1FF]',
  },
];

const journeySteps = [
  {
    id: 'verify',
    number: '01',
    title: 'Free Benefits Check',
    description:
      'Share your insurance information with us. Our team verifies your ABA therapy coverage, copays, deductibles, and out-of-pocket maximums within 24 hours.',
    icon: ShieldCheck,
    color: '#115C47',
    bgColor: '#E8F4F0',
  },
  {
    id: 'authorize',
    number: '02',
    title: 'Prior Authorization',
    description:
      'We handle all paperwork and communication with your insurance provider. Our experienced team navigates authorization requirements to minimize delays.',
    icon: FileText,
    color: '#42AEEB',
    bgColor: '#E5F4FC',
  },
  {
    id: 'evaluate',
    number: '03',
    title: 'Assessment & Plan',
    description:
      'After authorization, we conduct a comprehensive evaluation and create a personalized treatment plan that aligns with your insurance coverage.',
    icon: Users,
    color: '#FB9A31',
    bgColor: '#FEF3E8',
  },
  {
    id: 'begin',
    number: '04',
    title: 'Begin Therapy',
    description:
      "Start your child's ABA therapy journey with continuous support. We handle ongoing authorization renewals and progress reporting to insurance.",
    icon: HeartHandshake,
    color: '#EA3D6A',
    bgColor: '#FDE8EE',
  },
];

const fundingSteps = [
  'Share your current insurance card and, if applicable, Medical Assistance details.',
  'Receive a personalized coverage summary with expected authorization requirements.',
  'Review culturally aligned treatment priorities with our clinical intake team.',
  'Start care with a coordinated funding and clinical support plan.',
];

const faqs = [
  {
    q: 'What insurance plans do you accept for ABA therapy in Minnesota?',
    a: 'Coverage options vary by plan and network. Our team verifies eligibility and authorization details with you before services begin so you have clear expectations.',
  },
  {
    q: 'Can Dakota Autism Center help with EIDBI funding navigation?',
    a: 'Yes. We help families understand EIDBI requirements, documentation pathways, and how EIDBI can align with a child-specific treatment plan.',
  },
  {
    q: 'How does cultural competence affect funding and treatment planning?',
    a: 'Cultural competence improves clarity, trust, and follow-through. We incorporate language preference, caregiver priorities, and family context when discussing both financing and care goals.',
  },
  {
    q: 'What if my insurance changes after therapy starts?',
    a: 'We proactively review transition options and discuss alternate pathways so families can protect treatment continuity whenever possible.',
  },
  {
    q: 'Does my child need an official autism diagnosis before insurance will cover ABA therapy?',
    a: 'Yes. Most insurance plans in Minnesota require a formal ASD diagnosis from a licensed professional — such as a developmental pediatrician, psychologist, or neurologist — before authorizing ABA therapy. If your child does not yet have a diagnosis, our intake team can point you toward evaluation resources.',
  },
  {
    q: 'How long does the prior authorization process take in Minnesota?',
    a: 'Timelines vary by insurer, but most prior authorizations are resolved within 5–15 business days once complete documentation is submitted. Our team handles all paperwork and follows up with your insurer directly to minimize delays so therapy can begin as quickly as possible.',
  },
  {
    q: 'What happens if my insurance denies coverage for ABA therapy?',
    a: 'A denial is not the end of the road. We help families understand the reason for denial, gather additional clinical documentation, and file appeals on your behalf when appropriate. We also explore alternate funding pathways — including EIDBI, Medical Assistance, and Minnesota\'s autism insurance mandate protections — to keep your child\'s care on track.',
  },
  {
    q: 'What is the difference between EIDBI and private insurance coverage for ABA therapy?',
    a: 'EIDBI is a Minnesota Department of Human Services benefit available to families enrolled in Medical Assistance (Medicaid) programs such as MA, MinnesotaCare, or PMAP. Private insurance is employer- or marketplace-based coverage. Some families can access both simultaneously depending on their situation. Our team clarifies which programs apply to your family and helps you maximize your available benefits.',
  },
];

export default function InsuranceFundingContent() {
  return (
    <main id="main-content" className="w-full bg-white">
      <section className="border-b border-border-light bg-white">
        <div className="container-max py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-primary mb-4">Insurance + Funding Clarity</span>
            <h1 className="hero-headline text-dark mb-5">
              Insurance and Funding for Autism Therapy in Minnesota
            </h1>
            <p className="body-large text-text-secondary max-w-3xl mx-auto mb-8">
              Navigating autism therapy insurance and funding can feel overwhelming. This page gives Minnesota families a clear, culturally respectful roadmap for private insurance, EIDBI, and related funding options so you can move forward with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="btn-find-center w-full sm:w-auto bg-tertiary!">
                Verify My Coverage
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                </span>
              </Link>
              <a href="#funding-pathways" className="btn btn-tertiary btn-large w-full sm:w-auto rounded-full">
                Explore Funding Options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="section bg-[#F7FAF8]">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#115C47]/10 text-[#115C47] text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              Your Journey to Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#474044] mb-4">
              Four Steps to <span className="text-[#115C47]">Stress-Free Coverage</span>
            </h2>
            <p className="text-lg text-[#6B6569]">
              We guide you through every step, handling paperwork and insurance communication so you can focus on what matters most.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-[#115C47] via-[#42AEEB] to-[#EA3D6A] rounded-full -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {journeySteps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <div key={step.id} className="relative group">
                    <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                      {/* Step Number Badge */}
                      <div
                        className="absolute -top-4 left-6 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mt-4"
                        style={{ backgroundColor: step.bgColor }}
                      >
                        <StepIcon className="w-8 h-8" style={{ color: step.color }} />
                      </div>

                      <h3 className="text-xl font-bold text-[#474044] mb-3">{step.title}</h3>
                      <p className="text-[#6B6569] leading-relaxed text-sm">{step.description}</p>

                      {/* Connector Dot - Desktop */}
                      <div
                        className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 rounded-full border-4 border-white shadow-md z-10 -translate-y-1/2"
                        style={{ backgroundColor: step.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Providers */}
      <InsuranceProvidersSection />

      <section className="section bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 rounded-3xl border border-border-light bg-[#FCFDFC] p-6 md:p-8 lg:p-10 shadow-sm">
              <span className="badge badge-secondary mb-4">Competitor Analysis</span>
              <h2 className="text-dark mb-3">What others do and how Dakota is different</h2>
              <p className="text-text-secondary mb-7">
                Across insurance and funding pages we reviewed, providers commonly list accepted plans and direct families back to payers. Dakota takes a more guided and culturally responsive approach.
              </p>
              <div className="space-y-4">
                {marketPatterns.map((row) => (
                  <article key={row.focus} className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl border border-border-light bg-white p-4">
                    <div className="rounded-xl bg-[#F5F5F5] p-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-text-muted">{row.focus}</p>
                      <p className="mb-0 text-sm text-text-secondary">{row.commonPattern}</p>
                    </div>
                    <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">Dakota difference</p>
                      <p className="mb-0 text-sm text-dark">{row.dakotaDifference}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5 rounded-3xl border border-border-light bg-[#FEF3E8] p-6 md:p-8 shadow-sm">
              <span className="badge badge-accent mb-3">Related Service Links</span>
              <h3 className="text-dark mb-4">Build your full support plan</h3>
              <div className="space-y-3">
                <Link href="/eidbi" className="block rounded-xl bg-white px-4 py-3 text-dark font-semibold hover:bg-primary-light/30 transition-colors">
                  EIDBI Services
                </Link>
                <Link href="/center-based-aba-therapy" className="block rounded-xl bg-white px-4 py-3 text-dark font-semibold hover:bg-primary-light/30 transition-colors">
                  Center-Based ABA Therapy
                </Link>
                <Link href="/in-home-aba-therapy" className="block rounded-xl bg-white px-4 py-3 text-dark font-semibold hover:bg-primary-light/30 transition-colors">
                  In-Home ABA Therapy
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-[#F8FBFA]">
        <div className="container-max">
          <div className="section-header">
            <span className="badge badge-primary mb-4">Cultural Competence in Action</span>
            <h2 className="text-dark mb-4">How our funding support stays culturally responsive</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto mb-0">
              Financial navigation is part of care quality. We treat communication, trust, and family context as essential clinical infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturalPillars.map((pillar) => (
              <article key={pillar.title} className={`rounded-2xl border border-border-light p-6 ${pillar.bg}`}>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <Icon icon={pillar.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{pillar.title}</h3>
                <p className="text-text-secondary mb-0">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-6 rounded-3xl border border-border-light bg-[#FCFDFC] p-6 md:p-8 shadow-sm">
              <h2 className="text-dark mb-3">What to prepare for coverage verification</h2>
              <p className="text-text-secondary mb-5">
                These details help us move faster and reduce delays in authorizations.
              </p>
              <ul className="space-y-3 mb-0">
                {[
                  'Insurance member ID and payer contact info',
                  'Current diagnosis documentation (if available)',
                  'Previous therapy authorization notes (if any)',
                  'Preferred communication language and caregiver priorities',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon icon="solar:check-circle-bold" className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-relaxed text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 rounded-3xl border border-border-light bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-dark mb-5">Funding-to-care timeline</h2>
              <ol className="space-y-4">
                {fundingSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4 rounded-xl border border-border-light bg-gray-25 p-4">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-text-secondary text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        badge="FAQ"
        title="Insurance and funding questions families ask most"
        subtitle="Helpful answers about autism therapy insurance and funding in Minnesota."
        items={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        sectionClassName="bg-white border-t border-border-light"
      />

      <section className="section bg-primary text-white text-center">
        <div className="container-max">
          <h2 className="text-white! mb-5">Need help choosing the right funding path?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-white/90 text-lg">
            We help families understand benefits, reduce financial uncertainty, and begin culturally responsive ABA care with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-lg font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl">
              Schedule a Coverage Call
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                <Icon icon="solar:arrow-right-broken" className="h-6 w-6" />
              </span>
            </Link>
            <a href="tel:612-284-5382" className="inline-flex items-center gap-2 text-lg font-bold text-white">
              <Icon icon="solar:phone-linear" className="h-5 w-5" />
              (612) 284-5382
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
