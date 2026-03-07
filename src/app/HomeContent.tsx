'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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
    primaryHref: '/understanding-autism/about-autism',
    secondaryBtn: 'Insurance & Funding',
    secondaryHref: '/insurance-and-funding',
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
    primaryBtn: 'Explore Our Programs',
    primaryHref: '/center-based-aba-therapy',
    secondaryBtn: 'Insurance & Funding',
    secondaryHref: '/insurance-and-funding',
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
    primaryHref: '/contact-us',
    secondaryBtn: 'Call Us Now',
    secondaryHref: 'tel:612-284-5382',
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
  details: string;
  icon: string;
  accentHex: string;
  lightBg: string;
  textColor: string;
  iconColor: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    id: 'center-based',
    title: 'Center-Based ABA Therapy',
    description:
      'Our center provides a structured, school-like environment where children build essential social, communication, and behavioral skills through guided routines and meaningful peer interaction.',
    details:
      'Each child receives individualized programming within a collaborative setting designed to prepare them for school and community participation. With consistent daily routines, small group activities, and one-on-one instruction, your child develops confidence and independence in a space built specifically for their growth.',
    icon: 'solar:buildings-bold-duotone',
    accentHex: '#115C47',
    lightBg: '#E8F4F0',
    textColor: '#FFFFFF',
    iconColor: '#FFFFFF',
    href: '/center-based-aba-therapy',
  },
  {
    id: 'in-home',
    title: 'In-Home ABA Therapy',
    description:
      'Therapy takes place in the comfort and familiarity of your own home, where children practice real-world skills in the environment that matters most — their everyday life.',
    details:
      'Our therapists work alongside your family\u2019s natural routines, teaching practical skills like mealtime behavior, morning transitions, and social play with siblings. Flexible scheduling options accommodate busy households, making it easier to maintain consistent therapy without disrupting your family\u2019s rhythm.',
    icon: 'solar:home-smile-bold-duotone',
    accentHex: '#E0F2FE',
    lightBg: '#E5F4FC',
    textColor: '#1F2937',
    iconColor: '#0284C7',
    href: '/in-home-aba-therapy',
  },
  {
    id: 'family-training',
    title: 'Family Training & Support',
    description:
      'We partner with parents and caregivers to build strategies that extend your child\u2019s progress beyond therapy sessions — because lasting growth happens when the whole family is equipped.',
    details:
      'Through hands-on coaching and collaborative goal-setting, we help you understand the principles behind your child\u2019s program so you can reinforce positive behavior at home, at school, and in the community. Family training transforms everyday moments into opportunities for connection and skill-building.',
    icon: 'solar:users-group-rounded-bold-duotone',
    accentHex: '#FB9A31',
    lightBg: '#FEF3E8',
    textColor: '#FFFFFF',
    iconColor: '#FFFFFF',
    href: '/contact-us',
  },
  {
    id: 'eidbi',
    title: 'EIDBI — Early Intervention',
    description:
      'Minnesota\u2019s Early Intensive Developmental and Behavioral Intervention program provides comprehensive support for children ages 0\u20136, fully covered by Medical Assistance.',
    details:
      'Early intervention during these critical developmental years can make a profound difference. Our EIDBI services include individualized assessment, targeted skill-building, and family support to help your child reach meaningful milestones during the period when the brain is most receptive to growth and learning.',
    icon: 'solar:heart-pulse-bold-duotone',
    accentHex: '#EA3D6A',
    lightBg: '#FDE8EE',
    textColor: '#FFFFFF',
    iconColor: '#FFFFFF',
    href: '/eidbi',
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
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);

  const aboutRef = React.useRef(null);
  const { scrollYProgress: aboutScrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const aboutY = useTransform(aboutScrollYProgress, [0, 1], [50, -50]);

  return (
    <main id="main-content" className="w-full overflow-hidden">
      {/* ────────────────── 1. Hero ────────────────── */}
      <section
        className="relative w-full min-h-[calc(100vh-150px)] bg-white overflow-hidden border-b border-border-light"
        aria-labelledby="hero-heading"
      >
        <motion.div style={{ y: heroY }} className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] z-0 h-full">
          <Image
            src="/hero-image.png"
            alt="Therapist working with a child in a supportive environment"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </motion.div>

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
                <Link
                  href="/contact-us"
                  className="btn-find-center w-full sm:w-auto group"
                >
                  Connect with Our Team
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/20">
                    <Icon icon="solar:phone-bold" className="w-6 h-6" />
                  </span>
                </Link>
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
                <Link
                  href={activeContent.primaryHref}
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
                </Link>
                {activeContent.secondaryHref.startsWith('tel:') ? (
                  <a
                    href={activeContent.secondaryHref}
                    className={cn(
                      'btn btn-large rounded-full w-full sm:w-auto bg-transparent border-[1.5px]',
                      activeContent.outlineClass
                    )}
                  >
                    {activeContent.secondaryBtn}
                  </a>
                ) : (
                  <Link
                    href={activeContent.secondaryHref}
                    className={cn(
                      'btn btn-large rounded-full w-full sm:w-auto bg-transparent border-[1.5px]',
                      activeContent.outlineClass
                    )}
                  >
                    {activeContent.secondaryBtn}
                  </Link>
                )}
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
        className="section relative w-full overflow-hidden bg-[#F7FAF8]"
        aria-labelledby="services-heading"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-[#115C47]/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#42AEEB]/10 blur-3xl" />
        </div>

        <div className="container-max relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="section-header text-center">
              <span className="inline-flex items-center rounded-full border border-[#115C47]/15 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#115C47] shadow-sm">
                Programs Designed Around Daily Life
              </span>
              <h2
                id="services-heading"
                className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-[#2F2A2D] md:text-4xl lg:text-[44px]"
              >
                <span className="text-[#115C47]">Flexible ABA Therapy</span> That
                Fits Your Family
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#6B6569] md:text-lg">
                We offer evidence-based programs that adapt to your child&apos;s
                routine, environment, and pace, so support feels seamless at home,
                in our center, and everywhere growth happens.
              </p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-3 rounded-2xl border border-[#115C47]/10 bg-white/85 p-3 shadow-sm backdrop-blur sm:grid-cols-3 md:mb-12">
              {[
                { label: 'Care settings', value: '4' },
                { label: 'Family-first model', value: '1:1 + coaching' },
                { label: 'Coverage support', value: 'Insurance-guided' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#115C47]/10 bg-[#F8FBFA] px-4 py-3 text-left"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7B7579]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#2F2A2D]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="container-max relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7"
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
                boxShadow: '0 20px 40px rgba(17, 92, 71, 0.14)',
              }}
              transition={{ duration: 0.3, ease: 'easeOut' as const }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#115C47]/10 bg-white shadow-[0_10px_35px_rgba(27,35,31,0.06)] will-change-transform"
            >
              <Link href={service.href} className="absolute inset-0 z-20" aria-label={`Learn more about ${service.title}`}>
                <span className="sr-only">Learn more</span>
              </Link>
              <div
                className="absolute inset-x-0 top-0 h-1.5"
                style={{ backgroundColor: service.accentHex }}
              />
              <div
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-80"
                style={{ backgroundColor: service.lightBg, opacity: 0.65 }}
              />
              <div className="relative z-10 flex h-full flex-col p-6 lg:p-8 pointer-events-none">
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#115C47]/10 shadow-sm"
                  style={{
                    backgroundColor: service.lightBg,
                    color:
                      service.iconColor === '#FFFFFF'
                        ? '#115C47'
                        : service.iconColor,
                  }}
                >
                  <Icon icon={service.icon} width={24} height={24} />
                </div>

                <h3
                  className="mb-3 text-xl font-bold tracking-tight text-[#2F2A2D] lg:text-2xl group-hover:text-[#115C47] transition-colors"
                >
                  {service.title}
                </h3>

                <p className="mb-4 text-[15px] font-medium leading-relaxed text-[#696367]">
                  {service.description}
                </p>

                <div className="mt-auto rounded-2xl border border-[#115C47]/8 bg-[#F8FAF9] px-5 py-4">
                  <p className="text-[14.5px] leading-[1.7] text-[#5A555A]">
                    {service.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="container-max text-center mt-10 lg:mt-14 relative z-10">
          <Link href="/contact-us" className="btn btn-large rounded-full border border-[#115C47]/20 bg-[#115C47] px-8 text-white shadow-lg shadow-[#115C47]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0C4535] hover:shadow-xl hover:shadow-[#115C47]/30">
            Get Started Today
            <Icon
              icon="solar:arrow-right-broken"
              width={18}
              height={18}
              className="shrink-0"
            />
          </Link>
        </div>
      </section>

      {/* ────────────────── 4. About Section ────────────────── */}
      <section ref={aboutRef} className="section py-20 md:py-32 lg:py-40 relative w-full overflow-hidden bg-white rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[160px] md:rounded-br-[160px]">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              style={{ y: aboutY }}
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
                <Link href="/understanding-autism/about-autism" className="btn btn-primary rounded-full px-8 inline-flex items-center gap-2 group">
                  Read Our Story
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 ml-2">
                    <Icon
                      icon="solar:arrow-right-broken"
                      className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────── 5. Testimonials ────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#FB9A31] pt-8 pb-14 lg:pt-10 lg:pb-18">
        <div className="container-max relative z-10 px-4 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-10 lg:mb-12 gap-6 lg:gap-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-primary text-white! leading-[1.08] max-w-xl">
              See what everyday <br className="hidden lg:block" />
              <span className="text-white">joy looks like</span>
            </h2>
            <p className="text-white/90 text-lg leading-relaxed font-secondary max-w-lg mb-0.5">
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
            className="relative w-full aspect-21/9 rounded-tl-[48px] rounded-br-[48px] md:rounded-tl-[72px] md:rounded-br-[72px] border border-white/35 p-1.5 overflow-hidden shadow-xl mb-10 bg-white/20 group"
          >
            <div className="relative h-full w-full rounded-tl-[42px] rounded-br-[42px] md:rounded-tl-[64px] md:rounded-br-[64px] overflow-hidden">
              <Image
                src="/hero-image.png"
                alt="Children and therapists sharing a joyful moment at Dakota Autism Center"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/8 group-hover:bg-black/16 transition-colors duration-300" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/25 rounded-tl-[42px] rounded-br-[42px] md:rounded-tl-[64px] md:rounded-br-[64px]" />
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
