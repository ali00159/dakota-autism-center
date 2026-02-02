import { Icon } from '@iconify/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section 
      className="relative w-full flex flex-col lg:block min-h-[calc(100vh-80px)] bg-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Desktop Image (Absolute Right 50%) */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] z-0 h-full">
         <Image 
           src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
           alt="Therapist working with a child in a supportive environment"
           fill
           className="object-cover"
           priority
           sizes="50vw"
         />
         <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>

      {/* Mobile Image (Stacked Top) */}
       <div className="block lg:hidden relative w-full h-[40vh] min-h-[300px] z-0 order-1">
         <Image 
           src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
           alt="Therapist working with a child in a supportive environment"
           fill
           className="object-cover"
           priority
           sizes="100vw"
         />
         <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>

      {/* Content Container */}
      <div className="container-max relative z-10 h-full flex flex-col justify-center flex-1 order-2 lg:order-0 py-12 lg:py-0 lg:min-h-[calc(100vh-80px)]">
          <div className="w-full lg:w-[50%] lg:pr-12 text-center lg:text-left">
            <div className="animate-fade-in-up">
              
              {/* Headline */}
              <h1 
                id="hero-heading"
                className="hero-headline mb-6 stagger-1 relative"
                style={{ fontSize: 'var(--font-size-h1)', lineHeight: '1.1' }}
              >
                Supporting Your Child’s Unique Journey: <span className="text-secondary relative inline-block">Evidence-Based</span> Care for Autism
              </h1>

              {/* Subheading */}
              <p 
                className="body-large text-secondary mb-10 max-w-2xl mx-auto lg:mx-0 stagger-2 leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Personalized therapy, skill development, and family support in a calm, nurturing environment designed for growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12 stagger-3">
                <a href="#contact" className="btn btn-primary btn-large w-full sm:w-auto group rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                  Find a Center
                  <Icon icon="solar:arrow-right-linear" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#services" className="btn btn-tertiary btn-large w-full sm:w-auto group rounded-full border-2 hover:bg-primary/5">
                  Our Services
                  <Icon icon="solar:arrow-right-linear" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-8 lg:gap-16 stagger-4 border-t border-gray-100 pt-8 mt-4">
                
                {/* Insurance Logos */}
                <div className="text-center lg:text-left">
                  <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-2">
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
                <div className="text-center lg:text-left border-l-0 sm:border-l border-gray-200 sm:pl-8">
                  <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-2">
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
