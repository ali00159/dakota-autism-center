'use client';

import * as React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

import starBold from '@iconify-icons/solar/star-bold';
import arrowLeftLinear from '@iconify-icons/solar/arrow-left-linear';
import arrowRightLinear from '@iconify-icons/solar/arrow-right-linear';
import heartPulseBoldDuotone from '@iconify-icons/solar/heart-pulse-bold-duotone';

const testimonials = [
  {
    quote:
      'The calm, thoughtful rhythm of the day makes such a difference. My daughter comes home smiling — and so do we.',
    author: 'Maja & Ariel',
  },
  {
    quote:
      'The therapists here truly listen. They adapted to our son\'s needs and helped him find his voice in a way we never thought possible.',
    author: 'Sarah T.',
  },
  {
    quote:
      'We finally found a place where our child feels safe and understood. The progress we\'ve seen in just a few months is incredible.',
    author: 'David & Elena',
  },
  {
    quote:
      'Every day is a new discovery. The compassionate approach of the team has given us hope and a clear path forward for our family.',
    author: 'Jessica M.',
  },
  {
    quote:
      'The culturally responsive care we received made all the difference. They respected our family traditions while providing exceptional therapy.',
    author: 'Aisha & Omar',
  },
  {
    quote:
      'Seeing my son learn to communicate his needs has been life-changing. The patience of the staff here is truly remarkable.',
    author: 'Wei Chen',
  },
  {
    quote:
      'From the very first day, we felt like part of a community. The support extends beyond therapy sessions into our daily lives.',
    author: 'Mateo & Sofia',
  },
  {
    quote:
      'The transition to school was so much smoother thanks to the foundational skills built here. We are forever grateful.',
    author: 'Priya R.',
  },
];

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.2 11 15c0 1.866-1.404 3.376-3.25 3.376-.965 0-1.89-.399-2.567-1.055ZM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.2 21 15c0 1.866-1.404 3.376-3.25 3.376-.965 0-1.89-.399-2.567-1.055Z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="relative w-full overflow-hidden bg-[#FB9A31] py-10 lg:py-12">
      {/* Static background blobs — no animation, no GPU thrashing */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] rounded-full bg-[#FFB05C]/60 blur-[60px] lg:blur-[100px]" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[80%] rounded-full bg-[#E8882B]/50 blur-[60px] lg:blur-[120px]" />
      </div>

      <div className="container-max relative z-10 px-4 md:px-8">
        {/* Section Header */}
        <ScrollReveal
          direction="up"
          duration={0.6}
          className="text-center mb-4 lg:mb-6 flex flex-col items-center"
        >
          <div className="mb-3 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 shadow-inner">
            <Icon icon={heartPulseBoldDuotone} className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-primary text-white leading-[1.1] tracking-tight max-w-2xl">
            Hear from the families growing with us
          </h2>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          delay={0.2}
          duration={0.7}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Decorative Quote Mark — inline SVG, no network fetch */}
          <div className="absolute -top-6 -left-2 md:-top-10 md:-left-6 text-white/25 z-0 select-none pointer-events-none transform -rotate-12">
            <QuoteIcon className="w-24 h-24 md:w-36 md:h-36" />
          </div>

          <div className="relative z-10 bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(200,100,10,0.3)] border border-white/60">
            <div className="flex flex-col items-center text-center">
              {/* Logo */}
              <div className="mb-10 relative">
                <div className="absolute inset-0 bg-[#FB9A31]/10 blur-xl rounded-full scale-150" />
                <Image
                  src="/logo-mark.svg"
                  alt="Dakota Autism Center"
                  width={60}
                  height={68}
                  className="relative h-16 w-auto opacity-90"
                />
              </div>

              {/* Quote Text */}
              <div
                className="min-h-[160px] md:min-h-[140px] flex items-center justify-center w-full"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full"
                  >
                    <p className="text-xl md:text-3xl lg:text-4xl font-medium text-[#474044] leading-relaxed md:leading-snug font-primary">
                      &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Author */}
              <div className="mt-8 flex flex-col items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          icon={starBold}
                          className="w-5 h-5 text-[#FB9A31]"
                        />
                      ))}
                    </div>
                    <p className="font-bold text-[#474044] text-lg md:text-xl font-primary">{testimonials[activeTestimonial].author}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div
                className="flex items-center gap-6 md:gap-8 mt-12"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                    setIsAutoPlaying(false);
                  }}
                  className="w-12 h-12 rounded-full border-2 border-[#EBEBEB] flex items-center justify-center text-[#474044] hover:bg-[#FB9A31] hover:text-white hover:border-[#FB9A31] transition-colors duration-300 group cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <Icon icon={arrowLeftLinear} className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </motion.button>

                <div className="flex gap-2.5">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveTestimonial(idx);
                        setIsAutoPlaying(false);
                      }}
                      className={cn(
                        "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                        activeTestimonial === idx ? "bg-[#FB9A31] w-8" : "bg-[#EBEBEB] w-2.5 hover:bg-[#FB9A31]/50"
                      )}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
                    setIsAutoPlaying(false);
                  }}
                  className="w-12 h-12 rounded-full border-2 border-[#EBEBEB] flex items-center justify-center text-[#474044] hover:bg-[#FB9A31] hover:text-white hover:border-[#FB9A31] transition-colors duration-300 group cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <Icon icon={arrowRightLinear} className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
