import type { Metadata } from 'next';
import InsuranceFundingContent from './InsuranceFundingContent';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Insurance and Funding for ABA Therapy in Minnesota | Dakota Autism Center',
  description:
    'Understand autism therapy insurance and funding options in Minnesota, including private plans, EIDBI guidance, and culturally responsive support from Dakota Autism Center.',
  openGraph: {
    title: 'Insurance and Funding for ABA Therapy in Minnesota',
    description:
      'A clear, family-friendly guide to autism insurance coverage and funding pathways in Minnesota, with culturally competent support from Dakota Autism Center.',
  },
  alternates: {
    canonical: '/insurance-and-funding',
  },
};

export default function InsuranceAndFundingPage() {
  return (
    <>
      <InsuranceFundingContent />
      <ContactForm />
    </>
  );
}
