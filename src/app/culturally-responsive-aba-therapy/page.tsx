import type { Metadata } from 'next';
import CulturallyResponsiveContent from './CulturallyResponsiveContent';

export const metadata: Metadata = {
  title:
    'Culturally Responsive ABA Therapy in Minnesota | Dakota Autism Center',
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
    title: 'Culturally Responsive ABA Therapy in Minnesota',
    description:
      'Family-centered ABA care designed around your language, values, and daily life. Explore Dakota Autism Center cultural competency services.',
  },
  alternates: {
    canonical: '/culturally-responsive-aba-therapy',
  },
};

export default function CulturallyResponsiveAbaTherapyPage() {
  return <CulturallyResponsiveContent />;
}
