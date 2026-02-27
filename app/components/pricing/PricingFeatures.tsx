'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    title: 'Flexible structures',
    description: 'Bespoke project pricing, structured payment plans, and ongoing retainers tailored for your scale.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  },
  {
    title: 'Bundle discounts',
    description: 'Significant cost reductions when combining design, development, and marketing into unified projects.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    )
  },
  {
    title: 'Dedicated retainers',
    description: 'Consistent, priority access to our entire team of designers and developers at a predictable flat rate.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    title: 'Full transparency',
    description: 'Detailed roadmaps, timeline tracking, and clear deliverables so you know exactly what you are paying for.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
];

export default function PricingFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#0A101D] py-[100px] lg:py-[140px] [clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      {/* === BACKGROUND ART === */}
      <div className="pointer-events-none absolute inset-0">
        {/* Curved glowing paths */}
        <svg
          viewBox="0 0 1200 800"
          className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-10"
          fill="none"
        >
          <defs>
            <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M80 40 C 520 220, 700 580, 1120 760"
            stroke="url(#curveGrad)"
            strokeWidth="3"
            filter="url(#glow)"
          />

          <path
            d="M140 0 C 560 200, 740 560, 1080 800"
            stroke="url(#curveGrad)"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>

        {/* Bubble anchors */}
        <div className="absolute left-[16%] top-[18%] h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute left-[62%] top-[46%] h-36 w-36 rounded-full bg-blue-500/15 blur-[80px]" />
        <div className="absolute left-[42%] top-[78%] h-24 w-24 rounded-full bg-cyan-400/15 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Top Section: Custom Pricing Text & Floating Card */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between mb-24">
          
          {/* Left Text */}
          <div className="flex-1 max-w-[500px] w-full">
            {/* Optional tab look above the heading if desired, skip for cleaner look */}
            <h2 className="font-display font-bold text-[36px] sm:text-[48px] text-white tracking-tight leading-[1.1]">
              Custom solutions for enterprise scale
            </h2>
            <p className="font-body text-[16px] text-[#94A3B8] mt-6 leading-relaxed">
              Create tailored packages to help you expand into new markets, optimize performance, automate workflows, and scale your brand presence.
            </p>
            <Link 
              href="/contact" 
              className="mt-8 inline-flex bg-electric text-white px-6 py-3 rounded-full font-bold items-center gap-2 hover:bg-electric/90 transition-colors shadow-lg shadow-electric/20 font-display"
            >
              Contact sales <span className="font-normal text-[18px] leading-none mb-0.5">›</span>
            </Link>
          </div>

          {/* Right Card */}
          <div className="flex-1 w-full max-w-[540px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden"
            >
              <h3 className="font-display font-bold text-[22px] text-gray-900">
                Build your custom package
              </h3>
              <p className="font-body text-[15px] text-gray-600 mt-2">
                Work with our experts to design a solution that meets your exact needs:
              </p>

              <div className="grid grid-cols-2 gap-y-4 gap-x-4 mt-8">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded flex items-center justify-center bg-blue-100 text-blue-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  </span>
                  <span className="text-[14px] text-gray-800 font-medium font-body truncate">Design Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded flex items-center justify-center bg-green-100 text-green-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                  </span>
                  <span className="text-[14px] text-gray-800 font-medium font-body truncate">Web Platforms</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded flex items-center justify-center bg-yellow-100 text-yellow-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <span className="text-[14px] text-gray-800 font-medium font-body truncate">Marketing & SEO</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded flex items-center justify-center bg-purple-100 text-purple-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                  </span>
                  <span className="text-[14px] text-gray-800 font-medium font-body truncate">Custom APIs</span>
                </div>
              </div>

              <div className="h-px bg-gray-100 w-full my-8"></div>

              <h4 className="font-display font-bold text-[14.5px] text-gray-900 mb-4">
                Get the support you need
              </h4>
              
              <ul className="flex flex-col gap-3.5">
                <li className="flex items-start gap-3">
                  <div className="w-[18px] h-[18px] rounded-full bg-electric/10 text-electric flex items-center justify-center shrink-0 mt-px">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span className="text-[14px] text-electric font-medium font-body leading-tight">Dedicated account management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-[18px] h-[18px] rounded-full bg-electric/10 text-electric flex items-center justify-center shrink-0 mt-px">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span className="text-[14px] text-electric font-medium font-body leading-tight">Priority technical support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-[18px] h-[18px] rounded-full bg-electric/10 text-electric flex items-center justify-center shrink-0 mt-px">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span className="text-[14px] text-electric font-medium font-body leading-tight">Post-launch maintenance protocols</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom 4 Columns border-t added for separation per Stripe reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-16 border-t border-[#1E293B]">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-start"
            >
              {/* Icon */}
              <div className="text-electric mb-6 flex items-center justify-center p-3 rounded-xl bg-[var(--border-default)] w-14 h-14 relative">
                {/* Subtle linear behind icon */}
                <div className="absolute inset-0 bg-linear-to-br from-electric/20 to-transparent rounded-xl opacity-50" />
                <div className="relative z-10">{feature.icon}</div>
              </div>

              {/* Title & Description */}
              <div className="border-l-2 border-[#1E293B] pl-4">
                <h3 className="font-display font-bold text-[18px] text-white">
                  {feature.title}
                </h3>
                <p className="font-body text-[15px] text-[#94A3B8] mt-2 leading-[1.6]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
