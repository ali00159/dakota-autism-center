'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';

const eidbiServices = [
  {
    title: 'Comprehensive Evaluation (CMDE)',
    description:
      "Our qualified professionals conduct a Comprehensive Multi-Disciplinary Evaluation to determine medical necessity and identify your child's unique strengths and needs.",
    icon: 'solar:clipboard-check-bold-duotone',
    bgClass: 'bg-primary/10',
    iconClass: 'text-primary',
  },
  {
    title: 'Individual Treatment Plan (ITP)',
    description:
      "We develop a personalized plan outlining specific goals for communication, social skills, and adaptive behaviors, tailored to your family's priorities.",
    icon: 'solar:document-add-bold-duotone',
    bgClass: 'bg-secondary/15',
    iconClass: 'text-[#FB9A31]',
  },
  {
    title: 'Adaptive Behavior Treatment',
    description:
      'Evidence-based ABA therapy provided 1:1 or in groups to build essential life skills and reduce challenging behaviors.',
    icon: 'solar:users-group-rounded-bold-duotone',
    bgClass: 'bg-tertiary/15',
    iconClass: 'text-tertiary',
  },
  {
    title: 'Family & Caregiver Training',
    description:
      "We empower you with strategies to support your child's growth at home, ensuring consistency and confidence for the whole family.",
    icon: 'solar:home-smile-bold-duotone',
    bgClass: 'bg-accent/10',
    iconClass: 'text-[#EA3D6A]',
  },
  {
    title: 'Coordinated Care',
    description:
      "We collaborate with schools, medical providers, and other support systems to ensure a unified approach to your child's development.",
    icon: 'solar:link-circle-bold-duotone',
    bgClass: 'bg-primary/10',
    iconClass: 'text-primary',
  },
  {
    title: 'Observation & Direction',
    description:
      'Our clinical supervisors regularly observe therapy sessions to monitor progress, ensure treatment fidelity, and make real-time program adjustments tailored to your child.',
    icon: 'solar:eye-bold-duotone',
    bgClass: 'bg-[#F0E6FF]',
    iconClass: 'text-[#7C3AED]',
  },
];

const eligibilityCriteria = [
  'Child has a diagnosis of ASD or a related condition',
  'Child is under the age of 21',
  'Enrolled in Medical Assistance (MA), TEFRA, MinnesotaCare, or PMAP',
  'Medical need determined via CMDE assessment',
];

const mnEidbiLandscape = [
  {
    title: 'Eligibility Window',
    detail: 'EIDBI is designed for children, youth, and young adults under age 21 with ASD or related conditions when medically necessary.',
    icon: 'solar:user-id-bold-duotone',
    tone: 'bg-primary/10 text-primary',
  },
  {
    title: 'Service Settings',
    detail: 'Across Minnesota, services may be delivered in-home, in clinic, at school, in community environments, and through telehealth when appropriate.',
    icon: 'solar:point-on-map-bold-duotone',
    tone: 'bg-tertiary/15 text-tertiary',
  },
  {
    title: 'Family-Centered Benefit',
    detail: 'The DHS benefit explicitly includes family education, coaching, and support to improve outcomes beyond therapy sessions.',
    icon: 'solar:heart-angle-bold-duotone',
    tone: 'bg-accent/10 text-accent',
  },
  {
    title: 'Current Licensing Shift',
    detail: 'Minnesota now requires provisional licensure for existing EIDBI agencies, with the current application deadline set for May 31, 2026.',
    icon: 'solar:shield-check-bold-duotone',
    tone: 'bg-secondary/15 text-[#FB9A31]',
  },
];

const providerComparison = [
  {
    focus: 'How goals are personalized',
    commonPattern: 'Many providers describe standard ABA tracks and broad age-group pathways.',
    dakotaApproach: "We pair EIDBI requirements with individualized goals shaped by your child's sensory, communication, and family priorities.",
  },
  {
    focus: 'Family training quality',
    commonPattern: 'Caregiver coaching is often offered, but depth and consistency can vary across programs.',
    dakotaApproach: 'Our clinicians build practical routines with caregivers so progress transfers to mornings, meals, play, and community outings.',
  },
  {
    focus: 'Cross-setting coordination',
    commonPattern: 'Coordination is listed on many sites, but execution can feel fragmented between teams.',
    dakotaApproach: 'We coordinate with schools and related providers to keep targets, data, and support strategies aligned.',
  },
  {
    focus: 'Therapy environment',
    commonPattern: 'Most providers emphasize either center-based structure or in-home convenience.',
    dakotaApproach: 'We prioritize relationship-based, naturalistic teaching so skills are learned in meaningful contexts, not just table work.',
  },
];

