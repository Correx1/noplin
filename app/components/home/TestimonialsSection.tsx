'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const testimonials = [
  {
    quote:
      'Noplin delivered our brand identity in 4 days. The quality shocked us — we looked like a Fortune 500 company overnight.',
    name: 'Adaeze O.',
    role: 'Founder, StyleCo Lagos',
  },
  {
    quote:
      'Our website conversions tripled in the first month. Best investment we made for our business.',
    name: 'Emeka T.',
    role: 'CEO, TechBridge Solutions',
  },
  {
    quote:
      'Professional, fast, and honest. Noplin is the only agency I recommend to my network.',
    name: 'Zara M.',
    role: 'Marketing Director, Apex Ventures',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-[14px] w-[14px] fill-amber-500"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[var(--bg-section-alt)] dark py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="flex flex-col items-center text-center gap-3 mb-14"
        >
          <span className="font-[var(--font-display)] font-semibold text-[11px] tracking-[0.14em] uppercase text-cyan-500">
            Testimonials
          </span>

          <h2 className="font-[var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.625rem)] text-[var(--text-primary)]">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.12 }}
              className="flex flex-col gap-5 p-7 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl shadow-[var(--shadow-card-theme)]"
            >
              <Stars />

              <p className="flex-1 font-[var(--font-body)] text-[15px] leading-[1.7] italic text-[var(--text-primary)] opacity-[0.88]">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <p className="font-[var(--font-display)] font-semibold text-[15px] text-[var(--text-primary)]">
                  {t.name}
                </p>
                <p className="font-[var(--font-body)] text-[13px] text-[var(--text-secondary)]">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}