'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerReveal';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
  sectionClassName?: string;
}

export default function FAQ({
  badge,
  title,
  subtitle,
  items,
  sectionClassName = 'bg-[#F8FAFE]',
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`section ${sectionClassName}`}>
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 xl:gap-20 items-start">

          {/* Left — sticky panel */}
          <ScrollReveal direction="right" duration={0.6} className="lg:sticky lg:top-28">
            {badge && (
              <span className="badge badge-info mb-6">{badge}</span>
            )}
            <h2 className="text-dark mb-5 leading-tight">{title}</h2>
            {subtitle && (
              <p className="text-text-secondary text-base leading-relaxed mb-8">
                {subtitle}
              </p>
            )}

            <div className="pt-6 border-t border-border-light">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-[#EBF6FD] flex items-center justify-center shrink-0">
                  <Icon
                    icon="solar:chat-square-bold-duotone"
                    className="w-[18px] h-[18px] text-tertiary"
                  />
                </div>
                <span className="text-sm text-text-muted font-medium">
                  {items.length} question{items.length !== 1 ? 's' : ''} answered
                </span>
              </div>

              {/* Progress dots — light up when a question is open */}
              <div className="flex gap-1.5">
                {items.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      openIndex === i
                        ? 'w-6 bg-tertiary'
                        : 'w-1.5 bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — accordion */}
          <StaggerContainer className="space-y-3">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <StaggerItem key={index}>
                  <div
                    className={`rounded-2xl border overflow-hidden bg-white transition-all duration-200 ${
                      isOpen
                        ? 'border-tertiary/40 shadow-[0_4px_20px_rgba(66,174,235,0.08)]'
                        : 'border-border-light hover:border-tertiary/25 hover:bg-[#FAFCFF]'
                    }`}
                  >
                  <button
                    className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-200 ${
                          isOpen
                            ? 'bg-tertiary text-white'
                            : 'bg-gray-100 text-text-muted'
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span
                        className={`text-base md:text-[17px] font-semibold leading-snug transition-colors duration-200 ${
                          isOpen ? 'text-tertiary' : 'text-dark'
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`shrink-0 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-tertiary'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      <Icon
                        icon="solar:alt-arrow-down-bold"
                        className={`w-3.5 h-3.5 transition-all duration-300 ${
                          isOpen ? 'text-white rotate-180' : 'text-text-muted rotate-0'
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 pl-14.5 md:pl-15.5 border-t border-border-light/60">
                      <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-0 pt-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}
