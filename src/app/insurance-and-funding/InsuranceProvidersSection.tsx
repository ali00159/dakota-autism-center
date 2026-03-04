'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Phone } from 'lucide-react';
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProviders.map((provider) => (
            <a
              key={provider.id}
              href="tel:6122845382"
              className={cn(
                'group relative bg-white rounded-xl p-6 border-2 transition-all duration-300',
                'hover:shadow-lg hover:-translate-y-1',
                provider.category === 'commercial' && 'border-gray-100 hover:border-[#42AEEB]/40',
                provider.category === 'medicaid' && 'border-gray-100 hover:border-[#115C47]/40',
                provider.category === 'eidbi' && 'border-gray-100 hover:border-[#EA3D6A]/40'
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center shrink-0',
                    provider.category === 'commercial' && 'bg-[#42AEEB]/10',
                    provider.category === 'medicaid' && 'bg-[#115C47]/10',
                    provider.category === 'eidbi' && 'bg-[#EA3D6A]/10'
                  )}
                >
                  <Icon
                    icon={provider.logo}
                    className={cn(
                      'w-6 h-6',
                      provider.category === 'commercial' && 'text-[#42AEEB]',
                      provider.category === 'medicaid' && 'text-[#115C47]',
                      provider.category === 'eidbi' && 'text-[#EA3D6A]'
                    )}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#474044] mb-1 group-hover:text-[#115C47] transition-colors">
                    {provider.name}
                  </h3>
                  <p className="text-sm text-[#6B6569] leading-relaxed">{provider.description}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div
                className={cn(
                  'absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium',
                  provider.category === 'commercial' && 'bg-[#42AEEB]/10 text-[#42AEEB]',
                  provider.category === 'medicaid' && 'bg-[#115C47]/10 text-[#115C47]',
                  provider.category === 'eidbi' && 'bg-[#EA3D6A]/10 text-[#EA3D6A]'
                )}
              >
                {provider.category === 'commercial'
                  ? 'Commercial'
                  : provider.category === 'medicaid'
                    ? 'Medicaid'
                    : 'EIDBI'}
              </div>

              {/* Call indicator on hover */}
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#115C47] opacity-0 group-hover:opacity-100 transition-opacity">
                <Phone className="w-3 h-3" />
                Call to verify your benefits
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-[#6B6569] mb-4">
            Not sure which path fits your family? A quick call is all it takes.
          </p>
          <a
            href="tel:6122845382"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#115C47] text-white font-semibold rounded-full hover:bg-[#0E4A38] transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Call to Verify Your Coverage
          </a>
        </div>
      </div>
    </section>
  );
}
