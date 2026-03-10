const SITE_URL = 'https://dakotaautismcenter.com';
const BLOG_PATH = '/blog';

export function getBlogIndexSchema() {
  const blogUrl = `${SITE_URL}${BLOG_PATH}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${blogUrl}#collection`,
        url: blogUrl,
        name: 'Dakota Autism Center Blog',
        description:
          'Educational ABA resources for Minnesota families, including parent guidance, funding navigation, school collaboration, and early intervention support.',
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        about: [
          'Applied Behavior Analysis',
          'Autism support for families',
          'Minnesota ABA funding and care navigation',
        ],
      },
      {
        '@type': 'Blog',
        '@id': `${blogUrl}#blog`,
        url: blogUrl,
        name: 'Dakota Autism Center Insights',
        publisher: {
          '@type': 'Organization',
          name: 'Dakota Autism Center',
          url: SITE_URL,
        },
        inLanguage: 'en-US',
      },
    ],
  };
}
