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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-20">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About this Service</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{about}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who It&apos;s For</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{whoItsFor}</p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">What It Includes</h2>
          <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
            {whatItIncludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}