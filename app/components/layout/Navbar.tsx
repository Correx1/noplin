'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

// ── Mega Menu Data ──────────────────────────────────────────
const megaMenu = [
  {
    heading: 'Design',
    color: '#1A56DB',
    services: [
      { label: 'Brand Identity™', href: '/services/brand-identity' },
      { label: 'Pitch Deck & Presentation™', href: '/services/pitch-deck' },
    ],
  },
  {
    heading: 'Web & Dev',
    color: '#1A56DB',
    services: [
      { label: 'Web Design™', href: '/services/web-design' },
      { label: 'Web App Dev™', href: '/services/web-app-dev' },
      { label: 'MVP Development™', href: '/services/mvp-development' },
      { label: 'E-Commerce Dev™', href: '/services/ecommerce' },
      { label: 'API Integration™', href: '/services/api-integration' },
    ],
  },
  {
    heading: 'Content',
    color: '#1A56DB',
    services: [
      { label: 'Authority Content™', href: '/services/authority-content' },
      { label: 'Conversion Copy™', href: '/services/conversion-copy' },
      { label: 'Email Marketing™', href: '/services/email-marketing' },
      { label: 'Video Content™', href: '/services/video-content' },
      { label: 'Corporate Comms™', href: '/services/corporate-comms' },
    ],
  },
  {
    heading: 'Marketing',
    color: '#1A56DB',
    services: [
      { label: 'Social Growth Engine™', href: '/services/social-growth' },
      { label: 'Precision Ad Campaigns™', href: '/services/ad-campaigns' },
      { label: 'Strategy Consulting™', href: '/services/strategy' },
    ],
  },
];

const allMobileServices = megaMenu.flatMap((cat) =>
  cat.services.map((s) => ({ ...s, category: cat.heading }))
);

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
];

// ── Component ───────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openMega = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
        style={{
          height: '72px',
          background: scrolled ? 'var(--bg-navbar)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-default)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* ── Logo ─────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-0.5 shrink-0">
            <span
              className="text-xl leading-none"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-primary)' }}
            >
              Noplin
            </span>
            <span
              className="text-xl leading-none"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--accent)' }}
            >
              Digital
            </span>
          </Link>

          {/* ── Desktop Nav ──────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200 rounded-lg"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; }}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                    className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[760px]"
                    style={{
                      background: 'var(--bg-mega)',
                      border: '1px solid var(--border-default)',
                      borderRadius: '16px',
                      boxShadow: 'var(--shadow-card-theme)',
                      padding: '28px',
                    }}
                  >
                    <div className="grid grid-cols-4 gap-6">
                      {megaMenu.map((col) => (
                        <div key={col.heading}>
                          <p
                            className="mb-3 uppercase tracking-widest"
                            style={{
                              fontSize: '10px',
                              letterSpacing: '0.12em',
                              color: 'var(--accent)',
                              fontFamily: 'var(--font-display)',
                              fontWeight: 600,
                            }}
                          >
                            {col.heading}
                          </p>
                          <ul className="space-y-1.5">
                            {col.services.map((svc) => (
                              <li key={svc.href}>
                                <Link
                                  href={svc.href}
                                  onClick={() => setMegaOpen(false)}
                                  className="group flex items-center gap-2 text-[13px] transition-colors duration-150"
                                  style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; }}
                                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; }}
                                >
                                  <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-[#06B6D4] transition-colors duration-150 shrink-0" />
                                  {svc.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {/* Bottom CTA strip */}
                    <div className="mt-6 pt-5 flex items-center justify-between" style={{ borderTop: '1px solid var(--border-default)' }}>
                      <p className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>
                        Not sure what you need?{' '}
                        <Link href="/contact" className="text-[#06B6D4] hover:underline" onClick={() => setMegaOpen(false)}>
                          Let's talk →
                        </Link>
                      </p>
                      <Link
                        href="/services"
                        onClick={() => setMegaOpen(false)}
                        className="text-xs hover:text-[#06B6D4] transition-colors"
                        style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--accent)' }}
                      >
                        View all services →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm transition-colors duration-200 rounded-lg"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── ThemeToggle + CTA + Hamburger ────────────── */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200"
              style={{
                fontFamily: 'var(--font-display)',
                background: 'var(--accent)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--accent-hover)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(26,86,219,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--accent)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              Get a Free Quote
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] origin-center"
                style={{ background: 'var(--text-primary)' }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
                className="block w-5 h-[1.5px]"
                style={{ background: 'var(--text-primary)' }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] origin-center"
                style={{ background: 'var(--text-primary)' }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ─────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: 'var(--bg-page)', paddingTop: '72px' }}
          >
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesExpanded((v) => !v)}
                  className="flex w-full items-center justify-between py-3 text-xl font-semibold"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-default)' }}
                >
                  Services
                  <motion.svg
                    animate={{ rotate: servicesExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5"
                    style={{ color: 'var(--text-secondary)' }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {servicesExpanded && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      {allMobileServices.map((svc) => (
                        <li key={svc.href}>
                          <Link
                            href={svc.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 py-2.5 pl-4 text-sm transition-colors"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-default)' }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shrink-0" />
                            {svc.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-xl font-semibold transition-colors"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-default)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Pinned CTA */}
            <div className="px-6 pb-10 pt-4" style={{ borderTop: '1px solid var(--border-default)' }}>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full py-4 text-base font-semibold text-white rounded-xl transition-all"
                style={{
                  fontFamily: 'var(--font-display)',
                  background: 'linear-gradient(135deg, #1A56DB 0%, #06B6D4 100%)',
                  boxShadow: '0 0 24px rgba(26,86,219,0.35)',
                }}
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
