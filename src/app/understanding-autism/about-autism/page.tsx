import type { Metadata } from 'next';
import AboutAutismContent from './AboutAutismContent';

export const metadata: Metadata = {
  title: 'Understanding Autism for Parents | Dakota Autism Center',
  description:
    'Research-backed parent guide to understanding autism: early signs, diagnosis, evidence-based support options, and trusted resources for deeper learning.',
  openGraph: {
    title: 'Understanding Autism for Parents',
    description:
      'A practical, evidence-informed autism guide for families, with diagnosis basics, treatment literacy, and trusted sources.',
  },
  alternates: {
    canonical: '/understanding-autism/about-autism',
  },
};

export default function AboutAutismPage() {
  return <AboutAutismContent />;
}
