'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FAQ from '@/components/FAQ';

const differencePillars = [
  {
    title: 'Language Access That Is Actually Usable',
    detail:
      'Families can request bilingual support and interpreter coordination so clinical conversations stay clear, respectful, and actionable.',
    icon: 'solar:translation-bold-duotone',
    tone: 'bg-primary/10 text-primary',
  },
  {
    title: 'Goals Built Around Family Values',
    detail:
      'We shape communication, social, and daily living goals around what matters in your home, not only what appears on standard templates.',
    icon: 'solar:target-bold-duotone',
    tone: 'bg-secondary/15 text-[#FB9A31]',
  },
  {
    title: 'Caregiver Partnership, Not Caregiver Homework',
    detail:
      'Parent coaching is integrated into real routines so strategies feel practical during meals, transitions, and community activities.',
    icon: 'solar:users-group-rounded-bold-duotone',
    tone: 'bg-tertiary/15 text-tertiary',
  },
  {
    title: 'Cross-Setting Coordination',
    detail:
      'When appropriate, we align supports across home, center, school, and community settings to reduce mixed messages for your child.',
    icon: 'solar:route-bold-duotone',
    tone: 'bg-accent/10 text-accent',
  },
];

const marketComparison = [
  {
    focus: 'Cultural competence messaging',
    commonPattern:
      'Most providers mention culturally sensitive care as a single line item in a broad services list.',
    dakotaDifference:
      'We operationalize it through structured intake questions, family-priority goal writing, and routine coaching in context.',
  },
  {
    focus: 'Multilingual support',
    commonPattern:
      'Many agencies note interpreter availability, but families are often left to coordinate logistics and timing.',
    dakotaDifference:
      'We plan language support early so families can participate in treatment decisions from day one.',
  },
  {
    focus: 'Family involvement',
    commonPattern:
      'Parent training is offered, but often in generalized formats that are harder to apply during real routines.',
    dakotaDifference:
      'We focus on in-the-moment coaching tied to your home rhythms, cultural practices, and communication style.',
  },
  {
    focus: 'Generalization beyond sessions',
    commonPattern:
      'Many programs emphasize session performance first, then transfer later.',
    dakotaDifference:
      'We design goals for transfer from the start so skills are used where your child actually lives and learns.',
  },
];

const familyChecklist = [
  'Ask how your culture and family priorities are documented in the treatment plan.',
  'Confirm how interpreter or bilingual support is provided for assessments and parent coaching.',
  'Ask for examples of goals adapted to your routines, traditions, and home language.',
  'Request details on how school and community partners are coordinated when needed.',
];

const faqItems = [
  {
    q: 'What is culturally responsive ABA therapy?',
    a: 'Culturally responsive ABA therapy adapts clinical strategies to your family values, language needs, routines, and community context so treatment feels respectful and useful in daily life.',
  },
  {
    q: 'Do you offer multilingual autism therapy support in Minnesota?',
    a: 'Yes. We support multilingual and interpreter-informed care planning so families can participate fully in treatment decisions, parent coaching, and progress review conversations.',
  },
  {
    q: 'How is this different from standard ABA programs?',
    a: 'Standard programs often begin with generic templates. Our team starts with family context and co-creates goals that reflect communication style, cultural expectations, and realistic routines.',
  },
  {
    q: 'Can culturally competent ABA therapy still be data-driven?',
    a: 'Absolutely. We keep evidence-based measurement and clinical rigor while making goals, reinforcement, and coaching methods relevant to your child and family.',
  },
  {
    q: 'Is it harmful to teach my child in two languages during ABA therapy?',
    a: 'No — research consistently shows that bilingualism does not negatively impact language development in children with autism. In fact, studies find that bilingual ABA instruction can produce more vocalizations, better vocabulary outcomes, and stronger responses than instruction in one language alone. We support heritage language use and incorporate both languages into your child\'s treatment plan.',
  },
  {
    q: 'Can I request a therapist who shares my family\'s cultural or linguistic background?',
    a: 'We do our best to match families with therapists who share relevant language skills or cultural familiarity when team composition allows. Even when an exact match is not available, all of our clinicians are trained in cultural humility practices and work closely with interpreter and community resources to ensure your family feels understood and respected.',
  },
  {
    q: 'How do you handle cultural or religious practices that may affect session scheduling or activities?',
    a: 'We build scheduling and therapy activities around your family\'s calendar — including religious observances, cultural holidays, and family routines. Our goal-setting process explicitly incorporates your cultural context so that reinforcers, social expectations, and daily living targets align with what matters in your home.',
  },
  {
    q: 'Do you have experience supporting immigrant and refugee families in Minnesota?',
    a: 'Yes. Minnesota has one of the largest and most diverse immigrant communities in the country, and we have worked with many families navigating both autism services and broader systems challenges. We provide plain-language explanations, interpreter coordination, and a patient onboarding process so that unfamiliarity with the healthcare or insurance system never becomes a barrier to your child receiving care.',
  },
];

