export type Tier = { label: string; price: string; turnaround: string; bestFor: string; includes: string[] };
export type Service = { name: string; tiers: Tier[] };
export type DeptData = { dept: string; services: Service[] };

export const pricingData: DeptData[] = [
  { dept: 'Design', services: [
    { name: 'A-Grade Brand Identity™', tiers: [
      { label: 'Starter', price: '₦80,000', turnaround: '3–5 days', bestFor: 'New businesses needing a logo fast', includes: ['Core logo', 'Color palette', '1 brand asset', 'PNG + SVG files'] },
      { label: 'Growth', price: '₦200,000', turnaround: '5–7 days', bestFor: 'Full brand kit', includes: ['Logo suite', 'Typography', 'Stationery', 'Style guide'] },
      { label: 'Premium', price: '₦500,000', turnaround: '7–10 days', bestFor: 'Complete brand system', includes: ['All Growth items', 'Brand guidelines', 'Social templates', 'Presentation template'] },
    ]},
    { name: 'Pitch Deck & Presentation™', tiers: [
      { label: 'Starter', price: '₦80,000', turnaround: '3–5 days', bestFor: 'Clean 10-slide standard deck', includes: ['10-slide deck', 'Brand design', 'PDF + PPTX'] },
      { label: 'Growth', price: '₦150,000', turnaround: '3–5 days', bestFor: 'Investor-focused 20-slide deck', includes: ['20-slide deck', 'Speaker notes', 'Data visualization'] },
      { label: 'Premium', price: '₦250,000', turnaround: '5–7 days', bestFor: 'Animated premium deck + coaching', includes: ['Animated deck', 'Coaching session', 'Video export'] },
    ]},
  ]},
  { dept: 'Web & Dev', services: [
    { name: 'Conversion-First Web Design™', tiers: [
      { label: 'Starter', price: '₦300,000', turnaround: '7 days', bestFor: 'Landing page', includes: ['1-page site', 'Mobile responsive', 'SEO setup'] },
      { label: 'Growth', price: '₦600,000', turnaround: '10–14 days', bestFor: 'Business website 5–8 pages', includes: ['5–8 pages', 'CMS', 'Analytics'] },
      { label: 'Premium', price: '₦1,500,000+', turnaround: '3–4 weeks', bestFor: 'Custom 10+ page site', includes: ['10+ pages', 'Custom features', '30-day support'] },
    ]},
    { name: 'Custom Web App Development™', tiers: [
      { label: 'Starter', price: '₦500,000', turnaround: '4–5 weeks', bestFor: 'Core feature set app', includes: ['Laravel backend', 'Admin panel', 'Deployment'] },
      { label: 'Growth', price: '₦1,200,000', turnaround: '6–8 weeks', bestFor: 'Mid-scale app + user system', includes: ['Laravel + React', 'User auth', 'Dashboard'] },
      { label: 'Premium', price: '₦2,500,000+', turnaround: '8–12 weeks', bestFor: 'Enterprise platform', includes: ['Enterprise scale', 'Advanced integrations', '90-day support'] },
    ]},
    { name: 'MVP Development for Startups™', tiers: [
      { label: 'Starter', price: '₦400,000', turnaround: '3–4 weeks', bestFor: '1 feature set MVP', includes: ['Core features', 'Basic UI', 'Deployment'] },
      { label: 'Growth', price: '₦800,000', turnaround: '4–6 weeks', bestFor: 'Full MVP for beta launch', includes: ['User system', 'Dashboard', 'API layer'] },
      { label: 'Premium', price: '₦1,500,000', turnaround: '6–8 weeks', bestFor: 'Production-ready MVP', includes: ['Production code', 'Payment integration', '30-day support'] },
    ]},
    { name: 'E-Commerce Development™', tiers: [
      { label: 'Starter', price: '₦400,000', turnaround: '2–3 weeks', bestFor: 'Store up to 50 products', includes: ['Product catalogue', 'Cart + checkout', 'Payment gateway'] },
      { label: 'Growth', price: '₦750,000', turnaround: '3–4 weeks', bestFor: 'Full-featured unlimited store', includes: ['Unlimited products', 'Coupons', 'Analytics dashboard'] },
      { label: 'Premium', price: '₦1,200,000', turnaround: '4–6 weeks', bestFor: 'Enterprise store', includes: ['Custom features', 'Multi-currency', 'ERP/CRM integration'] },
    ]},
    { name: 'API Development & Integration™', tiers: [
      { label: 'Starter', price: '₦150,000', turnaround: '1–2 weeks', bestFor: 'Single API integration', includes: ['1 integration', 'Webhook setup', 'Documentation'] },
      { label: 'Growth', price: '₦350,000', turnaround: '2–3 weeks', bestFor: 'Multiple integrations + automation', includes: ['3–5 integrations', 'Automation', 'Monitoring'] },
      { label: 'Premium', price: '₦700,000', turnaround: '3–4 weeks', bestFor: 'Custom API build + full suite', includes: ['Custom API', 'API gateway', 'Full documentation'] },
    ]},
  ]},
  { dept: 'Content & Copy', services: [
    { name: 'Authority Content™ (SEO)', tiers: [
      { label: 'Starter', price: '₦60,000/mo', turnaround: 'Ongoing', bestFor: 'Starting content marketing', includes: ['4 articles/month', 'Basic SEO', 'Monthly report'] },
      { label: 'Growth', price: '₦130,000/mo', turnaround: 'Ongoing', bestFor: 'Ranking + lead generation', includes: ['8 articles/month', 'Keyword strategy', 'Competitor analysis'] },
      { label: 'Premium', price: '₦250,000/mo', turnaround: 'Ongoing', bestFor: 'Dominate your niche', includes: ['12+ articles/month', 'Full SEO strategy', 'Quarterly review'] },
    ]},
    { name: 'Conversion Copy™', tiers: [
      { label: 'Starter', price: '₦50,000', turnaround: '3–5 days', bestFor: '1 page or ad copy', includes: ['1 page copy', 'Headline + CTA', 'Brand voice'] },
      { label: 'Growth', price: '₦150,000', turnaround: '5–7 days', bestFor: 'Full website copy (5 pages)', includes: ['5-page copy', 'Brand voice guide', 'Copy strategy doc'] },
      { label: 'Premium', price: '₦300,000', turnaround: '7–10 days', bestFor: 'Full funnel copy', includes: ['Website + emails + ads', 'Landing page', 'Unlimited revisions'] },
    ]},
    { name: 'Revenue Email System™', tiers: [
      { label: 'Starter', price: '₦60,000/mo', turnaround: 'Ongoing', bestFor: 'Newsletter + basic sequence', includes: ['Monthly newsletter', 'Welcome sequence', 'Template design'] },
      { label: 'Growth', price: '₦130,000/mo', turnaround: 'Ongoing', bestFor: 'Full drip + automation', includes: ['Drip campaigns', 'Automation', 'List segmentation'] },
      { label: 'Premium', price: '₦250,000/mo', turnaround: 'Ongoing', bestFor: 'Complete email revenue engine', includes: ['Full automation', 'Advanced segmentation', 'Weekly reports'] },
    ]},
    { name: 'Video Script & Editing™', tiers: [
      { label: 'Starter', price: '₦25,000', turnaround: '3–5 days', bestFor: 'Script only or basic edit', includes: ['Script OR edit', 'Captions', 'Platform format'] },
      { label: 'Growth', price: '₦75,000', turnaround: '3–5 days', bestFor: 'Script + professional edit', includes: ['Script + edit', 'Thumbnail', 'Color grading'] },
      { label: 'Premium', price: '₦150,000/mo', turnaround: 'Ongoing', bestFor: '4 videos/month full production', includes: ['4 videos/month', 'Full production', 'Content calendar'] },
    ]},
    { name: 'Corporate Comms Suite™', tiers: [
      { label: 'Starter', price: '₦30,000', turnaround: '2–3 days', bestFor: '1 corporate document', includes: ['1 document', 'Brand formatting', 'PDF + Word'] },
      { label: 'Growth', price: '₦80,000', turnaround: '3–5 days', bestFor: '3–5 document package', includes: ['3–5 documents', 'Full formatting suite', 'Proofreading'] },
      { label: 'Premium', price: '₦150,000/mo', turnaround: 'Ongoing', bestFor: 'Monthly comms retainer', includes: ['Retainer', 'Unlimited docs', 'Dedicated writer'] },
    ]},
  ]},
  { dept: 'Marketing', services: [
    { name: 'Social Growth Engine™', tiers: [
      { label: 'Starter', price: '₦80,000/mo', turnaround: 'Ongoing', bestFor: 'Consistent social presence', includes: ['2 platforms', '12 posts/month', 'Monthly report'] },
      { label: 'Growth', price: '₦150,000/mo', turnaround: 'Ongoing', bestFor: 'Scale presence + engagement', includes: ['3 platforms', '20 posts/month', 'Stories + reels'] },
      { label: 'Premium', price: '₦300,000/mo', turnaround: 'Ongoing', bestFor: 'Full social media dominance', includes: ['All platforms', 'Daily engagement', 'Weekly reports'] },
    ]},
    { name: 'Precision Ad Campaigns™', tiers: [
      { label: 'Starter', price: '₦50,000/mo', turnaround: 'Ongoing', bestFor: '1 platform basic campaigns', includes: ['1 platform', 'Campaign setup', 'Monthly reports'] },
      { label: 'Growth', price: '₦120,000/mo', turnaround: 'Ongoing', bestFor: '2 platforms + advanced targeting', includes: ['Meta + Google', 'A/B testing', 'Bi-weekly reports'] },
      { label: 'Premium', price: '₦250,000/mo', turnaround: 'Ongoing', bestFor: 'Multi-platform full funnel', includes: ['Multi-platform', 'Full funnel', 'Dedicated strategist'] },
    ]},
    { name: 'Digital Strategy Consulting™', tiers: [
      { label: 'Starter', price: '₦1,000,000', turnaround: '2–3 weeks', bestFor: 'Audit + 90-day roadmap', includes: ['Digital audit', '90-day roadmap', 'KPI framework'] },
      { label: 'Growth', price: '₦2,000,000', turnaround: '6 months', bestFor: 'Strategy + implementation', includes: ['Full strategy', '6-month oversight', 'Quarterly reviews'] },
      { label: 'Premium', price: 'Custom', turnaround: 'Ongoing', bestFor: 'Fractional CMO/CDO', includes: ['Fractional executive', 'Board strategy', 'Unlimited advisory'] },
    ]},
  ]},
];

export const DEPT_TABS = pricingData.map((d) => d.dept);
