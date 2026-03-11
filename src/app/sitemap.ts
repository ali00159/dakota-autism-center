import type { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { SITE_URL, withSiteUrl } from '@/lib/seo';
import { blogPosts } from './blog/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [withSiteUrl('/opengraph-image')],
    },
    {
      url: `${SITE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [withSiteUrl('/images/contact/hero-contact-parent-child.webp')],
    },
    {
      url: `${SITE_URL}/center-based-aba-therapy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [withSiteUrl('/images/center-based/hero-center-based.webp')],
    },
    {
      url: `${SITE_URL}/in-home-aba-therapy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [withSiteUrl('/images/in-home/hero-in-home-therapy.webp')],
    },
    {
      url: `${SITE_URL}/eidbi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [withSiteUrl('/images/eidbi/hero-eidbi-therapy.webp')],
    },
    {
      url: `${SITE_URL}/insurance-and-funding`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [withSiteUrl('/opengraph-image')],
    },
    {
      url: `${SITE_URL}/culturally-responsive-aba-therapy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [withSiteUrl('/opengraph-image')],
    },
    {
      url: `${SITE_URL}/understanding-autism`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [withSiteUrl('/opengraph-image')],
    },
    {
      url: `${SITE_URL}/referral`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [withSiteUrl('/opengraph-image')],
    },
    {
      url: `${SITE_URL}/careers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      images: [withSiteUrl('/opengraph-image')],
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
      images: [withSiteUrl('/opengraph-image')],
    },
  ];

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'monthly',
    priority: 0.7,
    images: post.image ? [withSiteUrl(post.image.src)] : [withSiteUrl('/opengraph-image')],
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${SITE_URL}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [withSiteUrl('/opengraph-image')],
  }));

  return [...staticPages, ...blogPostPages, ...cityPages];
}
