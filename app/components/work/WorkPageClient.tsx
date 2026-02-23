'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const allProjects = [
  { slug: 'techbridge-website', name: 'TechBridge Website Redesign', tag: 'Web Design', client: 'B2B tech firm, Lagos', filter: 'Web Design' },
  { slug: 'styleco-brand', name: 'StyleCo Brand Identity', tag: 'Brand Identity', client: 'Fashion brand, Abuja', filter: 'Brand Identity' },
  { slug: 'apex-ventures-web', name: 'Apex Ventures Website', tag: 'Web Design', client: 'Investment firm, Port Harcourt', filter: 'Web Design' },
  { slug: 'greenleaf-identity', name: 'GreenLeaf Brand System', tag: 'Brand Identity', client: 'Agri-tech startup, Ibadan', filter: 'Brand Identity' },
  { slug: 'launchpad-app', name: 'LaunchPad Web App', tag: 'Apps', client: 'SaaS startup, Lagos', filter: 'Apps' },
  { slug: 'nova-social', name: 'Nova Social Campaign', tag: 'Social Media', client: 'Consumer brand, Lagos', filter: 'Social Media' },
  { slug: 'brightcorp-web', name: 'BrightCorp Corporate Site', tag: 'Web Design', client: 'Corporate services, Abuja', filter: 'Web Design' },
  { slug: 'fundrise-brand', name: 'FundRise Identity', tag: 'Brand Identity', client: 'Fintech startup, Lagos', filter: 'Brand Identity' },
  { slug: 'craftco-social', name: 'CraftCo Social Growth', tag: 'Social Media', client: 'Artisan brand, Enugu', filter: 'Social Media' },
  { slug: 'marketplace-app', name: 'NexaMarket App', tag: 'Apps', client: 'E-commerce startup, Lagos', filter: 'Apps' },
  { slug: 'visabridge-web', name: 'VisaBridge Website', tag: 'Web Design', client: 'Immigration consultancy, London', filter: 'Web Design' },
  { slug: 'primetech-brand', name: 'PrimeTech Brand Kit', tag: 'Brand Identity', client: 'IT services firm, Kano', filter: 'Brand Identity' },
];

const filters = ['All', 'Web Design', 'Brand Identity', 'Social Media', 'Content', 'Apps'];
const tagColors: Record<string, string> = {
  'Web Design': '#1A56DB',
  'Brand Identity': '#06B6D4',
  'Social Media': '#F59E0B',
  'Apps': '#8B5CF6',
  'Content': '#10B981',
};

export default function WorkPageClient() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? allProjects : allProjects.filter((p) => p.filter === active);

  return (
    <main>

      {/* ── HERO ──────────────────────────────── */}
      <section className="relative overflow-hidden gradient-mesh force-dark" style={{ paddingTop: '120px', paddingBottom: '72px' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '70vw', height: '50vh', background: 'radial-gradient(ellipse, rgba(26,86,219,0.12) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#06B6D4' }}>Portfolio</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--text-primary)', lineHeight: 1.1 }}>
            Our Work Speaks for Itself.
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
            className="flex flex-wrap gap-6 justify-center">
            {['50+ Projects', '4 Departments', 'Multiple Industries'].map((s) => (
              <span key={s} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{s.split(' ')[0]}</span>{' '}{s.split(' ').slice(1).join(' ')}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FILTER TABS ────────────────────────── */}
      <div className="sticky top-[72px] z-40" style={{ background: 'var(--bg-navbar)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border-default)' }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-1 overflow-x-auto py-3">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className="flex-shrink-0 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-150"
              style={{ fontFamily: 'var(--font-display)', background: active === f ? '#1A56DB' : 'transparent', color: active === f ? '#fff' : 'var(--text-secondary)' }}
              onMouseEnter={(e) => { if (active !== f) (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; }}
              onMouseLeave={(e) => { if (active !== f) (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── PROJECT GRID ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: i * 0.06 }}
              className="group flex flex-col gap-4"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-card-theme)' }}
            >
              {/* Image placeholder */}
              <div style={{ aspectRatio: '16/10', background: 'linear-gradient(135deg, rgba(26,86,219,0.1) 0%, rgba(6,182,212,0.05) 100%)', borderBottom: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: `${tagColors[p.tag] ?? '#1A56DB'}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${tagColors[p.tag] ?? '#1A56DB'}44` }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={tagColors[p.tag] ?? '#1A56DB'} strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                </div>
                <p style={{ fontSize: '9px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', textAlign: 'center' }}>
                  PLACEHOLDER: Project mockup — {p.tag} for {p.client}.
                </p>
              </div>

              <div className="flex flex-col gap-3 px-5 pb-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '16px', color: 'var(--text-primary)', lineHeight: 1.2 }}>{p.name}</h3>
                  <span style={{ flexShrink: 0, fontSize: '10px', padding: '2px 8px', borderRadius: '99px', background: `${tagColors[p.tag] ?? '#1A56DB'}18`, color: tagColors[p.tag] ?? '#1A56DB', fontFamily: 'var(--font-display)', fontWeight: 600 }}>{p.tag}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>{p.client}</p>
                <Link href={`/work/${p.slug}`} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'var(--accent)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#06B6D4'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}>
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '48px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Working on growing this to 50+ documented projects. Check back monthly.
        </p>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────── */}
      <section style={{ background: 'var(--bg-section-alt)', padding: '72px 0' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
          className="max-w-xl mx-auto px-6 flex flex-col items-center text-center gap-5">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem,3.5vw,2rem)', color: 'var(--text-primary)' }}>Like what you see? Let&apos;s talk.</h2>
          <Link href="/contact" className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Start a Project →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
