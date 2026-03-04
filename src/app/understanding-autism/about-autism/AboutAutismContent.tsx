import Link from 'next/link';
import {
  BookOpenText,
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileSearch,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react';

const coreAutismFacts = [
  {
    title: 'What autism is',
    description:
      'Autism Spectrum Disorder (ASD) is a neurodevelopmental condition. It can affect social communication, behavior patterns, and sensory processing.',
    icon: BrainCircuit,
    tone: 'bg-primary/10 text-primary',
  },
  {
    title: 'How common it is',
    description:
      'CDC surveillance data (2022 monitoring year) reports about 1 in 31 children age 8 identified with ASD in monitored U.S. communities.',
    icon: FileSearch,
    tone: 'bg-[#E5F4FC] text-tertiary',
  },
  {
    title: 'Why early action matters',
    description:
      'Earlier identification and support can improve communication, adaptive skills, and family quality of life over time.',
    icon: CalendarClock,
    tone: 'bg-[#FEF3E8] text-[#FB9A31]',
  },
];

const signsByStage = [
  {
    stage: 'Around 9-12 months',
    signs: [
      'Limited response to name',
      'Fewer social gestures (like waving)',
      'Less shared eye contact or facial expression',
    ],
  },
  {
    stage: 'Around 15-24 months',
    signs: [
      'Limited pointing or showing objects of interest',
      'Delayed social play and imitation',
      'Repetitive movements or strong distress with routine changes',
    ],
  },
  {
    stage: 'Preschool years and beyond',
    signs: [
      'Difficulty with back-and-forth social interaction',
      'Restricted interests and repetitive speech/behaviors',
      'Sensory sensitivities affecting daily routines',
    ],
  },
];

const diagnosticPath = [
  'Share concerns with your pediatrician and request formal developmental screening.',
  'If needed, complete a comprehensive diagnostic evaluation with qualified specialists.',
  'Use multi-source assessment: caregiver history, observation, and standardized tools.',
  'Build a treatment plan that includes therapy goals plus family training and support.',
];

const supportsWithEvidence = [
  {
    support: 'Behavioral interventions (including ABA variants)',
    detail:
      'Often strongest evidence base for improving targeted communication, learning, and adaptive outcomes when individualized.',
  },
  {
    support: 'Speech-language therapy',
    detail:
      'Supports expressive/receptive communication, pragmatic language, and augmentative communication where needed.',
  },
  {
    support: 'Occupational therapy',
    detail:
      'Targets daily living skills, motor planning, sensory regulation, and participation in routines at home/school.',
  },
  {
    support: 'Caregiver coaching',
    detail:
      'Parent and caregiver training helps children generalize progress beyond clinic sessions into daily family life.',
  },
];

const mythsAndFacts = [
  {
    myth: '“Autism has one single profile.”',
    fact: 'Autism is a spectrum; support needs and strengths vary from person to person.',
  },
  {
    myth: '“Children should wait and see before any support.”',
    fact: 'Guidelines emphasize acting on concerns early instead of delaying intervention.',
  },
  {
    myth: '“Every therapy claiming results is evidence-based.”',
    fact: 'Families should ask for peer-reviewed evidence, risks, and measurable goals.',
  },
];

const parentResearchChecklist = [
  'Ask what outcomes are measured and how progress is tracked over time.',
  'Request the evidence level for each recommended therapy (not just testimonials).',
  'Confirm caregiver training is included, structured, and practical for home routines.',
  'Check whether goals are individualized, culturally responsive, and revisited regularly.',
  'Review safety plans, transition planning, and school/community coordination.',
];

const references = [
  {
    label: 'CDC: Signs and Symptoms of ASD',
    href: 'https://www.cdc.gov/autism/signs-symptoms/index.html',
  },
  {
    label: 'CDC: Clinical Testing and Diagnosis',
    href: 'https://www.cdc.gov/autism/hcp/diagnosis/index.html',
  },
  {
    label: 'CDC: Data and Statistics',
    href: 'https://www.cdc.gov/autism/data-research/index.html',
  },
  {
    label: 'AAP Guideline Summary (AAFP)',
    href: 'https://www.aafp.org/pubs/afp/issues/2020/1115/p629.html',
  },
  {
    label: 'Minnesota DHS: EIDBI Benefit',
    href: 'https://mn.gov/dhs/eidbi/index.jsp',
  },
  {
    label: 'NIMH: Autism Spectrum Disorder',
    href: 'https://www.nimh.nih.gov/health/publications/autism-spectrum-disorder',
  },
];

export default function AboutAutismContent() {
  return (
    <main id="main-content" className="w-full bg-white">
      <section className="relative border-b border-border-light overflow-hidden bg-white">
        <div className="absolute -top-10 right-0 w-72 h-72 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-14 left-0 w-64 h-64 rounded-full bg-tertiary/10 blur-3xl pointer-events-none" />

        <div className="container-max relative py-12 md:py-14 lg:py-16">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <span className="badge badge-info mb-4">Parent Learning Center</span>
            <h1 className="hero-headline text-dark mb-5">
              Understanding Autism:
              <span className="text-primary"> a research-backed guide for parents</span>
            </h1>
            <p className="body-large text-text-secondary max-w-3xl mx-auto mb-7">
              This page is designed to help families build a clear, evidence-informed understanding of autism and make confident decisions about next steps. It combines clinical guidance, practical parent questions, and trusted sources for deeper study.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#diagnosis-path" className="btn-find-center w-full sm:w-auto bg-primary!">
                Start With Diagnosis Basics
              </a>
              <a href="#trusted-sources" className="btn btn-tertiary btn-large w-full sm:w-auto rounded-full">
                View Research Sources
              </a>
            </div>
            <p className="text-sm text-text-muted mt-6 mb-0">
              Educational content only. This is not medical advice and does not replace a clinical evaluation.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreAutismFacts.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border-light bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.tone} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-dark text-[26px] leading-[1.2] mb-3">{item.title}</h2>
                  <p className="text-text-secondary mb-0 leading-relaxed">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[#F7FBF9]">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Signs Over Time</span>
            <h2 className="text-dark mb-5">Early signs can look different at different ages</h2>
            <p className="body-large text-text-secondary mb-0">
              No single sign confirms autism, but patterns across social communication, behavior, and sensory responses can indicate the need for screening.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {signsByStage.map((item, index) => (
              <article key={item.stage} className="rounded-2xl bg-white border border-border-light p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary-light text-primary font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <h3 className="text-xl text-dark mb-0">{item.stage}</h3>
                </div>
                <ul className="space-y-3 mb-0">
                  {item.signs.map((sign) => (
                    <li key={sign} className="flex items-start gap-2.5 text-text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnosis-path" className="section bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 rounded-3xl border border-border-light bg-[#FCFDFC] p-7 md:p-9 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6" aria-hidden="true" />
                </span>
                <h2 className="text-dark mb-0">How diagnosis typically works</h2>
              </div>
              <ol className="space-y-4 mb-0">
                {diagnosticPath.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="w-7 h-7 rounded-full bg-white border border-border-medium text-primary font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-text-secondary leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="lg:col-span-5 rounded-3xl border border-border-light bg-[#FEF3E8] p-7 md:p-9 shadow-sm">
              <span className="badge badge-secondary mb-3">Parent Reminder</span>
              <h3 className="text-dark mb-4">Bring this to your first evaluation visit</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-text-secondary">
                  <BookOpenText className="w-5 h-5 text-[#FB9A31] shrink-0 mt-0.5" />
                  Development concerns you have noticed at home or school.
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <Compass className="w-5 h-5 text-[#FB9A31] shrink-0 mt-0.5" />
                  Prior reports (speech, OT, behavioral, educational, medical).
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <HeartHandshake className="w-5 h-5 text-[#FB9A31] shrink-0 mt-0.5" />
                  Your top family priorities for communication, safety, and daily routines.
                </li>
              </ul>
              <Link href="/eidbi" className="btn btn-primary w-full justify-center rounded-full">
                Explore Minnesota EIDBI Details
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-[#F5F5F5]">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge badge-accent mb-4">Evidence-Based Support</span>
            <h2 className="text-dark mb-5">What to prioritize in treatment planning</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportsWithEvidence.map((item) => (
              <article key={item.support} className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
                <h3 className="text-dark text-2xl mb-3">{item.support}</h3>
                <p className="text-text-secondary leading-relaxed mb-0">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="rounded-3xl border border-border-light bg-white p-7 md:p-9 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-xl bg-[#FDE8EE] text-accent flex items-center justify-center">
                  <Sparkles className="w-5 h-5" aria-hidden="true" />
                </span>
                <h2 className="text-dark mb-0">Myths and facts</h2>
              </div>
              <div className="space-y-4">
                {mythsAndFacts.map((item) => (
                  <div key={item.myth} className="rounded-2xl border border-border-light bg-[#FAFAFA] p-5">
                    <p className="text-dark font-semibold mb-2">Myth: {item.myth}</p>
                    <p className="text-text-secondary mb-0">Fact: {item.fact}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-border-light bg-[#E8F4F0] p-7 md:p-9 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-xl bg-white text-primary flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </span>
                <h2 className="text-dark mb-0">Parent research checklist</h2>
              </div>
              <ul className="space-y-3 mb-0">
                {parentResearchChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <Stethoscope className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="trusted-sources" className="section bg-primary text-white">
        <div className="container-max">
          <div className="max-w-3xl mb-10">
            <span className="badge bg-white/15 text-white mb-4">Deep Research Sources</span>
            <h2 className="text-white! mb-4">Trusted references for deeper reading</h2>
            <p className="text-white/90 body-large mb-0">
              Start with public health guidance and professional clinical recommendations. Then compare how providers explain goals, evidence quality, and family outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {references.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 bg-white/8 hover:bg-white/12 transition-colors p-5 text-white no-underline"
              >
                <span className="inline-flex items-center gap-2 font-semibold">
                  <BookOpenText className="w-4 h-4" aria-hidden="true" />
                  {source.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
