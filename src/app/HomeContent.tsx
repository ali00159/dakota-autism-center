'use client';

import * as React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Compass, GitCompareArrows, CalendarCheck } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

/* ───────────────────────────── Data ───────────────────────────── */

interface TabContent {
  id: string;
  label: string;
  icon: React.ElementType;
  headline: string;
  body: string;
  primaryBtn: string;
  primaryHref: string;
  secondaryBtn: string;
  secondaryHref: string;
  accent: string;
  accentHex: string;
  btnClass: string;
  outlineClass: string;
}

const tabs: TabContent[] = [
  {
    id: 'new-to-autism',
    label: 'New to Autism?',
    icon: Compass,
    headline: "Understanding Your Child's Diagnosis",
    body: "Just received a diagnosis or concerned about your child? You're not alone. We'll help you understand what autism means, how ABA therapy works, and what the next steps look like for your family.",
    primaryBtn: 'Learn About Autism & ABA',
    primaryHref: '/resources',
    secondaryBtn: 'What to Expect',
    secondaryHref: '/about',
    accent: 'bg-[#115C47]',
    accentHex: '#115C47',
    btnClass: 'bg-[#115C47] hover:bg-[#0E4A38] active:bg-[#0A3829] text-white',
    outlineClass: 'border-[#115C47] text-[#115C47] hover:bg-[#E8F4F0]',
  },
  {
    id: 'exploring-aba',
    label: 'Exploring Programs?',
    icon: GitCompareArrows,
    headline: 'Find the Right Therapy for Your Family',
    body: "Researching the best therapy options for your family? Explore our range of evidence-based ABA programs — from early intervention to social skills groups — and discover which approach fits your child's unique needs.",
    primaryBtn: 'Compare Our Services',
    primaryHref: '/services',
    secondaryBtn: 'Insurance & Funding',
    secondaryHref: '/insurance',
    accent: 'bg-[#42AEEB]',
    accentHex: '#42AEEB',
    btnClass: 'bg-[#42AEEB] hover:bg-[#2B9ADB] active:bg-[#1F8BCC] text-white',
    outlineClass: 'border-[#42AEEB] text-[#42AEEB] hover:bg-[#EAF6FD]',
  },
  {
    id: 'ready-to-start',
    label: 'Ready to Start?',
    icon: CalendarCheck,
    headline: "Let's Begin Your Child's Journey",
    body: "Know what you need and ready to move forward? Schedule a free consultation with our team. We'll walk you through enrollment, insurance verification, and create a personalized plan for your child.",
    primaryBtn: 'Schedule Consultation',
    primaryHref: '/contact',
    secondaryBtn: 'Call Us Now',
    secondaryHref: '/contact',
    accent: 'bg-[#FB9A31]',
    accentHex: '#FB9A31',
    btnClass: 'bg-[#FB9A31] hover:bg-[#E8882B] active:bg-[#D47725] text-white',
    outlineClass: 'border-[#FB9A31] text-[#FB9A31] hover:bg-[#FEF3E8]',
  },
];

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  accentHex: string;
  lightBg: string;
  textColor: string;
  iconColor: string;
  bulletBg: string;
}

