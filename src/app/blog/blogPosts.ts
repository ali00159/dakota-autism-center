export const blogCategories = [
  'Parent Guidance',
  'Evidence-Based Practice',
  'School Collaboration',
  'Funding Navigation',
  'Early Intervention',
  'Myth Busting',
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  publishedAt: string;
  seoKeyword: string;
  locationIntent?: string;
}

// Intentionally empty until editorial content is published.
export const blogPosts: BlogPost[] = [];
