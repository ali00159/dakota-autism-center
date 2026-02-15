import { Icon } from '@iconify/react';

export default function ContactForm() {
  return (
    <section className="section bg-white relative overflow-hidden" id="contact">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Side: Content & Info */}
          <div className="w-full lg:w-5/12 pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Icon icon="solar:chat-round-dots-bold" className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            
            <h2 className="h1 mb-6 text-dark">
              Help your child thrive with <span className="text-primary">ABA therapy.</span>
            </h2>
            
            <p className="body-large text-text-secondary mb-8">
              Complete our online interest form to get matched with a center. We will be in touch soon to discuss your child's unique needs and how we can support your family.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0">
                  <Icon icon="solar:phone-calling-bold" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">Call Us</h3>
                  <p className="text-text-secondary mb-1">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:612-284-5382" className="text-primary font-semibold hover:underline">(612) 284-5382</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-tertiary shrink-0">
                  <Icon icon="solar:letter-bold" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">Email Us</h3>
                  <p className="text-text-secondary mb-1">We'll respond within 24 hours.</p>
                  <a href="mailto:info@dakotaautismcenter.com" className="text-primary font-semibold hover:underline">info@dakotaautismcenter.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="w-full lg:w-7/12">
            <div className="card bg-white shadow-xl p-8 md:p-10 border border-border-light relative">
              {/* Form Header Decoration */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-t-lg" />

              <form className="space-y-6">
                
                {/* Parent Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="parentFirstName" className="form-label form-label-required">Parent/Guardian First Name</label>
                    <input type="text" id="parentFirstName" className="input-text" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="parentLastName" className="form-label form-label-required">Parent/Guardian Last Name</label>
                    <input type="text" id="parentLastName" className="input-text" placeholder="Doe" />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <label htmlFor="email" className="form-label form-label-required">Email</label>
                  <input type="email" id="email" className="input-text" placeholder="jane@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="form-label form-label-required">Phone number</label>
                  <input type="tel" id="phone" className="input-text" placeholder="(555) 123-4567" />
                </div>

                {/* Child Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="childFirstName" className="form-label">Child's First Name</label>
                    <input type="text" id="childFirstName" className="input-text" placeholder="Child's Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="childAge" className="form-label">Child's Age</label>
                    <input type="text" id="childAge" className="input-text" placeholder="e.g. 5" />
                  </div>
                </div>

                {/* Location & Insurance */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="zipCode" className="form-label form-label-required">Zip code</label>
                    <input type="text" id="zipCode" className="input-text" placeholder="ex. 73301" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="insurance" className="form-label form-label-required">Insurance</label>
                    <div className="relative">
                      <select id="insurance" className="select appearance-none w-full">
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

                {/* Preferred Setting */}
                <div className="space-y-3">
                  <label className="form-label form-label-required">Preferred Setting</label>
                  <div className="flex flex-col gap-3">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" className="checkbox" />
                      <span className="text-text-primary">In-Home Therapy</span>
                    </label>
                    <label className="checkbox-wrapper">
                      <input type="checkbox" className="checkbox" />
                      <span className="text-text-primary">Center-Based Therapy</span>
                    </label>
                  </div>
                </div>

                {/* SMS Consent */}
                <div className="pt-2">
                  <label className="checkbox-wrapper items-start">
                    <input type="checkbox" className="checkbox mt-1" />
                    <span className="text-sm text-text-secondary leading-tight">
                      I agree to receive SMS text messages from Dakota Autism Center. Message & data rates may apply.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button type="button" className="btn btn-primary w-full text-lg py-4 rounded-xl shadow-primary hover:shadow-xl transition-all duration-300 group justify-center">
                  <span>Submit Interest Form</span>
                  <Icon icon="solar:plain-3-bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
