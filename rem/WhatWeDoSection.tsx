// /* eslint-disable react-hooks/refs */
// 'use client';

// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import Link from 'next/link';
// import { useRef } from 'react';

// const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];



// const services = [
//   {
//     id: 'design',
//     eyebrow: 'Brand & Visual Identity',
//     headline: 'Your brand, built to be unforgettable.',
//     body: 'From the first logo concept to a complete brand kit — logos, colours, typography, pitch decks, and every visual touchpoint your business needs to look premium from day one.',
//     href: '/services/brand-identity',
//     tags: ['Brand Identity™', 'Logo Design™', 'Pitch Decks™', 'Brand Kits™'],
//     accent: '#1A56DB',
//     accentClass: 'text-blue-600',
//     imgBig: 'https://picsum.photos/seed/brand-big/700/440',
  
//   },
//   {
//     id: 'dev',
//     eyebrow: 'Web Design & Development',
//     headline: 'Sites & apps that turn visitors into customers.',
//     body: 'Business websites, web apps, e-commerce stores — built for speed, SEO, and measurable conversion. Every project ships with clean code, sharp design, and a performance obsession.',
//     href: '/services/web-design',
//     tags: ['Web Design™', 'Web Apps™', 'E-Commerce™', 'MVP Dev™'],
//     accent: '#06B6D4',
//     accentClass: 'text-cyan-500',
//     imgBig: '/portfolio/site.png',
   
//   },
//   {
//     id: 'content',
//     eyebrow: 'Content & Copywriting',
//     headline: 'Words that pull readers in and push them to act.',
//     body: 'SEO content that ranks, email sequences that convert, and conversion copy that sells — written by people who understand business, not templates.',
//     href: '/services/content-writing',
//     tags: ['SEO Content™', 'Conversion Copy™', 'Email Campaigns™', 'Business Writing™'],
//     accent: '#F59E0B',
//     accentClass: 'text-amber-500',
//     imgBig: 'https://picsum.photos/seed/content-big/700/440',

//   },
//   {
//     id: 'marketing',
//     eyebrow: 'Digital Marketing & Growth',
//     headline: 'Growth strategy that actually moves the needle.',
//     body: 'Social media management, paid ads, and strategy consulting — built around your numbers, not vanity metrics. We grow channels that turn followers into revenue.',
//     href: '/services/digital-marketing',
//     tags: ['Social Growth™', 'Paid Ads™', 'Strategy™', 'Analytics™'],
//     accent: '#818CF8',
//     accentClass: 'text-indigo-400',
//     imgBig: 'https://picsum.photos/seed/mktg-big/700/440',
   
    
//   },
// ];





// // ── Shared card content ───────────────────────────────────────────────────────
// function CardContent({ svc }: { svc: typeof services[0] }) {


//   return (
//     <>
 

//       {/* Very faint grid texture — doesn't colour the card */}
//       <div aria-hidden className="absolute inset-0 pointer-events-none z-0"
//         style={{
//           backgroundImage: 'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)',
//           backgroundSize: '52px 52px',
//         }}
//       />

//       {/* Row */}
//       <div className="relative z-10 flex min-h-105 service-inner ">

//         {/* Text pane */}
//         <div className="service-text flex-none w-[44%] flex flex-col justify-center gap-5 px-12 py-14 relative z-10">
//           <span
//             className={`font-semibold text-[11px] tracking-[0.14em] uppercase ${svc.accentClass}`}
//             style={{ fontFamily: 'var(--font-display)' }}
//           >
//             {svc.eyebrow}
//           </span>

//           <h3
//             className="font-bold text-(--text-primary) leading-tight"
//             style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.6vw, 2.2rem)' }}
//           >
//             {svc.headline}
//           </h3>

//           <p
//             className="text-[15px] text-(--text-secondary) leading-relaxed"
//             style={{ fontFamily: 'var(--font-body)' }}
//           >
//             {svc.body}
//           </p>

