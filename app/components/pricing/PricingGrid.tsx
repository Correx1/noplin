'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { pricingData, Service } from './pricing-data';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function PricingGrid() {
  const [activeService, setActiveService] = useState<Service>(
    pricingData[0].services[0]
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  /* Tap outside to close */
  useEffect(() => {
    if (!mobileOpen) return;

    const handler = (e: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [mobileOpen]);

  return (
    <section className="bg-(--bg-page) w-full max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-24 border-t border-[var(--border-default)]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mt-8">

        {/* Desktop Sidebar */}
        <aside className="w-full lg:w-[260px] shrink-0 sticky top-[100px] hidden md:block">
          <nav className="flex flex-col gap-8">
            {pricingData.map((dept) => (
              <div key={dept.dept} className="flex flex-col gap-3">
                <h4 className="font-display font-bold text-[13px] uppercase tracking-wider text-(--text-primary)">
                  {dept.dept}
                </h4>
                <ul className="flex flex-col gap-0.5">
                  {dept.services.map((svc) => (
                    <li key={svc.name}>
                      <button
                        onClick={() => setActiveService(svc)}
                        className={`w-full text-left py-1.5 px-3 -ml-3 rounded-md text-[14px] transition-colors ${
                          activeService.name === svc.name
                            ? 'bg-(--bg-card) text-electric font-medium'
                            : 'text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-card)'
                        }`}
                      >
                        {svc.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* ================= MOBILE SERVICE PICKER ================= */}
        <div className="w-full md:hidden sticky top-[72px] z-40 bg-(--bg-page)/95 backdrop-blur border-b border-[var(--border-default)] px-4 sm:px-6 py-3 mb-8">
          <div className="relative overflow-visible" ref={dropdownRef}>

            {/* Trigger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="w-full flex items-center justify-between rounded-xl border border-[var(--border-default)] bg-white px-4 py-3 shadow-sm"
            >
              <span className="font-display font-semibold text-[14px] text-(--text-primary) truncate">
                {activeService.name}
              </span>
              <svg
                className={`w-4 h-4 text-(--text-secondary) transition-transform ${
                  mobileOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Card */}
            {mobileOpen && (
              <div className="absolute left-0 right-0 mt-3 bg-white rounded-2xl border border-[var(--border-card)] shadow-xl">
                <div
                  className="py-3 overflow-y-auto overscroll-contain"
                  style={{
                    maxHeight: '60vh',
                    WebkitOverflowScrolling: 'touch',
                  }}
                >
                  {pricingData.map((dept) => (
                    <div key={dept.dept} className="px-4 py-2">
                      <p className="text-[11px] font-display font-bold uppercase tracking-wider text-(--text-muted) mb-2">
                        {dept.dept}
                      </p>

                      <div className="flex flex-col gap-1">
                        {dept.services.map((svc) => {
                          const active = svc.name === activeService.name;

                          return (
                            <button
                              key={svc.name}
                              onClick={() => {
                                setActiveService(svc);
                                setMobileOpen(false);
                              }}
                              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] transition-colors ${
                                active
                                  ? 'bg-electric/5 text-electric font-semibold'
                                  : 'hover:bg-(--bg-section) text-(--text-primary)'
                              }`}
                            >
                              {/* Dot indicator */}
                              <span
                                className={`w-2.5 h-2.5 rounded-full ${
                                  active
                                    ? 'bg-electric'
                                    : 'bg-[var(--border-default)]'
                                }`}
                              />
                              <span className="truncate">{svc.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* ================= END MOBILE PICKER ================= */}

        {/* Right Content Area */}
        <div className="flex-1 w-full max-w-[850px]">
          <motion.div
            key={activeService.name}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="font-display font-bold text-[36px] sm:text-[40px] text-(--text-primary) tracking-tight">
                {activeService.name}
              </h2>
              <p className="font-body text-[16px] text-(--text-secondary) mt-2">
                Optimize your workflow and select the tier that meets your needs.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="bg-(--bg-card) border border-[var(--border-card)] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              {activeService.tiers.map((t, i) => (
                <div
                  key={t.label}
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 p-5 sm:p-6 md:p-8 hover:bg-(--bg-section) transition-colors ${
                    i !== activeService.tiers.length - 1
                      ? 'border-b border-[var(--border-card)]'
                      : ''
                  }`}
                >
                  <div className="flex-1 md:pr-4">
                    <h3 className="font-display font-bold text-[20px]">
                      {t.label}
                    </h3>
                    <p className="text-[15px] text-(--text-secondary) mt-2">
                      {t.bestFor}
                    </p>

                    <ul className="mt-6 flex flex-col gap-3.5">
                      {t.includes.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="w-[18px] h-[18px] mt-0.5 bg-electric/10 text-electric rounded-full flex items-center justify-center">
                            ✓
                          </span>
                          <span className="text-[15px]">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="min-w-[240px] md:border-l border-[var(--border-card)] md:pl-10 pt-6 md:pt-0">
                    <p className="font-display font-bold text-[28px]">
                      {t.price}
                    </p>
                    <p className="text-[14px] text-(--text-secondary) mt-1">
                      Turnaround: {t.turnaround}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex w-full justify-center rounded-lg px-6 py-3 font-bold bg-electric text-white hover:bg-electric/90"
                    >
                      Start now →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}