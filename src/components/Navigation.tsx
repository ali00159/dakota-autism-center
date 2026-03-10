'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicesLinks = [
    {
      label: 'Center-Based ABA Therapy',
      href: '/center-based-aba-therapy',
      icon: 'solar:buildings-bold-duotone',
      description: 'Structured therapy in a supportive clinical environment designed for learning and social growth.',
    },
    {
      label: 'In-Home ABA Therapy',
      href: '/in-home-aba-therapy',
      icon: 'solar:home-smile-bold-duotone',
      description: 'Evidence-based, 1:1 support delivered in the comfort and familiarity of your own home.',
    },
    {
      label: 'EIDBI Services',
      href: '/eidbi',
      icon: 'solar:heart-pulse-bold-duotone',
      description: 'Early Intensive Developmental and Behavioral Intervention for children and young adults.',
    },
  ];

  const resourcesLinks = [
    {
      label: 'Understanding Autism',
      href: '/understanding-autism/about-autism',
      icon: 'solar:book-2-bold-duotone',
      description: 'Learn about autism spectrum disorder and how we support families on their journey.',
    },
    {
      label: 'Insurance & Funding',
      href: '/insurance-and-funding',
      icon: 'solar:wallet-money-bold-duotone',
      description: 'Explore insurance coverage and Minnesota funding pathways with culturally responsive guidance.',
    },
    {
      label: 'Culturally Responsive ABA',
      href: '/culturally-responsive-aba-therapy',
      icon: 'solar:translation-bold-duotone',
      description: 'Family-centered ABA therapy that aligns care with language needs, values, and daily routines.',
    },
  ];

  const connectLinks = [
    {
      label: 'Contact Us',
      href: '/contact-us',
      icon: 'solar:letter-bold-duotone',
      description: 'Get in touch with our team and ask questions about services, next steps, or enrollment support.',
    },
    {
      label: 'Referral',
      href: '/referral',
      icon: 'solar:user-plus-bold-duotone',
      description: 'Refer a client or learn how our streamlined intake process gets families started quickly.',
    },
    {
      label: 'Careers',
      href: '/careers',
      icon: 'solar:case-bold-duotone',
      description: 'Join a passionate team dedicated to making a meaningful difference in children\'s lives.',
    },
  ];

  return (
    <nav className="relative isolate z-300 bg-white border-b border-border-light h-(--header-height)">
      <div className="container-max h-full flex items-center justify-between relative">
        {/* Left: Primary Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="nav-link text-[15px] font-bold text-dark">
            Home
          </Link>

          <div className="relative group/resources">
            <button
              type="button"
              className="nav-link text-[15px] font-bold text-dark flex items-center gap-1.5 py-4 cursor-pointer bg-transparent border-none"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              Resources
              <Icon
                icon="solar:alt-arrow-down-bold"
                className="w-4 h-4 opacity-60 transition-transform duration-200 group-hover/resources:rotate-180 group-focus-within/resources:rotate-180"
              />
            </button>

            <div
              className="absolute left-0 top-full w-[780px] pt-4 opacity-0 pointer-events-none translate-y-2 transition-all duration-200 ease-out z-320 group-hover/resources:opacity-100 group-hover/resources:pointer-events-auto group-hover/resources:translate-y-0"
              role="menu"
              aria-label="Resources"
            >
              <div className="bg-white rounded-2xl border border-border-light shadow-xl shadow-black/8 p-6 grid grid-cols-2 gap-4">
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    role="menuitem"
                    className="group/item flex flex-col gap-3 rounded-xl p-4 transition-all hover:bg-supporting/40 focus-visible:bg-supporting/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-supporting text-tertiary transition-colors duration-300">
                        <Icon icon={link.icon} className="w-6 h-6" />
                      </span>
                      <span className="font-bold text-dark group-hover/item:text-tertiary transition-colors">{link.label}</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group/services">
            <Link
              href="/#services"
              className="nav-link text-[15px] font-bold text-dark flex items-center gap-1.5 py-4"
              aria-haspopup="menu"
            >
              Services
              <Icon
                icon="solar:alt-arrow-down-bold"
                className="w-4 h-4 opacity-60 transition-transform duration-200 group-hover/services:rotate-180 group-focus-within/services:rotate-180"
              />
            </Link>

            <div
              className="absolute left-0 top-full w-[780px] pt-4 opacity-0 pointer-events-none translate-y-2 transition-all duration-200 ease-out z-320 group-hover/services:opacity-100 group-hover/services:pointer-events-auto group-hover/services:translate-y-0"
              role="menu"
              aria-label="Services"
            >
              <div className="bg-white rounded-2xl border border-border-light shadow-xl shadow-black/8 p-6 grid grid-cols-3 gap-4">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    role="menuitem"
                    className="group/item flex flex-col gap-3 rounded-xl p-4 transition-all hover:bg-primary-light/30 focus-visible:bg-primary-light/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors duration-300">
                        <Icon icon={link.icon} className="w-6 h-6" />
                      </span>
                      <span className="font-bold text-dark group-hover/item:text-primary transition-colors">{link.label}</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group/connect">
            <button
              type="button"
              className="nav-link text-[15px] font-bold text-dark flex items-center gap-1.5 py-4 cursor-pointer bg-transparent border-none"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              Connect
              <Icon
                icon="solar:alt-arrow-down-bold"
                className="w-4 h-4 opacity-60 transition-transform duration-200 group-hover/connect:rotate-180 group-focus-within/connect:rotate-180"
              />
            </button>

            <div
              className="absolute left-0 top-full w-[780px] pt-4 opacity-0 pointer-events-none translate-y-2 transition-all duration-200 ease-out z-320 group-hover/connect:opacity-100 group-hover/connect:pointer-events-auto group-hover/connect:translate-y-0"
              role="menu"
              aria-label="Connect"
            >
              <div className="bg-white rounded-2xl border border-border-light shadow-xl shadow-black/8 p-6 grid grid-cols-3 gap-4">
                {connectLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    role="menuitem"
                    className="group/item flex flex-col gap-3 rounded-xl p-4 transition-all hover:bg-[#FDE8EE]/50 focus-visible:bg-[#FDE8EE]/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FDE8EE] text-accent transition-colors duration-300">
                        <Icon icon={link.icon} className="w-6 h-6" />
                      </span>
                      <span className="font-bold text-dark group-hover/item:text-accent transition-colors">{link.label}</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/blog" className="nav-link text-[15px] font-bold text-dark">
            Blog
          </Link>
        </div>

        {/* Center: Brand Mark */}
        <Link href="/" className="relative flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Image
            src="/logo-mark.svg"
            alt="Dakota Autism Center"
            width={60}
            height={68}
            className="h-14 w-auto lg:h-16"
            priority
          />
        </Link>

        {/* Right: Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:612-284-5382"
            className="nav-link flex items-center gap-2 font-bold text-lg text-dark"
          >
            <Icon icon="solar:phone-linear" className="w-6 h-6 text-primary" />
            (612) 284-5382
          </a>
          <Link
            href="/contact-us"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-tertiary py-2.5 pl-7 pr-2.5 text-lg font-semibold tracking-[-0.04em] text-white shadow-md shadow-tertiary/35 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg hover:shadow-tertiary/45"
          >
            Contact
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-white/30">
              <Icon icon="solar:arrow-right-broken" className="h-5 w-5" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 -mr-2 text-dark hover:text-primary transition-colors custom-focus rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <Icon
            icon={isMobileMenuOpen ? 'solar:close-circle-bold' : 'solar:hamburger-menu-bold'}
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border-medium shadow-lg animate-fade-in z-dropdown">
          <div className="container-max py-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="nav-link text-base py-3 px-4 rounded-md hover:bg-primary-light flex items-center justify-between group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="px-4 pt-3 pb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                Resources
              </div>
              <div className="flex flex-col gap-1 px-2">
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base py-2.5 px-3 rounded-xl hover:bg-supporting/50 text-dark font-semibold flex items-center gap-2.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon icon={link.icon} className="w-5 h-5 text-tertiary" />
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="px-4 pt-3 pb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                Services
              </div>
              <div className="flex flex-col gap-1 px-2">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base py-2.5 px-3 rounded-xl hover:bg-primary-light text-dark font-semibold flex items-center gap-2.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon icon={link.icon} className="w-5 h-5 text-primary" />
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/blog"
                className="nav-link text-base py-3 px-4 rounded-md hover:bg-supporting/50 flex items-center justify-between group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <div className="px-4 pt-3 pb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                Connect
              </div>
              <div className="flex flex-col gap-1 px-2">
                {connectLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base py-2.5 px-3 rounded-xl hover:bg-[#FDE8EE] text-dark font-semibold flex items-center gap-2.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon icon={link.icon} className="w-5 h-5 text-accent" />
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 mt-2 border-t border-border-light">
                <p className="text-xs font-semibold text-text-muted text-center mb-3 uppercase tracking-wider">
                  Get in touch
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:612-284-5382"
                    className="flex flex-col items-center gap-1.5 py-4 px-3 rounded-2xl bg-primary text-white font-bold text-sm transition-all active:scale-[0.97] shadow-sm shadow-primary/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon icon="solar:phone-bold-duotone" className="w-6 h-6" />
                    <span>Call Us</span>
                    <span className="text-xs font-normal opacity-80 tracking-tight">(612) 284-5382</span>
                  </a>
                  <Link
                    href="/contact-us"
                    className="flex flex-col items-center gap-1.5 py-4 px-3 rounded-2xl bg-[#FDE8EE] text-accent font-bold text-sm transition-all active:scale-[0.97]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon icon="solar:letter-bold-duotone" className="w-6 h-6" />
                    <span>Contact Us</span>
                    <span className="text-xs font-normal opacity-70 tracking-tight">Send a message</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
