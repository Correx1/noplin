'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { pricingData, Service } from './pricing-data';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function PricingGrid() {
  const [activeService, setActiveService] = useState<Service>(pricingData[0].services[0]);

  return (
    <section className="bg-[var(--bg-page)] w-full max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-24 border-t border-[var(--border-default)]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mt-8">
        
        {/* Left Sidebar Navigation */}
        <aside className="w-full lg:w-[260px] shrink-0 sticky top-[100px] hidden md:block">
          <nav className="flex flex-col gap-8">
            {pricingData.map((dept) => (
              <div key={dept.dept} className="flex flex-col gap-3">
                <h4 className="font-display font-bold text-[13px] text-[var(--text-primary)] uppercase tracking-wider">
                  {dept.dept}
                </h4>
                <ul className="flex flex-col gap-0.5">
                  {dept.services.map((svc) => (
                    <li key={svc.name}>
                      <button
                        onClick={() => setActiveService(svc)}
                        className={`text-left w-full py-1.5 px-3 -ml-3 rounded-md font-body text-[14px] transition-colors ${
                          activeService.name === svc.name
                            ? 'bg-[var(--bg-card)] text-electric font-medium'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
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

        {/* Mobile dropdown navigation (Full width sticky under navbar) */}
        <div className="w-full block md:hidden mb-8 sticky top-[72px] z-40 bg-[var(--bg-page)]/95 backdrop-blur-md border-b border-[var(--border-default)] shadow-sm px-4 sm:px-6 py-4">
          <div className="relative w-full">
            <select 
              className="appearance-none w-full bg-[var(--bg-card)] border border-[var(--border-default)] text-[var(--text-primary)] rounded-md pl-4 pr-10 py-2.5 font-[var(--font-body)] text-[14px] leading-tight focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:ring-offset-1 focus:ring-offset-[var(--bg-page)] transition-all cursor-pointer shadow-sm hover:bg-[var(--bg-section)]"
              value={activeService.name}
              onChange={(e) => {
                const selectedSvc = pricingData.flatMap(d => d.services).find(s => s.name === e.target.value);
                if (selectedSvc) setActiveService(selectedSvc);
              }}
            >
              {pricingData.map((dept) => (
                <optgroup key={dept.dept} label={dept.dept} className="font-[var(--font-display)] font-bold text-[var(--text-muted)] text-[12px] uppercase">
                  {dept.services.map((svc) => (
                    <option key={svc.name} value={svc.name} className="font-[var(--font-body)] text-[var(--text-primary)] font-normal normal-case text-[14px]">
                      {svc.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[var(--text-secondary)] opacity-70">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </div>
        </div>

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
              <h2 className="font-display font-bold text-[36px] sm:text-[40px] text-[var(--text-primary)] tracking-tight">
                {activeService.name}
              </h2>
              <p className="font-body text-[16px] text-[var(--text-secondary)] mt-2">
                Optimize your workflow and select the tier that meets your needs. 
              </p>
            </div>

            {/* Unified Pricing Container */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              {activeService.tiers.map((t, i) => (
                <div 
                  key={t.label} 
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 p-5 sm:p-6 md:p-8 hover:bg-[var(--bg-section)] transition-colors ${
                    i !== activeService.tiers.length - 1 ? 'border-b border-[var(--border-card)]' : ''
                  }`}
                >
                  
                  {/* Left side: Details & Features */}
                  <div className="flex-1 md:pr-4">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-bold text-[20px] text-[var(--text-primary)]">
                        {t.label}
                      </h3>
                      {i === 1 && (
                        <span className="bg-electric/10 text-electric font-body font-semibold text-[11px] tracking-widest uppercase px-3 py-1 rounded-full">
                          Standard
                        </span>
                      )}
                    </div>
                    <p className="font-body text-[15px] text-[var(--text-secondary)] mt-2 leading-[1.6]">
                      {t.bestFor}
                    </p>
                    
                    <ul className="mt-6 flex flex-col gap-3.5">
                      {t.includes.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <div className="relative flex items-center justify-center shrink-0 w-[18px] h-[18px] mt-0.5 bg-electric/10 text-electric rounded-full">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </div>
                          <span className="font-body text-[15px] text-[var(--text-primary)] leading-tight">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right side: Price & CTA */}
                  <div className="flex flex-col items-start md:items-end justify-start min-w-[240px] shrink-0 gap-4 md:border-l border-[var(--border-card)] md:pl-10 pt-6 md:pt-0 border-t md:border-t-0 mt-2 md:mt-0">
                    <div className="text-left md:text-right w-full">
                      <p className="font-display font-bold text-[28px] md:text-[32px] text-[var(--text-primary)] whitespace-nowrap">
                        {t.price}
                      </p>
                      <p className="font-body text-[14px] text-[var(--text-secondary)] mt-1">
                        Turnaround: {t.turnaround}
                      </p>
                    </div>
                    
                    <Link 
                      href="/contact" 
                      className={`mt-4 w-full px-6 py-3 text-[15px] font-bold transition-all duration-200 rounded-lg flex items-center justify-center gap-2 ${
                        i === 1 
                          ? 'bg-electric text-white hover:bg-electric/90 shadow-sm shadow-electric/20' 
                          : 'bg-[var(--bg-page)] border border-[var(--border-card)] text-[var(--text-primary)] hover:bg-[var(--border-default)]'
                      }`}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Start now <span className="font-normal text-[16px] leading-none mb-0.5">›</span>
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
