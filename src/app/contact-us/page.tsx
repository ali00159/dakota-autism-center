import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CalendarClock,
  Car,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Printer,
  Route,
  ShieldCheck,
} from 'lucide-react';

const primaryLocation = {
  name: 'Dakota Autism Center Headquarters',
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
  title: 'Contact Us | Dakota Autism Center Minneapolis',
  description:
    'Contact Dakota Autism Center in Minneapolis for ABA therapy consultations, referrals, and family support. View address, hours, phone, fax, and directions.',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: 'Contact Dakota Autism Center | Minneapolis Headquarters',
    description:
      'Call, email, or visit our Minneapolis headquarters. Find office hours, directions, and answers to common questions about getting started.',
    type: 'website',
    url: '/contact-us',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Dakota Autism Center',
    description:
      'Reach our Minneapolis team for ABA therapy consultations and next steps.',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      name: 'Contact Dakota Autism Center',
      url: 'https://dakotaautismcenter.com/contact-us',
      mainEntity: {
        '@type': 'LocalBusiness',
        name: primaryLocation.name,
        image: 'https://dakotaautismcenter.com/full-logo.svg',
        url: 'https://dakotaautismcenter.com',
        telephone: primaryLocation.phoneE164,
        email: primaryLocation.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: primaryLocation.street,
          addressLocality: primaryLocation.city,
          addressRegion: primaryLocation.region,
          postalCode: primaryLocation.postalCode,
          addressCountry: primaryLocation.country,
        },
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

const quickContacts = [
  {
    title: 'Call Our Team',
    description: 'Speak with our intake team for immediate support and next steps.',
    href: `tel:${primaryLocation.phoneE164}`,
    label: primaryLocation.phoneDisplay,
    icon: Phone,
  },
  {
    title: 'Email Us',
    description: 'Share your questions and we will follow up with the right resources.',
    href: `mailto:${primaryLocation.email}`,
    label: primaryLocation.email,
    icon: Mail,
  },
  {
    title: 'Fax Referrals',
    description: 'For provider paperwork and referral documentation.',
    href: `tel:+16122845080`,
    label: primaryLocation.faxDisplay,
    icon: Printer,
  },
];

const faqs = [
  {
    question: 'What should we prepare before contacting your team?',
    answer:
      'If available, keep your child’s diagnosis details, insurance information, and preferred service type ready. If you do not have all details yet, our intake team can still guide you.',
  },
  {
    question: 'Do you offer both center-based and in-home services?',
    answer:
      'Yes. We provide center-based ABA therapy and in-home ABA support based on your child’s goals, clinical recommendation, and family needs.',
  },
  {
    question: 'How soon can we begin services?',
    answer:
      'Timelines vary based on clinical fit, scheduling, and insurance authorization. Contact us to start intake and receive a realistic next-step timeline.',
  },
  {
    question: 'Will this page support other locations later?',
    answer:
      'Yes. This page is designed as our primary headquarters contact hub. Future location-specific pages will branch from here with unique local details.',
  },
];

export default function ContactUsPage() {
  return (
    <main id="main-content" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <section className="relative overflow-hidden border-b border-border-light bg-linear-to-b from-bg-hero to-white">
        <div className="pointer-events-none absolute -top-20 -left-10 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-tertiary/10 blur-3xl" />

        <div className="container-max relative py-16 md:py-20 lg:py-24">
          <span className="badge badge-primary mb-5 inline-block">Contact Us</span>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-primary md:text-5xl">
            Connect with our Minneapolis team for care, guidance, and next steps.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-text-secondary">
            This is the main contact page for our primary location. You can call, email, request
            provider coordination, or plan an in-person visit at our headquarters.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={`tel:${primaryLocation.phoneE164}`} className="btn btn-primary rounded-full">
              <Phone className="h-5 w-5" />
              Call {primaryLocation.phoneDisplay}
            </a>
            <a href={`mailto:${primaryLocation.email}`} className="btn btn-tertiary rounded-full">
              <Mail className="h-5 w-5" />
              Email Intake Team
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max grid gap-6 lg:grid-cols-3">
          {quickContacts.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mb-2 text-2xl font-semibold text-primary">{item.title}</h2>
                <p className="mb-4 text-text-secondary">{item.description}</p>
                <span className="inline-flex items-center text-base font-semibold text-dark group-hover:text-primary">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="section bg-bg-secondary">
        <div className="container-max grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="rounded-3xl border border-border-light bg-white p-6 md:p-8">
            <h2 className="mb-2 text-3xl font-semibold text-primary">Primary Location</h2>
            <p className="mb-7 text-text-secondary">
              Our headquarters supports families across the Twin Cities area and coordinates care
              for all Dakota Autism Center programs.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-tertiary" />
                <p className="mb-0 text-dark">
                  {primaryLocation.street}
                  <br />
                  {primaryLocation.city}, {primaryLocation.region} {primaryLocation.postalCode}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-tertiary" />
                <div>
                  <p className="mb-1 font-semibold text-dark">Office Hours</p>
                  <p className="mb-0 text-text-secondary">Monday-Thursday: 8:00 AM-6:00 PM</p>
                  <p className="mb-0 text-text-secondary">Friday: 8:00 AM-4:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Route className="mt-0.5 h-5 w-5 shrink-0 text-tertiary" />
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(primaryLocation.mapsQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary rounded-full btn-small"
                  >
                    Get Directions
                  </a>
                  <Link href="/center-based-aba-therapy" className="btn btn-tertiary rounded-full btn-small">
                    View Center Program
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <div className="rounded-xl bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-primary">
                    Parking
                  </p>
                  <p className="mb-0 text-text-secondary">
                    Visitor parking is available nearby. Call ahead if you need accessibility accommodations.
                  </p>
                </div>
                <div className="rounded-xl bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-primary">
                    Visit Planning
                  </p>
                  <p className="mb-0 text-text-secondary">
                    We recommend scheduling before arrival so we can prepare your intake conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <iframe
              title="Dakota Autism Center Minneapolis map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                primaryLocation.mapsQuery
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="h-[360px] w-full rounded-3xl border border-border-light"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="rounded-3xl border border-border-light bg-white p-6">
              <h3 className="mb-2 text-2xl font-semibold text-primary">Preparing for More Locations</h3>
              <p className="mb-0 text-text-secondary">
                As additional locations launch, each office will have its own dedicated contact page
                with unique local details, while this page remains the main headquarters contact hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl bg-primary p-8 text-white md:p-10">
            <h2 className="mb-4 text-3xl font-semibold text-white!">Need help choosing the right service?</h2>
            <p className="mb-6 text-white/90">
              Our team can guide you through center-based, in-home, and EIDBI options based on your
              child’s current needs and family goals.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-supporting" />
                <p className="mb-0 text-white/90">Schedule a consultation call with intake and clinical staff.</p>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-supporting" />
                <p className="mb-0 text-white/90">Get support with referral and insurance verification steps.</p>
              </li>
              <li className="flex items-start gap-3">
                <Car className="mt-0.5 h-5 w-5 shrink-0 text-supporting" />
                <p className="mb-0 text-white/90">
                  Plan your first visit with clear location, parking, and arrival information.
                </p>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${primaryLocation.phoneE164}`} className="btn btn-secondary rounded-full">
                <Phone className="h-5 w-5" />
                Start by Phone
              </a>
              <Link href="/in-home-aba-therapy" className="btn btn-ghost rounded-full bg-white/12 text-white!">
                Explore In-Home Therapy
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border-light bg-white p-6 md:p-8">
            <h2 className="mb-5 text-3xl font-semibold text-primary">Contact FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-border-light px-4 py-3">
                  <summary className="cursor-pointer list-none pr-6 font-semibold text-dark">
                    {faq.question}
                  </summary>
                  <p className="mb-0 mt-3 text-text-secondary">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
