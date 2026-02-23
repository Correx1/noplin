'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const tabs = ['All', 'Design', 'Web & Dev', 'Content', 'Marketing'] as const;
type Tab = typeof tabs[number];

const departments = [
  {
    id: 'design', label: 'Design', headline: 'Brand & Visual Identity', sub: 'Everything your brand needs to look premium and be remembered.',
    deptColor: 'rgba(6,182,212,0.10)', deptText: '#06B6D4',
    services: [
      { name: 'A-Grade Brand Identity™', specialist: 'Malachy', desc: 'Logos, visual systems, and brand kits that make your business unforgettable.', price: 'From ₦80,000', turnaround: '3–5 days', href: '/services/brand-identity' },
      { name: 'Pitch Deck & Presentation™', specialist: 'Malachy', desc: 'Investor-ready pitch decks and presentations that command attention.', price: 'From ₦80,000', turnaround: '3–5 days', href: '/services/pitch-deck' },
    ],
  },
  {
    id: 'webdev', label: 'Web & Dev', headline: 'Sites & Apps That Convert', sub: 'From landing pages to full-scale web applications — built for results.',
    deptColor: 'rgba(26,86,219,0.12)', deptText: '#1A56DB',
    services: [
      { name: 'Conversion-First Web Design™', specialist: 'Gilbert', desc: 'Websites engineered to rank, convert, and impress.', price: 'From ₦300,000', turnaround: '7–10 days', href: '/services/web-design' },
      { name: 'Custom Web App Development™', specialist: 'Gilbert', desc: 'Scalable applications built on Laravel for serious businesses.', price: 'From ₦500,000', turnaround: '4–8 weeks', href: '/services/web-app-development' },
      { name: 'MVP Development for Startups™', specialist: 'Gilbert', desc: 'Launch your startup idea fast with a built-to-scale MVP.', price: 'From ₦400,000', turnaround: '3–6 weeks', href: '/services/mvp-development' },
      { name: 'E-Commerce Development™', specialist: 'Gilbert', desc: 'Online stores built for conversions and growth.', price: 'From ₦400,000', turnaround: '2–4 weeks', href: '/services/ecommerce-development' },
      { name: 'API Development & Integration™', specialist: 'Gilbert', desc: 'Connect your tools, automate workflows, scale operations.', price: 'From ₦150,000', turnaround: '1–3 weeks', href: '/services/api-integration' },
    ],
  },
  {
    id: 'content', label: 'Content', headline: 'Copy That Connects', sub: 'Content and copy that drives real engagement and real results.',
    deptColor: 'rgba(6,182,212,0.10)', deptText: '#06B6D4',
    services: [
      { name: 'Authority Content™ (SEO)', specialist: 'Funke', desc: 'SEO blog content that ranks on Google and converts readers to leads.', price: 'From ₦60,000/mo', turnaround: 'Ongoing', href: '/services/seo-content' },
      { name: 'Conversion Copy™', specialist: 'Funke', desc: 'Website copy, landing pages, and ad copy that drives action.', price: 'From ₦50,000', turnaround: '3–5 days', href: '/services/conversion-copy' },
      { name: 'Revenue Email System™', specialist: 'Funke', desc: 'Automated email sequences that sell while you sleep.', price: 'From ₦60,000/mo', turnaround: 'Ongoing', href: '/services/email-marketing' },
      { name: 'Video Script & Editing™', specialist: 'Funke + Jessica', desc: 'Scripts and editing for YouTube, Instagram, TikTok, and corporate videos.', price: 'From ₦25,000/video', turnaround: '3–5 days', href: '/services/video-content' },
      { name: 'Corporate Comms Suite™', specialist: 'Funke', desc: 'Business proposals, reports, newsletters, and internal comms.', price: 'From ₦30,000', turnaround: '2–3 days', href: '/services/corporate-comms' },
    ],
  },
  {
    id: 'marketing', label: 'Marketing', headline: 'Growth That Scales', sub: 'Paid ads, social media, and strategy that actually moves the needle.',
    deptColor: 'rgba(245,158,11,0.10)', deptText: '#F59E0B',
    services: [
      { name: 'Social Growth Engine™', specialist: 'Jessica', desc: 'Full social media management that grows real audiences and engagement.', price: 'From ₦80,000/mo', turnaround: 'Ongoing', href: '/services/social-media' },
      { name: 'Precision Ad Campaigns™', specialist: 'Benedict', desc: 'Google and Meta ad campaigns managed by specialists.', price: 'From ₦50,000 setup', turnaround: 'Ongoing', href: '/services/paid-ads' },
      { name: 'Digital Strategy Consulting™', specialist: 'CEO', desc: 'End-to-end digital strategy for CEOs who want real competitive advantage.', price: 'From ₦1,000,000', turnaround: 'Project-based', href: '/services/strategy-consulting' },
    ],
  },
];

