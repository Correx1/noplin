/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FinalCTASection from '../home/FinalCTASection';
import { ArrowRight } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const departments = [
  {
    id: 'design', label: 'Design', headline: 'Brand & Visual Identity', sub: 'Everything your brand needs to look premium and be remembered.',
    services: [
      { name: 'A-Grade Brand Identity', desc: 'Logos, visual systems, and brand kits that make your business unforgettable.', price: 'From ₦80,000', turnaround: '3–5 days', href: '/services/brand-identity' },
      { name: 'Pitch Deck & Presentation', desc: 'Investor-ready pitch decks and presentations that command attention.', price: 'From ₦80,000', turnaround: '3–5 days', href: '/services/pitch-deck' },
    ],
  },
  {
    id: 'webdev', label: 'Web & Dev', headline: 'Sites & Apps That Convert', sub: 'From landing pages to full-scale web applications — built for results.',
    services: [
      { name: 'Conversion-First Web Design', desc: 'Websites engineered to rank, convert, and impress.', price: 'From ₦300,000', turnaround: '7–10 days', href: '/services/web-design' },
      { name: 'Custom Web App Development', desc: 'Scalable applications built on Laravel for serious businesses.', price: 'From ₦500,000', turnaround: '4–8 weeks', href: '/services/web-app-development' },
      { name: 'MVP Development for Startups', desc: 'Launch your startup idea fast with a built-to-scale MVP.', price: 'From ₦400,000', turnaround: '3–6 weeks', href: '/services/mvp-development' },
      { name: 'E-Commerce Development', desc: 'Online stores built for conversions and growth.', price: 'From ₦400,000', turnaround: '2–4 weeks', href: '/services/ecommerce-development' },
      { name: 'API Development & Integration', desc: 'Connect your tools, automate workflows, scale operations.', price: 'From ₦150,000', turnaround: '1–3 weeks', href: '/services/api-integration' },
    ],
  },
  {
    id: 'content', label: 'Content', headline: 'Copy That Connects', sub: 'Content and copy that drives real engagement and real results.',
    services: [
      { name: 'Authority Content (SEO)', desc: 'SEO blog content that ranks on Google and converts readers to leads.', price: 'From ₦60,000/mo', turnaround: 'Ongoing', href: '/services/seo-content' },
      { name: 'Conversion Copy', desc: 'Website copy, landing pages, and ad copy that drives action.', price: 'From ₦50,000', turnaround: '3–5 days', href: '/services/conversion-copy' },
      { name: 'Revenue Email System', desc: 'Automated email sequences that sell while you sleep.', price: 'From ₦60,000/mo', turnaround: 'Ongoing', href: '/services/email-marketing' },
      { name: 'Video Script & Editing', desc: 'Scripts and editing for YouTube, Instagram, TikTok, and corporate videos.', price: 'From ₦25,000/video', turnaround: '3–5 days', href: '/services/video-content' },
      { name: 'Corporate Comms Suite', desc: 'Business proposals, reports, newsletters, and internal comms.', price: 'From ₦30,000', turnaround: '2–3 days', href: '/services/corporate-comms' },
    ],
  },
  {
    id: 'marketing', label: 'Marketing', headline: 'Growth That Scales', sub: 'Paid ads, social media, and strategy that actually moves the needle.',
    services: [
      { name: 'Social Growth Engine', desc: 'Full social media management that grows real audiences and engagement.', price: 'From ₦80,000/mo', turnaround: 'Ongoing', href: '/services/social-media' },
      { name: 'Precision Ad Campaigns', desc: 'Google and Meta ad campaigns managed by specialists.', price: 'From ₦50,000 setup', turnaround: 'Ongoing', href: '/services/paid-ads' },
      { name: 'Digital Strategy Consulting', desc: 'End-to-end digital strategy for CEOs who want real competitive advantage.', price: 'From ₦1,000,000', turnaround: 'Project-based', href: '/services/strategy-consulting' },
    ],
  },
];

