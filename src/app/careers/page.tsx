import type { Metadata } from 'next';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Users } from 'lucide-react';
import CareersApplicationForm from '@/components/CareersApplicationForm';
import JsonLd from '@/components/seo/JsonLd';
import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from '@/lib/seo';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerReveal';

export const metadata: Metadata = {
  title: 'ABA Therapy Careers in Minnesota',
  description:
    'Apply for ABA therapy careers at Dakota Autism Center. Submit a multi-step application for RBT, BCBA, and clinical support roles serving children and families in Minnesota.',
  keywords: [
    'ABA therapy jobs Minnesota',
    'RBT jobs Minneapolis',
    'BCBA careers Minnesota',
    'autism center careers',
  ],
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers at Dakota Autism Center',
    description:
      'Join our clinical team supporting children through center-based and in-home ABA services.',
    type: 'website',
    url: '/careers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Dakota Autism Center',
    description:
      'Explore RBT, BCBA, and ABA support roles with a mission-driven team in Minneapolis.',
  },
};

const careersPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Careers',
      url: `${SITE_URL}/careers`,
      description:
        'Online careers application for ABA professionals and support staff at Dakota Autism Center.',
      isPartOf: {
        '@id': WEBSITE_ID,
      },
      about: {
        '@id': ORGANIZATION_ID,
      },
    },
  ],
};

const highlights = [
  {
    title: 'ABA-Specific Application Flow',
    description:
      'Collects role, credentials, autism and ABA experience, and service-setting fit in one streamlined process.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Built for Clinical Readiness',
    description:
      'Includes compliance checks such as certification status, background-screening readiness, and CPR alignment.',
    icon: BadgeCheck,
  },
  {
    title: 'Centered on Family Impact',
    description:
      'Screens for collaboration style, caregiver partnership, and practical availability for consistent client care.',
    icon: Users,
  },
];

export default function CareersPage() {
  return (
    <main id="main-content" className="bg-white">
      <JsonLd id="careers-schema" data={careersPageSchema} />

      <section className="border-b border-border-light bg-white">
        <div className="container-max py-14 md:py-18 lg:py-20">
          <ScrollReveal direction="up" duration={0.6} className="mx-auto max-w-4xl text-center">
            <div className="flex flex-col items-center">
              <span className="badge badge-secondary mb-5 inline-block">Careers</span>
              <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl">
                Build a meaningful ABA career with a team that puts children and families first
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-text-secondary">
                Whether you are an experienced BCBA, an RBT, or growing into the field, we want to
                learn how your strengths can support clinically excellent, family-centered care.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="careers-form" className="relative pb-12 md:pb-16">
        <div className="container-max -mt-8 md:-mt-12">
          <ScrollReveal direction="up" delay={0.2} duration={0.6} className="card-static rounded-3xl border border-border-light p-6 md:p-10">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="mb-3 text-3xl font-semibold text-primary">Careers Application</h2>
                <p className="mb-0 max-w-3xl text-text-secondary">
                  Complete this multi-step form to share your background, ABA experience, and
                  availability. Our hiring team reviews each application carefully and follows up with
                  qualified candidates.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-tertiary/15 px-4 py-2 text-sm font-semibold text-tertiary">
                Apply online <ArrowRight className="h-4 w-4" />
              </span>
            </div>

            <CareersApplicationForm />
          </ScrollReveal>
        </div>
      </section>

      <section className="section border-t border-border-light bg-bg-secondary">
        <div className="container-max">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="badge badge-info mb-4 inline-block">Why this application format</span>
              <h2 className="mb-2 text-3xl font-semibold text-primary">Designed for hiring clarity</h2>
              <p className="mb-0 max-w-2xl text-text-secondary">
                This structure helps us quickly identify candidates who align with our clinical model,
                scheduling needs, and commitment to ethical ABA care.
              </p>
            </div>
          </div>

          <StaggerContainer className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const iconStyles = ['bg-secondary/20 text-secondary', 'bg-tertiary/20 text-tertiary', 'bg-accent/20 text-accent'];

              return (
                <StaggerItem key={item.title}>
                  <article className="rounded-2xl border border-border-light bg-white p-6 shadow-sm h-full">
                    <span className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full ${iconStyles[index]}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mb-2 text-2xl font-semibold text-primary">{item.title}</h3>
                    <p className="mb-0 text-text-secondary">{item.description}</p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
