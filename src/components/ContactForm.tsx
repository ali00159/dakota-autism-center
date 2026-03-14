'use client';

import { useRef, useState, useTransition } from 'react';
import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { submitContact } from '@/app/actions/submitContact';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

function formatPhoneValue(raw: string) {
  const digits = raw.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [phoneDisplay, setPhoneDisplay] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const parentFirstName = fd.get('parentFirstName') as string;
    const parentLastName = fd.get('parentLastName') as string;
    const email = fd.get('email') as string;
    const phone = phoneDisplay.replace(/\D/g, '');
    const zipCode = fd.get('zipCode') as string;
    const insurance = fd.get('insurance') as string;

    const childFirstName = fd.get('childFirstName') as string;

    if (!parentFirstName || !parentLastName || !email || !phone || !childFirstName || !zipCode || !insurance) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    startTransition(async () => {
      const result = await submitContact({
        parentFirstName,
        parentLastName,
        email,
        phone,
        childFirstName,
        childAge: (fd.get('childAge') as string) || undefined,
        zipCode,
        insurance,
        preferredSetting: (fd.get('preferredSetting') as string) || undefined,
        enrollmentType: (fd.get('enrollmentType') as string) || undefined,
        smsConsent: fd.get('smsConsent') === 'on',
      });

      if (result.success) {
        setStatus('success');
        setErrorMessage('');
        setPhoneDisplay('');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    });
  }

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
          <ScrollReveal direction="right" duration={0.6} className="w-full pt-8 lg:sticky lg:top-8 lg:self-start lg:w-5/12">
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
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={0.6} className="w-full lg:w-7/12">
            <div className="card relative border border-border-light bg-white p-8 shadow-xl md:p-10">
              <div className="absolute top-0 left-0 h-2 w-full rounded-t-lg bg-linear-to-r from-primary via-secondary to-tertiary" />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex min-h-[400px] flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                      <Icon icon="solar:check-circle-bold" className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-dark">Thank You!</h3>
                    <p className="mb-8 max-w-sm text-text-secondary">
                      Your interest form has been submitted successfully. Our team will reach out
                      within 1-2 business days to discuss next steps.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="btn btn-primary rounded-xl px-6 py-3"
                    >
                      Submit Another Form
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="parentFirstName" className="form-label form-label-required">
                            Parent/Guardian First Name
                          </label>
                          <input
                            type="text"
                            id="parentFirstName"
                            name="parentFirstName"
                            className="input-text"
                            placeholder="Jane"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="parentLastName" className="form-label form-label-required">
                            Parent/Guardian Last Name
                          </label>
                          <input
                            type="text"
                            id="parentLastName"
                            name="parentLastName"
                            className="input-text"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="form-label form-label-required">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="input-text"
                          placeholder="jane@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="form-label form-label-required">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="input-text"
                          placeholder="(555) 123-4567"
                          value={phoneDisplay}
                          onChange={(e) => setPhoneDisplay(formatPhoneValue(e.target.value))}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="childFirstName" className="form-label form-label-required">
                            Child&apos;s First Name
                          </label>
                          <input
                            type="text"
                            id="childFirstName"
                            name="childFirstName"
                            className="input-text"
                            placeholder="Child&apos;s Name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="childAge" className="form-label">
                            Child&apos;s Age
                          </label>
                          <input
                            type="text"
                            inputMode="numeric"
                            id="childAge"
                            name="childAge"
                            className="input-text"
                            placeholder="e.g. 5"
                            maxLength={2}
                            onChange={(e) => {
                              e.target.value = e.target.value.replace(/\D/g, '').slice(0, 2);
                            }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="zipCode" className="form-label form-label-required">
                            Zip code
                          </label>
                          <input
                            type="text"
                            inputMode="numeric"
                            id="zipCode"
                            name="zipCode"
                            className="input-text"
                            placeholder="ex. 73301"
                            maxLength={5}
                            onChange={(e) => {
                              e.target.value = e.target.value.replace(/\D/g, '').slice(0, 5);
                            }}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="insurance" className="form-label form-label-required">
                            Insurance
                          </label>
                          <div className="relative">
                            <select id="insurance" name="insurance" className="select w-full appearance-none" required>
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
                          <input type="checkbox" name="smsConsent" className="checkbox mt-1" />
                          <span className="text-sm leading-tight text-text-secondary">
                            I agree to receive SMS text messages from Dakota Autism Center. Message &
                            data rates may apply.
                          </span>
                        </label>
                      </div>

                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4"
                        >
                          <Icon icon="solar:danger-triangle-bold" className="h-5 w-5 shrink-0 text-red-500" />
                          <p className="text-sm text-red-700">{errorMessage}</p>
                        </motion.div>
                      )}

                      <button
                        type="submit"
                        disabled={isPending}
                        className="btn btn-primary group w-full justify-center rounded-xl py-4 text-lg transition-all duration-300 shadow-primary hover:shadow-xl disabled:opacity-70"
                      >
                        {isPending ? (
                          <>
                            <Icon icon="solar:refresh-bold" className="h-5 w-5 animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Interest Form</span>
                            <Icon
                              icon="solar:plain-3-bold"
                              className="h-5 w-5 transition-transform group-hover:translate-x-1"
                            />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