// ── Single service card ───────────────────────────────────────────────────────
function ServiceCard({ s, i }: { s: any; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
      className="group flex flex-col h-full bg-(--bg-card) border border-(--border-card) rounded-lg overflow-hidden hover:shadow-lg "
    >
      <div className="p-7 flex flex-col flex-1 gap-4">
        {/* Header: Title */}
        <h3 className="font-display font-bold text-(--text-primary) text-[18px] leading-snug">
          {s.name}
        </h3>

        {/* Description — visible on all breakpoints */}
        <p className="font-body text-[15px] text-(--text-secondary) leading-relaxed flex-1">
          {s.desc}
        </p>

        {/* Specs: Price & Turnaround (uniform colors) */}
        <div className="flex items-center gap-3 pt-3 border-t border-(--border-default) mt-2">
          <span className="font-display font-semibold text-[13px] text-(--text-primary)">
            {s.price}
          </span>
          <span className="w-1 h-1 rounded-full bg-(--text-muted) opacity-50" />
          <span className="font-body text-[13px] text-(--text-secondary)">
            {s.turnaround}
          </span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="bg-(--bg-section) px-7 py-4 border-t border-(--border-default) mt-auto">
        <Link
          href={s.href}
          className="inline-flex items-center gap-2 font-display font-semibold text-[13px] text-cyan-500 hover:text-cyan-400 transition-colors duration-200"
        >
          Explore service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPageClient() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  return (
    <main>
      {/* ── HERO ──────────────────────────────── */}
      <section className="hero-section relative flex min-h-[60vh] items-center overflow-hidden bg-(--bg-page)">
        {/* ── Background: soft glows + curves ── */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[700px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(26,86,219,0.13)_0%,transparent_68%)] dark:opacity-100 opacity-50" />
          <div className="absolute -bottom-24 right-[-4%] w-[520px] h-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.10)_0%,transparent_68%)] dark:opacity-100 opacity-40" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none">
            <path d="M-100,480 Q400,80 1300,360" stroke="url(#svarc1)" strokeWidth="1.2" opacity="0.18" />
            <path d="M-100,560 Q500,220 1300,480" stroke="url(#svarc2)" strokeWidth="0.8" opacity="0.12" />
            <defs>
              <linearGradient id="svarc1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" /><stop offset="30%" stopColor="#1A56DB" /><stop offset="70%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="svarc2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" /><stop offset="40%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_auto] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
            className="flex max-w-2xl flex-col items-start gap-4"
          >
            <span className="font-display text-[11px] font-semibold tracking-[0.14em] uppercase text-cyan-500">
              Our Services
            </span>
            <h1 className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-(--text-primary)">
              We Provide<br />Smart Solutions.
            </h1>
            <p className="mt-2 font-body text-[17px] leading-[1.6] text-(--text-secondary)">
              Strategists dedicated to creating stunning, functional digital experiences that align with your unique business goals. 15 specialized services across 4 departments.
            </p>
          </motion.div>

          {/* Circular scroll CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="hidden lg:flex"
          >
            <div
              className="group relative flex h-56 w-56 cursor-pointer items-center justify-center rounded-full border border-(--border-card) bg-transparent shadow-sm transition-all duration-500 hover:border-cyan-500 hover:bg-(--bg-card) hover:shadow-lg hover:shadow-cyan-500/10"
              onClick={() => {
                const firstDept = document.getElementById(departments[0].id);
                if (firstDept) firstDept.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-(--text-primary)">
                  View All<br />Solutions
                </span>
                <ArrowRight size={22} className="text-(--text-muted) transition-all duration-300 group-hover:-rotate-45 group-hover:text-cyan-500 mt-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ─────────────────────── */}
      <div className="py-24 bg-(--bg-page) relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-28">
          {departments.map((dept) => (
            <section
              key={dept.id}
              id={dept.id}
              ref={(el) => { sectionRefs.current[dept.id] = el; }}
            >
              {/* Department header */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE }}
                className="mb-10 flex flex-col gap-2"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-[2px] bg-cyan-500" />
                  <span className="font-display text-[11px] font-semibold tracking-[0.16em] uppercase text-cyan-500">
                    {dept.label}
                  </span>
                </div>
                <h2 className="font-display font-bold text-(--text-primary) text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight">
                  {dept.headline}
                </h2>
                <p className="font-body text-(--text-secondary) text-[15px] sm:text-[16px] leading-relaxed max-w-xl">
                  {dept.sub}
                </p>
              </motion.div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.services.map((s, i) => (
                  <ServiceCard key={s.name} s={s} i={i} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <FinalCTASection />
    </main>
  );
}