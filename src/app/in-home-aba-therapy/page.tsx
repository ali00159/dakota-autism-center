import Image from 'next/image';
import { Icon } from '@iconify/react';
import ContactForm from '@/components/ContactForm';

const parentOutcomes = [
  {
    verb: 'Listen as',
    outcome: 'your child communicates their needs clearly during everyday moments — asking for a snack, requesting a favorite toy, or telling you about their day.',
    skill: 'Communication',
    icon: 'solar:chat-round-dots-bold-duotone',
    stat: '85%',
    statLabel: 'improvement in communication skills',
    accent: 'bg-primary',
    accentLight: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    verb: 'Watch as',
    outcome: 'your child gains independence in everyday tasks — brushing their teeth, getting dressed, and following morning routines without constant prompting.',
    skill: 'Daily Living',
    icon: 'solar:home-smile-angle-bold-duotone',
    stat: '88%',
    statLabel: 'improvement in daily living skills',
    accent: 'bg-[#FB9A31]',
    accentLight: 'bg-secondary/15',
    iconColor: 'text-[#FB9A31]',
  },
  {
    verb: 'See',
    outcome: 'your child take turns during play, share toys with siblings, and engage with peers — building friendships that bring joy to your whole family.',
    skill: 'Social Skills',
    icon: 'solar:users-group-rounded-bold-duotone',
    stat: '75%',
    statLabel: 'improvement in social interactions',
    accent: 'bg-[#42AEEB]',
    accentLight: 'bg-tertiary/15',
    iconColor: 'text-tertiary',
  },
  {
    verb: 'Notice',
    outcome: 'challenging behaviors decrease as your child learns new ways to express frustration, cope with changes, and manage transitions throughout the day.',
    skill: 'Behavior',
    icon: 'solar:heart-angle-bold-duotone',
    stat: '58%',
    statLabel: 'decrease in problem behaviors',
    accent: 'bg-[#EA3D6A]',
    accentLight: 'bg-accent/10',
    iconColor: 'text-[#EA3D6A]',
  },
];

const sessionFlow = [
  {
    step: '01',
    title: 'Warm-Up & Connection',
    duration: '10–15 min',
    description: 'Your child\'s therapist arrives and eases into the session with preferred activities and rapport building, creating a calm transition into learning.',
    icon: 'solar:hand-heart-bold-duotone',
    color: 'border-primary',
    dotColor: 'bg-primary',
  },
  {
    step: '02',
    title: 'Structured Skill Building',
    duration: '45–60 min',
    description: 'Focused 1:1 teaching targeting personalized goals — communication, self-help skills, and social behaviors woven into natural activities around your home.',
    icon: 'solar:lightbulb-bolt-bold-duotone',
    color: 'border-[#FB9A31]',
    dotColor: 'bg-[#FB9A31]',
  },
  {
    step: '03',
    title: 'Natural Environment Practice',
    duration: '30–45 min',
    description: 'Skills transfer to real-life moments — practicing requests during snack time, following instructions during play, and engaging socially with family members.',
    icon: 'solar:leaf-bold-duotone',
    color: 'border-[#42AEEB]',
    dotColor: 'bg-[#42AEEB]',
  },
  {
    step: '04',
    title: 'Parent Coaching & Debrief',
    duration: '10–15 min',
    description: 'Your therapist shares progress updates, demonstrates strategies you can use between sessions, and answers questions — empowering you as your child\'s greatest advocate.',
    icon: 'solar:people-nearby-bold-duotone',
    color: 'border-[#EA3D6A]',
    dotColor: 'bg-[#EA3D6A]',
  },
];

