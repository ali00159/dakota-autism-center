import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Printer } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact Us', href: '#contact' },
    ],
    visit: [
      { label: 'Get Started', href: '#get-started' },
      { label: 'Our Approach', href: '#approach' },
      { label: 'Our Program', href: '#program' },
      { label: 'Insurance', href: '#insurance' },
      { label: 'Learning Center', href: '#learning-center' },
    ],
    locations: [
      { label: 'St. Louis Region', href: '#locations' },
      { label: 'View All Locations', href: '#locations' },
    ]
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 mt-auto">
      <div className="container-max">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-4 border-b border-white/10 pb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-6">
            <a href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Image
                  src="/full-logo.svg"
                  alt="Dakota Autism Center"
                  width={280}
                  height={106}
                  className="h-40 w-auto brightness-0 invert"
                />
              </div>
            </a>
            <p className="text-white/80 leading-relaxed">
              Dakota Autism Center is a center-based Applied Behavior Analysis (ABA) program for young children 
              with Autism Spectrum Disorder. Our centers are run in a preschool-like setting and our 
              programs are designed to assist with social communication, emotional regulation, school readiness, 
              and transitioning skills.
            </p>
            
            <div className="flex gap-4 pt-4">
              {/* Social placeholders */}
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            
            {/* Company */}
            <div>
              <h3 className="text-[11px] font-bold tracking-wider uppercase mb-6 text-supporting">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link inline-flex items-center gap-2 group">
                      {link.label}
                      {link.isNew && (
                        <span className="bg-tertiary text-[10px] font-bold px-1.5 py-0.5 rounded text-white">NEW</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plan Your Visit */}
            <div>
              <h3 className="text-[11px] font-bold tracking-wider uppercase mb-6 text-supporting">Plan</h3>
              <ul className="space-y-4">
                {footerLinks.visit.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-[11px] font-bold tracking-wider uppercase mb-6 text-supporting">Locations</h3>
              <ul className="space-y-4">
                {footerLinks.locations.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link inline-flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-tertiary" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 pb-4">
          {/* Location */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#D4EAFC]" />
              <span className="font-bold text-lg">Location</span>
            </div>
            <p className="text-white/80 leading-relaxed pl-8">
              St. Louis Region<br />
              (Address to be updated)
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#D4EAFC]" />
              <span className="font-bold text-lg">Phone</span>
            </div>
            <a href="tel:612-284-5382" className="text-white/80 hover:text-white transition-colors pl-8">
              (612) 284-5382
            </a>
          </div>

          {/* Fax */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Printer className="w-5 h-5 text-[#D4EAFC]" />
              <span className="font-bold text-lg">Fax</span>
            </div>
            <p className="text-white/80 pl-8">
              (Fax Number)
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#D4EAFC]" />
              <span className="font-bold text-lg">Email</span>
            </div>
            <a href="mailto:info@dakotaautismcenter.com" className="text-white/80 hover:text-white transition-colors pl-8">
              info@dakotaautismcenter.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60 pt-6 border-t border-white/10">
          <p>© {currentYear} Dakota Autism Center. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <p className="text-white/40">
            Designed by <span className="text-white">Mali Design Works</span> MDW
          </p>
        </div>
      </div>
    </footer>
  );
}
