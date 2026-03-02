"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactContent() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus("success");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "(612) 284-5382",
      href: "tel:6122845382",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@dakotaautismcenter.com",
      href: "mailto:info@dakotaautismcenter.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "331 2nd Ave S, Suite 436",
      subContent: "Minneapolis, MN 55401",
      href: "https://maps.google.com/?q=331+2nd+Ave+S+Suite+436+Minneapolis+MN+55401",
      description: "Get Directions",
    },
  ];

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans including Medical Assistance (MA), Blue Cross Blue Shield, HealthPartners, Medica, UCare, and more. Please contact us to verify your specific coverage.",
    },
    {
      question: "What ages do you serve?",
      answer: "We primarily serve children from early diagnosis (18 months) through adolescence. Our programs are tailored to meet the developmental needs of each age group.",
    },
    {
      question: "How do I get started?",
      answer: "The first step is to contact us to schedule an initial consultation. We'll discuss your child's needs, verify insurance benefits, and guide you through the intake process.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50"></div>
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="badge badge-primary mb-4">Contact Us</span>
            <h1 className="hero-headline mb-6">We're Here to Help</h1>
            <p className="body-large text-secondary mb-8">
              Whether you're looking for services, have questions about insurance, or just want to learn more about our approach, our team is ready to support you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-lg transition-all duration-300 group bg-white"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                    <item.icon size={24} />
                  </div>
                  <h3 className="h4 mb-2">{item.title}</h3>
                  <a href={item.href} className="text-lg font-medium text-primary hover:text-primary-hover transition-colors mb-1">
                    {item.content}
                  </a>
                  {item.subContent && (
                    <p className="text-secondary">{item.subContent}</p>
                  )}
                  <p className="text-sm text-muted mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form & Map */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="h2 mb-6">Send Us a Message</h2>
              <p className="body-text text-secondary mb-8">
                Fill out the form below and our intake coordinator will get back to you within one business day.
              </p>

              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-100 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="h3 mb-2">Message Sent!</h3>
                  <p className="text-secondary mb-6">
                    Thank you for reaching out. We've received your message and will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label form-label-required">First Name</label>
                      <input type="text" id="firstName" required className="input-text" placeholder="Jane" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label form-label-required">Last Name</label>
                      <input type="text" id="lastName" required className="input-text" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label form-label-required">Email Address</label>
                      <input type="email" id="email" required className="input-text" placeholder="jane@example.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input type="tel" id="phone" className="input-text" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label form-label-required">I'm interested in...</label>
                    <div className="relative">
                      <select id="subject" required className="select w-full appearance-none">
                        <option value="" disabled selected>Select a topic</option>
                        <option value="services">Starting Services / Intake</option>
                        <option value="insurance">Insurance & Billing</option>
                        <option value="careers">Careers / Employment</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label form-label-required">Message</label>
                    <textarea id="message" required className="textarea" placeholder="How can we help you?"></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className={`btn btn-primary w-full md:w-auto ${formStatus === "submitting" ? "btn-loading" : ""}`}
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Container */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] shadow-md relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.381368677676!2d-93.26750792324966!3d44.97686697107054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b3329a75fc44b3%3A0xab6d15df00205abb!2s331%202nd%20Ave%20S%20%23436%2C%20Minneapolis%2C%20MN%2055401!5e0!3m2!1sen!2sus!4v1709586421000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dakota Autism Center Location"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              {/* Hours Card */}
              <div className="bg-highlight rounded-2xl p-8 border border-tertiary/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-tertiary shrink-0 shadow-sm">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="h4 mb-4">Office Hours</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center text-secondary border-b border-tertiary/10 pb-2">
                        <span className="font-medium">Monday - Friday</span>
                        <span>8:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between items-center text-secondary border-b border-tertiary/10 pb-2">
                        <span className="font-medium">Saturday</span>
                        <span className="text-muted">Closed</span>
                      </li>
                      <li className="flex justify-between items-center text-secondary">
                        <span className="font-medium">Sunday</span>
                        <span className="text-muted">Closed</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted mt-4 italic">
                      *Therapy sessions may be scheduled outside of standard office hours by appointment.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary/5">
        <div className="container-reading">
          <div className="text-center mb-12">
            <span className="badge badge-secondary mb-4">FAQ</span>
            <h2 className="h2">Common Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-start gap-3">
                  <HelpCircle size={20} className="text-secondary shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-secondary pl-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-transparent opacity-20"></div>
        <div className="container-narrow relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to take the next step?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our team is ready to answer your questions and help you navigate the path forward for your child.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:6122845382" className="btn bg-white text-primary hover:bg-gray-100 border-none shadow-lg">
              <Phone size={18} />
              Call (612) 284-5382
            </a>
            <Link href="/center-based-aba-therapy" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
