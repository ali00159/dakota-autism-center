import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, FileText, ShieldCheck, Stethoscope } from 'lucide-react';
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

export default function ReferralPage() {
  return (
    <main id="main-content" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(referralPageSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden border-b border-border-light bg-white" aria-labelledby="referral-hero-heading">
        {/* Right-side image — desktop only */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[48%] z-0 h-full">
          <div className="relative h-full w-full bg-bg-secondary/30">
             {/* Using a subtle pattern or solid color instead of image if no specific referral image exists, 
                 or reusing hero image but with different styling to distinguish it. 
                 For "clean" look, let's use a solid color block or pattern. 
                 Actually, let's use the hero image but maybe a different crop or overlay if possible, 
                 or just a nice abstract shape. 
                 Since I don't have a new image, I'll use a clean background color that matches the theme.
             */}
             <div className="absolute inset-0 bg-primary/5" />
             <Image
                src="/hero-image.png"
                alt="Dakota Autism Center facility"
                fill
                className="object-cover opacity-20 grayscale"
                priority
                sizes="48vw"
              />
          </div>
        </div>

        <div className="container-max relative z-10 py-14 md:py-18 lg:min-h-[480px] lg:flex lg:items-center lg:py-20">
          <div className="w-full lg:w-[52%] lg:pr-14 text-left">
            <span className="badge badge-primary mb-5 inline-block">Professional Referral</span>

            <h1
              id="referral-hero-heading"
              className="max-w-2xl text-(--font-size-h1) font-bold leading-tight text-primary md:text-5xl"
            >
              Streamlined intake for healthcare providers & partners.
            </h1>

            <p className="mt-5 max-w-xl text-lg text-text-secondary">
              Submit a secure, multi-step referral for ABA services. Our intake team coordinates directly with families to ensure a smooth start to therapy.
            </p>

            {/* Trust stats */}
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {[
                'Secure & Confidential',
                'Quick Intake Review',
                'Care Coordination',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Referral Form Section ─────────────────────────────────── */}
      <section className="section bg-white pt-12 md:pt-16">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row lg:gap-16">
            
            {/* Left Sidebar (Desktop) / Top (Mobile) */}
            <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
               <div className="sticky top-8">
                  <h2 className="text-2xl font-semibold text-primary mb-4">How it works</h2>
                  <p className="text-text-secondary mb-8">
                    Complete the form with as much detail as available. We can assist with gathering missing documentation later.
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Stethoscope className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark">1. Provider Details</h3>
                        <p className="text-sm text-text-secondary mt-1">Your contact info for care coordination.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark">2. Patient Information</h3>
                        <p className="text-sm text-text-secondary mt-1">Demographics and diagnosis history.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark">3. Secure Submission</h3>
                        <p className="text-sm text-text-secondary mt-1">HIPAA-compliant transfer to our intake team.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 p-6 bg-bg-secondary rounded-2xl border border-border-light">
                    <h3 className="font-semibold text-dark mb-2">Need assistance?</h3>
                    <p className="text-sm text-text-secondary mb-4">
                      Our intake coordinators are available to help with complex cases.
                    </p>
                    <a href="tel:6122845382" className="text-primary font-semibold hover:underline">
                      Call (612) 284-5382
                    </a>
                  </div>
               </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-2/3">
              <div className="rounded-3xl border border-border-light bg-white p-6 md:p-10 shadow-lg shadow-primary/5">
                <ReferralForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
