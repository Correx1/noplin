'use client';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface ServiceInfoProps {
  about: string;
  whatItIncludes: string[];
  whoItsFor: string;
}

export default function ServiceInfo({ about, whatItIncludes, whoItsFor }: ServiceInfoProps) {
  return (
    <section className="py-20 bg-(--bg-page) border-t border-[var(--border-default)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-20">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="text-4xl font-bold font-semibold text-(--text-primary) mb-6 tracking-tight">About this Service</h2>
            <p className="text-lg text-(--text-secondary) font-(--font-body) leading-relaxed">{about}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold font-semibold text-(--text-primary) mb-4 tracking-tight">Who It&apos;s For</h3>
            <p className="text-lg text-(--text-secondary) font-(--font-body) leading-relaxed">{whoItsFor}</p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-semibold text-(--text-primary) mb-8 tracking-tight">What It Includes</h2>
          <ul className="flex flex-col gap-4 text-lg text-(--text-secondary) font-(--font-body)">
            {whatItIncludes.map((item) => (
              <li key={item} className="flex gap-4 items-start">
                <svg className="mt-[5px] h-4 w-4 text-electric shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}