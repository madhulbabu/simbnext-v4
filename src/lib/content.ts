export interface Desk {
  id: string;
  index: string;
  name: string;
  category: string;
  slug: string;
  tagline: string;
  description: string;
  sla: string;
  deliverables: string[];
  outcomes: string[];
}

export const DESKS: Desk[] = [
  {
    id: 'brand',
    index: '01',
    name: 'Brand Desk',
    category: 'Design & Voice',
    slug: 'brand-desk',
    tagline: 'Your brand will never feel inconsistent or outdated again.',
    description:
      'We craft and maintain your visual identity, design guidelines, presentations, and brand voice so every touchpoint looks world-class.',
    sla: 'Replaces: Freelance designers, copywriters, random design agencies.',
    deliverables: [
      'Visual Identity & Standardized Guidelines',
      'High-Impact Presentation & Sales Decks',
      'Brand Voice & Executive Messaging Playbook',
    ],
    outcomes: [
      'Zero off-brand collateral or mixed messaging',
      'Consistent, high-trust market authority',
    ],
  },
  {
    id: 'presence',
    index: '02',
    name: 'Presence Desk',
    category: 'Web & Search',
    slug: 'presence-desk',
    tagline: 'You will always be findable, credible, and current online.',
    description:
      'Sub-second web performance, search optimization, Google Business Profile governance, and online reputation. Your site is never broken or slow.',
    sla: 'Replaces: Web development agencies, SEO agencies, social media managers.',
    deliverables: [
      'Sub-Second Web Infrastructure & Edge Hosting',
      'Technical SEO & Content Publishing Governance',
      'Google Profile & Online Review Management',
    ],
    outcomes: [
      'Sub-second page speeds for highest conversions',
      'Always active, accurate, and credible online',
    ],
  },
  {
    id: 'growth',
    index: '03',
    name: 'Growth Desk',
    category: 'Acquisition',
    slug: 'growth-desk',
    tagline: 'Qualified prospects will consistently find their way to your door.',
    description:
      'Paid advertising across Meta & Google, landing page funnels, and lifecycle messaging. No hype or vanity metrics—just an engineered pipeline.',
    sla: 'Replaces: Performance ad agencies, conversion specialists, lead gen shops.',
    deliverables: [
      'Targeted High-ROAS Google & Meta Ads',
      'High-Converting Landing Pages & Funnels',
      'Automated Lead Nurture Sequences',
    ],
    outcomes: [
      'The client pipeline keeps flowing predictably',
      'Eliminates erratic feast-or-famine cycles',
    ],
  },
  {
    id: 'systems',
    index: '04',
    name: 'Systems Desk',
    category: 'CRM & Automation',
    slug: 'systems-desk',
    tagline: 'Your business will run like clockwork—with or without you in the room.',
    description:
      'CRM pipelines, automated Make/Zapier workflows, SOP documentation, and tool integration. When a lead arrives, it is logged and routed automatically.',
    sla: 'Replaces: CRM consultants, Zapier freelancers, operations managers.',
    deliverables: [
      'CRM Setup & Automated Lead Routing',
      'Make / Zapier / n8n Webhook Automations',
      'SOP Documentation & Tool Integrations',
    ],
    outcomes: [
      'Saves 40+ staff hours monthly on manual data entry',
      'Irreplaceable operational infrastructure',
    ],
  },
  {
    id: 'build',
    index: '05',
    name: 'Build Desk',
    category: 'Custom Tech',
    slug: 'build-desk',
    tagline: 'When you need custom tech, it gets built fast, right, and integrated.',
    description:
      'Custom client portals, bespoke web applications, internal dashboards, and API bridges. Technology engineered to fit your exact workflow.',
    sla: 'Replaces: Dev shops, app agencies, offshore engineering contractors.',
    deliverables: [
      'Custom Client Portals & Web Applications',
      'Internal Operations Dashboards & Tools',
      'API Bridges & Database Integrations',
    ],
    outcomes: [
      'Bespoke software built without hiring dev teams',
      'Seamless data flow across your entire tech stack',
    ],
  },
  {
    id: 'ai',
    index: '06',
    name: 'AI & Intelligence Desk',
    category: 'AI & Intelligence',
    slug: 'ai-desk',
    tagline: 'You will always know what is working, what is not, and what to do next.',
    description:
      '24/7 AI lead triage agents, customer support bots, executive analytics scorecards, and predictive business intelligence.',
    sla: 'Replaces: Chatbot vendors, analytics consultants, expensive advisors.',
    deliverables: [
      '24/7 WhatsApp & Web AI Lead Triage Agents',
      'Live Operational Analytics & Scorecards',
      'AI Tool Selection, Setup & Team Enablement',
    ],
    outcomes: [
      'Instant 3.2s speed-to-lead response 24/7',
      'Every decision backed by clear operational data',
    ],
  },
];

export const WHY_CHOOSE = [
  {
    title: 'Operational Peace of Mind',
    description:
      'You will never lose sleep over your digital operations again. Like your CA handling taxes—it is handled. You go back to running your business.',
  },
  {
    title: 'Desks, Not Service Menus',
    description:
      'No picking from confusing service menus. You get dedicated operational coverage across your active functional desks.',
  },
  {
    title: 'One Dedicated Ops Lead',
    description:
      'Single point of senior accountability. One person who understands your business inside and out, orchestrating all active desks.',
  },
  {
    title: 'Live Command Dashboard',
    description:
      'Real-time transparency into your operations. Clear visual status showing on-track initiatives, required inputs, and completed milestones across all desks.',
  },
  {
    title: '15-Min Monday Briefing',
    description:
      'A concise weekly executive video update covering what happened last week, what is planned next, and key decisions needed.',
  },
  {
    title: '90-Day Comfort Guarantee',
    description:
      'If you do not feel your operations are noticeably smoother after 90 days, we offboard you smoothly and refund your last month in full.',
  },
];

export const SOLUTIONS = [
  {
    slug: 'healthcare-clinics',
    title: 'Healthcare & Aesthetic Clinics',
    eyebrow: 'Dental, Derma & Surgical',
    description:
      '24/7 AI patient triage, automated appointment booking, anti-no-show reminders, and Google Maps local SEO.',
    stat: '+180%',
    statLabel: 'Consultation Booking Lift',
    deliverables: [
      '24/7 WhatsApp Patient Triage',
      'Automated Anti-No-Show Reminders',
      'Local Healthcare SEO & Google Maps',
    ],
  },
  {
    slug: 'luxury-interiors',
    title: 'Luxury Interiors & Architects',
    eyebrow: 'High-Ticket Design Studios',
    description:
      'Convert portfolio walkthroughs into qualified design consultation bookings with automated budget screening.',
    stat: '40+ hrs',
    statLabel: 'Management Time Saved / mo',
    deliverables: [
      'Architectural Portfolio Production',
      'Budget-Qualified Lead Funnels',
      'Automated Portfolio PDF Dispatch',
    ],
  },
  {
    slug: 'boutique-real-estate',
    title: 'Boutique Real Estate & Builders',
    eyebrow: 'Developers & Channel Partners',
    description:
      '3.2s ad inquiry response, automated site visit booking, bilingual qualification, and Channel Partner tracking.',
    stat: '3.2s',
    statLabel: 'Average Speed-to-Lead',
    deliverables: [
      'Instant Meta Ad WhatsApp Triage',
      'Automated Site Visit Scheduling',
      'Channel Partner Attribution Sync',
    ],
  },
  {
    slug: 'high-ticket-b2b',
    title: 'High-Ticket B2B & Industrial',
    eyebrow: 'Manufacturers & Enterprises',
    description:
      'Automated technical RFQ intake, spec sheet dispatch, executive roadmaps, and custom workflow automations.',
    stat: '90%',
    statLabel: 'Faster RFQ Triage',
    deliverables: [
      'Technical RFQ Intake Pipelines',
      'Buyer Specification Routing',
      'Executive 90-Day Growth Audits',
    ],
  },
];

export const AGENCY_COMPARISON = [
  {
    feature: 'Packaging Model',
    conventional: 'Confusing service menu (client forced to pick what they need)',
    simbnext: 'Dedicated coverage across functional Desks within 1 Command Center',
  },
  {
    feature: 'Accountability',
    conventional: '4–6 fragmented vendors pointing fingers when things break',
    simbnext: 'Single dedicated Operations Lead taking 100% end-to-end ownership',
  },
  {
    feature: 'Deliverable Type',
    conventional: 'Deliverable-based (you get a website, a logo, 10 random posts)',
    simbnext: 'Coverage-based (brand always cohesive, site always fast, leads always flowing)',
  },
  {
    feature: 'Reporting',
    conventional: 'Monthly vanity metric reports with zero actionable clarity',
    simbnext: 'Live status dashboard + 15-minute Monday executive briefings',
  },
  {
    feature: 'Founder Feeling',
    conventional: 'Exhausted: "Are my vendors doing enough? Why is everything chaotic?"',
    simbnext: 'Relieved: "It is handled. I do not need to think about it."',
  },
  {
    feature: 'Risk Reversal',
    conventional: 'Strict lock-in contracts with zero satisfaction guarantee',
    simbnext: '90-Day Comfort Guarantee with 100% last-month refund',
  },
];