const services: ServiceItem[] = [
  {
    id: 'center-based',
    title: 'Center-Based ABA Therapy',
    description:
      'Our center provides a school-like environment where children build skills through structured routines, peer interaction, and group activities.',
    bullets: [
      'School-like environment',
      'Peer interaction & group skills',
      'Structured routines',
    ],
    icon: 'solar:buildings-bold-duotone',
    accentHex: '#115C47',
    lightBg: '#E8F4F0',
    textColor: '#FFFFFF',
    iconColor: '#FFFFFF',
    bulletBg: 'rgba(0, 0, 0, 0.15)',
  },
  {
    id: 'in-home',
    title: 'In-Home ABA Therapy',
    description:
      'Therapy takes place in the comfort of your home, focusing on real-world skill building with flexible scheduling for busy families.',
    bullets: [
      'Natural environment learning',
      'Flexible scheduling',
      'Real-world skill building',
    ],
    icon: 'solar:home-smile-bold-duotone',
    accentHex: '#E0F2FE',
    lightBg: '#E5F4FC',
    textColor: '#1F2937',
    iconColor: '#0284C7',
    bulletBg: 'rgba(255, 255, 255, 0.6)',
  },
  {
    id: 'family-training',
    title: 'Family Training & Support',
    description:
      "We coach you with strategies you can use every day — because lasting progress happens when the whole family is part of the journey.",
    bullets: [
      'Coaching for lasting success',
      'Everyday strategies',
      'Partnership approach',
    ],
    icon: 'solar:users-group-rounded-bold-duotone',
    accentHex: '#FB9A31',
    lightBg: '#FEF3E8',
    textColor: '#FFFFFF',
    iconColor: '#FFFFFF',
    bulletBg: 'rgba(0, 0, 0, 0.1)',
  },
  {
    id: 'eidbi',
    title: 'EIDBI — Early Intervention',
    description:
      'Comprehensive early intervention for children ages 0–6, covered by Medical Assistance. Intensive support during critical years.',
    bullets: [
      'Comprehensive intervention',
      'Medical Assistance coverage',
      'Support for ages 0–6',
    ],
    icon: 'solar:heart-pulse-bold-duotone',
    accentHex: '#EA3D6A',
    lightBg: '#FDE8EE',
    textColor: '#FFFFFF',
    iconColor: '#FFFFFF',
    bulletBg: 'rgba(0, 0, 0, 0.1)',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
} as const;

const testimonials = [
  {
    quote:
      'The calm, thoughtful rhythm of the day makes such a difference. My daughter comes home smiling — and so do we.',
    author: 'Maja & Ariel',
    role: 'Parent of Emily',
  },
  {
    quote:
      'The calm, thoughtful rhythm of the day makes such a difference. My daughter comes home smiling — and so do we.',
    author: 'Emily R.',
    role: 'Parent of Emily',
  },
  {
    quote:
      'The calm, thoughtful rhythm of the day makes such a difference. My daughter comes home smiling — and so do we.',
    author: 'Maja & Ariel',
    role: 'Parent of Emily',
  },
  {
    quote:
      'The calm, thoughtful rhythm of the day makes such a difference. My daughter comes home smiling — and so do we.',
    author: 'Emily R.',
    role: 'Parent of Emily',
  },
];

const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];

const principles = [
  { text: 'Natural Growth', color: '#115C47' },
  { text: 'Family Partnership', color: '#FB9A31' },
  { text: 'Calm Discovery', color: '#42AEEB' },
  { text: 'Kindness First', color: '#EA3D6A' },
];

/* ───────────────────────────── Component ───────────────────────── */

