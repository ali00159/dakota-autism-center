import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities, primaryLocation } from '@/data/cities';
import CityContactPage from '@/components/CityContactPage';

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};

  const title = `ABA Therapy in ${city.cityName}, ${city.stateAbbr} | Dakota Autism Center`;
  const description = `Dakota Autism Center provides evidence-based ABA therapy and EIDBI services for children in ${city.cityName}, ${city.stateAbbr}. Center-based and in-home options available — call (612) 284-5382 to get started.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${city.slug}`,
    },
    openGraph: {
      title: `ABA Therapy in ${city.cityName}, ${city.stateAbbr} | Dakota Autism Center`,
      description: `Get started with ABA therapy for your child in ${city.cityName}. Dakota Autism Center offers center-based ABA, in-home therapy, and EIDBI services for families across the Twin Cities.`,
      type: 'website',
      url: `/${city.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `ABA Therapy in ${city.cityName}, MN | Dakota Autism Center`,
      description: `Evidence-based ABA therapy for children in ${city.cityName}, ${city.stateAbbr}. Center-based & in-home options. Call (612) 284-5382.`,
    },
    keywords: [
      `ABA therapy ${city.cityName} MN`,
      `autism therapy ${city.cityName}`,
      `ABA therapy near ${city.cityName} Minnesota`,
      `in-home ABA therapy ${city.cityName}`,
      `EIDBI ${city.cityName} MN`,
      `autism services ${city.cityName}`,
      `behavioral therapy ${city.cityName} Minnesota`,
      `child autism therapy ${city.cityName}`,
    ],
  };
}

function buildJsonLd(city: (typeof cities)[number]) {
  const canonicalUrl = `https://dakotaautismcenter.com/${city.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
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
          longitude: -93.265,
        },
        areaServed: [
          {
            '@type': 'City',
            name: city.cityName,
            containedInPlace: {
              '@type': 'State',
              name: city.stateFull,
            },
          },
          ...city.nearbyAreas.map((area) => ({
            '@type': 'City',
            name: area,
          })),
        ],
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: city.coordinates.lat,
            longitude: city.coordinates.lng,
          },
          geoRadius: '15 mi',
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
      {
        '@type': 'FAQPage',
        mainEntity: city.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://dakotaautismcenter.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `ABA Therapy in ${city.cityName}, ${city.stateAbbr}`,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const jsonLd = buildJsonLd(city);

  return (
    <main id="main-content" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CityContactPage city={city} />
    </main>
  );
}
