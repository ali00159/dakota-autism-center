'use client';

import { useRef } from 'react';
import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={sectionRef} className="section relative bg-white" id="contact">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-secondary/5 blur-3xl"
        />
      </div>

      <div className="container-max relative z-10">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-24">
          <div className="w-full pt-8 lg:sticky lg:top-8 lg:self-start lg:w-5/12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              <Icon icon="solar:chat-round-dots-bold" className="h-4 w-4" />
              <span>Get in Touch</span>
            </div>

            <h2 className="h1 mb-6 text-dark">
              Help your child thrive with <span className="text-primary">ABA therapy.</span>
            </h2>

            <p className="body-large mb-8 text-text-secondary">
              Complete our online interest form to get matched with a center. We will be in touch
              soon to discuss your child&apos;s unique needs and how we can support your family.
            </p>

            <div className="mb-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-secondary shadow-sm">
                  <Icon icon="solar:phone-calling-bold" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-dark">Call Us</h3>
                  <p className="mb-1 text-text-secondary">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:612-284-5382" className="font-semibold text-primary hover:underline">
                    (612) 284-5382
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-tertiary shadow-sm">
                  <Icon icon="solar:letter-bold" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-dark">Email Us</h3>
                  <p className="mb-1 text-text-secondary">We&apos;ll respond within 24 hours.</p>
                  <a
                    href="mailto:info@dakotaautismcenter.com"
                    className="font-semibold text-primary hover:underline"
                  >
                    info@dakotaautismcenter.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="card relative border border-border-light bg-white p-8 shadow-xl md:p-10">
              <div className="absolute top-0 left-0 h-2 w-full rounded-t-lg bg-linear-to-r from-primary via-secondary to-tertiary" />

              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="parentFirstName" className="form-label form-label-required">
                      Parent/Guardian First Name
                    </label>
                    <input
                      type="text"
                      id="parentFirstName"
                      className="input-text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="parentLastName" className="form-label form-label-required">
                      Parent/Guardian Last Name
                    </label>
                    <input
                      type="text"
                      id="parentLastName"
                      className="input-text"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="form-label form-label-required">
                    Email
                  </label>
                  <input type="email" id="email" className="input-text" placeholder="jane@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="form-label form-label-required">
                    Phone number
                  </label>
                  <input type="tel" id="phone" className="input-text" placeholder="(555) 123-4567" />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="childFirstName" className="form-label">
                      Child&apos;s First Name
                    </label>
                    <input
                      type="text"
                      id="childFirstName"
                      className="input-text"
                      placeholder="Child&apos;s Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="childAge" className="form-label">
                      Child&apos;s Age
                    </label>
                    <input type="text" id="childAge" className="input-text" placeholder="e.g. 5" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="zipCode" className="form-label form-label-required">
                      Zip code
                    </label>
                    <input type="text" id="zipCode" className="input-text" placeholder="ex. 73301" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="insurance" className="form-label form-label-required">
                      Insurance
                    </label>
                    <div className="relative">
                      <select id="insurance" className="select w-full appearance-none">
                        <option value="">Please Select</option>
                        <option value="aetna">Aetna</option>
                        <option value="bcbs">Blue Cross Blue Shield</option>
                        <option value="cigna">Cigna</option>
                        <option value="uhc">UnitedHealthcare</option>
                        <option value="medicaid">Medicaid</option>
                        <option value="other">Other / Private Pay</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <label className="form-label form-label-required">Preferred Setting</label>
                    <div className="flex flex-col gap-3" role="radiogroup" aria-label="Preferred setting">
                      <label className="radio-wrapper">
                        <input type="radio" name="preferredSetting" value="in-home" className="radio" />
                        <span className="text-text-primary">In-Home Therapy</span>
                      </label>
                      <label className="radio-wrapper">
                        <input
                          type="radio"
                          name="preferredSetting"
                          value="center-based"
                          className="radio"
                        />
                        <span className="text-text-primary">Center-Based Therapy</span>
                      </label>
                      <label className="radio-wrapper">
                        <input type="radio" name="preferredSetting" value="not-sure" className="radio" />
                        <span className="text-text-primary">Not sure</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="form-label">Preferred Enrollment Type</label>
                    <div className="flex flex-col gap-3" role="radiogroup" aria-label="Preferred enrollment type">
                      <label className="radio-wrapper">
                        <input type="radio" name="enrollmentType" value="part-time" className="radio" />
                        <span className="text-text-primary">Part-time</span>
                      </label>
                      <label className="radio-wrapper">
                        <input type="radio" name="enrollmentType" value="full-time" className="radio" />
                        <span className="text-text-primary">Full-time</span>
                      </label>
                      <label className="radio-wrapper">
                        <input type="radio" name="enrollmentType" value="not-sure" className="radio" />
                        <span className="text-text-primary">Not sure</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="checkbox-wrapper items-start">
                    <input type="checkbox" className="checkbox mt-1" />
                    <span className="text-sm leading-tight text-text-secondary">
                      I agree to receive SMS text messages from Dakota Autism Center. Message &
                      data rates may apply.
                    </span>
                  </label>
                </div>

                <button
                  type="button"
                  className="btn btn-primary group w-full justify-center rounded-xl py-4 text-lg transition-all duration-300 shadow-primary hover:shadow-xl"
                >
                  <span>Submit Interest Form</span>
                  <Icon
                    icon="solar:plain-3-bold"
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
