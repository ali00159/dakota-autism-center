import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from '@/lib/seo';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'ABA Therapy in Minnesota',
  description:
    'Personalized ABA therapy, early intervention, and family support in a calm, nurturing environment. Center-based, in-home, and EIDBI services. Insurance accepted.',
  keywords: [
    'ABA therapy Minnesota',
    'autism therapy Minneapolis',
    'center-based ABA',
    'in-home ABA therapy',
    'EIDBI services',
  ],
  openGraph: {
    title: 'ABA Therapy in Minnesota',
    description:
      'Personalized autism services designed for clarity and growth. We foster safe, trusting environments where your child can navigate the world with confidence.',
    type: 'website',
    url: '/',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Minnesota',
    description:
      'Center-based, in-home, and EIDBI autism services for Minnesota families.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/',
  },
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': `${SITE_URL}/#medical-business`,
      name: 'Dakota Autism Center',
      url: SITE_URL,
      parentOrganization: { '@id': ORGANIZATION_ID },
      medicalSpecialty: 'Applied Behavior Analysis',
      areaServed: { '@type': 'State', name: 'Minnesota' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'ABA Therapy Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Center-Based ABA Therapy' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'In-Home ABA Therapy' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Family Training' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EIDBI Services' } },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#home`,
      url: SITE_URL,
      name: 'ABA Therapy in Minnesota',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORGANIZATION_ID },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd id="home-schema" data={homeSchema} />
      <HomeContent />
    </>
  );
}