//           <div className="flex flex-wrap gap-2">
//             {svc.tags.map(tag => (
//               <span
//                 key={tag}
//                 className="text-[11px] text-(--text-secondary) bg-[var(--bg-section-alt)] border border-[var(--border-default)] rounded px-3 py-1"
//                 style={{ fontFamily: 'var(--font-body)' }}
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <Link
//             href={svc.href}
//             className={`group inline-flex items-center gap-2 w-fit font-semibold text-sm mt-1 ${svc.accentClass}`}
//             style={{ fontFamily: 'var(--font-display)' }}
//           >
//             Explore this service
//             <span className="group-hover:translate-x-1.5 transition-transform duration-200 inline-block">→</span>
//           </Link>
//         </div>

//         {/* Image pane */}
//         <div className="service-imgs flex-none w-[56%] relative overflow-hidden">
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src={svc.imgBig}
//             alt={`${svc.eyebrow} screenshot`}
//             className="absolute object-cover rounded-md shadow-md"
//             style={{
//               top: '14px', bottom: '14px',
//               width: 'calc(100% - 28px)',
//               height: 'calc(100% - 28px)',
//             }}
//           />

//         </div>
//       </div>
//     </>
//   );
// }

// // ── Stacked card for mobile ───────────────────────────────────────────────────
// function StackedCard({
//   svc, index, total, containerRef,
// }: {
//   svc: typeof services[0];
//   index: number;
//   total: number;
//   containerRef: React.RefObject<HTMLDivElement>;
// }) {
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end end'],
//   });

//   const sliceSize = 1 / total;
//   const scale = useTransform(scrollYProgress, [index * sliceSize, (index + 1) * sliceSize], [1, index < total - 1 ? 0.93 : 1]);
//   const y     = useTransform(scrollYProgress, [index * sliceSize, (index + 1) * sliceSize], ['0%', index < total - 1 ? '-5%' : '0%']);

//   return (
//     <motion.div
//       style={{ scale, y, top: `${24 + index * 14}px`, zIndex: index + 1 }}
//       className="sticky overflow-hidden rounded-lg shadow-sm bg-(--bg-card)"
//     >
//       <CardContent svc={svc} />
//     </motion.div>
//   );
// }

// // ── Section ───────────────────────────────────────────────────────────────────
// export default function WhatWeDoSection() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   return (
//     <section className="bg-(--bg-section) py-20">
//       {/* Wider container — px-4 on desktop gives more card width */}
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: EASE }}
//           className="flex flex-col items-center text-center gap-4 mb-20"
//         >
//           <span
//             className="font-semibold text-[11px] tracking-[0.14em] uppercase text-cyan-500"
//             style={{ fontFamily: 'var(--font-display)' }}
//           >
//             What We Do
//           </span>
//           <h2
//             className="font-bold text-(--text-primary) leading-tight max-w-2xl"
//             style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
//           >
//             Everything Your Business Needs to Grow Online
//           </h2>
//           <p
//             className="text-lg text-(--text-secondary) max-w-md"
//             style={{ fontFamily: 'var(--font-body)' }}
//           >
//             Four departments. One agency. Zero compromises.
//           </p>
//         </motion.div>

//         {/* Desktop cards */}
//         <div className="desktop-cards flex flex-col gap-12 px-6">
//           {services.map(svc => (
//             <motion.div
//               key={svc.id}
//               initial={{ opacity: 0, y: 36 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: '-80px' }}
//               transition={{ duration: 0.7, ease: EASE }}
//               className="relative overflow-hidden rounded-lg shadow-sm bg-(--bg-card)"
//             >
//               <CardContent svc={svc} />
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile stacked scroll */}
//         <div
//           ref={containerRef}
//           className="mobile-cards relative"
//           style={{ height: `${services.length * 100}vh` }}
//         >
//           {services.map((svc, i) => (
//             <StackedCard
//               key={svc.id}
//               svc={svc}
//               index={i}
//               total={services.length}
//               containerRef={containerRef as React.RefObject<HTMLDivElement>}
//             />
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .desktop-cards { display: flex; }
//         .mobile-cards  { display: none;  }

//         @media (max-width: 768px) {
//           .desktop-cards { display: none;  }
//           .mobile-cards  { display: block; }

//           .service-inner {
//             flex-direction: column-reverse !important;
//             min-height: unset !important;
//           }
//           .service-text {
//             width: 100% !important;
//             padding: 28px 20px !important;
//           }
//           .service-imgs {
//             width: 100% !important;
//             min-height: 280px !important;
//             flex: 0 0 280px !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }