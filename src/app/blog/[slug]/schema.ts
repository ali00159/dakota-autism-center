import type { BlogPost } from '../blogPosts';

const SITE_URL = 'https://dakotaautismcenter.com';

export function getBlogPostSchemas(post: BlogPost) {
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const logoUrl = `${SITE_URL}/images/logo.png`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seoDescription,
    image: post.image ? `${SITE_URL}${post.image.src}` : undefined,
    datePublished: `${post.publishedAt}T08:00:00-06:00`,
    dateModified: `${post.dateModified}T08:00:00-06:00`,
    url: postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    author: {
      '@type': post.author.type,
      name: post.author.name,
      url: post.author.url ?? SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dakota Autism Center',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
    },
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog#blog`,
      name: 'Dakota Autism Center Insights',
    },
    keywords: post.seoKeyword,
    about: post.category,
    wordCount: post.sections.reduce(
      (count, section) => count + section.body.replace(/<[^>]*>/g, '').split(/\s+/).length,
      0,
    ),
  };

  const faqSchema =
    post.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return [articleSchema, faqSchema, breadcrumbSchema].filter(Boolean);
}
