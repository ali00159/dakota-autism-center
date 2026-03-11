import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { getPostBySlug, getAllSlugs } from '../blogPosts';
import { getBlogPostSchemas } from './schema';
import BlogPostContent from './BlogPostContent';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: [post.seoKeyword, post.category, 'ABA therapy', 'autism', 'Minnesota'].join(', '),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: 'article',
      url: `/blog/${post.slug}`,
      publishedTime: `${post.publishedAt}T08:00:00-06:00`,
      modifiedTime: `${post.dateModified}T08:00:00-06:00`,
      authors: [post.author.name],
      section: post.category,
      images: post.image
        ? [
            {
              url: post.image.src,
              width: post.image.width,
              height: post.image.height,
              alt: post.image.alt,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription,
      images: post.image ? [post.image.src] : [],
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
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const schemas = getBlogPostSchemas(post);

  return (
    <>
      {schemas.map((schema, i) => (
        <Script
          key={i}
          id={`blog-post-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
      ))}
      <BlogPostContent post={post} />
    </>
  );
}
