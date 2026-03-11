'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FAQ from '@/components/FAQ';

const programHighlights = [
  {
    title: 'Evidence-Based Structure',
    description:
      'Our programs are built on proven ABA principles, ensuring every activity promotes meaningful skill acquisition and retention.',
    icon: 'solar:graph-up-bold-duotone',
    bgClass: 'bg-primary/10',
    iconClass: 'text-primary',
  },
  {
    title: 'Naturalistic Learning',
    description:
      'We embed learning trials into play and daily routines, making therapy feel like fun rather than work.',
    icon: 'solar:balloon-bold-duotone',
    bgClass: 'bg-secondary/15',
    iconClass: 'text-[#FB9A31]',
  },
  {
    title: 'Social Connection',
    description:
      'Small groups and peer dyads provide safe opportunities to practice greetings, sharing, and cooperative play.',
    icon: 'solar:users-group-rounded-bold-duotone',
    bgClass: 'bg-tertiary/15',
    iconClass: 'text-tertiary',
  },
  {
    title: 'School Readiness',
    description:
      'From circle time to lining up, we practice the essential classroom behaviors that prepare children for school success.',
    icon: 'solar:backpack-bold-duotone',
    bgClass: 'bg-accent/10',
    iconClass: 'text-[#EA3D6A]',
  },
  {
    title: 'Holistic Development',
    description:
      'Beyond behavior, we focus on communication, adaptive living skills, and emotional regulation for a well-rounded child.',
    icon: 'solar:heart-angle-bold-duotone',
    bgClass: 'bg-primary/10',
    iconClass: 'text-primary',
  },
  {
    title: 'Family Empowerment',
    description:
      "We don't just work with your child; we partner with you, providing the tools and strategies to support growth at home.",
    icon: 'solar:home-smile-bold-duotone',
    bgClass: 'bg-secondary/15',
    iconClass: 'text-[#FB9A31]',
  },
];

const dailyFlow = [
  {
    time: '8:30 AM',
    title: 'Arrival & Warm Welcome',
    description:
      'Children transition into the center with visual schedules, sensory supports, and a soft start to the day.',
    accent: 'bg-primary',
  },
  {
    time: '9:15 AM',
    title: 'Morning Circle & Social Time',
    description:
      "A group gathering to sing songs, review the day's schedule, and practice greeting peers.",
    accent: 'bg-[#FB9A31]',
  },
  {
    time: '9:45 AM',
    title: 'Individual Learning Blocks (1:1)',
    description:
      'Focused sessions targeting personalized goals in communication, cognition, and adaptive skills.',
    accent: 'bg-[#42AEEB]',
  },
  {
    time: '11:00 AM',
    title: 'Movement & Sensory Play',
    description:
      'Structured gym time or outdoor play to support gross motor skills and regulation.',
    accent: 'bg-[#EA3D6A]',
  },
  {
    time: '12:00 PM',
    title: 'Lunch & Daily Living Skills',
    description:
      'Practicing self-feeding, opening containers, and social conversation during mealtime.',
    accent: 'bg-primary',
  },
  {
    time: '1:00 PM',
    title: 'Rest or Quiet Activities',
    description:
      'A calm period for napping or low-stimulation activities to recharge for the afternoon.',
    accent: 'bg-[#FB9A31]',
  },
  {
    time: '2:00 PM',
    title: 'Social Skills & Group Games',
    description:
      'Cooperative play, turn-taking games, and peer interaction facilitated by therapists.',
    accent: 'bg-[#42AEEB]',
  },
  {
    time: '3:30 PM',
    title: 'Departure & Family Handoff',
    description:
      'Reviewing the day with parents and transitioning home with success stories.',
    accent: 'bg-[#EA3D6A]',
  },
];

const centerFeatures = [
  {
    title: 'Sensory-Friendly Spaces',
    copy: 'Calm colors, flexible seating, and quiet corners help children regulate and stay engaged.',
    icon: 'solar:relax-bold-duotone',
  },
  {
    title: 'Clinical + Play Balance',
    copy: 'Structured skill building is paired with joyful, child-led moments to keep learning meaningful.',
    icon: 'solar:balloon-bold-duotone',
  },
  {
    title: 'School Readiness Focus',
    copy: 'Pre-academic routines, communication practice, and transition skills support kindergarten readiness.',
    icon: 'solar:calendar-mark-bold-duotone',
  },
  {
    title: 'Safe & Secure Environment',
    copy: "Secure entry systems and monitored spaces ensure your child's safety is our top priority.",
    icon: 'solar:shield-check-bold-duotone',
  },
];

