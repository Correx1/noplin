'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const projects = [
  {
    name: 'Web Design',
    tag: 'Web Design',
    href: '/work',
    image: '/portfolio/site.png',
  },
  {
    name: 'Product Branding',
    tag: 'Brand Identity',
    href: '/work',
    image: '/portfolio/branding.png',
  },
  {
    name: 'Web App Development',
    tag: 'Web App Dev',
    href: '/work',
    image: '/portfolio/work.mp4',
  },
];

export default function PortfolioTeaser() {
  return (
    <section className="bg-[var(--bg-section)] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center text-center gap-4 mb-20"
        >
          <span className="font-[var(--font-display)] font-semibold text-[11px] tracking-[0.14em] uppercase text-cyan-500">
            Our Work
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--text-primary)] max-w-2xl">
            Work Built to Perform
          </h2>
          <p className="font-[var(--font-body)] text-[var(--text-secondary)] max-w-md">
            A selection of projects combining strategy, design, and execution.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-14">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative overflow-hidden rounded-lg bg-[var(--bg-card)] shadow-sm"
            >
              <div className={`relative z-10 flex min-h-[420px] flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} max-md:flex-col`}>
                {/* Image — always first on mobile */}
                <div className="w-[56%] max-md:w-full">
                  <div className="w-full p-4">
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-md shadow-md">
                      {p.image.endsWith('.mp4') || p.image.endsWith('.webm') ? (
                        <video
                          src={p.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={p.image}
                          alt={`${p.name} preview`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-[44%] max-md:w-full flex flex-col justify-center gap-5 px-12 py-14 max-md:px-6 max-md:pt-2 max-md:pb-10">
                  <span className="font-[var(--font-display)] font-semibold text-[11px] tracking-[0.14em] uppercase text-cyan-500">
                    {p.tag}
                  </span>

                  <h3 className="font-[var(--font-display)] font-bold text-[clamp(1.5rem,2.6vw,2.2rem)] text-[var(--text-primary)]">
                    {p.name}
                  </h3>

                  <p className="font-[var(--font-body)] text-base text-[var(--text-secondary)] leading-relaxed">
                    A featured project demonstrating our ability to combine clean design,
                    solid engineering, and measurable business outcomes.
                  </p>

                  <Link
                    href={p.href}
                    className="group inline-flex items-center gap-2 w-fit font-[var(--font-display)] font-semibold text-sm text-cyan-500"
                  >
                    View project
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold font-[var(--font-display)] btn-ghost"
          >
            More works <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}