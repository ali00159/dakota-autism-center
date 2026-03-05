'use client';

import { usePathname } from 'next/navigation';
import ContactForm from './ContactForm';

/**
 * Renders the global ContactForm on most pages.
 * Excludes routes that already have dedicated intake/referral workflows.
 */
export default function ConditionalContactForm() {
  const pathname = usePathname();

  if (pathname === '/contact-us' || pathname === '/referral') return null;

  return <ContactForm />;
}