const centerFitSignals = [
  {
    title: 'Early Learners (Ages 2-6)',
    description: 'Great for children building foundational communication, play, and classroom-style routines.',
    icon: 'solar:balloon-bold-duotone',
  },
  {
    title: 'Peer Interaction Goals',
    description: 'Ideal when your child benefits from practicing turn-taking, joint attention, and social flexibility.',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
  {
    title: 'School Readiness Focus',
    description: 'Best for families preparing for kindergarten routines, transitions, and group learning.',
    icon: 'solar:backpack-bold-duotone',
  },
  {
    title: 'Consistent Clinical Team',
    description: 'A strong fit when you want frequent BCBA oversight and collaborative therapist support in one place.',
    icon: 'solar:stethoscope-bold-duotone',
  },
  {
    title: 'Transition and Routine Support',
    description:
      'Helpful for children who benefit from practicing transitions between activities with visual schedules and predictable cues.',
    icon: 'solar:calendar-mark-bold-duotone',
  },
  {
    title: 'Group Learning Readiness',
    description:
      'A great option when your child is ready to build attention, flexibility, and participation in guided small-group settings.',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
];

const settingComparison = [
  {
    factor: 'Learning Environment',
    center: 'Structured, school-like setting with reduced distractions and predictable routines.',
    home: 'Familiar home environment with naturally occurring daily opportunities.',
  },
  {
    factor: 'Social Practice',
    center: 'Built-in peer interaction and guided small-group learning each week.',
    home: 'Social skill practice is coached around family and community activities.',
  },
  {
    factor: 'Family Participation',
    center: 'Frequent parent updates, coaching sessions, and coordinated home carryover plans.',
    home: 'Parents can observe sessions directly and receive in-the-moment coaching.',
  },
  {
    factor: 'Best Fit',
    center: 'Children who thrive with routines, transitions, and school-readiness goals.',
    home: 'Children who need support in home routines and prefer familiar spaces.',
  },
];

const enrollmentSteps = [
  {
    step: '01',
    title: 'Initial Family Consultation',
    description: 'Share your child’s strengths, concerns, and priorities with our intake team.',
    icon: 'solar:chat-round-call-bold-duotone',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    step: '02',
    title: 'Clinical Assessment',
    description: 'A BCBA completes a comprehensive assessment and drafts an individualized treatment plan.',
    icon: 'solar:clipboard-check-bold-duotone',
    color: 'text-[#FB9A31]',
    bg: 'bg-secondary/15',
  },
  {
    step: '03',
    title: 'Insurance + EIDBI Review',
    description: 'We verify benefits, explain Minnesota EIDBI pathways, and handle authorization support.',
    icon: 'solar:shield-check-bold-duotone',
    color: 'text-[#42AEEB]',
    bg: 'bg-tertiary/15',
  },
  {
    step: '04',
    title: 'Start Center Services',
    description: 'Your child begins a structured program with clear goals, progress tracking, and family coaching.',
    icon: 'solar:rocket-bold-duotone',
    color: 'text-[#EA3D6A]',
    bg: 'bg-accent/10',
  },
];

const faqItems = [
  {
    question: 'How many hours of center-based ABA therapy are typical?',
    answer:
      'Recommendations are individualized after assessment. Many children in comprehensive center-based programs receive 20-40 hours per week, while others benefit from a focused part-time schedule.',
  },
  {
    question: 'Do you need an autism diagnosis before starting?',
    answer:
      'Most insurance plans require a formal autism diagnosis for ABA coverage. If your family is still navigating diagnosis, our team can help guide next steps and local referral options.',
  },
  {
    question: 'What does parent involvement look like in center-based care?',
    answer:
      'Parents are active partners through regular updates, goal reviews, and coaching sessions. You receive practical strategies to support carryover at home and in community routines.',
  },
  {
    question: 'How is progress measured?',
    answer:
      'Our clinical team collects session data daily, reviews trends with BCBA oversight, and updates goals based on outcomes. Families receive clear progress reports and recommendations.',
  },
  {
    question: 'Is center-based ABA covered by insurance or Minnesota EIDBI?',
    answer:
      'Many private plans and public funding pathways can cover ABA services when criteria are met. We support families through benefit verification, authorization requirements, and EIDBI-related steps.',
  },
  {
    question: 'How do I know if center-based or in-home ABA is better for my child?',
    answer:
      'Both can be effective. Center-based is often preferred for school-readiness and peer goals, while in-home can be ideal for daily routine generalization. We help families choose based on child profile, goals, and logistics.',
  },
];

export default function CenterBasedContent() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);

  const insideCenterRef = useRef(null);
  const { scrollYProgress: insideCenterScrollYProgress } = useScroll({
    target: insideCenterRef,
    offset: ['start end', 'end start'],
  });
  const insideCenterY = useTransform(insideCenterScrollYProgress, [0, 1], [50, -50]);

  return (
    <main id="main-content" className="w-full bg-white">
      <section className="relative border-b border-border-light overflow-hidden bg-white">
        <motion.div style={{ y: heroY }} className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 z-0 h-full">
          <Image
            src="/images/center-based/hero-center-based.webp"
            alt="Therapist guiding children through a table activity in a structured learning setting"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </motion.div>

        <div className="container-max relative z-10 py-10 md:py-12 lg:py-14">
          <div className="w-full lg:w-1/2 lg:pr-12 animate-fade-in-up">
            <span className="badge badge-primary mb-5">Center-Based ABA Therapy</span>
            <h1 className="hero-headline text-dark mb-5">
              Center-based ABA therapy in Minnesota for communication, social growth, and school readiness.
            </h1>
            <p className="body-large text-text-secondary max-w-2xl mb-7">
              Our center-based program blends evidence-based ABA therapy with a warm, preschool-like
              setting designed for meaningful progress. Children receive personalized care from BCBAs and
              RBTs while practicing peer interaction, daily living routines, and classroom-ready skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us" className="btn-find-center w-full sm:w-auto bg-tertiary!">
                Get Started
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                  <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                </span>
              </Link>
              <a href="#daily-program" className="btn btn-tertiary btn-large w-full sm:w-auto rounded-full">
                Explore Daily Program
              </a>
            </div>

            <div className="block lg:hidden relative -mx-(--space-lg) w-[calc(100%+var(--space-lg)*2)] h-[32vh] min-h-[220px] max-h-[360px] mt-8">
              <Image
                src="/images/center-based/hero-center-based.webp"
                alt="Therapist guiding children through a table activity in a structured learning setting"
                fill
                className="object-cover"
                loading="eager"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="section bg-[#F7FBF9]">
        <div className="container-max">
          <div className="section-header text-left md:text-center mb-12 md:mb-16">
            <span className="badge badge-info mb-4">What Makes It Effective</span>
            <h2 className="text-dark text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Built for meaningful growth, every single day</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              We combine intentional program structure with compassionate care so children can develop
              practical life skills and confidence across environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {programHighlights.map((item) => (
              <article key={item.title} className="flex gap-5 items-start group">
                <div className={`shrink-0 w-14 h-14 rounded-2xl ${item.bgClass} ${item.iconClass} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon icon={item.icon} className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-dark text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-text-secondary text-base leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="daily-program" className="section bg-white overflow-visible">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start relative">
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <span className="badge badge-secondary mb-4">Daily Rhythm</span>
              <h2 className="text-dark mb-6">A predictable flow designed for progress</h2>
              <p className="text-text-secondary mb-6">
                Consistent routines reduce anxiety, improve transitions, and help children generalize
                new skills. Our teams use visual supports and positive reinforcement to create a day that
                feels both structured and joyful.
              </p>
              <ul className="space-y-3">
                {[
                  'Frequent opportunities for communication practice',
                  'Embedded social learning with peer models',
                  'Built-in movement and sensory regulation supports',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-text-primary text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 rounded-3xl overflow-hidden border border-border-light shadow-sm h-[220px] sm:h-[260px]">
                <Image
                  src="/images/center-based/daily-rhythm-classroom.webp"
                  alt="Children participating in a structured classroom routine with teacher support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 relative border-l border-border-light/60 ml-3 lg:ml-0 pl-8 lg:pl-12 py-2 space-y-10">
              {dailyFlow.map((step) => (
                <div key={step.time} className="relative">
                  <div className={`absolute -left-[41px] lg:-left-[57px] top-1.5 h-5 w-5 rounded-full border-4 border-white ${step.accent} ring-1 ring-border-light shadow-sm`} />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                      <span className="text-sm font-bold text-primary shrink-0 w-20">{step.time}</span>
                      <h3 className="text-dark text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={insideCenterRef} id="learning-center" className="section bg-[#D4EAFC]/30">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="flex flex-col">
              <div className="mb-10">
                <span className="badge badge-accent mb-5">Inside Our Center</span>
                <h2 className="text-dark mb-6">Designed to feel calm, colorful, and supportive</h2>
                <p className="body-large text-text-secondary mb-7">
                  Our environment is intentionally crafted to reduce overwhelm while encouraging exploration.
                  Every room, material, and transition has a purpose: helping children feel secure while
                  building real-world skills.
                </p>
                <Link href="/contact-us" className="btn btn-primary rounded-full px-8 inline-flex items-center gap-2">
                  Get in touch <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {centerFeatures.map((feature, index) => (
                  <article key={feature.title} className="p-6 border border-border-light rounded-2xl bg-white hover:shadow-md transition-shadow flex flex-col h-full group">
                    <span className="text-4xl font-light text-gray-300 mb-4 block">0{index + 1}</span>
                    <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-text-secondary mb-0 grow">{feature.copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <motion.div
              style={{ y: insideCenterY }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative h-full lg:sticky lg:top-32"
            >
              <div className="relative rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[120px] md:rounded-br-[120px] overflow-hidden shadow-xl min-h-[500px] h-full">
                <Image
                  src="/images/center-based/inside-center-classroom.webp"
                  alt="Children and instructor engaged in collaborative activities inside a calm classroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="section bg-white border-t border-border-light">
        <div className="container-max">
          <div className="section-header">
            <span className="badge badge-primary mb-4">Expected Outcomes</span>
            <h2 className="text-dark">Skills that transfer beyond the center</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {[
              { metric: 'Communication', icon: 'solar:chat-round-line-bold-duotone' },
              { metric: 'Daily Living', icon: 'solar:home-smile-angle-bold-duotone' },
              { metric: 'Social Engagement', icon: 'solar:users-group-rounded-bold-duotone' },
              { metric: 'School Readiness', icon: 'solar:book-2-bold-duotone' },
            ].map((item) => (
              <article key={item.metric} className="card text-center border border-border-light">
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary">
                  <Icon icon={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-dark text-xl mb-2">{item.metric}</h3>
                <p className="text-text-secondary mb-0 text-sm">
                  Targeted goals and consistent collaboration help children carry these gains into home and
                  community routines.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#F7FBF9]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="badge badge-secondary mb-4">Who Thrives Here</span>
              <h2 className="text-dark mb-5">Is center-based ABA the right fit?</h2>
              <p className="text-text-secondary mb-6">
                Families often choose center-based care when they want a structured environment, peer
                opportunities, and focused preparation for school transitions.
              </p>
              <Link href="/contact-us" className="btn btn-primary rounded-full px-8 inline-flex items-center gap-2">
                Discuss Your Child&apos;s Fit
                <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
              </Link>
              <div className="relative mt-8 rounded-3xl overflow-hidden border border-border-light/70 shadow-sm h-[220px] sm:h-[260px]">
                <Image
                  src="/images/center-based/outcomes-school-readiness.webp"
                  alt="Children gathered near bookshelves during a guided school-readiness learning moment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6 content-start">
                {centerFitSignals.map((item) => (
                  <article
                    key={item.title}
                    className="group p-6 rounded-2xl bg-white border border-border-light hover:shadow-md transition-all duration-300 h-full"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon icon={item.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="text-dark text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-0">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-max">
          <div className="section-header text-left md:text-center mb-12 md:mb-16">
            <span className="badge badge-info mb-4">Compare Therapy Settings</span>
            <h2 className="text-dark mb-6">Center-based ABA vs. in-home ABA</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Both models are evidence-based. The strongest outcomes come from choosing the setting that
              matches your child&apos;s current goals and your family&apos;s routine.
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border-light shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_1fr]">
              <div className="hidden md:block bg-gray-50 p-5 border-r border-border-light" />
              <div className="bg-tertiary text-white p-5 md:p-6 flex items-center gap-3">
                <Icon icon="solar:buildings-2-bold-duotone" className="w-6 h-6 shrink-0" />
                <h3 className="text-white! text-lg font-semibold mb-0!">Center-Based</h3>
              </div>
              <div className="bg-primary text-white p-5 md:p-6 flex items-center gap-3">
                <Icon icon="solar:home-2-bold-duotone" className="w-6 h-6 shrink-0" />
                <h3 className="text-white! text-lg font-semibold mb-0!">In-Home</h3>
              </div>

              {settingComparison.map((row) => (
                <div key={row.factor} className="contents">
                  <div className="bg-gray-50 p-5 border-t border-r border-border-light">
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">{row.factor}</span>
                  </div>
                  <div className="p-5 border-t border-border-light bg-white">
                    <p className="text-sm text-text-primary leading-relaxed mb-0">{row.center}</p>
                  </div>
                  <div className="p-5 border-t border-border-light bg-primary/4">
                    <p className="text-sm text-text-primary leading-relaxed mb-0">{row.home}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-7">
            <Link href="/in-home-aba-therapy" className="btn btn-tertiary rounded-full inline-flex items-center gap-2">
              Explore In-Home ABA Therapy
              <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-[#D4EAFC]/30 border-t border-border-light/60">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="badge badge-accent mb-4">Enrollment and Funding</span>
              <h2 className="text-dark mb-6">A clear path from first call to first session</h2>
              <p className="body-large text-text-secondary mb-7">
                We guide families through assessment, scheduling, and funding steps so care can start
                with less stress and more confidence.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Support with private insurance verification and authorization steps',
                  'Guidance for Minnesota families navigating EIDBI-related pathways',
                  'Collaborative BCBA planning with measurable progress milestones',
                  'Regular parent coaching to strengthen carryover at home',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-text-primary text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <Link href="/insurance-and-funding" className="btn btn-primary rounded-full px-8 inline-flex items-center gap-2">
                Verify Coverage
                <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {enrollmentSteps.map((step) => (
                <article key={step.step} className="relative p-6 rounded-2xl bg-white border border-border-light hover:shadow-md transition-shadow">
                  <span className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${step.bg} ${step.color} mb-4`}>
                    <Icon icon={step.icon} className="w-6 h-6" />
                  </span>
                  <p className={`text-xs font-bold uppercase tracking-wider ${step.color} mb-2`}>Step {step.step}</p>
                  <h3 className="text-dark text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-0">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ
        badge="Center-Based ABA FAQs"
        title="What parents ask before enrolling"
        subtitle="Answers to the most common questions families have when comparing center-based ABA options in Minnesota."
        items={faqItems}
        sectionClassName="bg-white border-t border-border-light"
      />

      <section className="section bg-accent text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        <div className="container-max relative z-10 text-center">
          <h2 className="text-white!">Ready to explore center-based ABA therapy for your child?</h2>
          <p className="body-large text-white/90 max-w-2xl mx-auto mb-8">
            Meet with our team to discuss your child&apos;s strengths, needs, and how our center program can
            support your family&apos;s goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-3 bg-white text-accent font-semibold py-2 pl-6 pr-2 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 group w-full sm:w-auto text-lg">
              Start Enrollment Conversation
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Icon icon="solar:arrow-right-broken" className="w-6 h-6" />
              </span>
            </Link>
            <a href="tel:612-284-5382" className="btn btn-tertiary btn-large rounded-full border-white/40! text-white! hover:bg-white/10! w-full sm:w-auto">
              Call (612) 284-5382
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
