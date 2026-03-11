import type { Metadata } from 'next';
import Link from 'next/link';
import EidbiContent from './EidbiContent';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/seo/JsonLd';
import { ORGANIZATION_ID, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'EIDBI Services in Minnesota',
  description:
    'Minnesota EIDBI services including comprehensive evaluation, individual treatment plans, adaptive behavior therapy, and family training. Serving children and young adults with ASD under age 21.',
  keywords: [
    'EIDBI Minnesota',
    'EIDBI services',
    'autism Medicaid Minnesota',
    'CMDE evaluation',
    'ABA therapy EIDBI',
  ],
  openGraph: {
    title: 'EIDBI Services in Minnesota',
    description:
      'Early Intensive Developmental and Behavioral Intervention (EIDBI) for children with autism. Medically necessary treatment covered by Medical Assistance.',
    type: 'website',
    url: '/eidbi',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EIDBI Services in Minnesota',
    description:
      'Get guidance on eligibility, CMDE, and EIDBI-funded autism services for children under 21.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/eidbi',
  },
};

const eidbiSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/eidbi#service`,
      name: 'EIDBI Services',
      serviceType: 'Early Intensive Developmental and Behavioral Intervention',
      provider: { '@id': ORGANIZATION_ID },
      areaServed: { '@type': 'State', name: 'Minnesota' },
      url: `${SITE_URL}/eidbi`,
    },
    {
      '@type': 'GovernmentService',
      '@id': `${SITE_URL}/eidbi#government-service`,
      name: 'Minnesota EIDBI Benefit Navigation',
      provider: { '@id': ORGANIZATION_ID },
      serviceType: 'EIDBI intake and care coordination',
      areaServed: { '@type': 'State', name: 'Minnesota' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does EIDBI stand for and who funds it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "EIDBI stands for Early Intensive Developmental and Behavioral Intervention. It is a benefit funded by the Minnesota Department of Human Services (DHS) through the state's Medical Assistance programs — including Medical Assistance (MA), MinnesotaCare, TEFRA, and PMAP. It is not the same as private insurance; it is a state-funded benefit for qualifying Minnesota families.",
          },
        },
        {
          '@type': 'Question',
          name: 'How is EIDBI different from private insurance coverage for ABA therapy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'EIDBI is a state Medicaid benefit available to families enrolled in Minnesota Health Care Programs. Private insurance is employer- or marketplace-based coverage. Both can fund ABA therapy, but they follow different authorization processes, billing codes, and documentation requirements. Some families qualify for both simultaneously, and our team helps you understand how to coordinate coverage effectively.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does my child need an autism diagnosis to access EIDBI services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. To qualify for EIDBI, your child must have a diagnosis of Autism Spectrum Disorder (ASD) or a related condition, be under 21 years old, and be enrolled in a qualifying Minnesota Health Care Program. A Comprehensive Multi-Disciplinary Evaluation (CMDE) is also required to determine medical necessity before services begin.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a CMDE and why is it required for EIDBI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A CMDE (Comprehensive Multi-Disciplinary Evaluation) is a thorough assessment conducted by qualified professionals to determine whether EIDBI services are medically necessary for your child. It evaluates your child's developmental strengths and needs across multiple domains and forms the clinical foundation for the Individual Treatment Plan (ITP). Dakota Autism Center's qualified team conducts CMDEs as part of our EIDBI intake process.",
          },
        },
        {
          '@type': 'Question',
          name: 'How do I apply for EIDBI services at Dakota Autism Center?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The first step is to contact our intake team. We will verify your child's eligibility for EIDBI, confirm Medical Assistance enrollment, schedule the required CMDE evaluation, and guide you through the authorization process with Minnesota DHS. We handle all paperwork and follow up with the state on your behalf so the process moves as quickly as possible.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the EIDBI authorization process typically take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Timelines vary depending on documentation readiness and DHS review periods, but most families can expect the process from initial contact to therapy start to take several weeks. The CMDE must be completed and reviewed before services are authorized. Our team works proactively to prevent delays — gathering documentation early and following up with DHS regularly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can my child receive EIDBI services at home, at school, and in the community?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. EIDBI is designed to be delivered across multiple settings — including your home, our center, your child's school, and community environments. The appropriate service settings are determined by your child's Individual Treatment Plan and what will best support skill generalization. We coordinate across these environments to ensure consistent goals and strategies wherever your child is learning.",
          },
        },
        {
          '@type': 'Question',
          name: 'Are there any changes to the EIDBI program I should know about for 2025–2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Minnesota passed legislation in 2025 requiring all enrolled EIDBI agencies to obtain provisional licensure by May 31, 2026. Dakota Autism Center is actively navigating this process to ensure uninterrupted service for all families. Additionally, effective July 1, 2025, the Play Project and Early Social Interaction (ESI) modalities are no longer approved EIDBI treatment methods. We keep our treatment plans current with all DHS policy updates.',
          },
        },
      ],
    },
  ],
};

export default function EidbiPage() {
  return (
    <>
      <JsonLd id="eidbi-schema" data={eidbiSchema} />
      <EidbiContent />
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