const comparisonData = [
  {
    factor: 'Learning Environment',
    home: 'Your child\'s familiar home — where they feel safest and most comfortable',
    center: 'A structured clinical setting designed for therapy and peer interaction',
    homeIcon: 'solar:home-2-bold-duotone',
    centerIcon: 'solar:buildings-2-bold-duotone',
  },
  {
    factor: 'Skill Generalization',
    home: 'Skills are learned where they\'ll actually be used — during meals, bedtime, and play',
    center: 'Skills may need additional practice to transfer to home and community settings',
    homeIcon: 'solar:star-bold-duotone',
    centerIcon: 'solar:transfer-horizontal-bold-duotone',
  },
  {
    factor: 'Family Involvement',
    home: 'Parents and siblings participate actively, learning strategies in real time',
    center: 'Families receive regular updates and periodic parent training sessions',
    homeIcon: 'solar:users-group-rounded-bold-duotone',
    centerIcon: 'solar:chat-round-dots-bold-duotone',
  },
  {
    factor: 'Social Opportunities',
    home: 'Focus on family and community-based social interactions',
    center: 'Built-in peer interactions and group social skills activities',
    homeIcon: 'solar:heart-bold-duotone',
    centerIcon: 'solar:people-nearby-bold-duotone',
  },
  {
    factor: 'Schedule Flexibility',
    home: 'Highly flexible scheduling that adapts to your family\'s routine',
    center: 'Structured hours within the center\'s operating schedule',
    homeIcon: 'solar:clock-circle-bold-duotone',
    centerIcon: 'solar:calendar-bold-duotone',
  },
];

const idealCandidates = [
  {
    title: 'Young Learners',
    description: 'Children under 5 who benefit from early intervention in a comfortable, familiar environment.',
    icon: 'solar:baby-bottle-bold-duotone',
  },
  {
    title: 'Sensory-Sensitive Children',
    description: 'Kids who are easily overwhelmed by new settings and thrive with the predictability of home.',
    icon: 'solar:shield-check-bold-duotone',
  },
  {
    title: 'Busy Families',
    description: 'Families who value the convenience of no commute and flexible scheduling around daily life.',
    icon: 'solar:calendar-mark-bold-duotone',
  },
  {
    title: 'Daily Living Focus',
    description: 'Children who need to build independence in self-care, mealtime, and household routines.',
    icon: 'solar:home-smile-bold-duotone',
  },
  {
    title: 'Rural Communities',
    description: 'Families located far from a center who deserve the same quality of evidence-based therapy.',
    icon: 'solar:map-point-wave-bold-duotone',
  },
  {
    title: 'Involved Parents',
    description: 'Caregivers who want to actively participate and learn strategies they can use between sessions.',
    icon: 'solar:hand-heart-bold-duotone',
  },
];

const gettingStartedSteps = [
  {
    number: '01',
    title: 'Reach Out',
    description: 'Contact us by phone or through our form. We\'ll answer your questions and discuss your child\'s needs.',
    icon: 'solar:phone-calling-bold-duotone',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    number: '02',
    title: 'Assessment',
    description: 'A BCBA conducts a comprehensive evaluation in your home to understand your child\'s strengths and create a tailored plan.',
    icon: 'solar:clipboard-check-bold-duotone',
    color: 'text-[#FB9A31]',
    bg: 'bg-secondary/15',
  },
  {
    number: '03',
    title: 'Insurance Authorization',
    description: 'We handle the insurance process for you — verifying coverage, obtaining authorization, and managing paperwork.',
    icon: 'solar:shield-check-bold-duotone',
    color: 'text-[#42AEEB]',
    bg: 'bg-tertiary/15',
  },
  {
    number: '04',
    title: 'Begin Therapy',
    description: 'Your child\'s therapy team begins sessions in your home, building skills and confidence from day one.',
    icon: 'solar:star-shine-bold-duotone',
    color: 'text-[#EA3D6A]',
    bg: 'bg-accent/10',
  },
];

const homePrepTips = [
  {
    title: 'Create a Dedicated Space',
    description: 'A quiet corner or room with minimal distractions where your child and therapist can work comfortably.',
    icon: 'solar:sofa-2-bold-duotone',
  },
  {
    title: 'Minimize Distractions',
    description: 'Turn off background TVs during sessions and let siblings know therapy time is happening.',
    icon: 'solar:volume-cross-bold-duotone',
  },
  {
    title: 'Keep Reinforcers Ready',
    description: 'Have your child\'s favorite items accessible — snacks, toys, or activities that motivate them.',
    icon: 'solar:gift-bold-duotone',
  },
  {
    title: 'Maintain Consistency',
    description: 'A regular session schedule helps your child anticipate and prepare for therapy — reducing anxiety.',
    icon: 'solar:calendar-bold-duotone',
  },
];

