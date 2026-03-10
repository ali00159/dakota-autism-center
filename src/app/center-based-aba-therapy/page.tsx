import type { Metadata } from 'next';
import Script from 'next/script';
import CenterBasedContent from './CenterBasedContent';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Center-Based ABA Therapy in Minnesota | Dakota Autism Center',
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
    title: 'Center-Based ABA Therapy in Minnesota | Dakota Autism Center',
    description:
      'A structured, child-centered ABA program supporting communication, social development, daily living skills, and school readiness in Minnesota.',
    type: 'website',
  },
  alternates: {
    canonical: '/center-based-aba-therapy',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
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
      name: 'Is center-based ABA covered by insurance or Minnesota EIDBI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many private plans and public funding pathways can cover ABA services when criteria are met. We support families through benefit verification, authorization requirements, and EIDBI-related steps.',
      },
    },
  ],
};

export default function CenterBasedAbaTherapyPage() {
  return (
    <>
      <Script
        id="center-based-aba-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CenterBasedContent />
      <ContactForm />
    </>
  );
}
