'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const services = [
  {
    dept: 'WEB & DEV',
    name: 'Conversion-First Web Design™',
    desc: 'Websites that rank, convert, and impress.',
    price: 'From ₦300,000',
    turnaround: '7–10 days',
    href: '/services/web-design',
  },
  {
    dept: 'DESIGN',
    name: 'A-Grade Brand Identity™',
    desc: 'Logos and brand kits built to last.',
    price: 'From ₦80,000',
    turnaround: '3–5 days',
    href: '/services/brand-identity',
  },
  {
    dept: 'MARKETING',
    name: 'Social Growth Engine™',
    desc: 'Full social media management that drives real followers and engagement.',
    price: 'From ₦80,000/mo',
    turnaround: 'Ongoing',
    href: '/services/social-media',
  },
  {
    dept: 'WEB & DEV',
    name: 'Custom Web App Development™',
    desc: 'Scalable web applications built on Laravel.',
    price: 'From ₦500,000',
    turnaround: '4–8 weeks',
    href: '/services/web-app-development',
  },
  {
    dept: 'MARKETING',
    name: 'Precision Ad Campaigns™',
    desc: 'Google & Meta ads managed by specialists.',
    price: 'From ₦50,000 setup',
    turnaround: 'Ongoing',
    href: '/services/paid-ads',
  },
  {
    dept: 'MARKETING',
    name: 'Digital Strategy Consulting™',
    desc: 'Full digital strategy for serious businesses.',
    price: 'From ₦1,000,000',
    turnaround: 'Project-based',
    href: '/services/strategy-consulting',
  },
];

function ServiceItem({ s, i }: { s: typeof services[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.45, ease: EASE, delay: i * 0.04 }}
      className="flex flex-col gap-4"
    >
      <span className="font-display text-[11px] tracking-[0.14em] font-semibold text-white/50">
        {s.dept}
      </span>

      <h3 className="font-display text-[22px] font-bold leading-tight text-white">
        {s.name}
      </h3>

      <p className="font-body text-[15px] text-white/70 max-w-[520px]">
        {s.desc}
      </p>

      <div className="flex items-center gap-4 mt-1">
        <span className="font-display font-semibold text-[14px] text-amber-400">
          {s.price}
        </span>
        <span className="font-body text-[13px] text-white/55">
          {s.turnaround}
        </span>
      </div>

      <Link
        href={s.href}
        className="font-display text-[14px] font-semibold text-white w-fit hover:underline"
      >
        Learn more →
      </Link>
    </motion.div>
  );
}

export default function FeaturedServicesSection() {
  return (
    <section
      className="
        relative overflow-hidden bg-navy py-[140px]
        [clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]
      "
    >
      {/* === BACKGROUND ART === */}
      <div className="pointer-events-none absolute inset-0">
        {/* Curved glowing paths */}
        <svg
          viewBox="0 0 1200 800"
          className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-10"
          fill="none"
        >
          <defs>
            <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M80 40 C 520 220, 700 580, 1120 760"
            stroke="url(#curveGrad)"
            strokeWidth="3"
            filter="url(#glow)"
          />

          <path
            d="M140 0 C 560 200, 740 560, 1080 800"
            stroke="url(#curveGrad)"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>

        {/* Bubble anchors */}
        <div className="absolute left-[16%] top-[18%] h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute left-[62%] top-[46%] h-36 w-36 rounded-full bg-blue-500/15 blur-[80px]" />
        <div className="absolute left-[42%] top-[78%] h-24 w-24 rounded-full bg-cyan-400/15 blur-2xl" />
      </div>

      {/* === CONTENT === */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* LEFT */}
        <div className="lg:col-span-4">
          <span className="font-display text-[11px] tracking-[0.16em] font-semibold text-cyan-400">
            OUR SERVICES
          </span>

          <h2 className="font-display font-extrabold text-white text-[clamp(2.4rem,4vw,3.2rem)] leading-[1.1] mt-4">
            Focused offerings.
            <br />
            Serious outcomes.
          </h2>

          <p className="font-body text-[18px] text-white/70 mt-5 max-w-[360px]">
            A tight set of services built for companies that care about execution,
            clarity, and return on spend.
          </p>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {services.map((s, i) => (
            <ServiceItem key={s.name} s={s} i={i} />
          ))}

          <div className="md:col-span-2">
            <Link
              href="/services"
              className="
                inline-flex items-center gap-2 px-8 py-3 rounded-full
                bg-white text-[#0D0D2B]
                font-display font-semibold text-[14px]
                hover:bg-white/90 transition
              "
            >
              View all services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}