export default function HomeContent() {
  const [activeTab, setActiveTab] = React.useState<string>(tabs[0].id);
  const activeContent = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <main id="main-content" className="w-full overflow-hidden">
      {/* ────────────────── 1. Hero ────────────────── */}
      <section
        className="relative w-full min-h-[calc(100vh-150px)] bg-white overflow-hidden border-b border-border-light"
        aria-labelledby="hero-heading"
      >
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] z-0 h-full">
          <Image
            src="/hero-image.png"
            alt="Therapist working with a child in a supportive environment"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>

        <div className="container-max relative z-10 h-full flex flex-col justify-end flex-1 py-12 lg:pb-16 lg:min-h-[calc(100vh-150px)]">
          <div className="w-full lg:w-[50%] lg:pr-12 text-center md:text-left">
            <div className="animate-fade-in-up">
              <h1
                id="hero-heading"
                className="hero-headline mb-6 stagger-1 relative"
              >
                Supporting Your Child&apos;s Unique Journey:{' '}
                <span className="text-secondary relative inline-block">
                  Evidence-Based
                </span>{' '}
                Care for Autism
              </h1>

              <p className="body-large text-text-secondary mb-10 max-w-2xl mx-auto md:mx-0 stagger-2 leading-relaxed">
                Personalized therapy, skill development, and family support in a
                calm, nurturing environment designed for growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-5 mb-12 stagger-3">
                <a
                  href="#contact"
                  className="btn-find-center w-full sm:w-auto group"
                >
                  Connect with Our Team
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/20">
                    <Icon icon="solar:phone-bold" className="w-6 h-6" />
                  </span>
                </a>
                <a
                  href="#services"
                  className="nav-link font-semibold text-lg ml-4"
                >
                  Our Services
                </a>
              </div>

              <div className="block lg:hidden relative -mx-(--space-lg) w-[calc(100%+var(--space-lg)*2)] h-[40vh] min-h-[280px] my-8">
                <Image
                  src="/hero-image.png"
                  alt="Therapist working with a child in a supportive environment"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-8 lg:gap-16 stagger-4 border-t border-gray-100 pt-8 mt-4">
                <div className="text-center md:text-left">
                  <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                    <Icon
                      icon="solar:shield-check-bold"
                      className="w-4 h-4"
                    />
                    Top insurance accepted
                  </p>
                  <div className="flex items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="font-bold text-xl text-dark">aetna</span>
                    <span className="font-bold text-xl text-dark">Cigna</span>
                    <span className="font-bold text-xl text-dark">BCBS</span>
                    <span className="font-bold text-xl text-dark">UHC</span>
                  </div>
                </div>

                <div className="text-center md:text-left border-l-0 sm:border-l border-gray-200 sm:pl-8">
                  <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                    <Icon
                      icon="solar:users-group-rounded-bold"
                      className="w-4 h-4"
                    />
                    Trusted by families
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Icon
                          key={i}
                          icon="solar:star-bold"
                          className="w-5 h-5 text-[#FB9A31]"
                        />
                      ))}
                    </div>
                    <div className="flex flex-col items-start leading-none">
                      <span className="font-bold text-dark text-lg">
                        4.9/5
                      </span>
                      <span className="text-xs text-secondary font-medium">
                        150+ reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[10%] w-[20%] h-[20%] bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* ────────────────── 2. Path Navigation ────────────────── */}
      <section className="section relative w-full bg-white overflow-hidden">
        <div className="container-max section-header relative z-10">
          <span className="badge badge-primary mb-4 inline-block px-4 py-1.5 text-xs tracking-wider uppercase font-semibold">
            Path Navigation
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-[1.15] tracking-tight">
            Where Would You Like to Start?
          </h2>
        </div>

        <div className="flex justify-center mb-8 md:mb-12 lg:mb-16 relative z-10">
          <div
            className={cn(
              'relative flex flex-col w-full max-w-sm gap-2 p-2 bg-white rounded-2xl border-2 border-[#474044]/15 shadow-sm',
              'md:inline-flex md:flex-row md:flex-wrap md:justify-center md:items-center md:w-auto md:max-w-none md:gap-1 md:rounded-full'
            )}
          >
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'relative flex items-center gap-2.5 px-4 py-3 md:px-6 md:py-3.5 lg:px-8 lg:py-4 rounded-xl md:rounded-full text-sm md:text-base lg:text-lg font-medium transition-colors duration-300 z-10 w-full md:w-auto justify-start md:justify-center',
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-[#474044] hover:text-[#115C47]'
                  )}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="active-pill"
                      className={cn(
                        'absolute inset-0 rounded-xl md:rounded-full -z-10 shadow-md',
                        tab.accent
                      )}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <TabIcon
                    className="w-5 h-5 shrink-0"
                    strokeWidth={1.75}
                  />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="container-max flex flex-col items-center text-center relative z-10 min-h-0 md:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="max-w-[800px] mx-auto flex flex-col items-center"
            >
              <h3
                className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 leading-[1.15] tracking-tight"
                style={{ color: activeContent.accentHex }}
              >
                {activeContent.headline}
              </h3>

              <p className="text-base md:text-lg lg:text-xl text-gray-500 mb-6 md:mb-10 max-w-2xl leading-relaxed font-light">
                {activeContent.body}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto mt-1 md:mt-2">
                <button
                  className={cn(
                    'btn btn-large rounded-full w-full sm:w-auto',
                    activeContent.btnClass
                  )}
                >
                  {activeContent.primaryBtn}
                  <Icon
                    icon="solar:arrow-right-broken"
                    width={18}
                    height={18}
                    className="shrink-0"
                  />
                </button>
                <button
                  className={cn(
                    'btn btn-large rounded-full w-full sm:w-auto bg-transparent border-[1.5px]',
                    activeContent.outlineClass
                  )}
                >
                  {activeContent.secondaryBtn}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[20%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-primary/3 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-[10%] right-[20%] w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-secondary/3 rounded-full blur-3xl opacity-60" />
        </div>
      </section>

      {/* ────────────────── 3. Services Overview ────────────────── */}
      <section
        id="services"
        className="section relative w-full overflow-hidden rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[160px] md:rounded-br-[160px] bg-bg-services"
        aria-labelledby="services-heading"
      >
        <div className="container-max section-header relative z-10">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight mb-4 text-dark"
          >
            <span className="text-tertiary">Flexible ABA Therapy</span> That
            Fits Your Family
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We offer a range of evidence-based programs designed to meet your
            child where they are — at home, at our center, at school, or through
            family coaching.
          </p>
        </div>

        <motion.div
          className="container-max grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -4,
                boxShadow: '0 8px 32px rgba(71, 64, 68, 0.16)',
              }}
              transition={{ duration: 0.3, ease: 'easeOut' as const }}
              className="group relative rounded-2xl overflow-hidden shadow-md flex flex-col h-full will-change-transform"
              style={{ backgroundColor: service.accentHex }}
            >
              <div className="p-6 lg:p-8 flex flex-col h-full items-center text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm"
                  style={{
                    backgroundColor:
                      service.textColor === '#FFFFFF'
                        ? 'rgba(255,255,255,0.2)'
                        : 'rgba(255,255,255,0.8)',
                    color: service.iconColor,
                  }}
                >
                  <Icon icon={service.icon} width={24} height={24} />
                </div>

                <h3
                  className="text-xl lg:text-2xl font-bold mb-3 tracking-tight"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    color: service.textColor,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-[15px] leading-relaxed mb-6 font-medium"
                  style={{ color: service.textColor, opacity: 0.9 }}
                >
                  {service.description}
                </p>

                <ul className="space-y-3 mt-auto w-full text-left">
                  {service.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 px-4 py-3 rounded-full"
                      style={{
                        backgroundColor:
                          service.textColor === '#FFFFFF'
                            ? 'rgba(255, 255, 255, 0.15)'
                            : 'rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      <Icon
                        icon="solar:check-circle-bold"
                        className="w-6 h-6 shrink-0"
                        style={{ color: service.textColor }}
                      />
                      <span
                        className="text-base lg:text-lg leading-snug font-medium"
                        style={{ color: service.textColor }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="container-max text-center mt-10 lg:mt-14 relative z-10">
          <button className="btn btn-primary btn-large rounded-full shadow-lg hover:shadow-xl bg-[#474044]! text-white! hover:bg-[#2d292b]! hover:-translate-y-1 transition-all duration-300">
            Learn About All Our Services
            <Icon
              icon="solar:arrow-right-broken"
              width={18}
              height={18}
              className="shrink-0"
            />
          </button>
        </div>
      </section>

      {/* ────────────────── 4. About Section ────────────────── */}
      <section className="section py-20 md:py-32 lg:py-40 relative w-full overflow-hidden bg-white rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[160px] md:rounded-br-[160px]">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative h-full"
            >
              <div className="relative rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[120px] md:rounded-br-[120px] overflow-hidden shadow-xl aspect-4/5 w-full h-full min-h-[500px]">
                <Image
                  src="/homepage-about-us-image.jpeg"
                  alt="Childhood moments at Dakota Autism Center"
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
              className="flex flex-col items-start py-8 lg:py-12"
            >
              <span className="badge badge-primary mb-8 shadow-sm">
                Our Philosophy
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-primary text-[#474044] leading-[1.1] mb-8 tracking-tight">
                Childhood deserves presence —{' '}
                <span className="text-[#115C47]">not performance</span>
              </h2>

              <div className="space-y-6 mb-10">
                <p className="text-lg text-[#6B6569] leading-relaxed font-secondary">
                  At Dakota Autism Center, we believe that early years aren&apos;t
                  about milestones — they&apos;re about moments. We slow down the
                  pace of the city to create space for curiosity, kindness, and
                  calm discovery.
                </p>

                <p className="text-lg text-[#6B6569] leading-relaxed font-secondary">
                  We understand that every child&apos;s journey is unique. By
                  blending clinical expertise with a warm, nurturing atmosphere,
                  we help children build confidence and essential skills at their
                  own rhythm, ensuring they feel safe, seen, and supported every
                  step of the way.
                </p>
              </div>

              <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full">
                {principles.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className="w-3 h-3 rounded-full shadow-sm"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-medium text-lg text-[#474044]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="btn-contact group">
                  Read Our Story
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 ml-2">
                    <Icon
                      icon="solar:arrow-right-broken"
                      className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────── 5. Testimonials ────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#FB9A31] pt-4 pb-12 lg:pt-6 lg:pb-16">
        <div className="container-max relative z-10 px-4 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-8 lg:mb-10 gap-4 lg:gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-primary text-white! leading-tight max-w-xl">
              See what everyday <br className="hidden lg:block" />
              <span className="text-white">joy looks like</span>
            </h2>
            <p className="text-white/90 text-lg leading-snug font-secondary max-w-lg mb-1">
              Step inside a day at Dakota Autism Center – where calm curiosity
              meets spontaneous joy. Watch how our teachers guide, listen, and
              laugh alongside the little ones, creating an environment where
              every child feels understood, supported, and free to grow at their
              own pace.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-full aspect-21/9 rounded-3xl overflow-hidden shadow-xl mb-10 bg-white/20 group"
          >
            <Image
              src="/placeholder.svg"
              alt="Day at Dakota Autism Center Video"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex items-center gap-3 bg-[#474044]/90 hover:bg-[#115C47] text-white px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 group-hover:shadow-2xl">
                <div className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <Icon
                    icon="solar:play-bold"
                    className="w-4 h-4 text-[#FB9A31]"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-semibold tracking-wide">
                    Watch the full video
                  </span>
                  <span className="block text-xs opacity-80">2m 32s</span>
                </div>
              </button>
            </div>
          </motion.div>

          <div className="relative w-full overflow-hidden -mx-4 md:-mx-8 px-4 md:px-8">
            <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-linear-to-r from-[#FB9A31] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-linear-to-l from-[#FB9A31] to-transparent z-20 pointer-events-none" />

            <motion.div
              className="flex gap-6 lg:gap-8 w-max"
              animate={{ x: ['0%', '-33.33%'] }}
              transition={{
                duration: 15,
                ease: 'linear',
                repeat: Infinity,
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {marqueeTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[300px] md:w-[400px] bg-white p-6 rounded-2xl shadow-sm border border-[#EBEBEB] flex flex-col h-full hover:shadow-md transition-shadow duration-300 shrink-0"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="relative w-8 h-8 opacity-80">
                      <Image
                        src="/logo-mark.svg"
                        alt="Dakota Autism Center Logo Mark"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          icon="solar:star-bold"
                          className="w-4 h-4 text-[#FB9A31]"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-[#6B6569] text-lg leading-snug mb-6 font-secondary grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-[#E8F4F0] flex items-center justify-center overflow-hidden">
                      <Icon
                        icon="solar:user-circle-bold"
                        className="w-full h-full text-[#B2D8CA]"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[#474044] font-primary text-base leading-none mb-1">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-[#8F8B8E] font-secondary leading-none">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────── 6. Contact Form ────────────────── */}
      <ContactForm />
    </main>
  );
}
