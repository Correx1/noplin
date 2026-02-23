'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Wallet, Package } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const faqs = [
  { q: 'How do payments work?', a: '50% deposit upfront to secure your project, 50% on delivery. For retainer services, we bill monthly in advance.' },
  { q: 'Do you offer payment plans?', a: 'Yes, for projects above ₦500,000. Payment plans are available on request and agreed before work begins.' },
  { q: 'Are prices negotiable?', a: 'Our prices reflect the value we deliver. We offer bundled package pricing for clients combining multiple services — but we do not discount individual service rates.' },
  { q: 'Do you work with international clients?', a: 'Yes. We serve clients globally. Prices in USD or GBP are available on request — email hello@noplin.com.' },
  { q: "What's included in 'revisions'?", a: 'Each tier specifies how many revision rounds are included. A revision round means one set of consolidated feedback applied at once. Additional rounds are billed at an hourly rate.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border-card)' }}>
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between py-4 text-left">
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', color: 'var(--text-primary)' }}>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} style={{ color: 'var(--accent)', fontSize: '22px', flexShrink: 0, marginLeft: '12px' }}>+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} style={{ overflow: 'hidden' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, paddingBottom: '16px' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type Tier = { label: string; price: string; turnaround: string; bestFor: string; includes: string[] };
type Service = { name: string; tiers: Tier[] };
type DeptData = { dept: string; services: Service[] };

const pricingData: DeptData[] = [
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

const DEPT_TABS = pricingData.map((d) => d.dept);

function TierCard({ t, best }: { t: Tier; best: boolean }) {
  return (
    <div className="relative flex flex-col gap-4 p-6"
      style={{ background: best ? 'rgba(245,158,11,0.04)' : 'var(--bg-card)', border: best ? '1px solid rgba(245,158,11,0.4)' : '1px solid var(--border-card)', borderRadius: '16px', boxShadow: 'var(--shadow-card-theme)' }}>
      {best && <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#F59E0B', color: '#0D0D2B', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', letterSpacing: '0.1em', padding: '3px 12px', borderRadius: '99px', whiteSpace: 'nowrap' }}>BEST VALUE</span>}
      <div>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px', color: best ? '#F59E0B' : 'var(--text-secondary)' }}>{t.label}</p>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--text-primary)', marginTop: '2px' }}>{t.price}</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>{t.turnaround}</p>
      </div>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#06B6D4' }}>Best for: {t.bestFor}</p>
      <ul className="flex flex-col gap-1.5 flex-1">
        {t.includes.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"/></svg>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>{f}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="flex items-center justify-center py-2.5 rounded-lg text-sm font-semibold transition-all duration-150"
        style={{ fontFamily: 'var(--font-display)', background: best ? '#F59E0B' : 'rgba(26,86,219,0.12)', color: best ? '#0D0D2B' : 'var(--text-primary)', border: best ? 'none' : '1px solid var(--border-accent)' }}>
        Get Started →
      </Link>
    </div>
  );
}

export default function PricingPageClient() {
  const [activeDept, setActiveDept] = useState('Design');
  const section = pricingData.find((d) => d.dept === activeDept) ?? pricingData[0];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-mesh force-dark" style={{ paddingTop: '120px', paddingBottom: '72px' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '70vw', height: '50vh', background: 'radial-gradient(ellipse, rgba(26,86,219,0.12) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-5">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#06B6D4' }}>Pricing</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.08 }} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,5vw,3.25rem)', color: 'var(--text-primary)', lineHeight: 1.1 }}>
            Transparent, Flexible Pricing.<br />No Surprises.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE, delay: 0.15 }} style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Every price listed. Every tier explained. Pick what fits — or ask us to build a custom package.
          </motion.p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)' }}>
            International clients: prices in USD/GBP available on request.{' '}
            <a href="mailto:hello@noplin.com" style={{ color: 'var(--accent)' }}>hello@noplin.com</a>
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[72px] z-40" style={{ background: 'var(--bg-navbar)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border-default)' }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-1 overflow-x-auto py-3">
          {DEPT_TABS.map((d) => (
            <button key={d} onClick={() => setActiveDept(d)} className="flex-shrink-0 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-150"
              style={{ fontFamily: 'var(--font-display)', background: activeDept === d ? '#1A56DB' : 'transparent', color: activeDept === d ? '#fff' : 'var(--text-secondary)' }}>
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col gap-14">
        {section.services.map((svc) => (
          <motion.div key={svc.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: EASE }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--text-primary)', marginBottom: '20px' }}>{svc.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {svc.tiers.map((t, i) => <TierCard key={t.label} t={t} best={i === 1} />)}
            </div>
          </motion.div>
        ))}

        {/* Callouts */}
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { Icon: Wallet,  glow: '#1A56DB', title: 'Budget tight?',  body: 'We have a starter option for every service. Talk to us.',                                     cta: 'Chat With Us' },
            { Icon: Package, glow: '#F59E0B', title: 'Bundle & Save', body: 'Combine multiple services for custom bundle pricing. Most clients save 10–20%.',              cta: 'Ask About Bundles' },
          ].map((c) => (
            <div key={c.title} className="flex flex-col gap-3 p-7" style={{ background: `${c.glow}08`, border: `1px solid ${c.glow}25`, borderLeft: `3px solid ${c.glow}`, borderRadius: '16px' }}>
              <div style={{ width: 44, height: 44, background: `${c.glow}14`, border: `1px solid ${c.glow}30`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 16px ${c.glow}25` }}>
                <c.Icon size={20} color={c.glow} strokeWidth={1.75} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '18px', color: 'var(--text-primary)' }}>{c.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{c.body}</p>
              <Link href="/contact" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px', color: c.glow }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}>
                {c.cta} →
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px', color: 'var(--text-primary)', marginBottom: '24px' }}>Pricing FAQs</h2>
          <div>{faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section style={{ background: 'var(--bg-section-alt)', padding: '72px 0' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
          className="max-w-xl mx-auto px-6 flex flex-col items-center text-center gap-5">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.25rem,3vw,1.75rem)', color: 'var(--text-primary)' }}>
            Not sure which package? Book a free 15-minute discovery call.
          </h2>
          <Link href="/contact" className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Book a Free Call →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
