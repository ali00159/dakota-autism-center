import Image from 'next/image';
import { Icon } from '@iconify/react';
import ContactForm from '@/components/ContactForm';

const eidbiServices = [
  {
    title: 'Comprehensive Evaluation (CMDE)',
    description:
      'Our qualified professionals conduct a Comprehensive Multi-Disciplinary Evaluation to determine medical necessity and identify your child’s unique strengths and needs.',
    icon: 'solar:clipboard-check-bold-duotone',
    bgClass: 'bg-primary/10',
    iconClass: 'text-primary',
  },
  {
    title: 'Individual Treatment Plan (ITP)',
    description:
      'We develop a personalized plan outlining specific goals for communication, social skills, and adaptive behaviors, tailored to your family’s priorities.',
    icon: 'solar:document-add-bold-duotone',
    bgClass: 'bg-secondary/15',
    iconClass: 'text-[#FB9A31]',
  },
  {
    title: 'Adaptive Behavior Treatment',
    description:
      'Evidence-based ABA therapy provided 1:1 or in groups to build essential life skills and reduce challenging behaviors.',
    icon: 'solar:users-group-rounded-bold-duotone',
    bgClass: 'bg-tertiary/15',
    iconClass: 'text-tertiary',
  },
  {
    title: 'Family & Caregiver Training',
    description:
      'We empower you with strategies to support your child’s growth at home, ensuring consistency and confidence for the whole family.',
    icon: 'solar:home-smile-bold-duotone',
    bgClass: 'bg-accent/10',
    iconClass: 'text-[#EA3D6A]',
  },
  {
    title: 'Coordinated Care',
    description:
      'We collaborate with schools, medical providers, and other support systems to ensure a unified approach to your child’s development.',
    icon: 'solar:link-circle-bold-duotone',
    bgClass: 'bg-primary/10',
    iconClass: 'text-primary',
  },
  {
    title: 'Observation & Direction',
    description:
      'Our clinical supervisors regularly observe therapy sessions to monitor progress, ensure treatment fidelity, and make real-time program adjustments tailored to your child.',
    icon: 'solar:eye-bold-duotone',
    bgClass: 'bg-[#F0E6FF]',
    iconClass: 'text-[#7C3AED]',
  },
];

const eligibilityCriteria = [
  'Child has a diagnosis of ASD or a related condition',
  'Child is under the age of 21',
  'Enrolled in Medical Assistance (MA), TEFRA, MinnesotaCare, or PMAP',
  'Medical need determined via CMDE assessment',
];

