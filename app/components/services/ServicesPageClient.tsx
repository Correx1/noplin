/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const departments = [
  {
    id: 'design', label: 'Design', headline: 'Brand & Visual Identity', sub: 'Everything your brand needs to look premium and be remembered.',
    services: [
      { name: 'A-Grade Brand Identity™', desc: 'Logos, visual systems, and brand kits that make your business unforgettable.', price: 'From ₦80,000', turnaround: '3–5 days', href: '/services/brand-identity' },
      { name: 'Pitch Deck & Presentation™', desc: 'Investor-ready pitch decks and presentations that command attention.', price: 'From ₦80,000', turnaround: '3–5 days', href: '/services/pitch-deck' },
    ],
  },
  {
    id: 'webdev', label: 'Web & Dev', headline: 'Sites & Apps That Convert', sub: 'From landing pages to full-scale web applications — built for results.',
    services: [
      { name: 'Conversion-First Web Design™', desc: 'Websites engineered to rank, convert, and impress.', price: 'From ₦300,000', turnaround: '7–10 days', href: '/services/web-design' },
      { name: 'Custom Web App Development™', desc: 'Scalable applications built on Laravel for serious businesses.', price: 'From ₦500,000', turnaround: '4–8 weeks', href: '/services/web-app-development' },
      { name: 'MVP Development for Startups™', desc: 'Launch your startup idea fast with a built-to-scale MVP.', price: 'From ₦400,000', turnaround: '3–6 weeks', href: '/services/mvp-development' },
      { name: 'E-Commerce Development™', desc: 'Online stores built for conversions and growth.', price: 'From ₦400,000', turnaround: '2–4 weeks', href: '/services/ecommerce-development' },
      { name: 'API Development & Integration™', desc: 'Connect your tools, automate workflows, scale operations.', price: 'From ₦150,000', turnaround: '1–3 weeks', href: '/services/api-integration' },
    ],
  },
  {
    id: 'content', label: 'Content', headline: 'Copy That Connects', sub: 'Content and copy that drives real engagement and real results.',
    services: [
      { name: 'Authority Content™ (SEO)', desc: 'SEO blog content that ranks on Google and converts readers to leads.', price: 'From ₦60,000/mo', turnaround: 'Ongoing', href: '/services/seo-content' },
      { name: 'Conversion Copy™', desc: 'Website copy, landing pages, and ad copy that drives action.', price: 'From ₦50,000', turnaround: '3–5 days', href: '/services/conversion-copy' },
      { name: 'Revenue Email System™', desc: 'Automated email sequences that sell while you sleep.', price: 'From ₦60,000/mo', turnaround: 'Ongoing', href: '/services/email-marketing' },
      { name: 'Video Script & Editing™', desc: 'Scripts and editing for YouTube, Instagram, TikTok, and corporate videos.', price: 'From ₦25,000/video', turnaround: '3–5 days', href: '/services/video-content' },
      { name: 'Corporate Comms Suite™', desc: 'Business proposals, reports, newsletters, and internal comms.', price: 'From ₦30,000', turnaround: '2–3 days', href: '/services/corporate-comms' },
    ],
  },
  {
    id: 'marketing', label: 'Marketing', headline: 'Growth That Scales', sub: 'Paid ads, social media, and strategy that actually moves the needle.',
    services: [
      { name: 'Social Growth Engine™', desc: 'Full social media management that grows real audiences and engagement.', price: 'From ₦80,000/mo', turnaround: 'Ongoing', href: '/services/social-media' },
      { name: 'Precision Ad Campaigns™', desc: 'Google and Meta ad campaigns managed by specialists.', price: 'From ₦50,000 setup', turnaround: 'Ongoing', href: '/services/paid-ads' },
      { name: 'Digital Strategy Consulting™', desc: 'End-to-end digital strategy for CEOs who want real competitive advantage.', price: 'From ₦1,000,000', turnaround: 'Project-based', href: '/services/strategy-consulting' },
    ],
  },
];

function ServiceCard({ s }: { s: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: EASE }}
      className="group flex flex-col gap-4 p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
    >
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{s.name}</h3>
      <p className="text-sm sm:text-base text-gray-700 flex-1">{s.desc}</p>
      <div className="flex items-center gap-3 text-sm text-gray-700">
        <span>{s.price}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span>{s.turnaround}</span>
      </div>
      <Link href={s.href} className="text-blue-600 font-semibold mt-2 hover:underline text-sm sm:text-base">
        Learn More →
      </Link>
    </motion.div>
  );
}

export default function ServicesPageClient() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  return (
    <main>
      {/* ── HERO ──────────────────────────────── */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[var(--bg-page)] pt-[160px] pb-[120px]">
        {/* --- ADDED COLORFUL BACKGROUND SWOOP --- */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute w-[150%] h-[250px] bg-gradient-to-r from-[#0A101D] via-[#1A56DB] to-[#06B6D4] opacity-15 blur-[60px] -rotate-[12deg] translate-y-10" />
          <div className="absolute w-[150%] h-[150px] bg-gradient-to-r from-[#1A56DB] to-[#0A101D] opacity-[0.08] blur-[50px] -rotate-[12deg] translate-y-36 translate-x-[5%]" />
        </div>

        {/* Minimal background curves (From AboutHero for uniformity) */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
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
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-20">
          <div className="mx-auto grid h-full max-w-7xl grid-cols-4 px-6">
            <div className="h-full border-l border-[var(--grid-line-color)]" />
            <div className="h-full border-l border-[var(--grid-line-color)]" />
            <div className="h-full border-l border-[var(--grid-line-color)]" />
            <div className="h-full border-l border-r border-[var(--grid-line-color)]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_auto] lg:gap-24">
          
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
            className="flex max-w-2xl flex-col items-start gap-4"
          >
            <span className="font-display text-[13px] font-semibold tracking-[0.05em] text-[#1A56DB] uppercase">
              Our Services
            </span>

            <h1 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em] text-[var(--text-primary)] uppercase">
              We Provide
            </h1>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em] text-[var(--text-primary)] uppercase">
              Smart Solutions.
            </h1>

            <p className="mt-4 font-body text-[18px] leading-[1.6] text-[var(--text-secondary)]">
              Strategists dedicated to creating stunning, functional digital experiences that align with your unique business goals. 15 specialized services across 4 departments.
            </p>
          </motion.div>

          {/* Right - Circular CTA (Matches the reference image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="hidden lg:flex"
          >
            <div
              className="group relative flex h-56 w-56 cursor-pointer items-center justify-center rounded-full border border-[var(--border-card)] bg-transparent shadow-sm transition-all duration-500 hover:border-[#1A56DB] hover:bg-[var(--bg-card)] hover:shadow-lg hover:shadow-[#1A56DB]/10"
              onClick={() => {
                const firstDept = document.getElementById(departments[0].id);
                if (firstDept) {
                  firstDept.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--text-primary)]">
                  View All<br />Solutions
                </span>
                <svg 
                  className="h-6 w-6 text-[var(--text-muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1A56DB]" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M19 5H8M19 5V16" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ────────────────────── */}
      <div className="py-16">
        {departments.map((dept) => (
          <section key={dept.id} id={dept.id} ref={(el) => { sectionRefs.current[dept.id] = el; }} className="mb-20">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }} className="mb-10">
                <span className="text-sm sm:text-base font-semibold uppercase tracking-widest text-gray-900 mb-2 block">{dept.label}</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{dept.headline}</h2>
                <p className="text-gray-700 text-base sm:text-lg">{dept.sub}</p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.services.map((s) => <ServiceCard key={s.name} s={s} />)}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}