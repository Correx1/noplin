'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import Image from 'next/image';

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
      { label: 'Authority Content™', href: '/services/seo-content' },
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-gray-200'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-0.5 shrink-0">
            <Image src="/images/logo.png" alt="Logo" width={150} height={100} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services Mega Menu */}
            <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
              <Link
                href="/services"
                className="flex items-center gap-1 px-4 py-2 text-sm text-gray-500 hover:text-gray-900 rounded-lg transition-colors duration-200 font-sans"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

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
                    className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[760px] bg-white border border-gray-200 rounded-xl shadow-lg p-7"
                  >
                    <div className="grid grid-cols-4 gap-6">
                      {megaMenu.map((col) => (
                        <div key={col.heading}>
                          <p className="mb-3 text-xs uppercase tracking-widest text-cyan-500 font-semibold">
                            {col.heading}
                          </p>
                          <ul className="space-y-1.5">
                            {col.services.map((svc) => (
                              <li key={svc.href}>
                                <Link
                                  href={svc.href}
                                  onClick={() => setMegaOpen(false)}
                                  className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-gray-900 transition-colors duration-150"
                                >
                                  <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-cyan-400 transition-colors shrink-0" />
                                  {svc.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-6 pt-5 border-t border-gray-200 flex items-center justify-between">
                      <p className="text-xs text-gray-500">
                        Not sure what you need?{' '}
                        <Link
                          href="/contact"
                          className="text-cyan-400 hover:underline"
                          onClick={() => setMegaOpen(false)}
                        >
                          Lets talk →
                        </Link>
                      </p>
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-cyan-500 hover:text-cyan-400 transition-colors"
                        onClick={() => setMegaOpen(false)}
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
                className="px-4 py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 rounded-lg font-sans"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ThemeToggle + CTA + Hamburger */}
          <div className="flex items-center gap-3">
        

            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200 bg-cyan-500 hover:bg-cyan-600 shadow-md"
            >
              Get a Free Quote
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] bg-gray-900 origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
                className="block w-5 h-[1.5px] bg-gray-900"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] bg-gray-900 origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-white pt-18"
          >
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">

              {/* Services Accordion with Link + Toggle */}
              <div className="border-b border-gray-200">
                <div className="flex w-full items-center justify-between">
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 py-3 text-xl font-semibold text-gray-900"
                  >
                    Services
                  </Link>
                  <button
                    onClick={() => setServicesExpanded((v) => !v)}
                    className="p-3"
                    aria-label="Toggle Services Submenu"
                  >
                    <motion.svg
                      animate={{ rotate: servicesExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                </div>

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
                            className="flex items-center gap-3 py-2.5 pl-6 text-sm text-gray-500 hover:text-gray-900 transition-colors border-b border-gray-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                            {svc.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-xl font-semibold text-gray-900 transition-colors border-b border-gray-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="px-6 pb-10 pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full py-4 text-base font-semibold text-white rounded-xl transition-all bg-gradient-to-r from-blue-600 to-cyan-400 shadow-md"
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