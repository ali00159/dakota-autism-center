'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import { cn } from '@/lib/utils';

const fundingPaths = [
  {
    id: 'private',
    title: 'Private Insurance',
    description:
      'We help verify ABA benefits, prior authorization needs, and expected out-of-pocket costs before care starts.',
    icon: 'solar:shield-keyhole-bold-duotone',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    id: 'public',
    title: 'Minnesota Public Programs',
    description:
      'We guide families through EIDBI, Medical Assistance, MinnesotaCare, and MA-TEFRA pathways when eligible.',
    icon: 'solar:hand-money-bold-duotone',
    color: 'text-[#FB9A31]',
    bg: 'bg-[#FB9A31]/10',
    border: 'border-[#FB9A31]/20',
  },
  {
    id: 'hybrid',
    title: 'Hybrid Funding',
    description:
      'If coverage shifts, we map backup options and next steps so therapy continuity is protected as much as possible.',
    icon: 'solar:compass-bold-duotone',
    color: 'text-tertiary',
    bg: 'bg-tertiary/10',
    border: 'border-tertiary/20',
  },
];

const insuranceProviders = [
  {
    id: 'bcbs',
    name: 'Blue Cross Blue Shield',
    category: 'commercial',
    logo: 'solar:shield-check-bold',
    description: 'Families with BCBS often start here — call us to walk through your ABA benefits',
  },
  {
    id: 'aetna',
    name: 'Aetna',
    category: 'commercial',
    logo: 'solar:heart-pulse-bold',
    description: 'Including Better Health plans — let\'s confirm what your specific plan covers',
  },
  {
    id: 'cigna',
    name: 'Cigna',
    category: 'commercial',
    logo: 'solar:health-bold',
    description: 'A plan many families bring us — call to clarify authorization and coverage details',
  },
  {
    id: 'uhc',
    name: 'UnitedHealthcare',
    category: 'commercial',
    logo: 'solar:shield-bold',
    description: 'UHC Optum and commercial plans — reach out and we\'ll verify your benefits together',
  },
  {
    id: 'medica',
    name: 'Medica',
    category: 'commercial',
    logo: 'solar:medical-kit-bold',
    description: 'Common across Minnesota families — call us to review your ABA coverage',
  },
  {
    id: 'ma',
    name: 'Medical Assistance',
    category: 'medicaid',
    logo: 'solar:hand-heart-bold',
    description: 'MN MA and MinnesotaCare — we can walk you through eligibility and documentation',
  },
  {
    id: 'eidbi',
    name: 'EIDBI Benefit',
    category: 'eidbi',
    logo: 'solar:stars-bold',
    description: 'Early intensive intervention benefit — call us to map your eligibility pathway',
  },
];

const filterTabs = [
  { id: 'all', label: 'All Plans' },
  { id: 'commercial', label: 'Commercial Insurance' },
  { id: 'medicaid', label: 'Medicaid & MA' },
  { id: 'eidbi', label: 'EIDBI Benefit' },
];

export default function InsuranceProvidersSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProviders =
    activeCategory === 'all'
      ? insuranceProviders
      : insuranceProviders.filter((p) => p.category === activeCategory);

  return (
    <section id="funding-pathways" className="section bg-[#F8FBFA]">
      <div className="container-max">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge badge-info mb-4">Funding Pathways</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#474044] mb-4">
            How Families Fund Care — and <span className="text-[#115C47]">How We Help</span>
          </h2>
          <p className="text-lg text-[#6B6569]">
            Coverage looks different for every family. We organize the conversation into three clear pathways so you always know your next step.
          </p>
        </div>

        {/* Funding Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {fundingPaths.map((path) => (
            <article
              key={path.id}
              className={cn(
                'rounded-2xl bg-white border-2 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md',
                path.border
              )}
            >
              <div className={cn('mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl', path.bg)}>
                <Icon icon={path.icon} className={cn('h-7 w-7', path.color)} />
              </div>
              <h3 className="text-lg font-bold text-[#474044] mb-2">{path.title}</h3>
              <p className="text-sm text-[#6B6569] leading-relaxed mb-0">{path.description}</p>
            </article>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-border-light" />
          <span className="text-sm font-semibold text-text-muted uppercase tracking-wide whitespace-nowrap">
            Plans families often verify with us
          </span>
          <div className="flex-1 h-px bg-border-light" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
                activeCategory === tab.id
                  ? 'bg-[#115C47] text-white shadow-md'
                  : 'bg-white text-[#6B6569] border border-border-light hover:bg-gray-50'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Insurance Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProviders.map((provider) => {
            const cfg = (
              {
                commercial: { color: '#42AEEB', bg: '#E5F4FC', label: 'Commercial' },
                medicaid:   { color: '#115C47', bg: '#E8F4F0', label: 'Medicaid'   },
                eidbi:      { color: '#EA3D6A', bg: '#FDE8EE', label: 'EIDBI'      },
              } as const
            )[provider.category as 'commercial' | 'medicaid' | 'eidbi'];

            return (
              <Link
                key={provider.id}
                href="/contact-us#contact"
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100/80 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Category accent strip */}
                <div className="h-[3px] w-full" style={{ backgroundColor: cfg.color }} />

                {/* Card body */}
                <div className="flex-1 px-5 pt-5 pb-4">
                  {/* Icon + category pill row */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: cfg.bg }}
                    >
                      <Icon icon={provider.logo} className="w-6 h-6" style={{ color: cfg.color }} />
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full leading-none mt-1"
                      style={{ backgroundColor: cfg.bg, color: cfg.color }}
                    >
                      {cfg.label}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#1A1A1A] text-[15px] leading-snug mb-2 group-hover:text-[#115C47] transition-colors duration-300">
                    {provider.name}
                  </h3>
                  <p className="text-[13px] text-[#6B6569] leading-relaxed">{provider.description}</p>
                </div>

                {/* Footer CTA — always visible */}
                <div className="mx-4 mb-4 flex items-center justify-between gap-2 rounded-xl px-4 py-2.5" style={{ backgroundColor: cfg.bg }}>
                  <div className="flex items-center gap-2">
                    <Icon icon="solar:shield-check-bold" className="w-3.5 h-3.5 shrink-0" style={{ color: cfg.color }} />
                    <span className="text-xs font-semibold" style={{ color: cfg.color }}>
                      Verify your benefits
                    </span>
                  </div>
                  <svg
                    className="w-3.5 h-3.5 shrink-0 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: cfg.color }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-[#6B6569] mb-4">
            Not sure which path fits your family? Let us check your coverage.
          </p>
          <Link
            href="/contact-us#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#115C47] text-white font-semibold rounded-full hover:bg-[#0E4A38] transition-all duration-300"
          >
            <Icon icon="solar:shield-check-bold" className="w-4 h-4" />
            Verify Your Coverage
          </Link>
        </div>
      </div>
    </section>
  );
}
