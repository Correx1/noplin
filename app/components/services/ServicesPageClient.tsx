/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FinalCTASection from '../home/FinalCTASection';
import { ArrowRight } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const departments = [
  {
    id: 'design', label: 'Design', headline: 'Brand & Visual Identity', sub: 'Everything your brand needs to look premium and be remembered.',
    image: '/images/services/design_banner.png',
    services: [
      { name: 'Social Branding', desc: 'Elevate your online presence with cohesive, premium social media identities.', href: '/services/social-branding' },
      { name: 'Ad Creatives (Video)', desc: 'High-converting video ads engineered to capture attention and drive action.', href: '/services/ad-creatives-video' },
      { name: 'Ad Creatives (Image)', desc: 'Striking static ad designs optimized for click-through rates and brand recall.', href: '/services/ad-creatives-image' },
      { name: 'Infographics', desc: 'Complex data and concepts transformed into visually engaging, easy-to-digest graphics.', href: '/services/infographics' },
      { name: 'Social Media Design (Content Pack)', desc: 'Monthly batches of custom-designed posts, stories, and carousels.', href: '/services/social-media-design' },
      { name: 'Pitch Deck Design', desc: 'Investor-ready presentations that communicate your value and secure funding.', href: '/services/pitch-deck' },
      { name: 'Vector Illustration', desc: 'Custom, scalable illustrations tailored to your brand\'s unique voice.', href: '/services/vector-illustration' },
      { name: 'Book / Publication Design', desc: 'Professional layout and cover design for e-books, reports, and print.', href: '/services/publication-design' },
      { name: 'UI/UX Design', desc: 'Intuitive, user-centric interfaces designed for frictionless digital experiences.', href: '/services/ui-ux-design' },
    ],
  },
  {
    id: 'development', label: 'Development', headline: 'Websites & Apps That Work', sub: 'High-performance digital products engineered for scale and conversions.',
    image: '/images/services/dev_banner.png',
    services: [
      { name: 'A-Grade Website Design', desc: 'Bespoke, conversion-optimized websites that serve as your ultimate digital storefront.', href: '/services/website-design' },
      { name: 'Landing Page Design', desc: 'Highly focused, standalone pages engineered specifically for targeted campaigns.', href: '/services/landing-page-design' },
      { name: 'Landing Page Hosting & Setup', desc: 'End-to-end deployment, ensuring your landing pages are fast, secure, and live.', href: '/services/landing-page-hosting' },
      { name: 'Sales Funnel Design', desc: 'Strategic, multi-step user journeys crafted to maximize customer acquisition.', href: '/services/sales-funnel-design' },
      { name: 'Funnel Hosting & Setup', desc: 'Technical deployment and stringing together of your complete sales funnel infrastructure.', href: '/services/funnel-hosting' },
      { name: 'Web Hosting', desc: 'Secure, lightning-fast hosting solutions tailored for absolute reliability.', href: '/services/web-hosting' },
      { name: 'WordPress Development', desc: 'Custom, scalable content management systems built on the world\'s leading platform.', href: '/services/wordpress' },
      { name: 'E-Commerce Development', desc: 'High-performance online stores designed to maximize sales and streamline checkout.', href: '/services/ecommerce' },
      { name: 'Custom Web Application', desc: 'Robust, scalable web apps built to solve complex business challenges.', href: '/services/web-application' },
      { name: 'MVP Development', desc: 'Rapid development and deployment of Minimum Viable Products for agile startups.', href: '/services/mvp-development' },
      { name: 'Custom API Development', desc: 'Secure, tailored bridging connections between your platforms and third-party tools.', href: '/services/api-development' },
      { name: 'Third-Party Integration', desc: 'Seamlessly connect your ecosystem with external SaaS, payment gateways, and CRMs.', href: '/services/integration' },
      { name: 'Website Hosting Setup', desc: 'Professional configuration of domains, SSLs, and fast servers for peace of mind.', href: '/services/hosting-setup' },
      { name: 'Debugging & Maintenance', desc: 'Ongoing technical support to keep your digital assets running flawlessly.', href: '/services/maintenance' },
    ],
  },
  {
    id: 'marketing', label: 'Marketing', headline: 'Growth That Scales', sub: 'Digital marketing strategies that actually move the needle.',
    image: '/images/services/marketing_banner.png',
    services: [
      { name: 'Social Media Management', desc: 'End-to-end management of your social channels to build community and authority.', href: '/services/social-management' },
      { name: 'Social Media Ads Management', desc: 'Data-driven paid campaigns across Meta, LinkedIn, and more to maximize ROAS.', href: '/services/social-ads' },
      { name: 'Email Marketing', desc: 'Automated newsletter and lifecycle campaigns that turn subscribers into loyal customers.', href: '/services/email-marketing' },
      { name: 'SEO Optimization', desc: 'Strategic on-page and off-page efforts to dominate search engine results and drive organic traffic.', href: '/services/seo' },
      { name: 'Content Marketing', desc: 'Authoritative articles, blogs, and whitepapers that educate prospects and drive inbound leads.', href: '/services/content-marketing' },
      { name: 'Influencer Marketing', desc: 'Strategic partnerships with industry voices to expand your brand\'s reach and credibility.', href: '/services/influencer-marketing' },
    ],
  },
  {
    id: 'consulting', label: 'Consulting', headline: 'Expert Guidance', sub: 'Strategic insights and hands-on consulting to elevate your business.',
    image: '/images/services/consulting_banner.png',
    services: [
      { name: 'Branding Consultation', desc: '1-on-1 strategic deep dives to define your brand architecture, voice, and visual direction.', href: '/services/branding-consultation' },
      { name: 'Website Strategy Session', desc: 'Collaborative planning to map out user journeys, site structure, and conversion goals.', href: '/services/website-strategy' },
      { name: 'Digital Marketing Consultation', desc: 'Expert guidance to audit your current efforts and build a high-ROI marketing playbook.', href: '/services/marketing-consultation' },
    ],
  },
  {
    id: 'automation', label: 'Automation', headline: 'Streamlined Operations', sub: 'Automate repetitive tasks, nurture leads, and scale your operations effortlessly.',
    image: '/images/services/automation_banner.png',
    services: [
      { name: 'Marketing Automation Setup', desc: 'Streamline your marketing efforts with intelligent triggers, workflows, and sequences.', href: '/services/marketing-automation' },
      { name: 'CRM Setup', desc: 'Implement and customize customer relationship management tools to track and close more deals.', href: '/services/crm-setup' },
      { name: 'Lead Generation System', desc: 'Automated funnels designed to capture, qualify, and route high-value leads to your team.', href: '/services/lead-generation' },
    ],
  },
];

