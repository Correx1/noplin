'use client';

import { motion } from 'framer-motion';
import { EASE } from './AboutShared';

const values = [
  { title: 'Client First', body: 'Your results are our results. We never separate the two.', number: '01' },
  { title: 'No Excuses', body: "We deliver. If something isn't right, we fix it — no arguments.", number: '02' },
  { title: 'Grow Daily', body: 'Every team member is committed to being better tomorrow than today.', number: '03' },
  { title: 'Have Fun', body: 'We love what we do. That energy flows into everything we create.', number: '04' },
];

export default function AboutValues() {
  return (
    <section className="relative bg-stone-50 py-28 sm:py-36 overflow-hidden">

      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-20 flex flex-col gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-cyan-500" />
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-500">Our Culture</p>
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-zinc-900 leading-[1.08] max-w-lg">
            Values We<br />
            <span className="text-cyan-500">Live By</span>
          </h2>
        </motion.div>

        {/* ── Stacked rows ── */}
        <div className="divide-y divide-zinc-200">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
              className="group grid grid-cols-12 items-center gap-6 py-10 cursor-default"
            >
              {/* Number */}
              <div className="col-span-2 sm:col-span-1">
                <span className="font-mono text-xs font-semibold text-zinc-300 group-hover:text-cyan-500 transition-colors duration-300">
                  {v.number}
                </span>
              </div>

              {/* Title */}
              <div className="col-span-10 sm:col-span-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 group-hover:text-cyan-500 transition-colors duration-300 leading-tight">
                  {v.title}
                </h3>
              </div>

              {/* Divider line — visible on sm+ */}
              <div className="hidden sm:block sm:col-span-1">
                <span className="block h-px w-full bg-zinc-200 group-hover:bg-cyan-500/40 transition-colors duration-500" />
              </div>

              {/* Body */}
              <div className="col-span-12 sm:col-span-6 pl-8 sm:pl-0">
                <p className="font-sans text-base text-zinc-500 leading-relaxed max-w-md group-hover:text-zinc-700 transition-colors duration-300">
                  {v.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom accent line ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          className="mt-2 h-px w-full origin-left bg-gradient-to-r from-cyan-500/60 via-cyan-300/30 to-transparent"
        />

      </div>
    </section>
  );
}