export default function CulturallyResponsiveContent() {
  return (
    <main id="main-content" className="w-full bg-white">
      <section className="border-b border-border-light bg-white">
        <div className="container-max py-14 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="badge badge-primary mb-5">
              Culturally Responsive Care
            </span>
            <h1 className="hero-headline text-dark mb-6">
              ABA therapy that respects your culture, language, and family life.
            </h1>
            <p className="body-large text-text-secondary max-w-3xl mx-auto mb-8">
              Many families searching for culturally responsive ABA therapy in
              Minnesota see the same promises across provider websites. Our
              approach goes further by translating cultural competence into
              practical treatment planning, caregiver coaching, and measurable
              progress in your real routines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="btn-find-center w-full sm:w-auto bg-[#FB9A31]!">
                Talk With Our Team
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                  <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                </span>
              </Link>
              <a
                href="#compare"
                className="btn btn-tertiary btn-large rounded-full w-full sm:w-auto"
              >
                See The Difference
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-[#F7FBF9]">
        <div className="container-max">
          <div className="section-header text-left md:text-center mb-12 md:mb-14">
            <span className="badge badge-secondary mb-4">Our Framework</span>
            <h2 className="text-dark mb-6">
              What cultural competence looks like in practice
            </h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              We combine evidence-based ABA with culturally informed planning so
              treatment can work across home, school, and community settings
              without asking families to set aside identity or values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differencePillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-border-light bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${pillar.tone} flex items-center justify-center mb-4`}
                >
                  <Icon icon={pillar.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-dark text-xl font-semibold mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-0">
                  {pillar.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="section bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8 rounded-3xl border border-border-light bg-[#FCFDFC] p-6 md:p-8 lg:p-10 shadow-sm">
              <span className="badge badge-info mb-3">Competitor Analysis</span>
              <h2 className="text-dark mb-5">
                Where providers sound similar, and where we are different
              </h2>
              <p className="text-text-secondary mb-7">
                We reviewed regional and national culturally responsive autism
                service messaging. Most providers emphasize personalization,
                multilingual options, and family-centered care. The key gap is
                how consistently those commitments show up in everyday treatment
                design and coaching.
              </p>

              <div className="space-y-4">
                {marketComparison.map((row) => (
                  <article
                    key={row.focus}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl border border-border-light bg-white p-5"
                  >
                    <div>
                      <p className="text-sm font-bold text-dark mb-1">
                        {row.focus}
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#F5F5F5] p-4">
                      <p className="text-xs uppercase tracking-wide text-text-muted font-semibold mb-2">
                        Common market pattern
                      </p>
                      <p className="text-sm text-text-secondary mb-0">
                        {row.commonPattern}
                      </p>
                    </div>
                    <div className="rounded-xl bg-primary/10 p-4 border border-primary/15">
                      <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">
                        Dakota difference
                      </p>
                      <p className="text-sm text-dark mb-0">
                        {row.dakotaDifference}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 rounded-3xl border border-border-light bg-[#FEF3E8] p-6 md:p-8 shadow-sm">
              <span className="badge badge-secondary mb-3">Family Checklist</span>
              <h3 className="text-dark mb-4">Questions to ask any provider</h3>
              <ul className="space-y-4 mb-7">
                {familyChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white border border-secondary/30 text-[#FB9A31] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon icon="solar:check-circle-bold" className="w-4 h-4" />
                    </span>
                    <span className="text-text-secondary text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className="btn btn-primary w-full justify-center rounded-full">
                Schedule A Consultation
                <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <FAQ
        badge="Frequently Asked Questions"
        title="Cultural competency and autism services in Minnesota"
        items={faqItems.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <section className="section bg-primary text-white text-center">
        <div className="container-max">
          <h2 className="text-white! mb-6">Looking for culturally competent autism care?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Our team can help you understand options, verify coverage, and build
            a plan that fits your child and family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary font-semibold py-2 pl-6 pr-2 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 group w-full sm:w-auto text-lg"
            >
              Contact Our Team
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