// ── Single service card ───────────────────────────────────────────────────────
function ServiceCard({ s, i }: { s: any; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
      className="group flex flex-col h-full bg-(--bg-card) border border-black/5 dark:border-white/5 rounded-lg shadow-sm overflow-hidden transition-all duration-300  dark:hover:border-white/10"
    >
      <div className="p-5 sm:p-7 flex flex-col flex-1 gap-4">
        {/* Header: Title */}
        <h3 className="font-display font-bold text-(--text-primary) text-[18px] leading-snug">
          {s.name}
        </h3>

        {/* Description — conditionally visible */}
        {s.desc && (
          <p className="font-body text-[15px] text-(--text-secondary) leading-relaxed flex-1">
            {s.desc}
          </p>
        )}

        {/* Specs: Price & Turnaround */}
        {s.price && s.turnaround && (
          <div className="flex items-center gap-3 pt-3 border-t border-(--border-default) mt-2 mt-auto">
            <span className="font-display font-semibold text-[13px] text-(--text-primary)">
              {s.price}
            </span>
            <span className="w-1 h-1 rounded-full bg-(--text-muted) opacity-50" />
            <span className="font-body text-[13px] text-(--text-secondary)">
              {s.turnaround}
            </span>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="bg-(--bg-section) px-5 sm:px-7 py-4 border-t border-(--border-default) mt-auto">
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
      <div className="py-12 bg-(--bg-page) relative z-10 w-full">
        <div className="flex flex-col gap-28">
          {departments.map((dept) => (
            <section
              key={dept.id}
              id={dept.id}
              ref={(el) => { sectionRefs.current[dept.id] = el; }}
              className="flex flex-col gap-10 sm:gap-14"
            >
              {/* Department Header Banner - FULL WIDTH */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE }}
                className="relative overflow-hidden flex flex-col justify-center min-h-[260px] sm:min-h-[300px] w-full"
              >
                {/* Background Image & Gradient */}
                <div className="absolute inset-0 z-0 bg-[#0A0A1F]">
                  <Image 
                    src={dept.image} 
                    alt={dept.label}
                    fill
                    className="object-cover opacity-50 mix-blend-luminosity grayscale-20"
                  />
                  {/* Dark blue overlay gradient (Footer color) */}
                  <div className="absolute inset-0 bg-linear-to-r from-[#0A0A1F] via-[#0A0A1F]/80 to-transparent" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0A1F] to-transparent/20 md:hidden" />
                  {/* Electric blue glow (Hero color) */}
                  <div className="absolute top-0 right-0 w-full md:w-[600px] h-full bg-linear-to-l from-electric/40 to-transparent mix-blend-screen opacity-80" />
                </div>

                {/* Content - Constrained width */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10">
                  <div className="flex flex-col gap-3 max-w-2xl">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-8 h-[2px] bg-cyan-400" />
                      <span className="font-display text-[11px] font-semibold tracking-[0.16em] uppercase text-cyan-400">
                        {dept.label}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] shadow-sm tracking-tight text-balance">
                      {dept.headline}
                    </h2>
                    <p className="font-body text-white/80 text-[16px] sm:text-[18px] leading-[1.6] max-w-xl mt-2">
                      {dept.sub}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Cards Grid - Constrained width, tighter on mobile */}
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {dept.services.map((s, i) => (
                    <ServiceCard key={s.name} s={s} i={i} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <FinalCTASection />
    </main>
  );
}