const faqItems = [
  {
    question: 'How many hours per week will my child receive therapy?',
    answer: 'Session frequency is based on your child\'s individualized assessment. Most children receive 10–25 hours per week, though this can range from a few focused hours to a more intensive program depending on needs and goals.',
  },
  {
    question: 'Does a parent need to be home during sessions?',
    answer: 'Yes, a caregiver should be present in the home during sessions. This ensures safety and allows you to participate in parent coaching, observe techniques, and reinforce skills between sessions.',
  },
  {
    question: 'What age groups do you serve?',
    answer: 'We provide In-Home ABA therapy for children from 18 months through 21 years old. Early intervention is most effective before age 5, but individuals of all ages within this range benefit significantly from ABA therapy.',
  },
  {
    question: 'How is progress measured and reported?',
    answer: 'Data is collected during every session and reviewed weekly by your BCBA. You\'ll receive regular progress updates and formal quarterly reports showing your child\'s growth across all goal areas.',
  },
  {
    question: 'Is In-Home ABA therapy covered by insurance?',
    answer: 'Yes. Most private insurance plans, Medicaid, and Minnesota\'s EIDBI program cover ABA therapy. We verify your benefits and handle the authorization process so you can focus on your family.',
  },
  {
    question: 'What\'s the difference between a BCBA and an RBT?',
    answer: 'A BCBA (Board Certified Behavior Analyst) is a master\'s-level clinician who designs the treatment plan and oversees your child\'s program. An RBT (Registered Behavior Technician) is a trained therapist who delivers the day-to-day therapy sessions under BCBA supervision.',
  },
  {
    question: 'How long does it take to see progress?',
    answer: 'Many families notice initial improvements within the first few weeks — especially in communication and compliance. Significant, sustained progress typically becomes evident within 3–6 months of consistent therapy.',
  },
  {
    question: 'Can therapy happen in other settings besides our home?',
    answer: 'Yes! While sessions are primarily home-based, therapists can also work with your child in community settings like parks, grocery stores, or playgrounds to practice skills in real-world environments.',
  },
];

