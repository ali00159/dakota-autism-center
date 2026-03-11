'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import type { BlogPost } from '../blogPosts';

const categoryStyles: Record<string, string> = {
  'Parent Guidance': 'bg-[#EEF8FF] text-[#2A6D9A]',
  'Evidence-Based Practice': 'bg-[#F2F7EE] text-[#2F6A39]',
  'School Collaboration': 'bg-[#FFF4EA] text-[#935B1E]',
  'Funding Navigation': 'bg-[#F4EEFF] text-[#6843A3]',
  'Early Intervention': 'bg-[#EAF8F4] text-[#186B58]',
  'Myth Busting': 'bg-[#FDEDF2] text-[#A33560]',
};

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function FAQAccordion({ faqs }: { faqs: BlogPost['faqs'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border overflow-hidden bg-white transition-all duration-200 ${
              isOpen
                ? 'border-primary/40 shadow-[0_4px_20px_rgba(17,92,71,0.08)]'
                : 'border-border-light hover:border-primary/25'
            }`}
          >
            <button
              className="w-full flex items-start justify-between gap-4 p-5 text-left cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`blog-faq-${index}`}
            >
              <span
                className={`text-base font-semibold leading-snug transition-colors duration-200 ${
                  isOpen ? 'text-primary' : 'text-dark'
                }`}
              >
                {faq.question}
              </span>
              <span
                className={`shrink-0 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? 'bg-primary' : 'bg-gray-100'
                }`}
              >
                <Icon
                  icon="solar:alt-arrow-down-bold"
                  className={`w-3.5 h-3.5 transition-all duration-300 ${
                    isOpen ? 'text-white rotate-180' : 'text-text-muted'
                  }`}
                />
              </span>
            </button>
            <div
              id={`blog-faq-${index}`}
              role="region"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-5 border-t border-border-light/60">
                <p className="text-text-secondary text-[15px] leading-relaxed mb-0 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const tocItems = post.sections.map((s) => ({ id: s.id, heading: s.heading }));

  return (
    <main id="main-content" className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-border-light bg-[#FAFCFB]">
        <div className="container-max py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Icon icon="solar:alt-arrow-right-linear" className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <Icon icon="solar:alt-arrow-right-linear" className="w-3.5 h-3.5" />
            <span className="text-dark font-medium truncate max-w-[260px]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero header */}
      <section className="border-b border-border-light bg-white">
        <div className="container-max py-10 md:py-14 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <span
              className={`inline-flex rounded-full px-3.5 py-1 text-xs font-semibold mb-5 ${
                categoryStyles[post.category] ?? 'bg-gray-100 text-gray-600'
              }`}
            >
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-dark leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <Icon icon="solar:buildings-bold-duotone" className="w-4 h-4 text-primary" />
                {post.author.name}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon icon="solar:calendar-bold-duotone" className="w-4 h-4 text-primary" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon icon="solar:clock-circle-bold-duotone" className="w-4 h-4 text-primary" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured image */}
      {post.image && (
        <div className="border-b border-border-light">
          <div className="container-max">
            <div className="relative w-full aspect-21/9 md:aspect-[2.4/1] rounded-b-2xl overflow-hidden -mt-px">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      )}

      {/* Article body + sidebar */}
      <div className="container-max py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-14 items-start">
          {/* Main content */}
          <article className="min-w-0">
            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              className="rounded-2xl border border-primary/20 bg-[#F0F8F5] p-6 md:p-8 mb-10"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Icon icon="solar:star-bold-duotone" className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-dark mb-0">Key Highlights</h2>
              </div>
              <ul className="space-y-3">
                {post.keyHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon
                      icon="solar:check-circle-bold"
                      className="w-5 h-5 text-primary mt-0.5 shrink-0"
                    />
                    <span className="text-[15px] text-text-secondary leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Content sections */}
            {post.sections.map((section, i) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="mb-10 scroll-mt-28"
              >
                <h2 className="text-2xl md:text-[1.7rem] font-bold text-dark mb-5 leading-snug">
                  {section.heading}
                </h2>
                <div
                  className="prose prose-lg max-w-none text-text-secondary
                    prose-headings:text-dark prose-headings:font-bold
                    prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-dark prose-strong:font-semibold
                    prose-li:text-text-secondary prose-li:leading-relaxed
                    prose-ul:space-y-2 prose-ol:space-y-2
                    prose-p:leading-relaxed prose-p:mb-4"
                  dangerouslySetInnerHTML={{ __html: section.body }}
                />

                {/* Mid-article CTA after the EIDBI vs ABA section */}
                {section.id === 'eidbi-vs-aba' && (
                  <div className="mt-8 rounded-2xl border border-secondary/30 bg-[#FEF8F0] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0">
                      <Icon
                        icon="solar:phone-calling-bold-duotone"
                        className="w-5 h-5 text-[#FB9A31]"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-dark font-semibold mb-1">
                        Not sure which funding path is right for your family?
                      </p>
                      <p className="text-text-secondary text-sm mb-0">
                        Our team can help you navigate EIDBI eligibility and private insurance
                        options — at no cost.
                      </p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-primary rounded-full whitespace-nowrap"
                    >
                      Free Eligibility Check
                    </Link>
                  </div>
                )}
              </motion.section>
            ))}

            {/* FAQ section */}
            {post.faqs.length > 0 && (
              <section id="faq" className="mb-10 scroll-mt-28">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-tertiary/15 flex items-center justify-center">
                    <Icon
                      icon="solar:chat-square-bold-duotone"
                      className="w-4.5 h-4.5 text-tertiary"
                    />
                  </div>
                  <h2 className="text-2xl md:text-[1.7rem] font-bold text-dark mb-0">
                    Frequently Asked Questions
                  </h2>
                </div>
                <FAQAccordion faqs={post.faqs} />
              </section>
            )}

            {/* Sources */}
            {post.sources.length > 0 && (
              <section id="sources" className="mb-10 scroll-mt-28">
                <h2 className="text-xl font-bold text-dark mb-4">Sources</h2>
                <ul className="space-y-2">
                  {post.sources.map((source, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-text-muted text-sm font-semibold mt-0.5 shrink-0">
                        [{i + 1}]
                      </span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm font-medium hover:underline break-all"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Bottom CTA */}
            <section className="rounded-3xl bg-primary p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/5 blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Ready to Explore EIDBI for Your Child?
                </h2>
                <p className="text-white/85 text-lg leading-relaxed mb-6 max-w-xl">
                  Navigating state benefits can feel complex. Let our team verify your child&apos;s
                  eligibility and guide you through every step — from the CMDE to starting therapy.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-3 bg-white text-primary font-semibold py-2.5 pl-6 pr-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    Contact Us Today
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                    </span>
                  </Link>
                  <a
                    href="tel:612-284-5382"
                    className="text-white font-bold text-lg inline-flex items-center gap-2 hover:text-white/80 transition-colors"
                  >
                    <Icon icon="solar:phone-linear" className="w-5 h-5" />
                    (612) 284-5382
                  </a>
                </div>
              </div>
            </section>

            {/* About the publisher */}
            <div className="mt-10 rounded-2xl border border-border-light bg-[#FAFCFB] p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon icon="solar:buildings-bold-duotone" className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark mb-2">About Dakota Autism Center</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">
                    Dakota Autism Center provides personalized ABA therapy, EIDBI services, and
                    family support across Minnesota. We specialize in naturalistic, relationship-based
                    care that helps children build meaningful skills in real-world settings. Our team
                    handles all insurance and funding navigation so families can focus on what matters
                    most.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/eidbi"
                      className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      EIDBI Services
                      <Icon icon="solar:arrow-right-linear" className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/center-based-aba-therapy"
                      className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Center-Based ABA
                      <Icon icon="solar:arrow-right-linear" className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/in-home-aba-therapy"
                      className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      In-Home ABA
                      <Icon icon="solar:arrow-right-linear" className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar — table of contents + quick links */}
          <aside className="hidden lg:block sticky top-28">
            <nav className="rounded-2xl border border-border-light bg-[#FAFCFB] p-6 mb-6">
              <h3 className="text-sm font-bold text-dark uppercase tracking-wide mb-4">
                In This Article
              </h3>
              <ul className="space-y-2.5">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-[13px] text-text-secondary hover:text-primary font-medium transition-colors leading-snug block"
                    >
                      {item.heading}
                    </a>
                  </li>
                ))}
                {post.faqs.length > 0 && (
                  <li>
                    <a
                      href="#faq"
                      className="text-[13px] text-text-secondary hover:text-primary font-medium transition-colors leading-snug block"
                    >
                      FAQ
                    </a>
                  </li>
                )}
                {post.sources.length > 0 && (
                  <li>
                    <a
                      href="#sources"
                      className="text-[13px] text-text-secondary hover:text-primary font-medium transition-colors leading-snug block"
                    >
                      Sources
                    </a>
                  </li>
                )}
              </ul>
            </nav>

            <div className="rounded-2xl bg-primary p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                <Icon icon="solar:bookmark-bold-duotone" className="w-4 h-4 text-white/80" />
                Related Pages
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/eidbi"
                    className="text-[13px] text-white/90 font-semibold hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    EIDBI Services
                    <Icon icon="solar:arrow-right-linear" className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insurance-and-funding"
                    className="text-[13px] text-white/90 font-semibold hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    Insurance & Funding Guide
                    <Icon icon="solar:arrow-right-linear" className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/center-based-aba-therapy"
                    className="text-[13px] text-white/90 font-semibold hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    Center-Based ABA
                    <Icon icon="solar:arrow-right-linear" className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-[13px] text-white/90 font-semibold hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    Contact Us
                    <Icon icon="solar:arrow-right-linear" className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Back to blog */}
      <div className="border-t border-border-light bg-[#FAFCFB]">
        <div className="container-max py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <Icon icon="solar:arrow-left-linear" className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </div>
    </main>
  );
}
