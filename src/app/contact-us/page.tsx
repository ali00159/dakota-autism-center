import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

const primaryLocation = {
  name: 'Dakota Autism Center',
  street: '331 2nd Ave S, Suite 436',
  city: 'Minneapolis',
  region: 'MN',
  postalCode: '55401',
  country: 'US',
  phoneDisplay: '(612) 284-5382',
  phoneE164: '+16122845382',
  faxDisplay: '(612) 284-5080',
  email: 'info@dakotaautismcenter.com',
  mapsQuery: '331 2nd Ave S Suite 436 Minneapolis MN 55401',
};

export const metadata: Metadata = {
  title: 'Contact Us | ABA Therapy in Minneapolis, MN | Dakota Autism Center',
  description:
    'Ready to start ABA therapy for your child in Minneapolis? Contact Dakota Autism Center — call (612) 284-5382 or fill out our intake form to connect with our clinical team.',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: 'Contact Dakota Autism Center | Start ABA Therapy in Minneapolis',
    description:
      'Connect with our Minneapolis intake team for center-based ABA therapy, in-home ABA, and EIDBI services. Fill out the intake form or call us directly.',
    type: 'website',
    url: '/contact-us',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Dakota Autism Center | ABA Therapy Minneapolis',
    description:
      'Fill out our intake form or call (612) 284-5382 to begin ABA therapy services for your child in Minneapolis.',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      name: 'Contact Dakota Autism Center',
      description:
        'Contact page for Dakota Autism Center, an ABA therapy provider serving Minneapolis and the Twin Cities metro area.',
      url: 'https://dakotaautismcenter.com/contact-us',
      mainEntity: {
        '@type': ['LocalBusiness', 'MedicalOrganization'],
        name: primaryLocation.name,
        image: 'https://dakotaautismcenter.com/full-logo.svg',
        url: 'https://dakotaautismcenter.com',
        telephone: primaryLocation.phoneE164,
        email: primaryLocation.email,
        priceRange: 'Accepts most major insurance',
        medicalSpecialty: 'Applied Behavior Analysis (ABA) Therapy',
        address: {
          '@type': 'PostalAddress',
          streetAddress: primaryLocation.street,
          addressLocality: primaryLocation.city,
          addressRegion: primaryLocation.region,
          postalCode: primaryLocation.postalCode,
          addressCountry: primaryLocation.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 44.9778,
          longitude: -93.2650,
        },
        areaServed: [
          { '@type': 'City', name: 'Minneapolis' },
          { '@type': 'City', name: 'St. Paul' },
          { '@type': 'State', name: 'Minnesota' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '08:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Friday',
            opens: '08:00',
            closes: '16:00',
          },
        ],
      },
    },
  ],
};

const processSteps = [
  {
    number: '01',
    title: 'Submit your information',
    description: 'Fill out the form below — it takes about 3 minutes.',
  },
  {
    number: '02',
    title: 'We reach out within 24 hours',
    description: "Our intake team will contact you to discuss your child's needs.",
  },
  {
    number: '03',
    title: 'Clinical assessment & plan',
    description: 'We complete an assessment and develop a personalized therapy plan.',
  },
];

const faqs = [
  {
    question: 'What should we prepare before contacting your team?',
    answer:
      'If available, keep your child\'s diagnosis details, insurance information, and preferred service type ready. If you do not have all details yet, our intake team can still guide you.',
  },
  {
    question: 'Do you offer both center-based and in-home services?',
    answer:
      'Yes. We provide center-based ABA therapy and in-home ABA support based on your child\'s goals, clinical recommendation, and family needs.',
  },
  {
    question: 'How soon can we begin services?',
    answer:
      'Timelines vary based on clinical fit, scheduling, and insurance authorization. Contact us to start intake and receive a realistic next-step timeline.',
  },
  {
    question: 'Is Dakota Autism Center currently accepting new clients?',
    answer:
      'Yes — we are actively accepting new clients. Reaching out early is the best way to get on our schedule, as intake spots can fill up. Contact us today and our team will walk you through the next steps and expected timeline.',
  },
  {
    question: 'What areas of Minnesota do you serve?',
    answer:
      'Our center-based services are located in the Minneapolis area. Our in-home ABA therapy extends to surrounding communities across the Twin Cities metro and select greater Minnesota regions. Contact us to confirm whether we currently serve your area.',
  },
  {
    question: 'Do you offer telehealth or virtual consultations?',
    answer:
      'Yes. We offer telehealth options for initial consultations, parent coaching sessions, and BCBA supervision check-ins. If you are located outside our service area or prefer a virtual first meeting, we can accommodate that.',
  },
  {
    question: 'How do I know if ABA therapy is the right fit for my child?',
    answer:
      'ABA therapy is the most evidence-based intervention for autism spectrum disorder, with decades of research supporting its effectiveness across a wide range of ages and needs. The best way to determine fit is to speak with one of our BCBAs — no commitment required.',
  },
];

