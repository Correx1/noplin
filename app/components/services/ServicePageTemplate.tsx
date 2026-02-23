'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── Types ─────────────────────────────────────────────────
export interface PricingTier {
  name: string;
  price: string;
  turnaround: string;
  bestFor: string;
  includes: string[];
  best?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServicePageTemplateProps {
  serviceName: string;
  department: 'Design' | 'Web & Dev' | 'Content' | 'Marketing';
  leadSpecialist: string;
  tagline: string;
  startingPrice: string;
  turnaround: string;
  whatItIncludes: string[];
  pricingTiers: PricingTier[];
  whoItsFor: string;
  process: ProcessStep[];
  complementaryServices: { name: string; url: string }[];
  faqs: { question: string; answer: string }[];
}

const deptColors: Record<string, { bg: string; text: string }> = {
  'Design':    { bg: 'rgba(6,182,212,0.10)',  text: '#06B6D4' },
  'Web & Dev': { bg: 'rgba(26,86,219,0.12)',  text: '#1A56DB' },
  'Content':   { bg: 'rgba(6,182,212,0.10)',  text: '#06B6D4' },
  'Marketing': { bg: 'rgba(245,158,11,0.10)', text: '#F59E0B' },
};

// ── FAQ Item ──────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border-card)' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', color: 'var(--text-primary)' }}>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}
          style={{ color: 'var(--accent)', fontSize: '22px', lineHeight: 1, flexShrink: 0, marginLeft: '12px' }}>+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: 'easeOut' }} style={{ overflow: 'hidden' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, paddingBottom: '16px' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main template ─────────────────────────────────────────
export default function ServicePageTemplate(props: ServicePageTemplateProps) {
  const { serviceName, department, leadSpecialist, tagline, startingPrice, turnaround, whatItIncludes, pricingTiers, whoItsFor, process, complementaryServices, faqs } = props;
  const dc = deptColors[department] ?? deptColors['Web & Dev'];

  return (
    <main>

      {/* ── HERO ────────────────────────────────── */}
      <section className="relative overflow-hidden gradient-mesh force-dark" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div style={{ position: 'absolute', top: '-5%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '60vh', background: 'radial-gradient(ellipse, rgba(26,86,219,0.12) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 flex flex-col gap-6 items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="flex flex-wrap gap-3">
            <span style={{ display: 'inline-flex', padding: '3px 12px', borderRadius: '99px', fontSize: '11px', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.1em', background: dc.bg, color: dc.text }}>{department}</span>
            <span style={{ display: 'inline-flex', padding: '3px 12px', borderRadius: '99px', fontSize: '11px', fontFamily: 'var(--font-body)', background: 'rgba(245,158,11,0.10)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.3)' }}>{startingPrice}</span>
            <span style={{ display: 'inline-flex', padding: '3px 12px', borderRadius: '99px', fontSize: '11px', fontFamily: 'var(--font-body)', background: 'rgba(6,182,212,0.08)', color: '#06B6D4', border: '1px solid rgba(6,182,212,0.3)' }}>{turnaround}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--text-primary)', lineHeight: 1.1, maxWidth: '800px' }}>{serviceName}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '560px', lineHeight: 1.7 }}>{tagline}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}
            style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>Lead Specialist: <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{leadSpecialist}</span></motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}>
            <Link href="/contact" className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Get a Quote for This Service →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IT INCLUDES ────────────────────── */}
      <section style={{ background: 'var(--bg-section-alt)', padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px', color: 'var(--text-primary)', marginBottom: '24px' }}>What&apos;s Included</motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: 0.08 }}
            className="p-8" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '20px', boxShadow: 'var(--shadow-card-theme)' }}>
            <ul className="grid sm:grid-cols-2 gap-3">
              {whatItIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── PRICING TIERS ───────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px', color: 'var(--text-primary)', marginBottom: '32px' }}>Pricing Tiers</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {pricingTiers.map((tier, i) => (
              <motion.div key={tier.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
                className="relative flex flex-col gap-5 p-7"
                style={{ background: tier.best ? 'rgba(245,158,11,0.04)' : 'var(--bg-card)', border: tier.best ? '1px solid rgba(245,158,11,0.45)' : '1px solid var(--border-card)', borderRadius: '20px', boxShadow: 'var(--shadow-card-theme)' }}>
                {tier.best && <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#F59E0B', color: '#0D0D2B', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', letterSpacing: '0.1em', padding: '3px 14px', borderRadius: '99px', whiteSpace: 'nowrap' }}>BEST VALUE</span>}
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: tier.best ? '#F59E0B' : 'var(--text-primary)' }}>{tier.name}</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '28px', color: 'var(--text-primary)', marginTop: '4px' }}>{tier.price}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>{tier.turnaround}</p>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#06B6D4' }}>Best for: {tier.bestFor}</p>
                <ul className="flex flex-col gap-2 flex-1">
                  {tier.includes.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="flex items-center justify-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{ fontFamily: 'var(--font-display)', background: tier.best ? '#F59E0B' : 'rgba(26,86,219,0.15)', color: tier.best ? '#0D0D2B' : 'var(--text-primary)', border: tier.best ? 'none' : '1px solid var(--border-accent)' }}
                  onMouseEnter={(e) => { if (!tier.best) { (e.currentTarget as HTMLElement).style.background = 'rgba(26,86,219,0.3)'; } }}
                  onMouseLeave={(e) => { if (!tier.best) { (e.currentTarget as HTMLElement).style.background = 'rgba(26,86,219,0.15)'; } }}>
                  Get Started →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ────────────────────────── */}
      <section style={{ background: 'var(--bg-section-alt)', padding: '64px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
            className="p-7" style={{ background: 'rgba(26,86,219,0.06)', border: '1px solid rgba(26,86,219,0.2)', borderRadius: '16px', borderLeft: '3px solid #1A56DB' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: '#1A56DB', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Who It&apos;s For</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{whoItsFor}</p>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px', color: 'var(--text-primary)', marginBottom: '40px', textAlign: 'center' }}>How It Works</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-6 left-[12%] right-[12%]" style={{ height: '1px', borderTop: '2px dashed var(--border-accent)' }} />
            {process.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
                className="flex flex-col gap-3 items-center text-center">
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(26,86,219,0.15)', border: '1px solid rgba(26,86,219,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, position: 'relative' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', color: '#1A56DB' }}>{s.step}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', color: 'var(--text-primary)' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLEMENTARY SERVICES ──────────────── */}
      <section style={{ background: 'var(--bg-section-alt)', padding: '64px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--text-primary)', marginBottom: '20px' }}>Complete the Picture</motion.h2>
          <div className="flex flex-wrap gap-3">
            {complementaryServices.map((cs) => (
              <Link key={cs.name} href={cs.url} className="btn-ghost flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                {cs.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PLACEHOLDER ───────────────── */}
      <section style={{ padding: '64px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--text-primary)', marginBottom: '20px' }}>Work Samples</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['Project Alpha', 'Project Beta', 'Project Gamma'].map((p) => (
              <div key={p} style={{ aspectRatio: '16/10', background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '16px' }}>
                <span style={{ fontSize: '24px' }}>📁</span>
                <p style={{ fontSize: '12px', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>{p}</p>
                <p style={{ fontSize: '9px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', textAlign: 'center' }}>PLACEHOLDER: Project mockup screenshot</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────── */}
      <section style={{ background: 'var(--bg-section-alt)', padding: '64px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
            className="p-8" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '16px', boxShadow: 'var(--shadow-card-theme)' }}>
            <div className="flex gap-0.5 mb-4">{Array.from({ length: 5 }).map((_, i) => <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-primary)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '16px', opacity: 0.88 }}>&ldquo;Working with Noplin Digital was one of the best decisions for our business. Professional, fast, and genuinely excellent results.&rdquo;</p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>Client Name</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>CEO, Company Name · PLACEHOLDER</p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────── */}
      <section style={{ padding: '64px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px', color: 'var(--text-primary)', marginBottom: '24px' }}>Frequently Asked Questions</motion.h2>
          <div className="flex flex-col">
            {faqs.map((faq) => <FAQItem key={faq.question} q={faq.question} a={faq.answer} />)}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────── */}
      <section style={{ background: 'var(--bg-section-alt)', padding: '80px 0' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: EASE }}
          className="max-w-2xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem,3.5vw,2.25rem)', color: 'var(--text-primary)' }}>Ready to Get Started?</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-secondary)' }}>Contact us today and get a free, no-obligation quote within 2 hours.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Get a Free Quote
            </Link>
            <a href="mailto:hello@noplin.com" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px', color: '#06B6D4', display: 'flex', alignItems: 'center' }}>hello@noplin.com</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
