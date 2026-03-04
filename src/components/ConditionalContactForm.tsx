'use client';

import { usePathname } from 'next/navigation';
import ContactForm from './ContactForm';

/**
 * Renders the global ContactForm on every page EXCEPT /contact-us,
 * where the form is embedded directly in the page content to avoid duplication.
 */
export default function ConditionalContactForm() {
  const pathname = usePathname();

  if (pathname === '/contact-us') return null;

  return <ContactForm />;
}
