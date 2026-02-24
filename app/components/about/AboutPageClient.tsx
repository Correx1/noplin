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

      {/* Hero */}
      <section className="relative overflow-hidden gradient-mesh force-dark" style={{ paddingTop: '120px', paddingBottom: '96px' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '60vh', background: 'radial-gradient(ellipse, rgba(26,86,219,0.12) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: EASE }} className="flex flex-col gap-6">
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#06B6D4' }}>About Us</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.25rem,5vw,3.75rem)', color: 'var(--text-primary)', lineHeight: 1.1 }}>
              We Are Not a{' '}<span style={{ color: '#1A56DB' }}>Typical Agency.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '520px' }}>
              We are a results-obsessed team that builds brands that mean something, websites that convert, content that engages, and marketing that grows businesses — delivered fast, and with excellence.
            </p>
            <Link href="/contact" className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white self-start"
              style={{ fontFamily: 'var(--font-display)' }}>
              Work With Us →
            </Link>
          </motion.div>

          {/* Hero visual placeholder */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, ease: EASE, delay: 0.15 }} className="hidden lg:flex items-center justify-center">
            <div style={{ width: '100%', aspectRatio: '4/3', background: 'var(--bg-card)', border: '1px solid var(--border-accent)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '32px', boxShadow: 'var(--shadow-card-theme)' }}>
              <div style={{ width: 64, height: 64, borderRadius: '16px', background: 'rgba(26,86,219,0.12)', border: '1px solid rgba(26,86,219,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 24px rgba(26,86,219,0.2)' }}>
                <Building2 size={28} color="#1A56DB" strokeWidth={1.5} />
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', textAlign: 'center', maxWidth: '220px' }}>
                PLACEHOLDER: Abstract team or office visual, premium feel.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ background: 'var(--bg-section-alt)', padding: '96px 0' }}>
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader eyebrow="Who We Are" headline="Built Differently. Built for Results." />
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: EASE }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.85, textAlign: 'center' }}>
            Noplin Digital is a premium full-service digital agency built to serve ambitious businesses — from early-stage startups to established companies — that want real, measurable results from their digital investments. We specialize in brand identity, web design and development, content creation, and digital marketing. We are not a typical agency. We don&apos;t drag out timelines, hide behind jargon, or disappear after a project ends. We build long-term relationships with clients who want to grow — and we grow with them.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: 'var(--bg-section)', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Our Purpose" headline="Mission & Vision" />
          <div className="grid md:grid-cols-2 gap-6">
            {missionVision.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.12 }}
                className="flex flex-col gap-5 p-8" style={{ background: 'var(--bg-card)', border: `1px solid ${item.glow}20`, borderRadius: '20px', boxShadow: `0 0 40px ${item.glow}08` }}>
                <IconBox Icon={item.Icon} glow={item.glow} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: item.glow }}>{item.label}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.text}</p>
              </motion.div>
            ))}
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
