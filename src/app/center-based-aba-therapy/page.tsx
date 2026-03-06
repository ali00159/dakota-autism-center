import type { Metadata } from 'next';
import CenterBasedContent from './CenterBasedContent';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Center-Based ABA Therapy — Structured Program for Growth | Dakota Autism Center',
  description:
    'Center-based ABA therapy in a warm, preschool-like setting. Evidence-based programs for communication, social skills, school readiness, and daily living skills.',
  openGraph: {
    title: 'Center-Based ABA Therapy — Structured Program for Growth',
    description:
      'A joyful, structured center program blending ABA therapy with naturalistic learning. Supporting children with autism in Minnesota.',
  },
  alternates: {
    canonical: '/center-based-aba-therapy',
  },
};

export default function CenterBasedAbaTherapyPage() {
  return (
    <>
      <CenterBasedContent />
      <ContactForm />
    </>
  );
}
