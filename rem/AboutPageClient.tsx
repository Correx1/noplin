'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import WhyNoplinSection from '../home/WhyNoplinSection';
import {
  Layers, Leaf, TrendingUp, Settings2,
  Target, Globe, Building2,
} from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const team = [
  { name: 'Malachy', role: 'Creative Director & Head of Design', bio: 'Brand identity, pitch decks, and visual strategy.' },
  { name: 'Gilbert', role: 'Head of Web & Development', bio: 'Web design, web apps, e-commerce, and MVPs built on Laravel.' },
  { name: 'Funke', role: 'Head of Content & SEO', bio: 'Authority content, conversion copy, email systems, and blog strategy.' },
  { name: 'Benedict', role: 'Head of Marketing', bio: 'Paid ad campaigns, social media growth, and digital strategy.' },
  { name: 'Jessica', role: 'Client Success Manager', bio: 'Onboarding, DM sales, and prospect relationships.' },
  { name: 'Vera', role: 'Client Success & Outreach', bio: 'Sales conversations, lead qualification, and client retention.' },
];

const pillars = [
  { Icon: Layers,    title: 'Solid',      body: 'Built for the long term. Every deliverable is crafted to last.',       glow: '#1A56DB' },
  { Icon: Leaf,      title: 'Sustainable', body: 'We build businesses that endure across generations.',                  glow: '#10B981' },
  { Icon: TrendingUp,title: 'Scalable',   body: 'Our systems grow as your business grows — no ceiling.',                glow: '#F59E0B' },
  { Icon: Settings2, title: 'Systematic', body: 'Smart processes that run efficiently and passively.',                   glow: '#8B5CF6' },
];

const values = [
  { title: 'Client First', body: 'Your results are our results. We never separate the two.' },
  { title: 'No Excuses', body: "We deliver. If something isn't right, we fix it — no arguments." },
  { title: 'Grow Daily', body: 'Every team member is committed to being better tomorrow than today.' },
  { title: 'Have Fun', body: 'We love what we do. That energy flows into everything we create.' },
];

const missionVision = [
  { label: 'Mission', Icon: Target, glow: '#1A56DB', text: 'Deliver exceptional design, content, and marketing solutions to businesses worldwide — with speed, honesty, and results-first thinking.' },
  { label: 'Vision',  Icon: Globe,  glow: '#06B6D4', text: 'Become a globally recognized billion-dollar digital services company rooted in African excellence.' },
];

function SectionHeader({ eyebrow, headline, sub }: { eyebrow: string; headline: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: EASE }}
      className="flex flex-col items-center text-center gap-3 mb-14"
    >
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#06B6D4' }}>{eyebrow}</span>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.75rem,4vw,2.75rem)', color: 'var(--text-primary)', lineHeight: 1.15 }}>{headline}</h2>
      {sub && <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '560px' }}>{sub}</p>}
    </motion.div>
  );
}

function IconBox({ Icon, glow }: { Icon: React.ElementType; glow: string }) {
  return (
    <div style={{
      width: 48, height: 48,
      background: `${glow}14`,
      border: `1px solid ${glow}30`,
      borderRadius: '12px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: `0 0 16px ${glow}25`,
    }}>
      <Icon size={22} color={glow} strokeWidth={1.75} />
    </div>
  );
}

