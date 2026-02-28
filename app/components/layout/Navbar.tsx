'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const megaMenu = [
  {
    heading: 'Design',
    services: [
      { label: 'Brand Identity', href: '/services/brand-identity' },
      { label: 'Pitch Deck & Presentation', href: '/services/pitch-deck' },
    ],
  },
  {
    heading: 'Web & Dev',
    services: [
      { label: 'Web Design', href: '/services/web-design' },
      { label: 'Web App Dev', href: '/services/web-app-dev' },
      { label: 'MVP Development', href: '/services/mvp-development' },
      { label: 'E-Commerce Dev', href: '/services/ecommerce' },
      { label: 'API Integration', href: '/services/api-integration' },
    ],
  },
  {
    heading: 'Content',
    services: [
      { label: 'Authority Content', href: '/services/seo-content' },
      { label: 'Conversion Copy', href: '/services/conversion-copy' },
      { label: 'Email Marketing', href: '/services/email-marketing' },
      { label: 'Video Content', href: '/services/video-content' },
      { label: 'Corporate Comms', href: '/services/corporate-comms' },
    ],
  },
  {
    heading: 'Marketing',
    services: [
      { label: 'Social Growth Engine', href: '/services/social-growth' },
      { label: 'Precision Ad Campaigns', href: '/services/ad-campaigns' },
      { label: 'Strategy Consulting', href: '/services/strategy' },
    ],
  },
];

const allMobileServices = megaMenu.flatMap(cat =>
  cat.services.map(s => ({ ...s, category: cat.heading }))
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
    <header className="sticky top-0 z-100 w-full py-3 bg-[#0D0D2B] border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <Image src="/images/logo.png" alt="Logo" width={150} height={100} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Services */}
          <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
            <Link
              href="/services"
              className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium rounded-lg transition-colors ${
                pathname?.startsWith('/services') || megaOpen
                  ? 'text-white bg-white/5'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${megaOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[840px] bg-[#12123A] border border-white/10 rounded-2xl shadow-xl p-8"
                >
                  <div className="grid grid-cols-4 gap-8">
                    {megaMenu.map(col => (
                      <div key={col.heading}>
                        <p className="mb-3 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                          {col.heading}
                        </p>
                        <ul className="space-y-1.5">
                          {col.services.map(svc => (
                            <li key={svc.href}>
                              <Link
                                href={svc.href}
                                onClick={() => setMegaOpen(false)}
                                className={`flex items-center gap-2 px-3 py-2 -ml-3 rounded-lg text-[15px] font-medium transition-colors ${
                                  pathname === svc.href
                                    ? 'text-cyan-400 bg-white/5'
                                    : 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
                                }`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                                {svc.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10 flex justify-between">
                    <p className="text-xs text-slate-400">
                      Not sure what you need?{' '}
                      <Link href="/contact" className="text-cyan-400 hover:text-cyan-300">
                        Lets talk →
                      </Link>
                    </p>
                    <Link href="/services" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                      View all services →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[15px] font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-white bg-white/5'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden lg:inline-flex px-5 py-2.5 text-sm font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#0D0D2B]"
          >
            Get a Free Quote
          </Link>

          <button
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMobileOpen(v => !v)}
          >
            <motion.span className="w-5 h-[1.5px] bg-white" />
            <motion.span className="w-5 h-[1.5px] bg-white" />
            <motion.span className="w-5 h-[1.5px] bg-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'calc(100dvh - 76px)' }}
            exit={{ height: 0 }}
            className="bg-[#0D0D2B] border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-3">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-lg text-white hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}