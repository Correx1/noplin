'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Service {
  name: string;
  url: string;
}

interface Props {
  services: Service[];
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ComplementaryServices({ services }: Props) {
  return (
    <section className="py-20 bg-(--bg-page) border-t border-[var(--border-default)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-3xl md:text-4xl font-bold text-(--text-primary) mb-12 text-center md:text-left font-semibold tracking-tight"
          >
            Complete the Picture
          </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((cs, i) => (
            <motion.div
  key={cs.name}
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
  className="flex flex-col justify-between p-6 rounded-2xl bg-(--bg-card) shadow-md hover:shadow-[var(--shadow-card-theme)] border border-[var(--border-card)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
>
  <div>
    <p className="text-xl font-bold text-(--text-primary) font-semibold tracking-tight mb-2">{cs.name}</p>
    <p className="text-(--text-secondary) font-(--font-body) text-[15px] leading-relaxed">Boost your results with this complementary service.</p>
  </div>
  <Link
    href={cs.url}
    className="mt-6 inline-flex items-center text-electric hover:text-cyan transition-colors font-semibold font-semibold tracking-wide text-sm"
  >
    Explore <ArrowRight className="ml-1" size={16} />
  </Link>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}