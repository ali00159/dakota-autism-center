import type { Metadata } from 'next';
import Link from 'next/link';
import AboutAutismContent from './AboutAutismContent';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/seo/JsonLd';
import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Understanding Autism for Parents',
  description:
    'Research-backed parent guide to understanding autism: early signs, diagnosis, evidence-based support options, and trusted resources for deeper learning.',
  keywords: [
    'understanding autism',
    'autism signs in children',
    'autism parent guide',
    'autism resources Minnesota',
    'evidence-based autism support',
  ],
  openGraph: {
    title: 'Understanding Autism for Parents',
    description:
      'A practical, evidence-informed autism guide for families, with diagnosis basics, treatment literacy, and trusted sources.',
    type: 'website',
    url: '/understanding-autism',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding Autism for Parents',
    description:
      'Learn early signs, diagnosis pathways, and support options for children with autism.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/understanding-autism',
  },
};

const understandingAutismSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': `${SITE_URL}/understanding-autism#webpage`,
  url: `${SITE_URL}/understanding-autism`,
  name: 'Understanding Autism for Parents',
  description:
    'Research-backed parent guide to understanding autism: early signs, diagnosis, evidence-based support options, and trusted resources for deeper learning.',
  about: { '@id': ORGANIZATION_ID },
  isPartOf: { '@id': WEBSITE_ID },
  inLanguage: 'en-US',
};

export default function AboutAutismPage() {
  return (
    <>
      <JsonLd id="understanding-autism-schema" data={understandingAutismSchema} />
      <AboutAutismContent />
      <section className="border-t border-border-light bg-white py-12">
        <div className="container-max">
          <h2 className="mb-4 text-2xl font-semibold text-primary">Explore therapy options</h2>
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