export const PACKAGES = [
  {
    tier: 'Tier 1',
    name: 'Foundation',
    desksIncluded: '2–3 Active Desks',
    recommendedFor: 'Businesses needing core operational stability (e.g. Brand + Presence + Systems).',
    highlights: [
      'Choice of 2 or 3 active operational desks',
      'Dedicated Senior Operations Lead',
      'Live Command Dashboard access',
      'Weekly Monday Executive Briefings',
    ],
    ctaText: 'Discuss Foundation Tier',
    featured: false,
  },
  {
    tier: 'Tier 2 · Most Popular',
    name: 'Growth',
    desksIncluded: '4–5 Active Desks',
    recommendedFor: 'Established businesses actively expanding acquisition, tech, and intelligence.',
    highlights: [
      'All Foundation coverage + Growth + AI Desk',
      '24/7 AI lead triage & ad funnels',
      'Full CRM automation & workflow pipelines',
      'Priority turnaround & weekly video briefing',
      '90-Day Comfort Guarantee included',
    ],
    ctaText: 'Discuss Growth Tier',
    featured: true,
    badge: 'Recommended',
  },
  {
    tier: 'Tier 3',
    name: 'Command',
    desksIncluded: 'All 6 Dedicated Desks',
    recommendedFor: 'Businesses ready to completely offload digital operations to a dedicated team.',
    highlights: [
      'All 6 Desks fully synchronized and active',
      'Complete operational takeover & custom software',
      'Dedicated Senior Operations Lead',
      'Priority 1-hour critical response SLA',
      '90-Day Comfort Guarantee included',
    ],
    ctaText: 'Discuss Command Tier',
    featured: false,
  },
];

export const PROCESS = [
  {
    step: '01',
    title: 'The Briefing',
    description:
      'We listen before we act. A deep-dive session to audit your existing tools, vendors, team structure, and operational bottlenecks.',
    deliverables: ['Bottleneck Audit', 'Tool Stack Analysis', 'Operational Scope'],
  },
  {
    step: '02',
    title: 'The Blueprint',
    description:
      'We architect your new operations. We present a comprehensive plan mapping which desks activate, what stays, and what we build.',
    deliverables: ['Command Architecture', 'Active Desk Mapping', 'Custom SLAs'],
  },
  {
    step: '03',
    title: 'The Sprint',
    description:
      'Rapid deployment. We build what is missing, migrate systems, connect automations, and configure your live Command Center dashboard.',
    deliverables: ['Dashboard Setup', 'Automation Pipelines', 'Asset Migration'],
  },
  {
    step: '04',
    title: 'The Command Center',
    description:
      'Steady-state operations. We take over. You get a single Ops Lead, a live dashboard, and a concise Monday briefing. That is it.',
    deliverables: ['Single Ops Lead', 'Live Status Dashboard', 'Monday Briefings'],
  },
];

export const CASE_STUDIES = [
  {
    client: 'Apex Health Clinics',
    sector: 'Healthcare & Aesthetics',
    location: 'Hyderabad',
    stat: '+180%',
    statLabel: 'Consultation Lift',
    quote:
      'Our 24/7 AI triage agent captures 3x more patient consultations after clinic hours with zero additional staff overhead.',
    author: 'Dr. Radhika V.',
    role: 'Clinical Director & Founder',
  },
  {
    client: 'V-Design Architects',
    sector: 'Luxury Interiors',
    location: 'Jubilee Hills',
    stat: '40+ hrs',
    statLabel: 'Saved Monthly',
    quote:
      'Eliminated the chaos of managing three separate agencies. Complete accountability under one monthly retainer.',
    author: 'Vikram M.',
    role: 'Principal Architect',
  },
  {
    client: 'Urban Living Realty',
    sector: 'Boutique Real Estate',
    location: 'Gachibowli',
    stat: '3.2s',
    statLabel: 'Lead Response SLA',
    quote:
      'Speed-to-lead dropped from 4 hours to 3.2 seconds. Inbound buyer inquiries are immediately qualified and booked.',
    author: 'Sanjay K.',
    role: 'Managing Partner',
  },
];

export const FAQS = [
  {
    q: 'Why Desks instead of individual services?',
    a: 'Traditional agencies sell service lists (SEO, ads, web design), forcing you to guess what you need and manage multiple line items. Desks provide dedicated operational coverage. A desk means someone is always seated there managing that entire functional area under clear SLAs.',
  },
  {
    q: 'How does the 90-Day Comfort Guarantee work?',
    a: 'If at any point in the first 90 days you feel your operations are not noticeably smoother, your communication is not clearer, or your vendor headaches have not disappeared, we will offboard you smoothly and refund your last month retainer in full. No friction.',
  },
  {
    q: 'Who is my point of contact?',
    a: 'You get one dedicated Operations Lead who orchestrates all active desks. You never have to chase five different freelancers or account managers. One person knows everything about your account and answers all questions.',
  },
  {
    q: 'How do the weekly Monday briefings work?',
    a: 'Every Monday, your Ops Lead delivers a concise 15-minute async video update (or optional call) and scorecard. It covers: (1) what was completed last week, (2) what is planned this week, and (3) any decisions needed from you.',
  },
  {
    q: 'Do you replace our existing tools or work with them?',
    a: 'We work with your existing tools (CRM, WhatsApp, website, ads) and integrate them seamlessly using automated pipelines. We eliminate redundant subscriptions and ensure data flows without manual entry.',
  },
];
