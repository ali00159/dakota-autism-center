import type { Metadata } from 'next';
import Link from 'next/link';
import CulturallyResponsiveContent from './CulturallyResponsiveContent';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/seo/JsonLd';
import { ORGANIZATION_ID, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Culturally Responsive ABA Therapy',
  description:
    'Discover culturally responsive ABA therapy in Minnesota. Dakota Autism Center provides family-centered, multilingual, and culturally respectful autism services tailored to your routines and values.',
  keywords: [
    'culturally responsive ABA therapy',
    'cultural competence autism services',
    'multilingual ABA therapy Minnesota',
    'family-centered autism therapy',
    'culturally sensitive autism care',
  ],
  openGraph: {
    title: 'Culturally Responsive ABA Therapy',
    description:
      'Family-centered ABA care designed around your language, values, and daily life. Explore Dakota Autism Center cultural competency services.',
    type: 'website',
    url: '/culturally-responsive-aba-therapy',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Culturally Responsive ABA Therapy',
    description:
      'Family-centered ABA built around language, culture, and real routines in Minnesota.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/culturally-responsive-aba-therapy',
  },
};

const culturallyResponsiveSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/culturally-responsive-aba-therapy#service`,
      name: 'Culturally Responsive ABA Therapy',
      serviceType: 'Applied Behavior Analysis',
      provider: { '@id': ORGANIZATION_ID },
      areaServed: { '@type': 'State', name: 'Minnesota' },
      url: `${SITE_URL}/culturally-responsive-aba-therapy`,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is culturally responsive ABA therapy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Culturally responsive ABA therapy adapts clinical strategies to your family values, language needs, routines, and community context so treatment feels respectful and useful in daily life.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer multilingual autism therapy support in Minnesota?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We support multilingual and interpreter-informed care planning so families can participate fully in treatment decisions, parent coaching, and progress review conversations.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is this different from standard ABA programs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard programs often begin with generic templates. Our team starts with family context and co-creates goals that reflect communication style, cultural expectations, and realistic routines.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can culturally competent ABA therapy still be data-driven?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We keep evidence-based measurement and clinical rigor while making goals, reinforcement, and coaching methods relevant to your child and family.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it harmful to teach my child in two languages during ABA therapy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No — research consistently shows that bilingualism does not negatively impact language development in children with autism. In fact, studies find that bilingual ABA instruction can produce more vocalizations, better vocabulary outcomes, and stronger responses than instruction in one language alone. We support heritage language use and incorporate both languages into your child's treatment plan.",
          },
        },
        {
          '@type': 'Question',
          name: "Can I request a therapist who shares my family's cultural or linguistic background?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We do our best to match families with therapists who share relevant language skills or cultural familiarity when team composition allows. Even when an exact match is not available, all of our clinicians are trained in cultural humility practices and work closely with interpreter and community resources to ensure your family feels understood and respected.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you handle cultural or religious practices that may affect session scheduling or activities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We build scheduling and therapy activities around your family's calendar — including religious observances, cultural holidays, and family routines. Our goal-setting process explicitly incorporates your cultural context so that reinforcers, social expectations, and daily living targets align with what matters in your home.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do you have experience supporting immigrant and refugee families in Minnesota?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Minnesota has one of the largest and most diverse immigrant communities in the country, and we have worked with many families navigating both autism services and broader systems challenges. We provide plain-language explanations, interpreter coordination, and a patient onboarding process so that unfamiliarity with the healthcare or insurance system never becomes a barrier to your child receiving care.',
          },
        },
      ],
    },
  ],
};

export default function CulturallyResponsiveAbaTherapyPage() {
  return (
    <>
      <JsonLd id="culturally-responsive-schema" data={culturallyResponsiveSchema} />
      <CulturallyResponsiveContent />
      <section className="border-t border-border-light bg-white py-12">
        <div className="container-max">
          <h2 className="mb-4 text-2xl font-semibold text-primary">Explore related services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/center-based-aba-therapy" className="btn btn-tertiary rounded-full">
              Center-Based ABA Therapy
            </Link>
            <Link href="/in-home-aba-therapy" className="btn btn-tertiary rounded-full">
              In-Home ABA Therapy
            </Link>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
