import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Dakota Autism Center — Evidence-Based ABA Therapy in Minnesota',
  description:
    'Personalized ABA therapy, early intervention, and family support in a calm, nurturing environment. Center-based, in-home, and EIDBI services. Insurance accepted.',
  openGraph: {
    title: 'Dakota Autism Center — Evidence-Based ABA Therapy in Minnesota',
    description:
      'Personalized autism services designed for clarity and growth. We foster safe, trusting environments where your child can navigate the world with confidence.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomeContent />;
}
