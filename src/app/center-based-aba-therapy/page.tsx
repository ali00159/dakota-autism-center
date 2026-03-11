import type { Metadata } from 'next';
import CenterBasedContent from './CenterBasedContent';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/seo/JsonLd';
import { ORGANIZATION_ID, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Center-Based ABA Therapy in Minnesota',
  description:
    'Center-based ABA therapy in Minnesota with personalized treatment plans, peer social learning, school-readiness goals, and family coaching.',
  keywords: [
    'center-based ABA therapy',
    'center based ABA therapy Minnesota',
    'ABA therapy for autism',
    'school readiness ABA',
    'ABA social skills program',
    'EIDBI ABA Minnesota',
    'Dakota Autism Center',
  ],
  openGraph: {
    title: 'Center-Based ABA Therapy in Minnesota',
    description:
      'A structured, child-centered ABA program supporting communication, social development, daily living skills, and school readiness in Minnesota.',
    type: 'website',
    url: '/center-based-aba-therapy',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Center-Based ABA Therapy in Minnesota',
    description:
      'Structured ABA therapy with social learning, school-readiness goals, and family coaching.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/center-based-aba-therapy',
  },
};

const centerBasedSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/center-based-aba-therapy#service`,
      name: 'Center-Based ABA Therapy',
      serviceType: 'Applied Behavior Analysis',
      provider: { '@id': ORGANIZATION_ID },
      areaServed: { '@type': 'State', name: 'Minnesota' },
      url: `${SITE_URL}/center-based-aba-therapy`,
    },
    {
      '@type': 'MedicalBusiness',
      '@id': `${SITE_URL}/center-based-aba-therapy#medical-business`,
      name: 'Dakota Autism Center',
      parentOrganization: { '@id': ORGANIZATION_ID },
      medicalSpecialty: 'Applied Behavior Analysis',
      areaServed: { '@type': 'State', name: 'Minnesota' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many hours of center-based ABA therapy are typical?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recommendations are individualized after assessment. Many children in comprehensive center-based programs receive 20-40 hours per week, while others benefit from a focused part-time schedule.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you need an autism diagnosis before starting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most insurance plans require a formal autism diagnosis for ABA coverage. If your family is still navigating diagnosis, our team can help guide next steps and local referral options.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does parent involvement look like in center-based care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Parents are active partners through regular updates, goal reviews, and coaching sessions. You receive practical strategies to support carryover at home and in community routines.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is progress measured?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our clinical team collects session data daily, reviews trends with BCBA oversight, and updates goals based on outcomes. Families receive clear progress reports and recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is center-based ABA covered by insurance or Minnesota EIDBI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many private plans and public funding pathways can cover ABA services when criteria are met. We support families through benefit verification, authorization requirements, and EIDBI-related steps.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if center-based or in-home ABA is better for my child?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both can be effective. Center-based is often preferred for school-readiness and peer goals, while in-home can be ideal for daily routine generalization. We help families choose based on child profile, goals, and logistics.',
          },
        },
      ],
    },
  ],
};

export default function CenterBasedAbaTherapyPage() {
  return (
    <>
      <JsonLd id="center-based-aba-schema" data={centerBasedSchema} />
      <CenterBasedContent />
      <ContactForm />
    </>
  );
}
