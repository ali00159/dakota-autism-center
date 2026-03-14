import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Printer } from 'lucide-react';
import { FooterLink } from '@/types';
import { cities } from '@/data/cities';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, FooterLink[]> = {
    resources: [
      { label: 'Understanding Autism', href: '/understanding-autism' },
      { label: 'Insurance & Funding', href: '/insurance-and-funding' },
      { label: 'Culturally Responsive ABA', href: '/culturally-responsive-aba-therapy' },
      { label: 'Blog', href: '/blog' },
    ],
    services: [
      { label: 'Center-Based ABA', href: '/center-based-aba-therapy' },
      { label: 'In-Home ABA', href: '/in-home-aba-therapy' },
      { label: 'EIDBI Services', href: '/eidbi' },
    ],
    connect: [
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Referral', href: '/referral' },
      { label: 'Careers', href: '/careers' },
    ],
    areas: cities.map((city) => ({
      label: city.cityName,
      href: `/${city.slug}`,
    })),
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 mt-auto">
      <div className="container-max">
        {/* Top Section */}
        <ScrollReveal direction="up" duration={0.6} className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-4 border-b border-white/10 pb-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Image
                  src="/full-logo.svg"
                  alt="Dakota Autism Center"
                  width={280}
                  height={106}
                  className="h-32 w-auto brightness-0 invert"
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
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-8 mt-4">
            
            {/* Resources */}
            <div>
              <h3 className="text-[13px] font-bold tracking-wider uppercase mb-6 text-supporting">Resources</h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[13px] font-bold tracking-wider uppercase mb-6 text-supporting">Services</h3>
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

            {/* Connect */}
            <div>
              <h3 className="text-[13px] font-bold tracking-wider uppercase mb-6 text-supporting">Connect</h3>
              <ul className="space-y-4">
                {footerLinks.connect.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas We Serve */}
            <div>
              <h3 className="text-[13px] font-bold tracking-wider uppercase mb-6 text-supporting">Areas We Serve</h3>
              <ul className="space-y-4">
                {footerLinks.areas.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 pb-4">
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

          <p className="text-white/40 flex items-center gap-1.5">
            Designed by{' '}
            <a href="https://malidesign.works/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-white/80 transition-colors">
              Mali Design Works
            </a>
            <a href="https://malidesign.works/" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
              <Image src="/images/center-based/mdw-logo.svg" alt="Mali Design Works" width={40} height={16} className="h-4 w-auto relative -top-[2px]" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
