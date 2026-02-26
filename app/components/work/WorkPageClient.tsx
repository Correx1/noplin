'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

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

  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
    Fade()
  ]);

  return (
    <main>

      {/* ── HERO ──────────────────────────────── */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[var(--bg-page)] pt-[160px] pb-[120px]">
        {/* Minimal background curves */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            {/* Single smooth parabolic curves */}
            <path
              d="M0,400 Q500,100 1000,400"
              fill="none"
              stroke="#1A56DB"
              strokeWidth="2"
            />
            <path
              d="M0,500 Q500,200 1000,500"
              fill="none"
              stroke="#06B6D4"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Optional grid lines for subtle structure */}
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-30">
          <div className="mx-auto grid h-full max-w-7xl grid-cols-4 px-6">
            <div className="h-full border-l border-[var(--grid-line-color)]" />
            <div className="h-full border-l border-[var(--grid-line-color)]" />
            <div className="h-full border-l border-[var(--grid-line-color)]" />
            <div className="h-full border-l border-r border-[var(--grid-line-color)]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_450px] lg:gap-24">

          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
            className="flex max-w-2xl flex-col items-start gap-6"
          >
            <span className="font-display text-[13px] font-semibold tracking-[0.05em] text-[#1A56DB] uppercase">
              Portfolio
            </span>

            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)]">
              Our Work Speaks 
              <br />
              for Itself.
            </h1>

            <p className="mt-2 font-body text-[18px] leading-[1.6] text-[var(--text-secondary)]">
              We build brands that mean something, websites that convert, and campaigns that scale. Explore a selection of our recent projects.
            </p>
          </motion.div>

          {/* Right side - Stacked & Slanted Portfolio Preview */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="relative w-full h-[500px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
            {/* Subtle glow behind the stack */}
            <div className="absolute top-1/2 right-20 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#1A56DB] blur-[120px] opacity-20" />
            
            <div className="relative w-full max-w-[480px] h-full">
              
              {/* Large Back Image Carousel (Straight) */}
              <div className="absolute right-0 top-6 w-[85%] aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-700 hover:-translate-y-2 z-10 group">
                <div className="w-full h-full relative" ref={emblaRef}>
                  <div className="flex h-full w-full">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="relative flex-[0_0_100%] h-full min-w-0">
                        <Image src={`/portfolio/web${i === 1 ? 2 : i === 2 ? 1 : i === 3 ? 2 : 1}.png`} alt={`Project preview ${i}`} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent opacity-80" />
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                    <span className="font-display text-white text-2xl font-bold tracking-tight">Our Portfolio</span>
                    <p className="font-body text-slate-300 text-sm mt-1">Stunning digital experiences</p>
                  </div>
                </div>
              </div>

              {/* Smaller Front Image (Straight, overlapping) */}
              <div className="absolute left-0 bottom-12 w-[55%] aspect-[4/5] overflow-hidden rounded-2xl border-[6px] border-[var(--bg-page)] bg-[var(--bg-card)] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-700 hover:-translate-y-2 z-20 group">
                <div className="w-full h-full relative">
                  <Image src="/portfolio/web2.png" alt="Project preview" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                    <span className="font-display text-white text-lg font-bold tracking-tight">LaunchPad UI</span>
                    <p className="font-body text-slate-300 text-xs mt-0.5">App Design</p>
                  </div>
                </div>
              </div>

            </div>
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