export default function EidbiPage() {
  return (
    <main id="main-content" className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative border-b border-border-light overflow-hidden bg-white">
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 z-0 h-full">
          <Image
            src="/hero-image.png"
            alt="Therapist working with child in EIDBI program"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>

        <div className="container-max relative z-10 py-10 md:py-12 lg:py-14">
          <div className="w-full lg:w-1/2 lg:pr-12 animate-fade-in-up">
            <span className="badge badge-primary mb-5">MN Health Care Program</span>
            <h1 className="hero-headline text-dark mb-5">
              <span className="text-primary">EIDBI Services:</span> Specialized Autism Support in Minnesota
            </h1>
            <p className="body-large text-text-secondary max-w-2xl mb-7">
              Early Intensive Developmental and Behavioral Intervention (EIDBI) is a state benefit providing medically necessary treatment for children and young adults with autism. At Dakota Autism Center, we turn this benefit into <span className="text-secondary font-semibold">meaningful progress</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-find-center w-full sm:w-auto">
                Check Eligibility
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                  <Icon icon="solar:arrow-right-broken" className="w-5 h-5" />
                </span>
              </a>
              <a href="#services" className="btn btn-tertiary btn-large w-full sm:w-auto rounded-full">
                View Services
              </a>
            </div>

            <div className="block lg:hidden relative -mx-(--space-lg) w-[calc(100%+var(--space-lg)*2)] h-[32vh] min-h-[220px] max-h-[360px] mt-8">
              <Image
                src="/hero-image.png"
                alt="Therapist working with child in EIDBI program"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>

        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[10%] w-[20%] h-[20%] bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* What is EIDBI Section */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <span className="badge badge-secondary mb-4">About The Program</span>
              <h2 className="text-dark mb-6">What is EIDBI?</h2>
              <div className="prose prose-lg text-text-secondary">
                <p className="mb-4">
                  EIDBI stands for <strong>Early Intensive Developmental and Behavioral Intervention</strong>. It is a Minnesota Department of Human Services (DHS) benefit designed to provide medically necessary treatment for people under age 21 with Autism Spectrum Disorder (ASD) and related conditions.
                </p>
                <p>
                  The goal of EIDBI is to educate, train, and support parents and families while promoting children’s independence and participation in their communities. It focuses on:
                </p>
                <ul className="list-none space-y-3 mt-4">
                  {[
                    'Social communication and interaction',
                    'Emotional regulation and behavioral health',
                    'Adaptive and self-care skills',
                    'Cognitive and play skills'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 bg-[#F5F5F5] rounded-2xl p-8 lg:p-10 border border-border-light">
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
                <Icon icon="solar:clipboard-list-bold-duotone" className="w-8 h-8 text-secondary" />
                Who is Eligible?
              </h3>
              <ul className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5 text-secondary font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-text-secondary font-medium">{criteria}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border-light/50">
                <p className="text-sm text-text-muted mb-4">
                  Not sure if you qualify? Our team can help verify your insurance and eligibility.
                </p>
                <a href="#contact" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
                  Contact us for assistance <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section bg-[#F7FBF9]">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-info mb-4">Our EIDBI Services</span>
            <h2 className="text-dark mb-6">Comprehensive Support for Your Child's Journey</h2>
            <p className="body-large text-text-secondary">
              As an enrolled EIDBI provider, Dakota Autism Center offers the full range of services covered under the benefit, delivered with our signature warm and relationship-focused approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eidbiServices.map((service) => (
              <article key={service.title} className="bg-white rounded-2xl overflow-hidden border border-border-light shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className={`w-full ${service.bgClass} px-8 pt-6 pb-5`}>
                  <div className={`w-14 h-14 rounded-xl bg-white/60 ${service.iconClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon icon={service.icon} className="w-7 h-7" />
                  </div>
                </div>
                <div className="px-8 pt-5 pb-8">
                  <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white overflow-hidden">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/homepage-about-us-image.jpeg"
                alt="Dakota Autism Center facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon="solar:star-bold" className="w-5 h-5 text-secondary" />
                  <span className="font-bold tracking-wide uppercase text-sm">The Dakota Difference</span>
                </div>
                <p className="text-xl font-medium">
                  "We believe therapy should be something children look forward to, not just something they do."
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="badge badge-accent mb-4">Why Choose Us</span>
              <h2 className="text-dark mb-6">More than just a provider</h2>
              <p className="body-large text-text-secondary mb-8">
                While many agencies provide EIDBI services, Dakota Autism Center distinguishes itself through a holistic, nature-inspired philosophy that prioritizes the emotional well-being of the child and the family unit.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F4F0] flex items-center justify-center text-primary shrink-0">
                    <Icon icon="solar:heart-bold-duotone" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-1">Compassionate, Skilled Team</h4>
                    <p className="text-text-secondary text-sm">Our staff are not just qualified; they are chosen for their empathy, patience, and dedication to child development.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FEF3E8] flex items-center justify-center text-secondary shrink-0">
                    <Icon icon="solar:leaf-bold-duotone" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-1">Naturalistic Environment</h4>
                    <p className="text-text-secondary text-sm">We use natural teaching strategies in a setting that feels like a community, not a clinic.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E5F4FC] flex items-center justify-center text-tertiary shrink-0">
                    <Icon icon="solar:users-group-two-rounded-bold-duotone" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-1">Parent Partnership</h4>
                    <p className="text-text-secondary text-sm">We view parents as the experts on their children and work side-by-side with you every step of the way.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white text-center">
        <div className="container-max">
          <h2 id="cta-heading" className="text-white! mb-6">Start Your EIDBI Journey</h2>
          {/* #region agent log */}
          <script dangerouslySetInnerHTML={{ __html: `
            (function() {
              setTimeout(function() {
                var el = document.getElementById('cta-heading');
                if (!el) return;
                var computed = window.getComputedStyle(el);
                var allClasses = el.className;
                var parentSection = el.closest('section');
                var parentComputed = parentSection ? window.getComputedStyle(parentSection) : null;
                fetch('http://127.0.0.1:7245/ingest/d1c30ef8-027a-4d69-b9e0-92987f80e372',{
                  method:'POST',
                  headers:{'Content-Type':'application/json'},
                  body:JSON.stringify({
                    location:'eidbi/page.tsx:CTA',
                    message:'CTA h2 computed styles',
                    hypothesisId:'A,B,C,D',
                    data:{
                      computedColor: computed.color,
                      computedBgColor: computed.backgroundColor,
                      classes: allClasses,
                      parentBgColor: parentComputed ? parentComputed.backgroundColor : 'N/A',
                      parentColor: parentComputed ? parentComputed.color : 'N/A',
                      inlineStyle: el.style.cssText
                    },
                    timestamp:Date.now()
                  })
                }).catch(function(){});

                var sheets = document.styleSheets;
                var matchingRules = [];
                try {
                  for (var i = 0; i < sheets.length; i++) {
                    try {
                      var rules = sheets[i].cssRules || sheets[i].rules;
                      for (var j = 0; j < rules.length; j++) {
                        var rule = rules[j];
                        if (rule.cssText && (rule.selectorText === 'h2' || rule.selectorText === 'h2, .h2' || (rule.selectorText && rule.selectorText.indexOf('h2') !== -1 && rule.cssText.indexOf('color') !== -1))) {
                          matchingRules.push({selector: rule.selectorText, cssText: rule.cssText.substring(0, 200), layer: rule.parentRule ? rule.parentRule.cssText.substring(0, 50) : 'none'});
                        }
                        if (rule.cssRules) {
                          for (var k = 0; k < rule.cssRules.length; k++) {
                            var inner = rule.cssRules[k];
                            if (inner.selectorText && inner.selectorText.indexOf('h2') !== -1 && inner.cssText.indexOf('color') !== -1) {
                              matchingRules.push({selector: inner.selectorText, cssText: inner.cssText.substring(0, 200), parentLayer: rule.cssText.substring(0, 80)});
                            }
                          }
                        }
                      }
                    } catch(e) {}
                  }
                } catch(e) {}
                fetch('http://127.0.0.1:7245/ingest/d1c30ef8-027a-4d69-b9e0-92987f80e372',{
                  method:'POST',
                  headers:{'Content-Type':'application/json'},
                  body:JSON.stringify({
                    location:'eidbi/page.tsx:CTA-rules',
                    message:'CSS rules matching h2',
                    hypothesisId:'A,B,C,D',
                    data:{ matchingRules: matchingRules, totalRulesFound: matchingRules.length },
                    timestamp:Date.now()
                  })
                }).catch(function(){});

                var textWhiteRule = null;
                try {
                  for (var i = 0; i < sheets.length; i++) {
                    try {
                      var rules = sheets[i].cssRules || sheets[i].rules;
                      for (var j = 0; j < rules.length; j++) {
                        var rule = rules[j];
                        if (rule.selectorText === '.text-white' || (rule.selectorText && rule.selectorText.indexOf('text-white') !== -1)) {
                          textWhiteRule = {selector: rule.selectorText, cssText: rule.cssText.substring(0, 200), parentLayer: rule.parentRule ? rule.parentRule.cssText.substring(0, 80) : 'none'};
                        }
                        if (rule.cssRules) {
                          for (var k = 0; k < rule.cssRules.length; k++) {
                            var inner = rule.cssRules[k];
                            if (inner.selectorText && inner.selectorText.indexOf('text-white') !== -1) {
                              textWhiteRule = {selector: inner.selectorText, cssText: inner.cssText.substring(0, 200), parentLayer: rule.cssText.substring(0, 80)};
                            }
                          }
                        }
                      }
                    } catch(e) {}
                  }
                } catch(e) {}
                fetch('http://127.0.0.1:7245/ingest/d1c30ef8-027a-4d69-b9e0-92987f80e372',{
                  method:'POST',
                  headers:{'Content-Type':'application/json'},
                  body:JSON.stringify({
                    location:'eidbi/page.tsx:text-white-rule',
                    message:'text-white CSS rule details',
                    hypothesisId:'A,B',
                    data:{ textWhiteRule: textWhiteRule || 'NOT FOUND' },
                    timestamp:Date.now()
                  })
                }).catch(function(){});
              }, 1000);
            })();
          `}} />
          {/* #endregion */}
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Navigating state benefits can be complex. Let us help you understand your options and get your child the support they deserve.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-white text-primary font-semibold py-2 pl-6 pr-2 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 group w-full sm:w-auto text-lg">
              Contact Us Today
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon icon="solar:arrow-right-broken" className="w-6 h-6" />
              </span>
            </a>
            <a
              href="tel:612-284-5382"
              className="relative text-white font-bold text-lg inline-flex items-center gap-2 pb-1 group/call"
            >
              <Icon icon="solar:phone-linear" className="w-5 h-5" />
              (612) 284-5382
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-white rounded-full transition-all duration-300 ease-out group-hover/call:w-full" />
            </a>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
