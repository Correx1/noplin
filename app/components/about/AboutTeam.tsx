'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

const ceo = {
  name: 'Godwin Chibuike',
  role: 'CEO & Lead Strategist',
  bio: 'Leads brand identity, pitch decks, and visual strategy while driving the overall creative vision and maintaining design excellence across all client engagements.',
  image: '/team/ceo.png',
};

const team = [
  { name: 'Gilbert', role: 'Backend Developer', image: '/team/Rex.png' },
  { name: 'Funke', role: 'Content & SEO Specialist', image: '/team/Rex.png' },
  { name: 'Benedict', role: 'Marketing Strategist', image: '/team/Rex.png' },
    { name: 'Chukwu Raphael', role: 'Frontend Developer', image: '/team/Rex.png' },
  { name: 'Jessica', role: 'Client Success Manager', image: '/team/Rex.png' },
    { name: 'Malachy', role: 'Product Designer', image: '/team/Rex.png' },
  { name: 'Vera', role: 'Client Success & Outreach', image: '/team/Rex.png' },
  { name: 'Sophia', role: 'UX Researcher', image: '/team/Rex.png' },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function AboutTeam() {
  return (
    <section className="relative overflow-hidden bg-(--bg-section-alt) py-28 sm:py-36">

      {/* ── Decorative background grid ── */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-px w-2/3 bg-linear-to-r from-transparent via-cyan/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ════════════════ CEO FEATURE ════════════════ */}
        <div className="mb-32">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-12 flex items-center gap-4"
          >
            <span className="h-px flex-1 max-w-[60px] bg-cyan-500/50" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-400">
              Leadership
            </span>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Photo — reduced size, centered on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative mx-auto w-72 sm:w-80 lg:w-88"
            >
              {/* Corner accents */}
              <span className="absolute -left-3 -top-3 h-12 w-12 rounded-tl-2xl border-l-2 border-t-2 border-cyan-500" />
              <span className="absolute -bottom-3 -right-3 h-12 w-12 rounded-br-2xl border-b-2 border-r-2 border-cyan-500" />

              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl">
                <Image
                  src={ceo.image}
                  alt={ceo.name}
                  fill
                  className="object-cover grayscale"
                />
                {/* Tinted overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/70 via-zinc-900/10 to-transparent" />
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.12 }}
              className="flex flex-col gap-7 pb-6"
            >
              <h2 className="font-semibold text-5xl font-bold leading-[1.1] text-(--text-primary) sm:text-6xl">
                Meet the<br />
                <span className="text-cyan">Visionary</span>
              </h2>

              <div>
                <p className="font-semibold text-2xl font-bold text-(--text-primary)">{ceo.name}</p>
                <p className="mt-1 font-semibold text-[11px] font-semibold uppercase tracking-widest text-cyan">
                  {ceo.role}
                </p>
              </div>

              <p className="font-(--font-body) text-[16px] leading-[1.6] text-(--text-secondary) max-w-md">
                {ceo.bio}
              </p>

              {/* Social links */}
              <div className="flex gap-3 pt-2">
                {[
                  { Icon: MessageCircle, label: 'WhatsApp' },
                  { Icon: Linkedin, label: 'LinkedIn' },
                  { Icon: Mail, label: 'Email' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-500"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ════════════════ TEAM HEADER ════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-14 flex flex-col items-center text-center gap-4"
        >
          <div>
            <p className="mb-3 font-semibold text-[11px] font-semibold uppercase tracking-widest text-cyan">
              Our Experts
            </p>
            <h2 className="font-semibold text-4xl font-bold text-(--text-primary) sm:text-5xl">
              The People Behind<br className="hidden sm:block" /> the Results
            </h2>
          </div>
          <p className="max-w-md font-(--font-body) text-[15px] text-(--text-secondary)">
            A cross-functional team built to deliver end-to-end excellence.
          </p>
        </motion.div>

        {/* ════════════════ TEAM GRID ════════════════ */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 transition-all duration-500 hover:border-zinc-400"
            >
              {/* Image */}
              <div className="relative aspect-4/5 overflow-hidden rounded-t-[15px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A101D] via-[#0A101D]/40 to-transparent" />
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 w-full px-4 py-4 rounded-b-2xl">
                <p className="font-semibold font-semibold text-white text-[15px] leading-tight">{member.name}</p>
                <p className="mt-1 font-semibold text-[10px] uppercase tracking-widest text-[#94A3B8]">
                  {member.role}
                </p>
              </div>

              {/* Hover arrow badge */}
              <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-cyan opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                <ArrowUpRight size={13} className="text-navy" />
              </div>

              {/* Top cyan line reveal */}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-cyan transition-all duration-500 group-hover:w-full z-10" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}