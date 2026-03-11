import type { Metadata } from 'next';
import InsuranceFundingContent from './InsuranceFundingContent';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Insurance and Funding for ABA Therapy',
  description:
    'Understand autism therapy insurance and funding options in Minnesota, including private plans, EIDBI guidance, and culturally responsive support from Dakota Autism Center.',
  keywords: [
    'ABA therapy insurance Minnesota',
    'EIDBI funding',
    'autism therapy coverage',
    'Minnesota autism funding',
    'ABA authorization help',
  ],
  openGraph: {
    title: 'Insurance and Funding for ABA Therapy',
    description:
      'A clear, family-friendly guide to autism insurance coverage and funding pathways in Minnesota, with culturally competent support from Dakota Autism Center.',
    type: 'website',
    url: '/insurance-and-funding',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance and Funding for ABA Therapy',
    description:
      'Get a clear roadmap for insurance approvals, EIDBI options, and coverage continuity.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/insurance-and-funding',
  },
};

const insuranceFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What insurance plans do you accept for ABA therapy in Minnesota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coverage options vary by plan and network. Our team verifies eligibility and authorization details with you before services begin so you have clear expectations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Dakota Autism Center help with EIDBI funding navigation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We help families understand EIDBI requirements, documentation pathways, and how EIDBI can align with a child-specific treatment plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does cultural competence affect funding and treatment planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cultural competence improves clarity, trust, and follow-through. We incorporate language preference, caregiver priorities, and family context when discussing both financing and care goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my insurance changes after therapy starts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We proactively review transition options and discuss alternate pathways so families can protect treatment continuity whenever possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does my child need an official autism diagnosis before insurance will cover ABA therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most insurance plans in Minnesota require a formal ASD diagnosis from a licensed professional — such as a developmental pediatrician, psychologist, or neurologist — before authorizing ABA therapy. If your child does not yet have a diagnosis, our intake team can point you toward evaluation resources.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the prior authorization process take in Minnesota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timelines vary by insurer, but most prior authorizations are resolved within 5–15 business days once complete documentation is submitted. Our team handles all paperwork and follows up with your insurer directly to minimize delays so therapy can begin as quickly as possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my insurance denies coverage for ABA therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A denial is not the end of the road. We help families understand the reason for denial, gather additional clinical documentation, and file appeals on your behalf when appropriate. We also explore alternate funding pathways — including EIDBI, Medical Assistance, and Minnesota's autism insurance mandate protections — to keep your child's care on track.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between EIDBI and private insurance coverage for ABA therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EIDBI is a Minnesota Department of Human Services benefit available to families enrolled in Medical Assistance (Medicaid) programs such as MA, MinnesotaCare, or PMAP. Private insurance is employer- or marketplace-based coverage. Some families can access both simultaneously depending on their situation. Our team clarifies which programs apply to your family and helps you maximize your available benefits.',
      },
    },
  ],
};

export default function InsuranceAndFundingPage() {
  return (
    <>
      <JsonLd id="insurance-faq-schema" data={insuranceFaqSchema} />
      <InsuranceFundingContent />
      <ContactForm />
    </>
  );
}
