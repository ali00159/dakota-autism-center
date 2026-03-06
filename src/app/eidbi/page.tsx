import type { Metadata } from 'next';
import EidbiContent from './EidbiContent';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'EIDBI Services — Specialized Autism Support in Minnesota | Dakota Autism Center',
  description:
    'Minnesota EIDBI services including comprehensive evaluation, individual treatment plans, adaptive behavior therapy, and family training. Serving children and young adults with ASD under age 21.',
  openGraph: {
    title: 'EIDBI Services — Specialized Autism Support in Minnesota',
    description:
      'Early Intensive Developmental and Behavioral Intervention (EIDBI) for children with autism. Medically necessary treatment covered by Medical Assistance.',
  },
  alternates: {
    canonical: '/eidbi',
  },
};

export default function EidbiPage() {
  return (
    <>
      <EidbiContent />
      <ContactForm />
    </>
  );
}
