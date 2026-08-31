export const SITE = {
  name: 'SIMBNEXT',
  legalName: 'SIMBNEXT Technologies',
  tagline: 'Your Digital Operations. Handled.',
  ogTitle: 'SIMBNEXT | Your Digital Operations. Handled.',
  description:
    'We run your brand, marketing, systems, and tech through a single command center. You go back to running your business.',
  url: 'https://www.simbnext.com',
  email: 'hello@simbnext.com',
  supportEmail: 'support@simbnext.com',
  phone: '+91 9160 7575 05',
  phoneRaw: '919160757505',
  operatingHours: 'Monday – Friday, 9:00 AM – 6:00 PM IST',
  location: 'HITEC City, Hyderabad · Global Delivery',
  address: {
    line1: "3rd Floor, Plot No 5, Doctor's Colony, HITEC City",
    line2: 'Hyderabad, Telangana 500081',
    country: 'India',
    formatted: "3rd Floor, Plot No 5, Doctor's Colony, HITEC City, Hyderabad, Telangana 500081, India",
  },
  grievanceOfficer: {
    name: 'Grievance Redressal Officer',
    designation: 'Operations & Compliance Lead',
    email: 'support@simbnext.com',
    phone: '+91 9160 7575 05',
    address: "3rd Floor, Plot No 5, Doctor's Colony, HITEC City, Hyderabad, Telangana 500081, India",
  },
  ctaPrimary: 'Schedule a Briefing',
  ctaSecondary: 'Explore The 6 Desks',
  logoAlt: 'SIMBNEXT logo',
  logoSrc: '/simbnext-logo.svg',
  logoSrcDark: '/simbnext-logo-dark.svg',
};

export interface NavLink {
  href: string;
  label: string;
  children?: Array<{
    href: string;
    label: string;
    description?: string;
  }>;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/#desks', label: 'Command Center' },
  { href: '/how-we-work', label: 'Method' },
  { href: '/about', label: 'Philosophy' },
  { href: '/#packages', label: 'Pricing' },
];

export const FOOTER_LINKS = {
  Company: [
    { href: '/#desks', label: 'Command Center' },
    { href: '/how-we-work', label: 'Method & Rollout' },
    { href: '/about', label: 'About & Philosophy' },
    { href: '/briefing', label: 'Schedule a Briefing' },
  ],
  Desks: [
    { href: '/#desks', label: 'Brand Desk' },
    { href: '/#desks', label: 'Presence Desk' },
    { href: '/#desks', label: 'Growth Desk' },
    { href: '/#desks', label: 'Systems Desk' },
    { href: '/#desks', label: 'Build Desk' },
    { href: '/#desks', label: 'AI & Intelligence Desk' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/refunds', label: 'Cancellation & Refund Policy' },
    { href: '/contact', label: 'Contact & Grievance' },
  ],
};
