import type { Metadata } from 'next';
import { ArrowRight, FileCheck2, ShieldCheck, Stethoscope } from 'lucide-react';
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

      <section className="border-b border-border-light bg-white">
        <div className="container-max py-14 md:py-18 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex flex-col items-center">
              <span className="badge badge-secondary mb-5 inline-block">Referral Intake</span>
              <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl">
                Professional ABA referrals, organized for quick clinical review
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-text-secondary">
                Submit one complete referral package for intake, insurance readiness, and care
                coordination planning. The form below is built to capture what our clinical team needs
                without extra back-and-forth.
              </p>

            </div>
          </div>
        </div>
      </section>

      <section id="referral-form" className="relative pb-12 md:pb-16">
        <div className="container-max -mt-8 md:-mt-12">
          <div className="card-static rounded-3xl border border-border-light p-6 md:p-10">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="mb-3 text-3xl font-semibold text-primary">Submit a Professional Referral</h2>
                <p className="mb-0 max-w-3xl text-text-secondary">
                  Include diagnosis and insurance details as available. If documentation is still
                  pending, submit what you have and our team will follow up for the remainder.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-tertiary/15 px-4 py-2 text-sm font-semibold text-tertiary">
                Secure intake <ArrowRight className="h-4 w-4" />
              </span>
            </div>

            <ReferralForm />
          </div>
        </div>
      </section>

      <section className="section border-t border-border-light bg-bg-secondary">
        <div className="container-max">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="badge badge-info mb-4 inline-block">Why this structure works</span>
              <h2 className="mb-2 text-3xl font-semibold text-primary">Built for complete intake clarity</h2>
              <p className="mb-0 max-w-2xl text-text-secondary">
                Every section is tailored to give the clinical team actionable context while reducing
                follow-up delays.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const iconStyles = ['bg-secondary/20 text-secondary', 'bg-tertiary/20 text-tertiary', 'bg-accent/20 text-accent'];

              return (
                <article key={item.title} className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
                  <span className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full ${iconStyles[index]}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 text-2xl font-semibold text-primary">{item.title}</h3>
                  <p className="mb-0 text-text-secondary">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