export default function AboutPageClient() {
  return (
    <main>

      {/* Refined Stripe-esque Hero */}
      <section className="relative overflow-hidden bg-[var(--bg-page)] flex items-center" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '60vh' }}>
        
        {/* Subtle background lines matching Stripe aesthetic */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
           {/* Vertical grid lines */}
          <div className="absolute inset-x-0 top-0 h-full max-w-7xl mx-auto px-6 grid grid-cols-4 gap-0 pointer-events-none">
            <div className="border-l border-[var(--grid-line-color)] h-full" />
            <div className="border-l border-[var(--grid-line-color)] h-full" />
            <div className="border-l border-[var(--grid-line-color)] h-full" />
            <div className="border-l border-r border-[var(--grid-line-color)] h-full" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_450px] gap-16 lg:gap-24 items-center">
          
          {/* Left: Copy */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: EASE }} className="flex flex-col items-start gap-6 max-w-2xl">
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', letterSpacing: '0.05em', color: '#1A56DB' }}>We Are Different</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--text-primary)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              We Are Not a<br/>Typical Agency.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '8px' }}>
              We are a results-obsessed team that builds brands that mean something, websites that convert, content that engages, and marketing that grows businesses — delivered fast, and with excellence.
            </p>
          </motion.div>

          {/* Right: "Why Us" Animated Data Card */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.2 }} className="relative w-full">
            
            {/* Glowing shadow blob behind card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1A56DB]/20 to-[#06B6D4]/20 rounded-[30px] blur-2xl opacity-60" />

            <div className="relative bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[20px] shadow-2xl overflow-hidden flex flex-col h-[400px]">
              
              {/* Card Header (Simulated Search/Filter bar) */}
              <div className="px-5 py-4 border-b border-[var(--border-card)] flex items-center gap-3">
                <svg className="text-[var(--text-muted)] w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <div className="h-5 w-32 rounded bg-[var(--text-muted)] opacity-20" />
              </div>

              <div className="px-5 py-3 border-b border-[var(--border-card)]">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">Why Choose Us</span>
              </div>

              {/* Scrolling List Container */}
              <div className="relative flex-1 overflow-hidden p-5">
                {/* Fade overlays for the scrolling list */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[var(--bg-card)] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[var(--bg-card)] to-transparent z-10 pointer-events-none" />

                <div className="flex flex-col gap-5 animate-[scrollList_15s_linear_infinite] hover:[animation-play-state:paused]">
                  {[
                    { id: 'results', val: 'Results-First Focus' },
                    { id: 'speed', val: 'Fast Turnarounds' },
                    { id: 'design', val: 'Premium UI/UX' },
                    { id: 'code', val: 'Modern Stack (Next.js)' },
                    { id: 'seo', val: 'Built-in SEO' },
                    { id: 'growth', val: 'Scalable Architecture' },
                    { id: 'support', val: 'Ongoing Partnership' },
                    { id: 'roi', val: 'High ROI Focus' },
                    // Duplicates for seamless infinite scroll
                    { id: 'results-2', val: 'Results-First Focus' },
                    { id: 'speed-2', val: 'Fast Turnarounds' },
                    { id: 'design-2', val: 'Premium UI/UX' },
                    { id: 'code-2', val: 'Modern Stack (Next.js)' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between group">
                      <span className="font-mono text-[13px] text-[var(--text-primary)]">{item.id}</span>
                      <span className="font-mono text-[13px] text-[var(--text-muted)] transition-colors group-hover:text-[#1A56DB]">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <style>{`
          @keyframes scrollList {
            0% { transform: translateY(0); }
            100% { transform: translateY(-300px); }
          }
        `}</style>
      </section>

      {/* Who We Are & Our Purpose Split */}
      <section style={{ background: 'var(--bg-section-alt)', padding: '120px 0' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left: Who We Are */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#06B6D4' }}>Who We Are</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.75rem,4vw,2.75rem)', color: 'var(--text-primary)', lineHeight: 1.15 }}>Built Differently.<br/>Built for Results.</h2>
            </div>
            <div className="flex flex-col gap-4">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                Noplin Digital is a premium full-service digital agency built to serve ambitious businesses — from early-stage startups to established companies — that want real, measurable results from their digital investments.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                We specialize in brand identity, web design and development, content creation, and digital marketing. We are not a typical agency. We don&apos;t drag out timelines, hide behind jargon, or disappear after a project ends. We build long-term relationships with clients who want to grow — and we grow with them.
              </p>
            </div>
          </motion.div>

          {/* Right: Our Purpose */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1A56DB' }}>Our Purpose</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: 'var(--text-primary)', lineHeight: 1.15 }}>Mission & Vision</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              {missionVision.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.15 }}
                  className="flex flex-col sm:flex-row gap-5 px-6 py-8" style={{ background: 'var(--bg-card)', border: `1px solid ${item.glow}20`, borderRadius: '20px', boxShadow: `0 0 40px ${item.glow}08` }}>
                  <div className="shrink-0 flex items-start">
                    <IconBox Icon={item.Icon} glow={item.glow} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: item.glow }}>{item.label}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Four Pillars */}
      <section style={{ background: 'var(--bg-section-alt)', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Our Foundation" headline="The Four Pillars" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
                className="flex flex-col gap-4 p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '16px', boxShadow: 'var(--shadow-card-theme)', transition: 'border-color 0.2s, box-shadow 0.2s' }}>
                <IconBox Icon={p.Icon} glow={p.glow} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--text-primary)' }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: 'var(--bg-section)', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="The Team" headline="The People Behind the Results" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                className="flex flex-col gap-4 p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '16px', boxShadow: 'var(--shadow-card-theme)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(26,86,219,0.3), rgba(6,182,212,0.2))', border: '1px solid rgba(26,86,219,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: '#fff' }}>{member.name[0]}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '17px', color: 'var(--text-primary)' }}>{member.name}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--accent)', marginTop: '2px' }}>{member.role}</p>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{member.bio}</p>
                <p style={{ fontSize: '9px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>PLACEHOLDER: Professional team member photo.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyNoplinSection />

      {/* Values */}
      <section style={{ background: 'var(--bg-section)', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Our Culture" headline="Values We Live By" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
                className="flex flex-col gap-3 p-6" style={{ background: 'var(--bg-section-alt)', border: '1px solid var(--border-card)', borderRadius: '16px', boxShadow: 'var(--shadow-card-theme)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '17px', color: 'var(--text-primary)' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-section-alt)', padding: '80px 0' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: EASE }}
          className="max-w-2xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem,3.5vw,2.25rem)', color: 'var(--text-primary)' }}>
            Ready to work with a team that actually delivers?
          </h2>
          <Link href="/contact" className="btn-electric inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white"
            style={{ fontFamily: 'var(--font-display)' }}>
            Get a Free Quote →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
