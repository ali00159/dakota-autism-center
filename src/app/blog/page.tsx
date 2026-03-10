import type { Metadata } from 'next';
import Script from 'next/script';
import BlogContent from './BlogContent';
import { getBlogIndexSchema } from './schema';

export const metadata: Metadata = {
  title: 'ABA Therapy Blog for Minnesota Families | Dakota Autism Center',
  description:
    'Explore upcoming ABA resources for Minnesota families, including parent training guidance, school collaboration strategies, funding navigation, and early intervention support.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'ABA Therapy Blog for Minnesota Families | Dakota Autism Center',
    description:
      'A future-ready educational blog focused on practical ABA guidance for Minnesota families, schools, and caregivers.',
    type: 'website',
    url: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dakota Autism Center Blog | ABA Guidance in Minnesota',
    description:
      'Upcoming educational ABA articles for Minnesota families on funding, parent coaching, school collaboration, and early intervention.',
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

export default function BlogPage() {
  return (
    <>
      <Script
        id="blog-index-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogIndexSchema()) }}
      />
      <BlogContent />
    </>
  );
}
