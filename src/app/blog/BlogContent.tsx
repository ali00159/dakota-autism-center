'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { blogCategories, blogPosts, type BlogCategory } from './blogPosts';

type BlogFilter = 'All' | BlogCategory;

const filterOptions: BlogFilter[] = ['All', ...blogCategories];

const categoryStyles: Record<BlogCategory, string> = {
  'Parent Guidance': 'bg-[#EEF8FF] text-[#2A6D9A]',
  'Evidence-Based Practice': 'bg-[#F2F7EE] text-[#2F6A39]',
  'School Collaboration': 'bg-[#FFF4EA] text-[#935B1E]',
  'Funding Navigation': 'bg-[#F4EEFF] text-[#6843A3]',
  'Early Intervention': 'bg-[#EAF8F4] text-[#186B58]',
  'Myth Busting': 'bg-[#FDEDF2] text-[#A33560]',
};

export default function BlogContent() {
  const [activeFilter, setActiveFilter] = useState<BlogFilter>('All');

  const filteredPosts = useMemo(() => {
    if (activeFilter === 'All') {
      return blogPosts;
    }
    return blogPosts.filter((post) => post.category === activeFilter);
  }, [activeFilter]);

  return (
    <main id="main-content" className="w-full bg-white">
      <section className="border-b border-border-light bg-white">
        <div className="container-max py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-primary mb-4">ABA Insights Hub</span>
            <h1 className="hero-headline text-dark mb-5">
              Meaningful ABA Guidance for Minnesota Families
            </h1>
            <p className="body-large text-text-secondary max-w-3xl mx-auto mb-0">
              Our upcoming blog will share practical, evidence-informed articles on parent
              training, school collaboration, early intervention planning, and Minnesota funding
              pathways. We are building this library to help families make confident decisions
              without overwhelm.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[#F8FBFA] border-b border-border-light">
        <div className="container-max">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-dark mb-2">Browse by topic</h2>
              <p className="text-text-secondary mb-0">
                Select a category to preview how content will be organized as articles are
                published.
              </p>
            </div>
            <p
              className="inline-flex items-center gap-2 rounded-full bg-white border border-border-light px-4 py-2 text-sm font-semibold text-text-muted mb-0"
              aria-live="polite"
            >
              <Icon icon="solar:documents-bold-duotone" className="h-4 w-4 text-primary" />
              {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'} in view
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {filterOptions.map((option) => {
              const isActive = activeFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setActiveFilter(option)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'border-primary bg-primary text-white shadow-sm'
                      : 'border-border-light bg-white text-dark hover:border-primary/35 hover:bg-primary-light/40'
                  }`}
                  aria-pressed={isActive}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-max">
          {filteredPosts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-primary/30 bg-[#FCFEFD] px-6 py-12 md:px-10 md:py-14 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon icon="solar:pen-new-square-bold-duotone" className="h-7 w-7" />
              </div>
              <h2 className="text-dark mb-3">Meaningful ABA articles are coming soon</h2>
              <p className="text-text-secondary max-w-2xl mx-auto mb-7">
                We are preparing educational articles focused on school readiness, home
                generalization, parent coaching, and Minnesota care navigation. Check back soon for
                new resources.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/insurance-and-funding" className="btn btn-tertiary btn-large rounded-full">
                  Explore Funding Resources
                </Link>
                <Link href="/contact-us" className="btn btn-secondary btn-large rounded-full">
                  Connect With Our Team
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[post.category]}`}
                  >
                    {post.category}
                  </span>
                  <h3 className="mt-4 mb-3 text-xl font-bold text-dark">{post.title}</h3>
                  <p className="mb-5 text-text-secondary text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs font-semibold text-text-muted">
                    <span>{post.readTime}</span>
                    <span>{post.publishedAt}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
