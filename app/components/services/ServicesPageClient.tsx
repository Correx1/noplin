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
      <section className="relative overflow-hidden gradient-mesh pt-[120px] pb-[80px]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-gradient-radial from-blue-100 to-transparent" />
          <div className="absolute inset-0 bg-[length:72px_72px] bg-[linear-gradient(var(--grid-line-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line-color)_1px,transparent_1px)]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}
            className="font-display font-semibold text-[11px] tracking-widest uppercase text-blue-500">
            Our Services
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)]  leading-tight">
            Everything Your Business Needs to Grow Online — <span className="text-blue-600">Under One Roof.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
            className="font-body text-lg text-gray-700 max-w-[560px] leading-relaxed">
            15 specialized services across 4 departments. Each with clear pricing, fast delivery, and measurable results.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE, delay: 0.22 }} className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white">
              Get a Quote
            </Link>
            <Link href="/pricing" className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold">
              View Pricing
            </Link>
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