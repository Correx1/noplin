'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        className="sticky top-0 z-100 w-full transition-all duration-300 py-3 bg-(--bg-page) border-b border-(--border-default) shadow-xs"
        style={{ height: '76px' }}
      >
        <div className="relative w-full h-full">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-0.5 shrink-0" onClick={() => setMobileOpen(false)}>
              <Image src="/images/logo.png" alt="Logo" width={150} height={100} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services Mega Menu */}
              <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
                <Link
                  href="/services"
                  className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium rounded-lg transition-colors duration-200  ${
                    pathname?.startsWith('/services') || megaOpen
                      ? 'text-(--text-primary) bg-(--bg-card)'
                      : 'text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-card)'
                  }`}
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
                      className="absolute top-[calc(100%+8px) left-1/2 -translate-x-1/2 w-210 bg-(--bg-page) border border-(--border-default) rounded-2xl shadow-xl p-8"
                    >
                      <div className="grid grid-cols-4 gap-8">
                        {megaMenu.map((col) => (
                          <div key={col.heading}>
                            <p className="mb-3 text-xs uppercase tracking-widest text-electric font-semibold">
                              {col.heading}
                            </p>
                            <ul className="space-y-1.5">
                              {col.services.map((svc) => (
                                <li key={svc.href}>
                                  <Link
                                    href={svc.href}
                                    onClick={() => setMegaOpen(false)}
                                    className={`flex items-center gap-2 px-3 py-2 -ml-3 rounded-lg text-[15px] font-medium transition-colors duration-150 group ${
                                      pathname === svc.href
                                        ? 'text-electric bg-(--bg-card)'
                                        : 'text-(--text-secondary) hover:text-electric hover:bg-(--bg-card)'
                                    }`}
                                  >
                                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                                      pathname === svc.href ? 'bg-cyan' : 'bg-transparent group-hover:bg-cyan'
                                    }`} />
                                    {svc.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Bottom CTA */}
                      <div className="mt-6 pt-5 border-t border-(--border-default) flex items-center justify-between">
                        <p className="text-xs text-(--text-secondary)">
                          Not sure what you need?{' '}
                          <Link
                            href="/contact"
                            className="text-electric hover:text-cyan hover:underline transition-colors"
                            onClick={() => setMegaOpen(false)}
                          >
                            Lets talk →
                          </Link>
                        </p>
                        <Link
                          href="/services"
                          className="text-xs font-semibold text-electric hover:text-cyan transition-colors"
                          onClick={() => setMegaOpen(false)}
                        >
                          View all services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-[15px] font-medium transition-colors duration-200 rounded-lg  ${
                      isActive
                        ? 'text-(--text-primary) bg-(--bg-card)'
                        : 'text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-card)'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* ThemeToggle + CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200 bg-electric hover:bg-cyan shadow-md"
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

          {/* Mobile Menu - Mounted inside the sticky header so it drops down from it */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'calc(100dvh - 72px)', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                className="absolute top-15 left-0 w-full z-90 flex flex-col bg-(--bg-page) overflow-hidden border-b border-(--border-default)"
              >
                <div className="flex-1 overflow-y-auto px-6 pt-6 pb-28 flex flex-col gap-1">
                  {/* Services Accordion with Link + Toggle */}
                  <div className="border-b border-(--border-default)">
                    <div className="flex w-full items-center justify-between">
                      <Link
                        href="/services"
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 py-3 text-[18px] font-medium text-(--text-primary) font-display"
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
                                className="flex items-center gap-3 py-2.5 pl-6 text-sm text-(--text-secondary) hover:text-(--text-primary) transition-colors border-b border-(--border-card) last:border-0"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                                {svc.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Other Nav Links */}
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`py-3 text-[18px] font-medium transition-colors border-b border-(--border-default) font-display ${
                          isActive ? 'text-electric' : 'text-(--text-primary) hover:text-electric'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-(--bg-page) border-t border-(--border-default)">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full py-3.5 text-[15px] text-white rounded-xl transition-all bg-electric hover:bg-cyan shadow-md font-(--font-display)"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}