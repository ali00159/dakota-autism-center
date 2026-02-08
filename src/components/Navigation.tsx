'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about', hasDropdown: true },
    { label: 'Our Program', href: '#program', hasDropdown: false },
    { label: 'Learning Center', href: '#learning-center', hasDropdown: false },
  ];

  return (
    <nav 
      className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-border-light"
      style={{ 
        zIndex: 'var(--z-sticky)',
        height: 'var(--header-height)',
      }}
    >
      <div className="container-max h-full flex items-center justify-between relative">
        
        {/* Left: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-[15px] font-bold text-dark flex items-center gap-1 group/nav"
              >
                {link.label}
                {link.hasDropdown && (
                  <Icon 
                    icon="solar:alt-arrow-down-bold" 
                    className="w-4 h-4 opacity-60 transition-colors"
                    style={{ color: 'var(--color-text-muted)' }}
                  />
                )}
              </a>
            ))}
        </div>

        {/* Center: Logo */}
        <a 
          href="/" 
          className="relative flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          <Image
            src="/logo-mark.svg"
            alt="Dakota Autism Center"
            width={60}
            height={68}
            className="h-14 w-auto lg:h-16"
            priority
          />
        </a>

        {/* Right: Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:612-284-5382" className="flex items-center gap-2 font-bold text-lg text-dark hover:text-primary transition-colors">
            <Icon icon="solar:phone-linear" className="w-6 h-6 text-primary" />
            (612) 284-5382
          </a>
          <a href="#contact" className="btn-contact">
            <Icon icon="solar:letter-bold-duotone" className="w-7 h-7" />
            Contact Us
          </a>
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
        <div 
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border-medium shadow-lg animate-fade-in"
          style={{ zIndex: 'var(--z-dropdown)' }}
        >
          <div className="container-max py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-base py-3 px-4 rounded-md hover:bg-primary-light flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <Icon 
                      icon="solar:alt-arrow-right-bold" 
                      className="w-4 h-4 transition-colors group-hover:text-tertiary"
                      style={{ color: 'var(--color-text-muted)' }}
                    />
                  )}
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 mt-2 border-t border-border-light">
                <a 
                  href="#contact" 
                  className="btn-contact w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon icon="solar:phone-broken" className="w-7 h-7" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
