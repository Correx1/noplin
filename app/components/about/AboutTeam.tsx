'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

const ceo = {
  name: 'Malachy',
  role: 'Creative Director & Head of Design',
  bio: 'Leads brand identity, pitch decks, and visual strategy while driving the overall creative vision and maintaining design excellence across all client engagements.',
  image: '/portfolio/web2.png',
};

const team = [
  { name: 'Gilbert', role: 'Head of Web & Development', image: '/portfolio/web2.png' },
  { name: 'Funke', role: 'Head of Content & SEO', image: '/portfolio/web2.png' },
  { name: 'Benedict', role: 'Head of Marketing', image: '/portfolio/web2.png' },
  { name: 'Jessica', role: 'Client Success Manager', image: '/portfolio/web2.png' },
  { name: 'Vera', role: 'Client Success & Outreach', image: '/portfolio/web2.png' },
  { name: 'Ethan', role: 'Product Manager', image: '/portfolio/web2.png' },
  { name: 'Sophia', role: 'UX Researcher', image: '/portfolio/web2.png' },
  { name: 'Leo', role: 'Visual Designer', image: '/portfolio/web2.png' },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function AboutTeam() {
  return (
    <section className="relative overflow-hidden bg-stone-50 py-28 sm:py-36">

      {/* ── Decorative background grid ── */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

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
              className="relative mx-auto w-64 sm:w-72 lg:mx-0 lg:w-80"
            >
              {/* Corner accents */}
              <span className="absolute -left-3 -top-3 h-12 w-12 rounded-tl-2xl border-l-2 border-t-2 border-cyan-500" />
              <span className="absolute -bottom-3 -right-3 h-12 w-12 rounded-br-2xl border-b-2 border-r-2 border-cyan-500" />

              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src={ceo.image}
                  alt={ceo.name}
                  fill
                  className="object-cover grayscale"
                />
                {/* Tinted overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/10 to-transparent" />
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
              <h2 className="font-serif text-5xl font-bold leading-[1.1] text-zinc-900 sm:text-6xl">
                Meet the<br />
                <span className="text-cyan-500">Visionary</span>
              </h2>

              <div>
                <p className="text-2xl font-semibold text-zinc-900">{ceo.name}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  {ceo.role}
                </p>
              </div>

              <p className="text-base leading-relaxed text-zinc-600 max-w-md">
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
          className="mb-14 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-400">
              Our Experts
            </p>
            <h2 className="font-serif text-4xl font-bold text-zinc-900 sm:text-5xl">
              The People Behind<br className="hidden sm:block" /> the Results
            </h2>
          </div>
          <p className="max-w-xs text-sm text-zinc-500 sm:text-right">
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
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 w-full px-4 py-4">
                <p className="font-semibold text-white text-sm">{member.name}</p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400 leading-tight">
                  {member.role}
                </p>
              </div>

              {/* Hover arrow badge */}
              <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                <ArrowUpRight size={13} className="text-zinc-950" />
              </div>

              {/* Top cyan line reveal */}
              <span className="absolute left-0 top-0 h-0.5 w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}