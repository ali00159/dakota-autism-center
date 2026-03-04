import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Printer } from 'lucide-react';
import { FooterLink } from '@/types';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, FooterLink[]> = {
    company: [
      { label: 'Home', href: '/' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'About Us', href: '/understanding-autism/about-autism' },
      { label: 'Cultural Competency', href: '/culturally-responsive-aba-therapy' },
      { label: 'Insurance & Funding', href: '/insurance-and-funding' },
    ],
    services: [
      { label: 'Center-Based ABA', href: '/center-based-aba-therapy' },
      { label: 'In-Home ABA', href: '/in-home-aba-therapy' },
      { label: 'EIDBI Services', href: '/eidbi' },
      { label: 'Insurance & Funding', href: '/insurance-and-funding' },
      { label: 'Understanding Autism', href: '/understanding-autism/about-autism' },
    ],
    locations: [
      { label: 'Minneapolis, MN (HQ)', href: '/contact-us' },
    ]
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 mt-auto">
      <div className="container-max">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-4 border-b border-white/10 pb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Image
                  src="/full-logo.svg"
                  alt="Dakota Autism Center"
                  width={280}
                  height={106}
                  className="h-40 w-auto brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-white/80 leading-relaxed">
              Dakota Autism Center is a center-based Applied Behavior Analysis (ABA) program for young children 
              with Autism Spectrum Disorder. Our centers are run in a preschool-like setting and our 
              programs are designed to assist with social communication, emotional regulation, school readiness, 
              and transitioning skills.
            </p>
            
            
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            
            {/* Company */}
            <div>
              <h3 className="text-[11px] font-bold tracking-wider uppercase mb-6 text-supporting">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link inline-flex items-center gap-2 group">
                      {link.label}
                      {link.isNew && (
                        <span className="bg-tertiary text-[10px] font-bold px-1.5 py-0.5 rounded text-white">NEW</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[11px] font-bold tracking-wider uppercase mb-6 text-supporting">Services</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
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
                    <Link href={link.href} className="footer-link inline-flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-tertiary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 pb-4">
          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#D4EAFC] mt-0.5 shrink-0" />
            <div>
              <span className="font-bold text-lg">Headquarters</span>
              <p className="text-white/80 leading-relaxed">
                331 2nd Ave S,<br />
                Suite 436 Minneapolis, MN 55401
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-[#D4EAFC] mt-0.5 shrink-0" />
            <div>
              <span className="font-bold text-lg">Phone</span>
              <a href="tel:612-284-5382" className="block text-white/80 hover:text-white transition-colors">
                (612) 284-5382
              </a>
            </div>
          </div>

          {/* Fax */}
          <div className="flex items-start gap-3">
            <Printer className="w-5 h-5 text-[#D4EAFC] mt-0.5 shrink-0" />
            <div>
              <span className="font-bold text-lg">Fax</span>
              <a href="fax:612-284-5080" className="block text-white/80 hover:text-white transition-colors">
                (612) 284-5080
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-[#D4EAFC] mt-0.5 shrink-0" />
            <div>
              <span className="font-bold text-lg">Email</span>
              <a href="mailto:info@dakotaautismcenter.com" className="block text-white/80 hover:text-white transition-colors">
                info@dakotaautismcenter.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60 pt-6 border-t border-white/10">
          <p>© {currentYear} Dakota Autism Center. All rights reserved.</p>
          
          <div className="flex gap-6">
            <span className="text-white/40 cursor-default">Privacy Policy</span>
            <span className="text-white/40 cursor-default">Terms of Service</span>
          </div>

          <p className="text-white/40">
            Designed by <span className="text-white">Mali Design Works</span> MDW
          </p>
        </div>
      </div>
    </footer>
  );
}