function ServiceCard({ s, dc }: { s: { name: string; specialist: string; desc: string; price: string; turnaround: string; href: string }; dc: { deptColor: string; deptText: string; label: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: EASE }}
      className="group flex flex-col gap-4 p-7 transition-all duration-300"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '20px', boxShadow: 'var(--shadow-card-theme)' }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'var(--border-accent)'; el.style.boxShadow = 'var(--shadow-card-hover)'; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.borderColor = 'var(--border-card)'; el.style.boxShadow = 'var(--shadow-card-theme)'; }}
    >
      <span style={{ alignSelf: 'flex-start', padding: '2px 10px', borderRadius: '99px', fontSize: '10px', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.1em', background: dc.deptColor, color: dc.deptText }}>{dc.label}</span>
      <div className="flex flex-col gap-1.5 flex-1">
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '17px', color: 'var(--text-primary)', lineHeight: 1.2 }}>{s.name}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--accent)' }}>Lead: {s.specialist}</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
      </div>
      <div className="flex items-center gap-3">
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px', color: '#F59E0B' }}>{s.price}</span>
        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text-secondary)', display: 'inline-block' }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>{s.turnaround}</span>
      </div>
      <Link href={s.href} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'var(--accent)' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#06B6D4'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}>
        Learn More →
      </Link>
    </motion.div>
  );
}

export default function ServicesPageClient() {
  const [activeTab, setActiveTab] = useState<Tab>('All');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    if (tab === 'All') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const map: Record<string, string> = { Design: 'design', 'Web & Dev': 'webdev', Content: 'content', Marketing: 'marketing' };
    const el = sectionRefs.current[map[tab]];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const visibleDepts = activeTab === 'All' ? departments : departments.filter((d) => d.label === activeTab);

  return (
    <main>

      {/* ── HERO ──────────────────────────────── */}
      <section className="relative overflow-hidden gradient-mesh force-dark" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '60vh', background: 'radial-gradient(ellipse, rgba(26,86,219,0.12) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#06B6D4' }}>Our Services</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--text-primary)', lineHeight: 1.1 }}>
            Everything Your Business Needs to Grow Online — <span style={{ color: '#1A56DB' }}>Under One Roof.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '560px', lineHeight: 1.7 }}>
            15 specialized services across 4 departments. Each with clear pricing, fast delivery, and measurable results.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE, delay: 0.22 }} className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Get a Quote
            </Link>
            <Link href="/pricing" className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STICKY TABS ────────────────────────── */}
      <div className="sticky top-[72px] z-40" style={{ background: 'var(--bg-navbar)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border-default)' }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-1 overflow-x-auto py-3">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => handleTabClick(tab)}
              className="flex-shrink-0 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-150"
              style={{ fontFamily: 'var(--font-display)', background: activeTab === tab ? '#1A56DB' : 'transparent', color: activeTab === tab ? '#fff' : 'var(--text-secondary)' }}
              onMouseEnter={(e) => { if (activeTab !== tab) (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; }}
              onMouseLeave={(e) => { if (activeTab !== tab) (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── SERVICE SECTIONS ────────────────────── */}
      <div style={{ padding: '64px 0' }}>
        {visibleDepts.map((dept) => (
          <section key={dept.id} id={dept.id} ref={(el) => { sectionRefs.current[dept.id] = el; }} style={{ marginBottom: '80px' }}>
            <div className="max-w-7xl mx-auto px-6">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }} className="mb-10">
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: dept.deptText, display: 'block', marginBottom: '8px' }}>{dept.label}</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2rem)', color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '6px' }}>{dept.headline}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-secondary)' }}>{dept.sub}</p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {dept.services.map((s) => <ServiceCard key={s.name} s={s} dc={{ deptColor: dept.deptColor, deptText: dept.deptText, label: dept.label }} />)}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── UPSELL CALLOUT ─────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5" style={{ background: 'rgba(26,86,219,0.06)', border: '1px solid rgba(26,86,219,0.2)', borderLeft: '3px solid #1A56DB', borderRadius: '16px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>
            <span style={{ fontSize: '18px' }}>💡</span>{' '}
            <strong style={{ color: 'var(--text-primary)' }}>Most clients combine 2–3 services for maximum results.</strong>{' '}
            Ask us about bundled packages — we&apos;ll put together a custom quote.
          </p>
          <Link href="/contact" className="btn-electric flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
            style={{ fontFamily: 'var(--font-display)' }}>
            Get a Bundle Quote
          </Link>
        </div>
      </div>

      {/* ── BOTTOM CTA ─────────────────────────── */}
      <section style={{ background: 'var(--bg-section-alt)', padding: '80px 0' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: EASE }}
          className="max-w-2xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem,3.5vw,2.25rem)', color: 'var(--text-primary)' }}>
            Not sure which service you need?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-secondary)' }}>
            Let&apos;s figure it out together.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Book a Free Call
            </Link>
            <Link href="/contact" className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
