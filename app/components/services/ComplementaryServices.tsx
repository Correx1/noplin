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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center md:text-left font-display"
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
              className="relative group flex flex-col justify-between p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
            >
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">{cs.name}</p>
                <p className="text-gray-500 text-sm">Boost your results with this complementary service.</p>
              </div>
              <div className="mt-4 flex items-center text-blue-500 font-semibold">
                <span className="mr-1">Explore</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
              <Link href={cs.url} className="absolute inset-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}