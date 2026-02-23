'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const categoryColors: Record<string, string> = {
  'Business Growth': '#F59E0B',
  'Web Design': '#1A56DB',
  'Brand Identity': '#06B6D4',
  'Paid Ads': '#8B5CF6',
  'Social Media': '#10B981',
};

const featured = {
  category: 'Business Growth',
  title: 'Why Nigerian SMEs Are Losing Money on Digital Marketing (And How to Fix It)',
  date: 'February 2026',
  readTime: '6 min read',
  excerpt: 'Most Nigerian SMEs invest in digital marketing without a strategy — spending on ads, social media, and websites without a clear system. Here is what the most successful brands do differently.',
  href: '/blog/nigerian-smes-digital-marketing',
};

const posts = [
  { category: 'Web Design', title: '5 Things Every Nigerian Business Website Must Have in 2025', excerpt: 'If your website is missing these five elements, you are losing leads every single day.', date: 'January 2026', readTime: '4 min read', href: '/blog/nigerian-website-essentials-2025' },
  { category: 'Brand Identity', title: 'How to Build a Brand That Nigerian Customers Actually Trust', excerpt: 'Trust is the currency of the Nigerian market. Here is how to build it through your brand identity.', date: 'January 2026', readTime: '5 min read', href: '/blog/build-brand-nigerian-customers-trust' },
  { category: 'Paid Ads', title: 'How to Run Facebook Ads in Nigeria That Actually Convert', excerpt: 'Targeting, budgeting, and creative tips from campaigns we have run across multiple Nigerian industries.', date: 'February 2026', readTime: '7 min read', href: '/blog/facebook-ads-nigeria-that-convert' },
  { category: 'Social Media', title: 'The Social Media Strategy That Works for Nigerian Businesses in 2025', excerpt: 'Generic social media advice does not work for the Nigerian market. Here is what actually does.', date: 'February 2026', readTime: '5 min read', href: '/blog/social-media-strategy-nigeria-2025' },
];

const categories = ['All', 'Web Design', 'Brand Identity', 'Content & SEO', 'Social Media', 'Paid Ads', 'Business Growth'];

function PlaceholderImg({ label, aspect }: { label: string; aspect?: string }) {
  return (
    <div style={{ aspectRatio: aspect ?? '16/9', background: 'linear-gradient(135deg, rgba(26,86,219,0.12) 0%, rgba(6,182,212,0.06) 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px' }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" style={{ opacity: 0.4 }}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      <p style={{ fontSize: '9px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', textAlign: 'center', opacity: 0.5 }}>
        PLACEHOLDER: {label}
      </p>
    </div>
  );
}

export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <main>

      {/* Hero */}
      <section className="relative overflow-hidden gradient-mesh force-dark" style={{ paddingTop: '120px', paddingBottom: '64px' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '70vw', height: '50vh', background: 'radial-gradient(ellipse, rgba(26,86,219,0.12) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-4">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#06B6D4' }}>Insights</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.08 }} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.75rem,4vw,2.75rem)', color: 'var(--text-primary)', lineHeight: 1.15 }}>
            Insights, Strategy & Expertise — From the Noplin Team
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE, delay: 0.15 }} style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-secondary)' }}>
            Digital marketing guides, design tips, and business growth strategies.
          </motion.p>
        </div>
      </section>

      {/* Featured post */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-card-theme)' }}>
          <PlaceholderImg label="Blog featured image. Branded template. 1200x630." aspect="21/7" />
          <div className="p-8 flex flex-col gap-4">
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: categoryColors[featured.category] ?? '#06B6D4' }}>{featured.category}</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.25rem,3vw,2rem)', color: 'var(--text-primary)', lineHeight: 1.2 }}>{featured.title}</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{featured.excerpt}</p>
            <div className="flex items-center gap-3">
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>{featured.date}</span>
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text-secondary)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>{featured.readTime}</span>
            </div>
            <Link href={featured.href} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px', color: 'var(--accent)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#06B6D4'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}>
              Read More →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Category filter */}
      <div style={{ borderBottom: '1px solid var(--border-default)', marginBottom: '48px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto pb-3">
            {categories.map((c) => (
              <button key={c} onClick={() => setActiveCategory(c)} className="flex-shrink-0 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-150"
                style={{ fontFamily: 'var(--font-display)', background: activeCategory === c ? '#1A56DB' : 'transparent', color: activeCategory === c ? '#fff' : 'var(--text-secondary)' }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Post grid */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((p, i) => (
            <motion.div key={p.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE, delay: i * 0.07 }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-card-theme)' }}>
              <PlaceholderImg label="Blog post image. Branded template. 800x500." />
              <div className="flex flex-col gap-3 p-5">
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: categoryColors[p.category] ?? '#06B6D4' }}>{p.category}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', color: 'var(--text-primary)', lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.excerpt}</p>
                <div className="flex items-center gap-2">
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-secondary)' }}>{p.date}</span>
                  <span style={{ width: 2, height: 2, borderRadius: '50%', background: 'var(--text-secondary)', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-secondary)' }}>{p.readTime}</span>
                </div>
                <Link href={p.href} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'var(--accent)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#06B6D4'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}>
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subscribe box */}
      <section className="max-w-xl mx-auto px-6 mb-20">
        <div className="flex flex-col items-center text-center gap-5 p-8" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-accent)', borderRadius: '20px', boxShadow: 'var(--shadow-card-theme)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: 'var(--text-primary)' }}>Get Weekly Digital Growth Insights</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)' }}>No spam. Just actionable strategies every week.</p>
          <div className="flex gap-2 w-full max-w-sm">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-xl text-sm" style={{ background: 'var(--bg-section-alt)', border: '1px solid var(--border-default)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', outline: 'none' }}
              onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#1A56DB'; }} onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--border-default)'; }} />
            <button className="btn-electric px-5 py-3 rounded-xl text-sm font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
