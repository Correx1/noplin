import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Process | How Noplin Digital Works',
  description: 'A simple, transparent 7-step process designed to minimize stress and maximize results. From inquiry to delivery — here is exactly how we work.',
};

const steps = [
  {
    number: '01',
    title: 'Discovery & Inquiry',
    description: 'You tell us what you need via the contact form or DM. We respond within 2 hours.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Brief & Consultation',
    description: 'We schedule a quick call or chat to understand your goals, timeline, and budget.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Proposal & Quote',
    description: 'We send a clear, itemized proposal with the recommended service tier and pricing.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Agreement & Deposit',
    description: 'You approve the proposal, sign the contract, and pay the 50% kickoff deposit.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z"/>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Kickoff & Build',
    description: 'Your dedicated team lead gets to work. You receive progress updates at key milestones.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Review & Revisions',
    description: 'You review the deliverable and request up to the agreed revision rounds.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Delivery & Growth',
    description: 'Final delivery. Balance payment. We offer post-project support and discuss ongoing retainers.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

export default function ProcessPage() {
  return (
    <main>

      {/* Hero */}
      <section className="relative overflow-hidden linear-mesh force-dark" style={{ paddingTop: '120px', paddingBottom: '72px' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '70vw', height: '50vh', background: 'radial-gradient(ellipse, rgba(26,86,219,0.12) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-5">
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#06B6D4' }}>How We Work</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,5vw,3.25rem)', color: 'var(--text-primary)', lineHeight: 1.1 }}>
            How We Work
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '540px' }}>
            A simple, transparent process designed to minimize stress and maximize results.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex flex-col gap-0 relative">

          {/* Vertical line */}
          <div aria-hidden style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(26,86,219,0.3) 5%, rgba(26,86,219,0.3) 95%, transparent)', transform: 'translateX(-50%)' }} className="hidden lg:block" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={step.number} className="flex items-center gap-0 lg:gap-0 relative" style={{ marginBottom: i < steps.length - 1 ? '48px' : 0 }}>

                {/* Desktop layout — alternating */}
                <div className="hidden lg:grid w-full" style={{ gridTemplateColumns: '1fr 80px 1fr', alignItems: 'center' }}>

                  {/* Left content */}
                  <div style={{ padding: '0 40px 0 0', textAlign: isLeft ? 'right' : 'left', opacity: isLeft ? 1 : 0, pointerEvents: isLeft ? 'auto' : 'none' }}>
                    {isLeft && (
                      <div className="inline-flex flex-col gap-3 p-7 rounded-2xl text-left" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', maxWidth: '380px', position: 'relative', boxShadow: 'var(--shadow-card-theme)' }}>
                        <div className="flex items-center gap-3">
                          <div style={{ color: '#1A56DB' }}>{step.icon}</div>
                          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', color: '#06B6D4' }}>STEP {step.number}</span>
                        </div>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--text-primary)' }}>{step.title}</h2>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--bg-page)', border: '2px solid #1A56DB', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 16px rgba(26,86,219,0.4)', zIndex: 1, position: 'relative' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', color: '#1A56DB' }}>{step.number}</span>
                    </div>
                  </div>

                  {/* Right content */}
                  <div style={{ padding: '0 0 0 40px', opacity: isLeft ? 0 : 1, pointerEvents: isLeft ? 'none' : 'auto' }}>
                    {!isLeft && (
                      <div className="inline-flex flex-col gap-3 p-7 rounded-2xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', maxWidth: '380px', boxShadow: 'var(--shadow-card-theme)' }}>
                        <div className="flex items-center gap-3">
                          <div style={{ color: '#1A56DB' }}>{step.icon}</div>
                          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', color: '#06B6D4' }}>STEP {step.number}</span>
                        </div>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--text-primary)' }}>{step.title}</h2>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile layout — single column */}
                <div className="lg:hidden flex gap-4 w-full">
                  <div className="flex flex-col items-center">
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--bg-page)', border: '2px solid #1A56DB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 12px rgba(26,86,219,0.4)' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', color: '#1A56DB' }}>{step.number}</span>
                    </div>
                    {i < steps.length - 1 && <div style={{ flex: 1, width: '1px', background: 'rgba(26,86,219,0.25)', marginTop: '8px', minHeight: '40px' }} />}
                  </div>
                  <div className="flex flex-col gap-2 pb-6 flex-1">
                    <div className="flex items-center gap-2" style={{ color: '#1A56DB' }}>{step.icon}</div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '17px', color: 'var(--text-primary)' }}>{step.title}</h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center text-center gap-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-accent)', borderRadius: '24px', padding: '48px 32px', boxShadow: 'var(--shadow-card-theme)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.25rem,3vw,1.75rem)', color: 'var(--text-primary)' }}>
            Ready to start? It takes 2 minutes to reach out.
          </h2>
          <Suspense>
            <Link href="/contact" className="btn-electric inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white"
              style={{ fontFamily: 'var(--font-display)' }}>
              Start Your Project →
            </Link>
          </Suspense>
        </div>
      </section>
    </main>
  );
}