export default function ContactUsPage() {
  return (
    <main id="main-content" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden border-b border-border-light bg-white" aria-labelledby="contact-hero-heading">
        {/* Right-side image — desktop only */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[48%] z-0 h-full">
          <Image
            src="/hero-image.png"
            alt="Therapist working with a child at Dakota Autism Center"
            fill
            className="object-cover"
            priority
            sizes="48vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>

        <div className="container-max relative z-10 py-14 md:py-18 lg:min-h-[560px] lg:flex lg:items-center lg:py-20">
          <div className="w-full lg:w-[52%] lg:pr-14 text-left">
            <span className="badge badge-primary mb-5 inline-block">Contact Us</span>

            <h1
              id="contact-hero-heading"
              className="max-w-2xl text-(--font-size-h1) font-bold leading-tight text-primary md:text-5xl"
            >
              Get started with ABA therapy in Minneapolis — we&apos;re here to help.
            </h1>

            <p className="mt-5 max-w-xl text-lg text-text-secondary">
              Dakota Autism Center provides evidence-based ABA therapy and EIDBI services for
              children in the Twin Cities. Fill out the form below or call us directly — our intake
              team responds within one business day.
            </p>

            {/* Trust stats */}
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {[
                'Accepts most major insurance',
                'Center-based & in-home ABA',
                'Currently accepting new clients',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${primaryLocation.phoneE164}`}
                className="btn btn-primary rounded-full"
                aria-label={`Call Dakota Autism Center at ${primaryLocation.phoneDisplay}`}
              >
                <Phone className="h-4 w-4" />
                Call {primaryLocation.phoneDisplay}
              </a>
              <a href="#contact" className="btn btn-tertiary rounded-full">
                Fill Out the Intake Form
              </a>
            </div>
          </div>
        </div>

        {/* Mobile image — shown below text on small screens */}
        <div className="block lg:hidden relative -mx-(--space-lg,1.5rem) w-[calc(100%+var(--space-lg,1.5rem)*2)] h-[42vw] min-h-[260px]">
          <Image
            src="/hero-image.png"
            alt="Therapist working with a child at Dakota Autism Center"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>
      </section>

      {/* ── Contact Form ──────────────────────────────────────────── */}
      <ContactForm />

      {/* ── How It Works (Process) ─────────────────────────────────── */}
      <section className="section border-b border-border-light bg-white">
        <div className="container-max">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-primary md:text-3xl">
              What happens after you reach out
            </h2>
            <p className="mt-3 text-text-secondary">
              Our intake process is straightforward — here&apos;s exactly what to expect.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-border-light bg-white p-6 shadow-sm"
              >
                <span className="mb-4 block font-primary text-4xl font-bold text-primary/15 leading-none">
                  {step.number}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-dark">{step.title}</h3>
                <p className="mb-0 text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location & Hours ──────────────────────────────────────── */}
      <section className="section bg-bg-secondary">
        <div className="container-max">
          <div className="mb-8">
            <span className="badge badge-info mb-4 inline-block">Our Location</span>
            <h2 className="text-2xl font-semibold text-primary md:text-3xl">
              Visit our Minneapolis headquarters
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary">
              Our Minneapolis location serves as the hub for all Dakota Autism Center programs,
              including center-based ABA therapy and coordination of in-home services across the
              Twin Cities metro area and greater Minnesota.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            {/* Info card */}
            <div className="rounded-3xl border border-border-light bg-white p-7 md:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light">
                    <MapPin className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="mb-0.5 font-semibold text-dark">Address</p>
                    <p className="mb-0 text-text-secondary">
                      {primaryLocation.street}
                      <br />
                      {primaryLocation.city}, {primaryLocation.region}{' '}
                      {primaryLocation.postalCode}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(primaryLocation.mapsQuery)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary btn-small rounded-full"
                      >
                        Get Directions
                      </a>
                      <Link
                        href="/center-based-aba-therapy"
                        className="btn btn-tertiary btn-small rounded-full"
                      >
                        Center Program
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border-light" />

                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light">
                    <Clock3 className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="mb-0.5 font-semibold text-dark">Office Hours</p>
                    <p className="mb-0.5 text-text-secondary">
                      Monday – Thursday: 8:00 AM – 6:00 PM
                    </p>
                    <p className="mb-0 text-text-secondary">Friday: 8:00 AM – 4:00 PM</p>
                  </div>
                </div>

                <div className="h-px bg-border-light" />

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={`tel:${primaryLocation.phoneE164}`}
                    className="flex items-center gap-3 rounded-xl border border-border-light bg-white p-4 transition-shadow hover:shadow-md"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light">
                      <Phone className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="mb-0 text-xs font-semibold uppercase tracking-wide text-text-muted">
                        Phone
                      </p>
                      <p className="mb-0 text-sm font-semibold text-dark">
                        {primaryLocation.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${primaryLocation.email}`}
                    className="flex items-center gap-3 rounded-xl border border-border-light bg-white p-4 transition-shadow hover:shadow-md"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light">
                      <Mail className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="mb-0 text-xs font-semibold uppercase tracking-wide text-text-muted">
                        Email
                      </p>
                      <p className="mb-0 truncate text-sm font-semibold text-dark">
                        info@dakotaautismcenter.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <iframe
              title="Dakota Autism Center Minneapolis location map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(primaryLocation.mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="h-[400px] w-full rounded-3xl border border-border-light lg:h-full lg:min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <FAQ
        badge="Common Questions"
        title="Questions families ask before getting started"
        subtitle="Everything you need to know before filling out the intake form or giving us a call."
        items={faqs}
      />
    </main>
  );
}
