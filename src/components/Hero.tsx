import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-[calc(100vh-150px)] bg-white overflow-hidden border-b border-border-light"
      aria-labelledby="hero-heading"
    >
      {/* Desktop Image (Absolute Right 50%) */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] z-0 h-full">
         <Image 
           src="/hero-image.png"
           alt="Therapist working with a child in a supportive environment"
           fill
           className="object-cover"
           priority
           sizes="50vw"
         />
         <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>

      {/* Content Container */}
      <div className="container-max relative z-10 h-full flex flex-col justify-end flex-1 py-12 lg:pb-16 lg:min-h-[calc(100vh-150px)]">
          <div className="w-full lg:w-[50%] lg:pr-12 text-center md:text-left">
            <div className="animate-fade-in-up">
              
              {/* Headline */}
              <h1 
                id="hero-heading"
                className="hero-headline mb-6 stagger-1 relative"
              >
                Supporting Your Child’s Unique Journey: <span className="text-secondary relative inline-block">Evidence-Based</span> Care for Autism
              </h1>

              {/* Subheading */}
              <p 
                className="body-large text-text-secondary mb-10 max-w-2xl mx-auto md:mx-0 stagger-2 leading-relaxed"
              >
                Personalized therapy, skill development, and family support in a calm, nurturing environment designed for growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-5 mb-12 stagger-3">
                <a href="#contact" className="btn-find-center w-full sm:w-auto group">
                  Connect with Our Team
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/20">
                    <Icon icon="solar:phone-bold" className="w-6 h-6" />
                  </span>
                </a>
                <a href="#services" className="nav-link font-semibold text-lg ml-4">
                  Our Services
                </a>
              </div>

              {/* Mobile Image (Below CTA Buttons - Full Bleed) */}
              <div className="block lg:hidden relative -mx-(--space-lg) w-[calc(100%+var(--space-lg)*2)] h-[40vh] min-h-[280px] my-8">
                <Image 
                  src="/hero-image.png"
                  alt="Therapist working with a child in a supportive environment"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-8 lg:gap-16 stagger-4 border-t border-gray-100 pt-8 mt-4">
                
                {/* Insurance Logos */}
                <div className="text-center md:text-left">
                  <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                    <Icon icon="solar:shield-check-bold" className="w-4 h-4" />
                    Top insurance accepted
                  </p>
                  <div className="flex items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="font-bold text-xl text-dark">aetna</span>
                    <span className="font-bold text-xl text-dark">Cigna</span>
                    <span className="font-bold text-xl text-dark">BCBS</span>
                    <span className="font-bold text-xl text-dark">UHC</span>
                  </div>
                </div>

                {/* Trust/Rating */}
                <div className="text-center md:text-left border-l-0 sm:border-l border-gray-200 sm:pl-8">
                  <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                    <Icon icon="solar:users-group-rounded-bold" className="w-4 h-4" />
                    Trusted by families
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex">
                       {[1,2,3,4,5].map(i => (
                         <Icon key={i} icon="solar:star-bold" className="w-5 h-5 text-[#FB9A31]" />
                       ))}
                    </div>
                    <div className="flex flex-col items-start leading-none">
                      <span className="font-bold text-dark text-lg">4.9/5</span>
                      <span className="text-xs text-secondary font-medium">150+ reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      {/* Decorative Elements - subtle background shapes for the left side */}
      <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[10%] w-[20%] h-[20%] bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

    </section>
  );
}
