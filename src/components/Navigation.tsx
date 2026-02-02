'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services', hasDropdown: true },
    { label: 'Locations', href: '#locations', hasDropdown: false },
    { label: 'Parent Resources', href: '#resources', hasDropdown: true },
    { label: 'About', href: '#about', hasDropdown: false },
    { label: 'Careers', href: '#careers', hasDropdown: false },
  ];

  return (
    <nav 
      className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-border-light"
      style={{ 
        zIndex: 'var(--z-sticky)',
        height: 'var(--header-height)',
      }}
    >
      <div className="container-max h-full flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className="font-primary text-2xl font-semibold text-primary tracking-tight"
        >
          Dakota Autism Center
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-[15px] flex items-center gap-1 group/nav"
              >
                {link.label}
                {link.hasDropdown && (
                  <Icon 
                    icon="solar:alt-arrow-down-bold" 
                    className="w-4 h-4 opacity-60 transition-colors"
                    style={{ color: 'var(--color-text-muted)' }}
                    onMouseEnter={(e) => {
                      const parent = e.currentTarget.closest('a');
                      if (parent?.matches(':hover')) {
                        e.currentTarget.style.color = 'var(--color-tertiary)';
                        e.currentTarget.style.opacity = '1';
                      }
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a href="#contact" className="btn btn-primary group">
            Find Care
            <Icon icon="solar:arrow-right-broken" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
                  className="btn btn-primary w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Find Care
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
