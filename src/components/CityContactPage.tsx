'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { CheckCircle2, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import type { CityData } from '@/data/cities';
import { primaryLocation } from '@/data/cities';

const serviceDetails: Record<
  'center-based' | 'in-home' | 'eidbi',
  { title: string; description: string; href: string; icon: string; color: string; bgColor: string }
> = {
  'center-based': {
    title: 'Center-Based ABA Therapy',
    description:
      'Structured therapy in a preschool-like clinical environment designed for social growth, communication, and school readiness.',
    href: '/center-based-aba-therapy',
    icon: 'solar:buildings-bold-duotone',
    color: 'text-primary',
    bgColor: 'bg-primary-light',
  },
  'in-home': {
    title: 'In-Home ABA Therapy',
    description:
      'Evidence-based, 1:1 behavioral support delivered in the comfort and familiarity of your own home.',
    href: '/in-home-aba-therapy',
    icon: 'solar:home-smile-bold-duotone',
    color: 'text-secondary',
    bgColor: 'bg-[#FFF4E6]',
  },
  eidbi: {
    title: 'EIDBI Services',
    description:
      'Early Intensive Developmental and Behavioral Intervention for children covered by Minnesota Medical Assistance.',
    href: '/eidbi',
    icon: 'solar:heart-pulse-bold-duotone',
    color: 'text-tertiary',
    bgColor: 'bg-[#EBF6FD]',
  },
};

interface CityContactPageProps {
  city: CityData;
}

export default function CityContactPage({ city }: CityContactPageProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden border-b border-border-light bg-white"
        aria-labelledby="city-hero-heading"
      >
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[48%] z-0 h-full">
          <Image
            src="/images/contact/hero-contact-parent-child.jpg"
            alt={`Parent and child learning together — ABA therapy serving ${city.cityName}`}
            fill
            className="object-cover"
            priority
            sizes="48vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>

        <div className="container-max relative z-10 py-14 md:py-18 lg:min-h-[560px] lg:flex lg:items-center lg:py-20">
          <div className="w-full lg:w-[52%] lg:pr-14 text-left">
            <span className="badge badge-primary mb-5 inline-block">
              Serving {city.cityName}, {city.stateAbbr}
            </span>

            <h1
              id="city-hero-heading"
              className="max-w-2xl text-(--font-size-h1) font-bold leading-tight text-primary md:text-5xl"
            >
              ABA Therapy in {city.cityName}, {city.stateAbbr} — Personalized Care for Your Child
            </h1>

            <p className="mt-5 max-w-xl text-lg text-text-secondary">{city.heroDescription}</p>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {[
                `Center & in-home options`,
                `${city.distanceFromOffice} from our center`,
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-text-secondary"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>

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

        <div className="block lg:hidden relative -mx-(--space-lg,1.5rem) w-[calc(100%+var(--space-lg,1.5rem)*2)] h-[42vw] min-h-[260px]">
          <Image
            src="/images/contact/hero-contact-parent-child.jpg"
            alt={`Parent and child learning together — ABA therapy serving ${city.cityName}`}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>
      </section>

      {/* Services Available */}
      <section className="section border-b border-border-light bg-white">
        <div className="container-max">
          <div className="mb-10 text-center">
            <span className="badge badge-info mb-4 inline-block">Our Services</span>
            <h2 className="text-2xl font-semibold text-primary md:text-3xl">
              ABA therapy services available to {city.cityName} families
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
              Dakota Autism Center offers multiple pathways to care — choose the setting that works
              best for your child and family.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {city.servicesAvailable.map((serviceKey) => {
              const service = serviceDetails[serviceKey];
              return (
                <Link
                  key={serviceKey}
                  href={service.href}
                  className="group rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <span
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.bgColor} ${service.color}`}
                  >
                    <Icon icon={service.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-dark group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mb-3 text-sm text-text-secondary">{service.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <Icon
                      icon="solar:arrow-right-broken"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Serving This Community */}
      <section className="section border-b border-border-light bg-bg-secondary">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16 xl:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="badge badge-primary mb-5 inline-block">
                {city.cityName} Community
              </span>
              <h2 className="text-dark mb-5 leading-tight">
                Serving {city.cityName} families with culturally responsive ABA therapy
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-6">
                Every family&apos;s journey is unique. Here&apos;s how Dakota Autism Center supports
                the {city.cityName} community.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-border-light bg-white p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light">
                    <MapPin className="h-4 w-4 text-primary" />
                  </span>
                  <div>
                    <p className="mb-0 text-xs font-semibold uppercase tracking-wide text-text-muted">
                      Distance
                    </p>
                    <p className="mb-0 text-sm font-semibold text-dark">
                      {city.distanceFromOffice} from our center
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-border-light bg-white p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                    <Icon icon="solar:map-point-wave-bold-duotone" className="h-4 w-4 text-tertiary" />
                  </span>
                  <div>
                    <p className="mb-0 text-xs font-semibold uppercase tracking-wide text-text-muted">
                      Nearby Areas
                    </p>
                    <p className="mb-0 text-sm font-semibold text-dark">
                      {city.nearbyAreas.join(', ')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-border-light bg-white p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF4E6]">
                    <Icon icon="solar:mailbox-bold-duotone" className="h-4 w-4 text-secondary" />
                  </span>
                  <div>
                    <p className="mb-0 text-xs font-semibold uppercase tracking-wide text-text-muted">
                      Zip Codes Served
                    </p>
                    <p className="mb-0 text-sm font-semibold text-dark">
                      {city.zipCodes.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {city.aboutParagraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border-light bg-white p-6 md:p-8"
                >
                  <span className="mb-3 block font-primary text-3xl font-bold text-primary/15 leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-text-secondary leading-relaxed mb-0">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Location & Hours */}
      <section className="section bg-bg-secondary">
        <div className="container-max">
          <div className="mb-8">
            <span className="badge badge-info mb-4 inline-block">Our Location</span>
            <h2 className="text-2xl font-semibold text-primary md:text-3xl">
              Visit our Minneapolis center — {city.distanceFromOffice} from {city.cityName}
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary">
              Our Minneapolis headquarters serves as the hub for all Dakota Autism Center programs.{' '}
              {city.cityName} families can access center-based ABA therapy here or choose in-home
              services delivered directly to your neighborhood.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
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
                      {primaryLocation.city}, {primaryLocation.region} {primaryLocation.postalCode}
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
                    <p className="mb-0.5 text-text-secondary">Monday – Thursday: 8:00 AM – 6:00 PM</p>
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
                        {primaryLocation.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <iframe
              title={`Dakota Autism Center location map — ${city.distanceFromOffice} from ${city.cityName}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(primaryLocation.mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="h-[400px] w-full rounded-3xl border border-border-light lg:h-full lg:min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        badge={`${city.cityName} ABA Therapy FAQ`}
        title={`Questions ${city.cityName} families ask about ABA therapy`}
        subtitle={`Answers to the most common questions from families in ${city.cityName} and surrounding areas like ${city.nearbyAreas.slice(0, 3).join(', ')}.`}
        items={city.faqs}
      />
    </>
  );
}
