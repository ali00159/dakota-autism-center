import type { Metadata } from 'next';
import { FileCheck2, ShieldCheck, Stethoscope } from 'lucide-react';
import ReferralForm from '@/components/ReferralForm';

export const metadata: Metadata = {
  title: 'Professional Referral Form | Dakota Autism Center',
  description:
    'Submit a secure, multi-step professional referral for ABA services at Dakota Autism Center. Provide provider details, diagnosis history, insurance information, and care coordination notes.',
  alternates: {
    canonical: '/referral',
  },
  openGraph: {
    title: 'Professional Referral Form | Dakota Autism Center',
    description:
      'A comprehensive referral workflow for healthcare professionals and agencies submitting ABA referrals for children.',
    type: 'website',
    url: '/referral',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Referral Form | Dakota Autism Center',
    description:
      'Submit complete referral details for intake review including diagnosis, insurance, and care coordination context.',
  },
};

const referralPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Professional Referral Form',
      url: 'https://dakotaautismcenter.com/referral',
      description:
        'Online referral form for professionals and agencies requesting ABA services for children.',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Dakota Autism Center',
        url: 'https://dakotaautismcenter.com',
      },
      about: {
        '@type': 'MedicalBusiness',
        name: 'Dakota Autism Center',
      },
    },
  ],
};

const highlights = [
  {
    title: 'Built for Professional Referrals',
    description:
      'Captures provider credentials, agency information, and referral intent in a structured intake format.',
    icon: Stethoscope,
  },
  {
    title: 'Clinical + Coverage Context',
    description:
      'Collects diagnosis history, presenting concerns, requested services, and insurance readiness details.',
    icon: FileCheck2,
  },
  {
    title: 'Confidentiality Aware',
    description:
      'Includes attestation and information-release acknowledgement to support secure care coordination.',
    icon: ShieldCheck,
  },
];

export default function ReferralPage() {
  return (
    <main id="main-content" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(referralPageSchema) }}
      />

      <section className="relative overflow-hidden border-b border-border-light bg-linear-to-b from-bg-hero to-white">
        <div className="pointer-events-none absolute -top-24 -left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-6 h-80 w-80 rounded-full bg-tertiary/12 blur-3xl" />

        <div className="container-max relative py-16 md:py-20 lg:py-24">
          <span className="badge badge-primary mb-5 inline-block">Referral Intake</span>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-primary md:text-5xl">
            Professional referral form for child ABA services
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-text-secondary">
            This multi-step form is designed for pediatricians, psychologists, case managers, school
            teams, and partner agencies submitting referrals. Complete all required fields for a
            faster intake review.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-max grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mb-2 text-2xl font-semibold text-primary">{item.title}</h2>
                <p className="mb-0 text-text-secondary">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section bg-bg-secondary">
        <div className="container-max">
          <div className="card-static rounded-3xl border border-border-light p-6 md:p-10">
            <div className="mb-8">
              <h2 className="mb-3 text-3xl font-semibold text-primary">Submit a Professional Referral</h2>
              <p className="mb-0 max-w-3xl text-text-secondary">
                Include diagnosis and insurance details as available. If some documentation is still
                pending, you can still submit this form and our team will follow up.
              </p>
            </div>

            <ReferralForm />
          </div>
        </div>
      </section>
    </main>
  );
}
