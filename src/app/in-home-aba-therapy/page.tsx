import type { Metadata } from 'next';
import Link from 'next/link';
import InHomeAbaContent from './InHomeAbaContent';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/seo/JsonLd';
import { ORGANIZATION_ID, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'In-Home ABA Therapy in Minnesota',
  description:
    'In-Home ABA therapy brings 1:1, BCBA-supervised treatment to your home. Build communication, daily living, and social skills where your child feels safest. Insurance accepted.',
  keywords: [
    'in-home ABA therapy Minnesota',
    'home based autism therapy',
    'BCBA supervised ABA',
    'autism services at home',
    'EIDBI in-home ABA',
  ],
  openGraph: {
    title: 'In-Home ABA Therapy in Minnesota',
    description:
      'Personalized ABA therapy in your home. BCBA-supervised, insurance-accepted treatment for children with autism in Minnesota.',
    type: 'website',
    url: '/in-home-aba-therapy',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'In-Home ABA Therapy in Minnesota',
    description:
      'Build communication and daily living skills at home with BCBA-supervised ABA therapy.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/in-home-aba-therapy',
  },
};

const inHomeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/in-home-aba-therapy#service`,
      name: 'In-Home ABA Therapy',
      serviceType: 'Applied Behavior Analysis',
      provider: { '@id': ORGANIZATION_ID },
      areaServed: { '@type': 'State', name: 'Minnesota' },
      url: `${SITE_URL}/in-home-aba-therapy`,
    },
    {
      '@type': 'MedicalBusiness',
      '@id': `${SITE_URL}/in-home-aba-therapy#medical-business`,
      name: 'Dakota Autism Center In-Home Services',
      parentOrganization: { '@id': ORGANIZATION_ID },
      medicalSpecialty: 'Applied Behavior Analysis',
      areaServed: { '@type': 'State', name: 'Minnesota' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many hours per week will my child receive therapy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Session frequency is based on your child's individualized assessment. Most children receive 10–25 hours per week, though this can range from a few focused hours to a more intensive program depending on needs and goals.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does a parent need to be home during sessions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, a caregiver should be present in the home during sessions. This ensures safety and allows you to participate in parent coaching, observe techniques, and reinforce skills between sessions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What age groups do you serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide In-Home ABA therapy for children from 18 months through 21 years old. Early intervention is most effective before age 5, but individuals of all ages within this range benefit significantly from ABA therapy.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is progress measured and reported?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Data is collected during every session and reviewed weekly by your BCBA. You'll receive regular progress updates and formal quarterly reports showing your child's growth across all goal areas.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is In-Home ABA therapy covered by insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Most private insurance plans, Medicaid, and Minnesota's EIDBI program cover ABA therapy. We verify your benefits and handle the authorization process so you can focus on your family.",
          },
        },
        {
          '@type': 'Question',
          name: "What's the difference between a BCBA and an RBT?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A BCBA (Board Certified Behavior Analyst) is a master's-level clinician who designs the treatment plan and oversees your child's program. An RBT (Registered Behavior Technician) is a trained therapist who delivers the day-to-day therapy sessions under BCBA supervision.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to see progress?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many families notice initial improvements within the first few weeks — especially in communication and compliance. Significant, sustained progress typically becomes evident within 3–6 months of consistent therapy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can therapy happen in other settings besides our home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! While sessions are primarily home-based, therapists can also work with your child in community settings like parks, grocery stores, or playgrounds to practice skills in real-world environments.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my child is having a difficult day or refuses to engage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Difficult days are a normal part of therapy. Our therapists are trained to read your child's cues and adjust the session dynamically — shifting to lower-demand activities, preferred play, or sensory breaks when needed. The goal is always to end sessions on a positive note. Your BCBA will also review any patterns and update the treatment plan accordingly.",
          },
        },
        {
          '@type': 'Question',
          name: 'Will my other children at home be a distraction or involved in sessions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Siblings can actually be a wonderful asset! Our therapists are skilled at including siblings in natural play scenarios to build social and turn-taking skills. We work with your family to create a session structure that works for your whole household, not just your child receiving therapy.",
          },
        },
        {
          '@type': 'Question',
          name: 'What happens when my child is ready to transition to school or a center-based program?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Transitions are planned collaboratively. Your BCBA will work with you and any school or center team to ensure goals are aligned, strategies are shared, and your child experiences a smooth handoff. We can also coordinate directly with teachers and special education staff to support continuity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is telehealth an option for in-home ABA services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Telehealth can be used to supplement in-home therapy — particularly for parent coaching sessions, BCBA supervision check-ins, and goal review meetings. Direct, hands-on therapy with your child is most effective in person, but telehealth offers flexibility for consultations and caregiver training components.',
          },
        },
      ],
    },
  ],
};

export default function InHomeAbaTherapyPage() {
  return (
    <>
      <JsonLd id="in-home-schema" data={inHomeSchema} />
      <InHomeAbaContent />
      <section className="border-t border-border-light bg-white py-12">
        <div className="container-max">
          <h2 className="mb-4 text-2xl font-semibold text-primary">Explore related services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/center-based-aba-therapy" className="btn btn-tertiary rounded-full">
              Center-Based ABA Therapy
            </Link>
            <Link href="/insurance-and-funding" className="btn btn-tertiary rounded-full">
              Insurance and Funding
            </Link>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
