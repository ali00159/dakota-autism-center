import type { Metadata } from 'next';
import InHomeAbaContent from './InHomeAbaContent';

export const metadata: Metadata = {
  title: 'In-Home ABA Therapy — Evidence-Based Support at Home | Dakota Autism Center',
  description:
    'In-Home ABA therapy brings 1:1, BCBA-supervised treatment to your home. Build communication, daily living, and social skills where your child feels safest. Insurance accepted.',
  openGraph: {
    title: 'In-Home ABA Therapy — Evidence-Based Support at Home',
    description:
      'Personalized ABA therapy in your home. BCBA-supervised, insurance-accepted treatment for children with autism in Minnesota.',
  },
  alternates: {
    canonical: '/in-home-aba-therapy',
  },
};

export default function InHomeAbaTherapyPage() {
  return <InHomeAbaContent />;
}
