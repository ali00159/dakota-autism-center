import Image from 'next/image';
import { Icon } from '@iconify/react';
import ContactForm from '@/components/ContactForm';

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
      'We don’t just work with your child; we partner with you, providing the tools and strategies to support growth at home.',
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
      'A group gathering to sing songs, review the day’s schedule, and practice greeting peers.',
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
    copy: 'Secure entry systems and monitored spaces ensure your child’s safety is our top priority.',
    icon: 'solar:shield-check-bold-duotone',
  },
];

export default function CenterBasedAbaTherapyPage() {
  return (
    <>
      <main id="main-content" className="w-full bg-white">
        <section className="relative border-b border-border-light overflow-hidden bg-white">
          <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 z-0 h-full">
            <Image
              src="/hero-image.png"
              alt="Therapist and child engaged in center-based ABA activities"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>

          <div className="container-max relative z-10 py-10 md:py-12 lg:py-14">
            <div className="w-full lg:w-1/2 lg:pr-12 animate-fade-in-up">
              <span className="badge badge-primary mb-5">Center-Based ABA Therapy</span>
              <h1 className="hero-headline text-dark mb-5">
                A joyful, structured center program where children build skills that last.
              </h1>
              <p className="body-large text-text-secondary max-w-2xl mb-7">
                Our center-based program blends evidence-based ABA therapy with a warm, preschool-like
                setting. We support communication, social growth, daily routines, and independence in a
                way that feels safe, engaging, and personalized to each child.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-find-center w-full sm:w-auto">
                  Get Started
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                    <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                  </span>
                </a>
                <a href="#daily-program" className="btn btn-tertiary btn-large w-full sm:w-auto rounded-full">
                  Explore Daily Program
                </a>
              </div>

              <div className="block lg:hidden relative -mx-(--space-lg) w-[calc(100%+var(--space-lg)*2)] h-[32vh] min-h-[220px] max-h-[360px] mt-8">
                <Image
                  src="/hero-image.png"
                  alt="Therapist and child engaged in center-based ABA activities"
                  fill
                  className="object-cover"
                  priority
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
              {/* Left Column - Sticky */}
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
              </div>

              {/* Right Column - Timeline */}
              <div className="lg:col-span-6 lg:col-start-7 relative border-l border-border-light/60 ml-3 lg:ml-0 pl-8 lg:pl-12 py-2 space-y-10">
                {dailyFlow.map((step) => (
                  <div key={step.time} className="relative">
                    {/* Timeline Dot */}
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

        <section id="learning-center" className="section bg-[#D4EAFC]/30">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left Column: Content + Cards */}
              <div className="flex flex-col">
                <div className="mb-10">
                  <span className="badge badge-accent mb-5">Inside Our Center</span>
                  <h2 className="text-dark mb-6">Designed to feel calm, colorful, and supportive</h2>
                  <p className="body-large text-text-secondary mb-7">
                    Our environment is intentionally crafted to reduce overwhelm while encouraging exploration.
                    Every room, material, and transition has a purpose: helping children feel secure while
                    building real-world skills.
                  </p>
                  <a href="#contact" className="btn btn-primary rounded-full px-8 inline-flex items-center gap-2">
                    Get in touch <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                  </a>
                </div>

                {/* 2x2 Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {centerFeatures.map((feature, index) => (
                    <article key={feature.title} className="p-6 border border-border-light rounded-2xl bg-white hover:shadow-md transition-shadow flex flex-col h-full group">
                      <span className="text-4xl font-light text-gray-300 mb-4 block">0{index + 1}</span>
                      <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-sm text-text-secondary mb-4 grow">{feature.copy}</p>
                      <div className="flex items-center text-primary font-medium text-sm mt-auto">
                        <span className="border-b border-transparent group-hover:border-primary transition-colors">View Details</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-lg border border-white/70 lg:sticky lg:top-32">
                <Image
                  src="/homepage-about-us-image.jpeg"
                  alt="Children learning and playing inside the center-based ABA program"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
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

        <section className="section bg-accent text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="container-max relative z-10 text-center">
            <h2 className="!text-white">Ready to explore center-based ABA therapy for your child?</h2>
            <p className="body-large text-white/90 max-w-2xl mx-auto mb-8">
              Meet with our team to discuss your child&apos;s strengths, needs, and how our center program can
              support your family&apos;s goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-white text-accent font-semibold py-2 pl-6 pr-2 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 group w-full sm:w-auto text-lg">
                Start Enrollment Conversation
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon icon="solar:arrow-right-broken" className="w-6 h-6" />
                </span>
              </a>
              <a href="tel:612-284-5382" className="btn btn-tertiary btn-large rounded-full !border-white/40 !text-white hover:!bg-white/10 w-full sm:w-auto">
                Call (612) 284-5382
              </a>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
    </>
  );
}
