import type { Metadata, Viewport } from 'next';
import { Poppins, Work_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import JsonLd from '@/components/seo/JsonLd';
import SmoothScroll from '@/components/SmoothScroll';
import { ORGANIZATION_ID, SITE_NAME, SITE_URL, WEBSITE_ID, withSiteUrl } from '@/lib/seo';
import './globals.css';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Dakota Autism Center - Evidence-Based ABA Therapy in Minnesota',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Personalized autism services designed for clarity and growth. We foster safe, trusting environments where your child can navigate the world with confidence.',
  keywords: [
    'ABA therapy Minnesota',
    'autism center Minneapolis',
    'in-home ABA therapy',
    'center-based ABA therapy',
    'EIDBI services Minnesota',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    title: 'Dakota Autism Center - Evidence-Based ABA Therapy in Minnesota',
    description:
      'Personalized autism services designed for clarity and growth. We foster safe, trusting environments where your child can navigate the world with confidence.',
    url: '/',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Dakota Autism Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dakota Autism Center - Evidence-Based ABA Therapy in Minnesota',
    description:
      'Personalized autism services designed for clarity and growth. We foster safe, trusting environments where your child can navigate the world with confidence.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#115C47',
};

const rootSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'en-US',
      publisher: { '@id': ORGANIZATION_ID },
    },
    {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: withSiteUrl('/full-logo.svg'),
      },
      email: 'info@dakotaautismcenter.com',
      telephone: '+16122845382',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: '+16122845382',
        email: 'info@dakotaautismcenter.com',
        areaServed: 'US-MN',
        availableLanguage: ['en'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '331 2nd Ave S, Suite 436',
        addressLocality: 'Minneapolis',
        addressRegion: 'MN',
        postalCode: '55401',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'State',
        name: 'Minnesota',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${workSans.variable} flex min-h-screen flex-col antialiased`}
        style={{
          fontFamily: 'var(--font-work-sans), var(--font-secondary)',
        }}
      >
        <JsonLd id="root-schema" data={rootSchema} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SmoothScroll />
        <Navigation />
        <div className="grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