const familyActionChecklist = [
  'Ask how soon a CMDE can be scheduled and how authorization steps are handled.',
  'Request a sample of how treatment goals are written and updated over time.',
  'Confirm where services can occur (home, center, community, telehealth) for your child.',
  'Ask how parent/caregiver training is documented and practiced between sessions.',
];

export default function EidbiContent() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <main id="main-content" className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative border-b border-border-light overflow-hidden bg-white">
        <motion.div style={{ y: heroY }} className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 z-0 h-full">
          <Image
            src="/hero-image.png"
            alt="Therapist working with child in EIDBI program"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </motion.div>

        <div className="container-max relative z-10 py-10 md:py-12 lg:py-14">
          <div className="w-full lg:w-1/2 lg:pr-12 animate-fade-in-up">
            <span className="badge badge-primary mb-5">MN Health Care Program</span>
            <h1 className="hero-headline text-dark mb-5">
              <span className="text-primary">EIDBI Services:</span> Specialized Autism Support in Minnesota
            </h1>
            <p className="body-large text-text-secondary max-w-2xl mb-7">
              Early Intensive Developmental and Behavioral Intervention (EIDBI) is a state benefit providing medically necessary treatment for children and young adults with autism. At Dakota Autism Center, we turn this benefit into <span className="text-secondary font-semibold">meaningful progress</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn-find-center w-full sm:w-auto">
                Check Eligibility
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                  <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                </span>
              </a>
              <a href="#services" className="btn btn-tertiary btn-large w-full sm:w-auto rounded-full">
                View Services
              </a>
            </div>

            <div className="block lg:hidden relative -mx-(--space-lg) w-[calc(100%+var(--space-lg)*2)] h-[32vh] min-h-[220px] max-h-[360px] mt-8">
              <Image
                src="/hero-image.png"
                alt="Therapist working with child in EIDBI program"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>

        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[10%] w-[20%] h-[20%] bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* What is EIDBI Section */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <span className="badge badge-secondary mb-4">About The Program</span>
              <h2 className="text-dark mb-6">What is EIDBI?</h2>
              <div className="prose prose-lg text-text-secondary">
                <p className="mb-4">
                  EIDBI stands for <strong>Early Intensive Developmental and Behavioral Intervention</strong>. It is a Minnesota Department of Human Services (DHS) benefit designed to provide medically necessary treatment for people under age 21 with Autism Spectrum Disorder (ASD) and related conditions.
                </p>
                <p>
                  The goal of EIDBI is to educate, train, and support parents and families while promoting children's independence and participation in their communities. It focuses on:
                </p>
                <ul className="list-none space-y-3 mt-4">
                  {[
                    'Social communication and interaction',
                    'Emotional regulation and behavioral health',
                    'Adaptive and self-care skills',
                    'Cognitive and play skills'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 bg-[#F5F5F5] rounded-2xl p-8 lg:p-10 border border-border-light">
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
                <Icon icon="solar:clipboard-list-bold-duotone" className="w-8 h-8 text-secondary" />
                Who is Eligible?
              </h3>
              <ul className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5 text-secondary font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-text-secondary font-medium">{criteria}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border-light/50">
                <p className="text-sm text-text-muted mb-4">
                  Not sure if you qualify? Our team can help verify your insurance and eligibility.
                </p>
                <a href="#" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
                  Contact us for assistance <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section bg-[#F7FBF9]">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-info mb-4">Our EIDBI Services</span>
            <h2 className="text-dark mb-6">Comprehensive Support for Your Child's Journey</h2>
            <p className="body-large text-text-secondary">
              As an enrolled EIDBI provider, Dakota Autism Center offers the full range of services covered under the benefit, delivered with our signature warm and relationship-focused approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eidbiServices.map((service) => (
              <article key={service.title} className="bg-white rounded-2xl overflow-hidden border border-border-light shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className={`w-full ${service.bgClass} px-8 pt-6 pb-5`}>
                  <div className={`w-14 h-14 rounded-xl bg-white/60 ${service.iconClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon icon={service.icon} className="w-7 h-7" />
                  </div>
                </div>
                <div className="px-8 pt-5 pb-8">
                  <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Minnesota EIDBI Landscape + Comparison */}
      <section className="section relative bg-white overflow-hidden">
        <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 right-0 w-72 h-72 rounded-full bg-tertiary/10 blur-3xl pointer-events-none" />

        <div className="container-max relative">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="badge badge-primary mb-4">Minnesota EIDBI Insights</span>
            <h2 className="text-dark mb-5">A clearer view of Minnesota options for families</h2>
            <p className="body-large text-text-secondary mb-0">
              We reviewed current Minnesota DHS guidance and the messaging families commonly see across EIDBI providers to make decision-making easier and more transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 lg:mb-14">
            {mnEidbiLandscape.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border-light bg-white shadow-sm hover:shadow-md transition-all duration-300 px-6 py-7"
              >
                <div className={`w-12 h-12 rounded-xl ${item.tone} flex items-center justify-center mb-4`}>
                  <Icon icon={item.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary mb-0">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8 rounded-3xl border border-border-light bg-[#FCFDFC] p-6 md:p-8 lg:p-10 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="badge badge-info mb-3">Competitor Analysis</span>
                  <h3 className="text-dark mb-2">What families should compare before choosing a provider</h3>
                  <p className="text-text-secondary mb-0">
                    Across Minnesota, many agencies offer similar service lists. The biggest difference is how consistently care is personalized and coordinated.
                  </p>
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-xl bg-[#E5F4FC] text-tertiary items-center justify-center shrink-0">
                  <Icon icon="solar:chart-square-bold-duotone" className="w-7 h-7" />
                </div>
              </div>

              <div className="space-y-4">
                {providerComparison.map((row) => (
                  <article
                    key={row.focus}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl border border-border-light bg-white p-5"
                  >
                    <div>
                      <p className="text-sm font-bold text-dark mb-1">{row.focus}</p>
                    </div>
                    <div className="rounded-xl bg-[#F5F5F5] p-4">
                      <p className="text-xs uppercase tracking-wide text-text-muted font-semibold mb-2">Common market pattern</p>
                      <p className="text-sm text-text-secondary mb-0">{row.commonPattern}</p>
                    </div>
                    <div className="rounded-xl bg-primary/10 p-4 border border-primary/15">
                      <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">Dakota approach</p>
                      <p className="text-sm text-dark mb-0">{row.dakotaApproach}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 rounded-3xl border border-border-light bg-[#FEF3E8] p-6 md:p-8 shadow-sm">
              <span className="badge badge-secondary mb-3">Family Action Checklist</span>
              <h3 className="text-dark mb-4">Questions to ask on your first call</h3>
              <ul className="space-y-4 mb-7">
                {familyActionChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white border border-secondary/30 text-[#FB9A31] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon icon="solar:check-circle-bold" className="w-4 h-4" />
                    </span>
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                EIDBI policy details can change. For the most current statewide rules, families can verify guidance with Minnesota DHS.
              </p>
              <a href="#" className="btn btn-primary w-full justify-center rounded-full">
                Talk With Our Team
                <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white overflow-hidden">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/homepage-about-us-image.jpeg"
                alt="Dakota Autism Center facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon="solar:star-bold" className="w-5 h-5 text-secondary" />
                  <span className="font-bold tracking-wide uppercase text-sm">The Dakota Difference</span>
                </div>
                <p className="text-xl font-medium">
                  "We believe therapy should be something children look forward to, not just something they do."
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="badge badge-accent mb-4">Why Choose Us</span>
              <h2 className="text-dark mb-6">More than just a provider</h2>
              <p className="body-large text-text-secondary mb-8">
                While many agencies provide EIDBI services, Dakota Autism Center distinguishes itself through a holistic, nature-inspired philosophy that prioritizes the emotional well-being of the child and the family unit.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F4F0] flex items-center justify-center text-primary shrink-0">
                    <Icon icon="solar:heart-bold-duotone" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-1">Compassionate, Skilled Team</h4>
                    <p className="text-text-secondary text-sm">Our staff are not just qualified; they are chosen for their empathy, patience, and dedication to child development.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FEF3E8] flex items-center justify-center text-secondary shrink-0">
                    <Icon icon="solar:leaf-bold-duotone" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-1">Naturalistic Environment</h4>
                    <p className="text-text-secondary text-sm">We use natural teaching strategies in a setting that feels like a community, not a clinic.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E5F4FC] flex items-center justify-center text-tertiary shrink-0">
                    <Icon icon="solar:users-group-two-rounded-bold-duotone" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-1">Parent Partnership</h4>
                    <p className="text-text-secondary text-sm">We view parents as the experts on their children and work side-by-side with you every step of the way.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white text-center">
        <div className="container-max">
          <h2 id="cta-heading" className="text-white! mb-6">Start Your EIDBI Journey</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Navigating state benefits can be complex. Let us help you understand your options and get your child the support they deserve.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#" className="inline-flex items-center justify-center gap-3 bg-white text-primary font-semibold py-2 pl-6 pr-2 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 group w-full sm:w-auto text-lg">
              Contact Us Today
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon icon="solar:arrow-right-broken" className="w-6 h-6" />
              </span>
            </a>
            <a
              href="tel:612-284-5382"
              className="relative text-white font-bold text-lg inline-flex items-center gap-2 pb-1 group/call"
            >
              <Icon icon="solar:phone-linear" className="w-5 h-5" />
              (612) 284-5382
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-white rounded-full transition-all duration-300 ease-out group-hover/call:w-full" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
