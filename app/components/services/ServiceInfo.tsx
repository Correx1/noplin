'use client';

import { motion } from 'framer-motion';
import { FaMousePointer } from 'react-icons/fa';
import {SendHorizontal} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface ServiceInfoProps {
  about: string;
  whatItIncludes: string[];
  whoItsFor: string;
}

export default function ServiceInfo({
  about,
  whatItIncludes,
  whoItsFor,
}: ServiceInfoProps) {
  return (
    <section className="py-24 bg-(--bg-page) border-t border-[var(--border-default)">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-20">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-16">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="block mb-3 text-[11px] tracking-[0.14em] uppercase text-cyan-500 font-semibold">
              Overview
            </span>

            <h2 className="text-[clamp(1.8rem,3.2vw,2.4rem) font-semibold tracking-tight text-(--text-primary) mb-5">
              About this Service
            </h2>

            <p className="text-[17px] leading-relaxed text-(--text-secondary) font-(--font-body)">
              {about}
            </p>
          </motion.div>

          {/* Who It's For */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <span className="block mb-3 text-[11px] tracking-[0.14em] uppercase text-cyan-500 font-semibold">
              Fit
            </span>

            <h3 className="text-[clamp(1.4rem,2.6vw,1.8rem) font-semibold tracking-tight text-(--text-primary) mb-4">
              Who It’s For
            </h3>

            <p className="text-[17px] leading-relaxed text-(--text-secondary) font-(--font-body)">
              {whoItsFor}
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          className="relative rounded-xl border border-(--border-card) bg-(--bg-card) p-6 shadow-sm"
        >
          <span className="block mb-3 text-[11px] tracking-[0.14em] uppercase text-cyan-500 font-semibold">
            Deliverables
          </span>

          <h2 className="text-[clamp(1.8rem,3vw,2.3rem) font-semibold tracking-tight text-(--text-primary) mb-8">
            What It Includes
          </h2>

          <ul className="flex flex-col gap-5 text-[15px] text-(--text-secondary) font-(--font-body)">
            {whatItIncludes.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-1 text-cyan-500 shrink-0">
                  <SendHorizontal size={14} />
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}