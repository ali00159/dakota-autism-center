'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { blogPosts, type BlogPost, type BlogCategory } from '@/app/blog/blogPosts';
import arrowRightLinear from '@iconify-icons/solar/arrow-right-linear';
import documentTextBoldDuotone from '@iconify-icons/solar/document-text-bold-duotone';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerReveal';

const categoryStyles: Record<BlogCategory, { badge: string; iconBg: string; iconColor: string }> = {
  'Parent Guidance': { badge: 'bg-[#EEF8FF] text-[#2A6D9A]', iconBg: 'bg-[#EEF8FF]', iconColor: 'text-[#2A6D9A]' },
  'Evidence-Based Practice': { badge: 'bg-[#F2F7EE] text-[#2F6A39]', iconBg: 'bg-[#F2F7EE]', iconColor: 'text-[#2F6A39]' },
  'School Collaboration': { badge: 'bg-[#FFF4EA] text-[#935B1E]', iconBg: 'bg-[#FFF4EA]', iconColor: 'text-[#935B1E]' },
  'Funding Navigation': { badge: 'bg-[#F4EEFF] text-[#6843A3]', iconBg: 'bg-[#F4EEFF]', iconColor: 'text-[#6843A3]' },
  'Early Intervention': { badge: 'bg-[#EAF8F4] text-[#186B58]', iconBg: 'bg-[#EAF8F4]', iconColor: 'text-[#186B58]' },
  'Myth Busting': { badge: 'bg-[#FDEDF2] text-[#A33560]', iconBg: 'bg-[#FDEDF2]', iconColor: 'text-[#A33560]' },
};

const MAX_DISPLAY = 5;

interface BlogSectionProps {
  badge?: string;
  heading?: string;
  /** Slugs to feature — when omitted the latest posts are shown */
  slugs?: string[];
  /** Maximum posts to display (capped at 5) */
  maxPosts?: number;
  className?: string;
}

export default function BlogSection({
  badge = 'From Our Blog',
  heading = 'Helpful resources for families',
  slugs,
  maxPosts = MAX_DISPLAY,
  className = '',
}: BlogSectionProps) {
  const limit = Math.min(maxPosts, MAX_DISPLAY);

  const posts: BlogPost[] = slugs
    ? slugs
        .map((s) => blogPosts.find((p) => p.slug === s))
        .filter((p): p is BlogPost => !!p)
        .slice(0, limit)
    : blogPosts.slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <section className={`section bg-[#F8FBFA] border-y border-border-light ${className}`}>
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <span className="badge badge-info mb-4">{badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold font-primary text-[#474044] leading-tight tracking-tight">
              {heading}
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-primary font-semibold text-sm inline-flex items-center gap-1.5 hover:underline shrink-0"
          >
            View all articles
            <Icon icon={arrowRightLinear} width={16} height={16} />
          </Link>
        </div>

        {/* Post cards */}
        <StaggerContainer className="flex flex-col gap-4">
          {posts.map((post) => {
            const style = categoryStyles[post.category];
            return (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col md:flex-row items-start gap-6 rounded-2xl border border-border-light bg-white p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all no-underline"
                >
                  {post.image ? (
                    <div className="relative w-full md:w-36 h-28 md:h-24 rounded-xl overflow-hidden shrink-0 group-hover:scale-[1.03] transition-transform">
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 144px"
                      />
                    </div>
                  ) : (
                    <div className={`w-14 h-14 rounded-2xl ${style.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon icon={documentTextBoldDuotone} className={`w-7 h-7 ${style.iconColor}`} />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <span className={`inline-flex rounded-full px-3 py-0.5 text-xs font-semibold ${style.badge} mb-2`}>
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-2">
                      {post.excerpt}
                    </p>
                    <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read the full guide
                      <Icon icon={arrowRightLinear} width={14} height={14} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