export default function InHomeAbaTherapyPage() {
  return (
    <>
      <main id="main-content" className="w-full bg-white">
        {/* ===== HERO SECTION ===== */}
        <section className="relative border-b border-border-light overflow-hidden bg-white">
          <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 z-0 h-full">
            <Image
              src="/hero-image.png"
              alt="Therapist working with a child in a comfortable home setting"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>

          <div className="container-max relative z-10 py-10 md:py-12 lg:py-14">
            <div className="w-full lg:w-1/2 lg:pr-12 animate-fade-in-up">
              <span className="badge badge-primary mb-5">In-Home ABA Therapy</span>
              <h1 className="hero-headline text-dark mb-5">
                Meaningful progress, right where life happens.
              </h1>
              <p className="body-large text-text-secondary max-w-2xl mb-7">
                Our In-Home ABA therapy brings evidence-based, 1:1 support into the comfort of your home — 
                where your child feels safest, and where real-life skills are built naturally through 
                everyday moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-find-center w-full sm:w-auto">
                  Start Your Child&apos;s Journey
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                    <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                  </span>
                </a>
                <a href="#how-it-works" className="btn btn-tertiary btn-large w-full sm:w-auto rounded-full">
                  See How It Works
                </a>
              </div>

              <div className="block lg:hidden relative -mx-(--space-lg) w-[calc(100%+var(--space-lg)*2)] h-[32vh] min-h-[220px] max-h-[360px] mt-8">
                <Image
                  src="/hero-image.png"
                  alt="Therapist working with a child in a comfortable home setting"
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

        {/* ===== TRUST STATS BAR ===== */}
        <section className="bg-primary text-white py-6 md:py-8">
          <div className="container-max">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { stat: 'Evidence-Based', label: 'Endorsed by the U.S. Surgeon General', icon: 'solar:verified-check-bold-duotone' },
                { stat: '1:1 Therapy', label: 'Dedicated therapist for your child', icon: 'solar:user-check-bold-duotone' },
                { stat: 'BCBA Supervised', label: 'Master\'s-level clinical oversight', icon: 'solar:diploma-verified-bold-duotone' },
                { stat: 'Insurance Accepted', label: 'Most plans & Medicaid covered', icon: 'solar:shield-check-bold-duotone' },
              ].map((item) => (
                <div key={item.stat} className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                    <Icon icon={item.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base md:text-lg leading-tight mb-0.5">{item.stat}</p>
                    <p className="text-white/70 text-xs md:text-sm leading-snug mb-0">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHAT IS IN-HOME ABA ===== */}
        <section className="section bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="/homepage-about-us-image.jpeg"
                    alt="Child learning through play in their home environment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-lg p-4 md:p-5 border border-border-light max-w-[220px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                      <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-dark">Real-Life Learning</span>
                  </div>
                  <p className="text-xs text-text-secondary mb-0 leading-relaxed">Skills taught where they&apos;ll actually be used — at home.</p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="badge badge-info mb-4">What Is In-Home ABA?</span>
                <h2 className="text-dark mb-6">
                  Therapy that fits your family&apos;s life — not the other way around
                </h2>
                <p className="body-large text-text-secondary mb-6">
                  In-Home ABA (Applied Behavior Analysis) therapy delivers the same gold-standard treatment 
                  used in clinical settings, but within the comfort and familiarity of your own home. A 
                  dedicated therapist works 1:1 with your child, using positive reinforcement and play-based 
                  strategies to build meaningful skills.
                </p>
                <p className="text-text-secondary mb-8">
                  Because learning happens where your child lives, eats, and plays, skills generalize faster 
                  and more naturally. Parents become active participants — learning techniques that extend 
                  therapy&apos;s impact into every moment of your family&apos;s day.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Personalized to your child\'s unique goals', icon: 'solar:star-bold-duotone' },
                    { label: 'No commute — therapy comes to you', icon: 'solar:home-2-bold-duotone' },
                    { label: 'Siblings and family can participate', icon: 'solar:users-group-rounded-bold-duotone' },
                    { label: 'Flexible scheduling around your routine', icon: 'solar:clock-circle-bold-duotone' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <Icon icon={item.icon} className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-text-primary font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PARENT-POV OUTCOMES ===== */}
        <section className="section bg-[#F7FBF9]">
          <div className="container-max">
            <div className="section-header text-left md:text-center mb-12 md:mb-16">
              <span className="badge badge-secondary mb-4">What You&apos;ll See</span>
              <h2 className="text-dark text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Real progress you can see and feel at home
              </h2>
              <p className="body-large text-text-secondary max-w-3xl mx-auto">
                ABA therapy delivers measurable results. Here&apos;s what families experience when 
                therapy happens right where it matters most.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {parentOutcomes.map((outcome) => (
                <article
                  key={outcome.skill}
                  className="relative bg-white rounded-2xl p-7 md:p-8 border border-border-light hover:shadow-lg transition-all duration-300 group overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-1.5 h-full ${outcome.accent} rounded-l-2xl`} />
                  
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`shrink-0 w-12 h-12 rounded-2xl ${outcome.accentLight} ${outcome.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon icon={outcome.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-dark text-xl font-semibold mb-0 group-hover:text-primary transition-colors">{outcome.skill}</h3>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className={`text-2xl font-bold ${outcome.iconColor}`}>{outcome.stat}</span>
                        <span className="text-xs text-text-muted">{outcome.statLabel}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary text-base leading-relaxed mb-0">
                    <span className="font-semibold text-dark">{outcome.verb}</span>{' '}
                    {outcome.outcome}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== A SESSION IN YOUR HOME ===== */}
        <section id="how-it-works" className="section bg-white overflow-visible">
          <div className="container-max">
            <div className="section-header text-left md:text-center mb-12 md:mb-16">
              <span className="badge badge-accent mb-4">A Session in Your Home</span>
              <h2 className="text-dark mb-6">
                What a typical therapy session looks like
              </h2>
              <p className="body-large text-text-secondary max-w-3xl mx-auto">
                Each 2–3 hour session follows a purposeful rhythm designed to maximize engagement, 
                learning, and your involvement as a parent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sessionFlow.map((step, index) => (
                <article key={step.step} className={`relative bg-white rounded-2xl p-6 border-t-4 ${step.color} border-x border-b border-border-light hover:shadow-lg transition-all duration-300 group`}>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-4xl font-bold text-gray-200 font-primary">{step.step}</span>
                    <span className="text-xs font-semibold text-text-muted bg-gray-50 px-3 py-1 rounded-full">{step.duration}</span>
                  </div>
                  
                  <div className={`w-11 h-11 rounded-xl ${step.dotColor}/10 flex items-center justify-center mb-4`}>
                    <Icon icon={step.icon} className={`w-6 h-6 ${step.dotColor === 'bg-primary' ? 'text-primary' : step.dotColor === 'bg-[#FB9A31]' ? 'text-[#FB9A31]' : step.dotColor === 'bg-[#42AEEB]' ? 'text-tertiary' : 'text-[#EA3D6A]'}`} />
                  </div>

                  <h3 className="text-dark text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-0">{step.description}</p>

                  {index < sessionFlow.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <Icon icon="solar:arrow-right-bold" className="w-5 h-5 text-gray-300" />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHO IS IT FOR ===== */}
        <section className="section bg-[#D4EAFC]/30">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="badge badge-primary mb-4">Is In-Home Right for You?</span>
                <h2 className="text-dark mb-6">In-Home ABA may be the perfect fit if&hellip;</h2>
                <p className="body-large text-text-secondary mb-7">
                  Every family is different. In-Home ABA therapy works especially well for children and 
                  families who value learning in a natural, comfortable environment with high caregiver 
                  involvement.
                </p>
                <a href="#contact" className="btn btn-primary rounded-full px-8 inline-flex items-center gap-2">
                  Talk to a Specialist <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                </a>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {idealCandidates.map((candidate, index) => (
                    <article key={candidate.title} className="flex gap-4 items-start group p-5 rounded-2xl bg-white border border-border-light hover:shadow-md transition-all duration-300">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon icon={candidate.icon} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-dark text-base font-semibold mb-1.5 group-hover:text-primary transition-colors">{candidate.title}</h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-0">{candidate.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOME VS CENTER COMPARISON ===== */}
        <section className="section bg-white">
          <div className="container-max">
            <div className="section-header text-left md:text-center mb-12 md:mb-16">
              <span className="badge badge-info mb-4">Compare Options</span>
              <h2 className="text-dark mb-6">Finding the right setting for your child</h2>
              <p className="body-large text-text-secondary max-w-3xl mx-auto">
                Both in-home and center-based ABA therapy are effective. The best choice depends on 
                your child&apos;s needs and your family&apos;s situation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-0 rounded-2xl overflow-hidden border border-border-light shadow-sm">
                {/* Header */}
                <div className="bg-primary text-white p-5 md:p-6 flex items-center gap-3">
                  <Icon icon="solar:home-2-bold-duotone" className="w-6 h-6 shrink-0" />
                  <h3 className="!text-white text-lg font-semibold !mb-0">In-Home ABA</h3>
                </div>
                <div className="bg-tertiary text-white p-5 md:p-6 flex items-center gap-3">
                  <Icon icon="solar:buildings-2-bold-duotone" className="w-6 h-6 shrink-0" />
                  <h3 className="!text-white text-lg font-semibold !mb-0">Center-Based ABA</h3>
                </div>

                {comparisonData.map((row) => (
                  <div key={row.factor} className="col-span-full grid grid-cols-1 md:grid-cols-[1fr_1fr] contents">
                    <div className="col-span-full bg-gray-50 px-5 md:px-6 py-2.5 border-t border-border-light">
                      <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">{row.factor}</span>
                    </div>
                    <div className="p-5 md:p-6 bg-primary/[0.03] border-t border-r border-border-light">
                      <p className="text-sm text-text-primary leading-relaxed mb-0">{row.home}</p>
                    </div>
                    <div className="p-5 md:p-6 bg-white border-t border-border-light">
                      <p className="text-sm text-text-secondary leading-relaxed mb-0">{row.center}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-sm text-text-muted mt-6 italic">
                Not sure which is right? Our team will help you find the best fit during your free consultation.
              </p>
            </div>
          </div>
        </section>

        {/* ===== YOUR THERAPY TEAM ===== */}
        <section className="section bg-[#F7FBF9]">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="badge badge-secondary mb-4">Your Therapy Team</span>
                <h2 className="text-dark mb-6">Trusted professionals in your home</h2>
                <p className="body-large text-text-secondary mb-6">
                  Every family deserves to feel safe and confident with the professionals who enter their 
                  home. Our therapy teams are carefully vetted, extensively trained, and deeply committed 
                  to your child&apos;s growth.
                </p>
                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon icon="solar:diploma-verified-bold-duotone" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-dark text-lg font-semibold mb-1">BCBA (Board Certified Behavior Analyst)</h4>
                      <p className="text-text-secondary text-sm leading-relaxed mb-0">
                        A master&apos;s-level clinician who designs your child&apos;s treatment plan, sets goals, 
                        analyzes data, and provides weekly supervision to ensure the highest quality care.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-secondary/15 text-[#FB9A31] flex items-center justify-center">
                      <Icon icon="solar:user-check-bold-duotone" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-dark text-lg font-semibold mb-1">RBT (Registered Behavior Technician)</h4>
                      <p className="text-text-secondary text-sm leading-relaxed mb-0">
                        A trained and certified therapist who delivers the day-to-day sessions, building 
                        rapport with your child and implementing the treatment plan with compassion and skill.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Background Checked', desc: 'Comprehensive screening for every team member', icon: 'solar:shield-check-bold-duotone', bg: 'bg-primary/10', color: 'text-primary' },
                  { label: 'Ongoing Training', desc: '40+ hours of initial training plus continuing education', icon: 'solar:book-2-bold-duotone', bg: 'bg-secondary/15', color: 'text-[#FB9A31]' },
                  { label: 'Weekly Supervision', desc: 'BCBA oversight ensures treatment fidelity', icon: 'solar:eye-bold-duotone', bg: 'bg-tertiary/15', color: 'text-tertiary' },
                  { label: 'Consistent Team', desc: 'The same therapist works with your child each session', icon: 'solar:heart-bold-duotone', bg: 'bg-accent/10', color: 'text-[#EA3D6A]' },
                ].map((trust) => (
                  <article key={trust.label} className="p-5 rounded-2xl bg-white border border-border-light hover:shadow-md transition-shadow group">
                    <div className={`w-10 h-10 rounded-xl ${trust.bg} ${trust.color} flex items-center justify-center mb-3`}>
                      <Icon icon={trust.icon} className="w-5 h-5" />
                    </div>
                    <h4 className="text-dark text-sm font-semibold mb-1 group-hover:text-primary transition-colors">{trust.label}</h4>
                    <p className="text-text-secondary text-xs leading-relaxed mb-0">{trust.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== GETTING STARTED ===== */}
        <section className="section bg-white border-t border-border-light">
          <div className="container-max">
            <div className="section-header text-left md:text-center mb-12 md:mb-16">
              <span className="badge badge-primary mb-4">Getting Started</span>
              <h2 className="text-dark mb-6">Four simple steps to begin</h2>
              <p className="body-large text-text-secondary max-w-3xl mx-auto">
                We make starting therapy as straightforward as possible. From your first call to your 
                child&apos;s first session, we guide you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {gettingStartedSteps.map((step, index) => (
                <article key={step.number} className="relative text-center group">
                  <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon icon={step.icon} className="w-8 h-8" />
                  </div>
                  <span className={`text-sm font-bold ${step.color} mb-2 block`}>Step {step.number}</span>
                  <h3 className="text-dark text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-0">{step.description}</p>

                  {index < gettingStartedSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 z-10">
                      <Icon icon="solar:arrow-right-bold" className="w-5 h-5 text-gray-300" />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PREPARING YOUR HOME ===== */}
        <section className="section bg-[#FEF3E8]/40">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="badge badge-secondary mb-4">Helpful Tips</span>
                <h2 className="text-dark mb-4">Preparing your home for therapy</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  A few simple adjustments can make a big difference. Here&apos;s how to set your child 
                  and therapist up for success.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {homePrepTips.map((tip, index) => (
                  <div key={tip.title} className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-border-light group hover:shadow-md transition-all duration-300">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary/15 text-[#FB9A31] flex items-center justify-center">
                      <Icon icon={tip.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-dark text-base font-semibold mb-1 group-hover:text-primary transition-colors">{tip.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed mb-0">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== INSURANCE & FUNDING ===== */}
        <section className="section bg-white border-t border-border-light">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="badge badge-info mb-4">Insurance & Funding</span>
                <h2 className="text-dark mb-6">Therapy your family can access</h2>
                <p className="body-large text-text-secondary mb-6">
                  We believe every child who needs ABA therapy should be able to receive it. Our team 
                  handles the insurance and authorization process so you can focus on what matters most — 
                  your family.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Most private insurance plans accepted',
                    'Medicaid and Medical Assistance covered',
                    'Minnesota EIDBI program eligible',
                    'We verify benefits and handle authorizations',
                    'No hidden fees or surprise costs',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-text-primary text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-primary rounded-full px-8 inline-flex items-center gap-2">
                  Verify Your Coverage <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                </a>
              </div>

              <div className="bg-primary/[0.04] rounded-3xl p-8 md:p-10 border border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon icon="solar:hand-money-bold-duotone" className="w-6 h-6" />
                  </div>
                  <h3 className="text-dark text-xl font-semibold !mb-0">We make it simple</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { step: '1', text: 'Share your insurance information during your first call' },
                    { step: '2', text: 'We verify your benefits and confirm coverage details' },
                    { step: '3', text: 'We submit for authorization on your behalf' },
                    { step: '4', text: 'Therapy begins once authorization is approved' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center">{item.step}</span>
                      <p className="text-text-primary text-sm leading-relaxed mb-0 pt-0.5">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="section bg-[#F7FBF9]">
          <div className="container-max">
            <div className="section-header text-left md:text-center mb-12 md:mb-16">
              <span className="badge badge-primary mb-4">Common Questions</span>
              <h2 className="text-dark mb-6">Frequently asked questions</h2>
              <p className="body-large text-text-secondary max-w-3xl mx-auto">
                Starting therapy can feel overwhelming. Here are answers to the questions families 
                ask us most.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.question} className="group bg-white rounded-2xl border border-border-light overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-5 md:p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="text-dark text-base md:text-lg font-semibold !mb-0 group-hover:text-primary transition-colors pr-4">{faq.question}</h3>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <Icon icon="solar:add-circle-bold" className="w-5 h-5 text-text-muted" />
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <p className="text-text-secondary text-sm leading-relaxed mb-0">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="section bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

          <div className="container-max relative z-10 text-center">
            <h2 className="!text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to bring therapy home?
            </h2>
            <p className="body-large text-white/85 max-w-2xl mx-auto mb-8">
              Take the first step toward meaningful progress for your child. Our team is ready to 
              answer your questions and help you explore if In-Home ABA therapy is the right fit 
              for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-white text-primary font-semibold py-2 pl-6 pr-2 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 group w-full sm:w-auto text-lg">
                Begin Your Child&apos;s Journey
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon icon="solar:arrow-right-broken" className="w-6 h-6" />
                </span>
              </a>
              <a href="tel:612-284-5382" className="btn btn-tertiary btn-large rounded-full !border-white/40 !text-white hover:!bg-white/10 w-full sm:w-auto">
                Call (612) 284-5382
              </a>
            </div>
          </div>
        </section>

        {/* ===== CONTACT FORM ===== */}
        <ContactForm />
      </main>
    </>
  );
}
