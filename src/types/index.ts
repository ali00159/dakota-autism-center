// Shared TypeScript types for the application

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

export interface CTACard {
  id: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  variant: 'default' | 'featured';
  iconBgColor: string;
  iconColor: string;
}

export interface InsurancePartner {
  id: string;
  name: string;
  hoverColor?: string;
  icon?: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
  isNew?: boolean;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}
