'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FAQ from '@/components/FAQ';

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

const eidbisFaqItems = [
  {
    question: 'What does EIDBI stand for and who funds it?',
    answer: 'EIDBI stands for Early Intensive Developmental and Behavioral Intervention. It is a benefit funded by the Minnesota Department of Human Services (DHS) through the state\'s Medical Assistance programs — including Medical Assistance (MA), MinnesotaCare, TEFRA, and PMAP. It is not the same as private insurance; it is a state-funded benefit for qualifying Minnesota families.',
  },
  {
    question: 'How is EIDBI different from private insurance coverage for ABA therapy?',
    answer: 'EIDBI is a state Medicaid benefit available to families enrolled in Minnesota Health Care Programs. Private insurance is employer- or marketplace-based coverage. Both can fund ABA therapy, but they follow different authorization processes, billing codes, and documentation requirements. Some families qualify for both simultaneously, and our team helps you understand how to coordinate coverage effectively.',
  },
  {
    question: 'Does my child need an autism diagnosis to access EIDBI services?',
    answer: 'Yes. To qualify for EIDBI, your child must have a diagnosis of Autism Spectrum Disorder (ASD) or a related condition, be under 21 years old, and be enrolled in a qualifying Minnesota Health Care Program. A Comprehensive Multi-Disciplinary Evaluation (CMDE) is also required to determine medical necessity before services begin.',
  },
  {
    question: 'What is a CMDE and why is it required for EIDBI?',
    answer: 'A CMDE (Comprehensive Multi-Disciplinary Evaluation) is a thorough assessment conducted by qualified professionals to determine whether EIDBI services are medically necessary for your child. It evaluates your child\'s developmental strengths and needs across multiple domains and forms the clinical foundation for the Individual Treatment Plan (ITP). Dakota Autism Center\'s qualified team conducts CMDEs as part of our EIDBI intake process.',
  },
  {
    question: 'How do I apply for EIDBI services at Dakota Autism Center?',
    answer: 'The first step is to contact our intake team. We will verify your child\'s eligibility for EIDBI, confirm Medical Assistance enrollment, schedule the required CMDE evaluation, and guide you through the authorization process with Minnesota DHS. We handle all paperwork and follow up with the state on your behalf so the process moves as quickly as possible.',
  },
  {
    question: 'How long does the EIDBI authorization process typically take?',
    answer: 'Timelines vary depending on documentation readiness and DHS review periods, but most families can expect the process from initial contact to therapy start to take several weeks. The CMDE must be completed and reviewed before services are authorized. Our team works proactively to prevent delays — gathering documentation early and following up with DHS regularly.',
  },
  {
    question: 'Can my child receive EIDBI services at home, at school, and in the community?',
    answer: 'Yes. EIDBI is designed to be delivered across multiple settings — including your home, our center, your child\'s school, and community environments. The appropriate service settings are determined by your child\'s Individual Treatment Plan and what will best support skill generalization. We coordinate across these environments to ensure consistent goals and strategies wherever your child is learning.',
  },
  {
    question: 'Are there any changes to the EIDBI program I should know about for 2025–2026?',
    answer: 'Yes. Minnesota passed legislation in 2025 requiring all enrolled EIDBI agencies to obtain provisional licensure by May 31, 2026. Dakota Autism Center is actively navigating this process to ensure uninterrupted service for all families. Additionally, effective July 1, 2025, the Play Project and Early Social Interaction (ESI) modalities are no longer approved EIDBI treatment methods. We keep our treatment plans current with all DHS policy updates.',
  },
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
            src="/images/eidbi/hero-eidbi-therapy.webp"
            alt="Caregiver and child engaged in a play-based developmental activity with colorful building blocks"
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
              <Link href="/contact-us" className="btn-find-center w-full sm:w-auto bg-primary!">
                Check Eligibility
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                  <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                </span>
              </Link>
              <a href="#services" className="btn btn-tertiary btn-large w-full sm:w-auto rounded-full">
                View Services
              </a>
            </div>

            <div className="block lg:hidden relative -mx-(--space-lg) w-[calc(100%+var(--space-lg)*2)] h-[32vh] min-h-[220px] max-h-[360px] mt-8">
              <Image
                src="/images/eidbi/hero-eidbi-therapy.webp"
                alt="Caregiver and child engaged in a play-based developmental activity with colorful building blocks"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative lg:sticky lg:top-28"
            >
              <div className="relative rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[120px] md:rounded-br-[120px] overflow-hidden shadow-xl aspect-4/5 w-full min-h-[420px]">
                <Image
                  src="/images/eidbi/what-is-eidbi.webp"
                  alt="A clinician reading with a child during a developmental assessment, reviewing milestones together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-col gap-8"
            >
              <div>
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

              <div className="bg-[#F5F5F5] rounded-2xl p-6 lg:p-8 border border-border-light">
                <h3 className="text-xl font-bold text-dark mb-5 flex items-center gap-3">
                  <Icon icon="solar:clipboard-list-bold-duotone" className="w-7 h-7 text-secondary" />
                  Who is Eligible?
                </h3>
                <div className="space-y-3">
                  {eligibilityCriteria.map((criteria, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5 text-secondary font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-text-secondary font-medium text-sm">{criteria}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-border-light/50">
                  <p className="text-sm text-text-muted mb-3">
                    Not sure if you qualify? Our team can help verify your insurance and eligibility.
                  </p>
                  <Link href="/contact-us" className="text-primary font-bold hover:underline inline-flex items-center gap-1 text-sm">
                    Contact us for assistance <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section bg-[#F7FBF9]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-16">
            <div className="text-left">
              <span className="badge badge-info mb-4">Our EIDBI Services</span>
              <h2 className="text-dark mb-6">Comprehensive Support for Your Child&apos;s Journey</h2>
              <p className="body-large text-text-secondary">
                As an enrolled EIDBI provider, Dakota Autism Center offers the full range of services covered under the benefit, delivered with our signature warm and relationship-focused approach.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative rounded-3xl overflow-hidden shadow-lg border border-border-light h-[220px] sm:h-[280px]"
            >
              <Image
                src="/images/eidbi/eidbi-services-overview.webp"
                alt="Children engaged in a group play activity with toys, building communication and social skills together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </motion.div>
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
              <div className="relative h-[200px] rounded-2xl overflow-hidden mb-5">
                <Image
                  src="/images/eidbi/family-first-call.webp"
                  alt="A child's hands stacking colorful wooden blocks during a structured play-based learning activity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                EIDBI policy details can change. For the most current statewide rules, families can verify guidance with Minnesota DHS.
              </p>
              <Link href="/contact-us" className="btn btn-primary w-full justify-center rounded-full">
                Talk With Our Team
                <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white overflow-hidden">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[120px] md:rounded-br-[120px] overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/images/eidbi/why-choose-dakota.webp"
                alt="A father and child building together with colorful blocks in a warm, naturalistic home environment"
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
                  &quot;We believe therapy should be something children look forward to, not just something they do.&quot;
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

      <FAQ
        badge="EIDBI Questions"
        title="Frequently asked questions about EIDBI in Minnesota"
        subtitle="Clear answers to the questions families ask us most about Minnesota's EIDBI benefit, eligibility, and what to expect."
        items={eidbisFaqItems}
      />

      {/* Related Blog Article */}
      <section className="relative overflow-hidden border-b border-border-light bg-white">
        <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-tertiary/10 blur-3xl" />

        <div className="container-max relative py-14 md:py-16">
          <div className="mb-8 md:mb-10 max-w-2xl">
            <span className="badge badge-accent mb-3">Parent Resources</span>
            <h2 className="text-dark mb-3">Keep reading with our featured EIDBI guide</h2>
            <p className="text-text-secondary body-large mb-0">
              If you want a deeper breakdown of eligibility, funding, and what the first steps look like, this guide is the best place to start.
            </p>
          </div>

          <Link
            href="/blog/what-is-eidbi-minnesota-parent-guide"
            className="group grid gap-6 rounded-3xl border border-primary/20 bg-linear-to-br from-[#F6FCF9] via-white to-[#EEF6FF] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-xl no-underline"
          >
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full bg-[#E8F4F0] px-3 py-1 text-xs font-semibold text-primary">
                  Funding Navigation
                </span>
                <span className="inline-flex rounded-full bg-[#F4EEFF] px-3 py-1 text-xs font-semibold text-[#6843A3]">
                  Parent Guide
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold leading-tight text-dark transition-colors group-hover:text-primary mb-3">
                What Is EIDBI in Minnesota? A Complete Guide for Parents
              </h3>

              <p className="text-text-secondary text-base md:text-lg mb-5">
                Our in-depth guide explains eligibility, services, the CMDE process, and how to get started in clear, plain language.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                <span className="inline-flex items-center gap-1.5">
                  <Icon icon="solar:book-2-bold-duotone" className="h-4 w-4 text-primary" />
                  Long-form resource
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Icon icon="solar:calendar-mark-bold-duotone" className="h-4 w-4 text-primary" />
                  Updated for Minnesota families
                </span>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-white font-semibold shadow-lg shadow-primary/20 transition-all duration-300 group-hover:bg-primary-dark group-hover:gap-3">
              Read the guide
              <Icon icon="solar:arrow-right-linear" className="h-5 w-5 shrink-0" />
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative overflow-hidden text-white text-center bg-primary">

        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3 z-1" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/5 blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3 z-1" />

        <div className="container-max relative z-10">
          <h2 id="cta-heading" className="text-white! mb-6">Start Your EIDBI Journey</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Navigating state benefits can be complex. Let us help you understand your options and get your child the support they deserve.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-3 bg-white text-primary font-semibold py-2 pl-6 pr-2 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 group w-full sm:w-auto text-lg">
              Contact Us Today
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon icon="solar:arrow-right-broken" className="w-6 h-6" />
              </span>
            </Link>
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
