'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';

export interface CaseStudy {
  slug: string;
  name: string;
  tag: string;
  client: string;
  filter: string;
  description: string;
  highlights: string[];
  images: string[];
}

export const allCaseStudies: CaseStudy[] = [
  { 
    slug: 'techbridge-website', 
    name: 'TechBridge Website Redesign', 
    tag: 'Web Design', 
    client: 'B2B tech firm, Lagos', 
    filter: 'Web Design',
    description: 'A complete technical and visual overhaul of TechBridge\'s corporate website, focusing on driving B2B leads and establishing authority in the local tech sector.',
    highlights: ['Increased conversion rate by 45%', 'Implemented headless CMS architecture', 'Fully responsive design system'],
    images: ['/portfolio/web1.png', '/portfolio/web2.png', '/portfolio/web3.png']
  },
  { 
    slug: 'styleco-brand', 
    name: 'StyleCo Brand Identity', 
    tag: 'Brand Identity', 
    client: 'Fashion brand, Abuja', 
    filter: 'Brand Identity',
    description: 'We crafted a modern, minimalist brand identity for StyleCo that resonates with their target demographic and unified their physical and digital touchpoints.',
    highlights: ['Comprehensive brand guidelines', 'Custom typography selection', 'Packaging design system'],
    images: ['/portfolio/web2.png', '/portfolio/web1.png']
  },
  { 
    slug: 'apex-ventures-web', 
    name: 'Apex Ventures Website', 
    tag: 'Web Design', 
    client: 'Investment firm, Port Harcourt', 
    filter: 'Web Design',
    description: 'Designed a premium, trustworthy digital presence for Apex Ventures to attract high-net-worth individuals and showcase their diverse portfolio.',
    highlights: ['Interactive portfolio showcase', 'High-performance Next.js build', 'Secure client portal UI'],
    images: ['/portfolio/web3.png']
  },
  { 
    slug: 'greenleaf-identity', 
    name: 'GreenLeaf Brand System', 
    tag: 'Brand Identity', 
    client: 'Agri-tech startup, Ibadan', 
    filter: 'Brand Identity',
    description: 'Developed a vibrant and approachable brand system for GreenLeaf that highlighted their sustainable mission and modern approach to agriculture.',
    highlights: ['Logo & Iconography design', 'Marketing collateral templates', 'Social media asset kit'],
    images: ['/portfolio/web1.png', '/portfolio/web3.png']
  },
  { 
    slug: 'launchpad-app', 
    name: 'LaunchPad Web App', 
    tag: 'Apps', 
    client: 'SaaS startup, Lagos', 
    filter: 'Apps',
    description: 'Built a scalable and intuitive SaaS platform interface allowing users to effortlessly manage their campaigns and analytics from a single dashboard.',
    highlights: ['Complex data visualization', 'Streamlined user onboarding flow', 'Dark mode integration'],
    images: ['/portfolio/web2.png', '/portfolio/web1.png', '/portfolio/web3.png']
  },
  { 
    slug: 'nova-social', 
    name: 'Nova Social Campaign', 
    tag: 'Social Media', 
    client: 'Consumer brand, Lagos', 
    filter: 'Social Media',
    description: 'An aggressive, highly-targeted social media campaign designed to launch Nova’s new product line to younger demographics across Instagram and TikTok.',
    highlights: ['2M+ organic impressions', 'Viral challenge creation', 'Influencer partnership strategy'],
    images: ['/portfolio/web3.png']
  },
  { 
    slug: 'brightcorp-web', 
    name: 'BrightCorp Corporate Site', 
    tag: 'Web Design', 
    client: 'Corporate services, Abuja', 
    filter: 'Web Design',
    description: 'Revamped BrightCorp\'s legacy site into a modern corporate portal, emphasizing their multi-national reach and deep industry expertise.',
    highlights: ['Multi-language support ready', 'Optimized SEO performance', 'Bespoke corporate photography'],
    images: ['/portfolio/web1.png', '/portfolio/web2.png']
  },
  { 
    slug: 'fundrise-brand', 
    name: 'FundRise Identity', 
    tag: 'Brand Identity', 
    client: 'Fintech startup, Lagos', 
    filter: 'Brand Identity',
    description: 'Created a secure, trustworthy, yet innovative brand language for a disruptive new player in the Nigerian fintech space.',
    highlights: ['Distinct visual identity', 'App UI alignment', 'Investment deck design'],
    images: ['/portfolio/web2.png']
  },
  { 
    slug: 'craftco-social', 
    name: 'CraftCo Social Growth', 
    tag: 'Social Media', 
    client: 'Artisan brand, Enugu', 
    filter: 'Social Media',
    description: 'Managed a consistent, aesthetic-driven social presence highlighting the craftsmanship and quality of locally made artisan products.',
    highlights: ['300% follower growth', 'High engagement rate formats', 'E-commerce integration'],
    images: ['/portfolio/web3.png', '/portfolio/web1.png']
  },
  { 
    slug: 'marketplace-app', 
    name: 'NexaMarket App', 
    tag: 'Apps', 
    client: 'E-commerce startup, Lagos', 
    filter: 'Apps',
    description: 'Designed a highly performant mobile-first e-commerce web application focusing on fast checkouts and personalized product discovery.',
    highlights: ['Frictionless checkout flow', 'Personalized recommendation UI', 'Progressive Web App (PWA)'],
    images: ['/portfolio/web1.png']
  },
  { 
    slug: 'visabridge-web', 
    name: 'VisaBridge Website', 
    tag: 'Web Design', 
    client: 'Immigration consultancy, London', 
    filter: 'Web Design',
    description: 'A global-facing website designed to simplify the complex immigration process into clear, actionable steps for prospective clients.',
    highlights: ['Clear service tier breakdowns', 'Automated consultation booking', 'Trust-building testimonial section'],
    images: ['/portfolio/web2.png', '/portfolio/web3.png', '/portfolio/web1.png']
  },
  { 
    slug: 'primetech-brand', 
    name: 'PrimeTech Brand Kit', 
    tag: 'Brand Identity', 
    client: 'IT services firm, Kano', 
    filter: 'Brand Identity',
    description: 'Modernized an established IT firm\'s brand to reflect their pivot towards cloud computing and enterprise cybersecurity solutions.',
    highlights: ['Brand repositioning', 'Corporate stationery', 'Digital marketing templates'],
    images: ['/portfolio/web3.png']
  },
];

export const filters = ['All', 'Web Design', 'Brand Identity', 'Social Media', 'Content', 'Apps'];

export const tagColors: Record<string, string> = {
  'Web Design': '#1A56DB',
  'Brand Identity': '#06B6D4',
  'Social Media': '#F59E0B',
  'Apps': '#8B5CF6',
  'Content': '#10B981',
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function CaseStudyCarousel({ images, name }: { images: string[], name: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (images.length === 1) {
    return (
      <div className="relative w-full aspect-[1.25/1] sm:aspect-[3/2] overflow-hidden border border-[var(--border-default)] shadow-sm transition-shadow duration-300 group-hover:shadow-md">
        <Image src={images[0]} alt={name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[1.25/1] sm:aspect-[3/2] overflow-hidden border border-[var(--border-default)] shadow-sm transition-shadow duration-300 group-hover:shadow-md group">
      <div className="overflow-hidden h-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, idx) => (
            <div key={idx} className="relative flex-[0_0_100%] h-full min-w-0">
              <Image src={src} alt={`${name} image ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-md ${
              idx === selectedIndex ? 'bg-[#1A56DB] w-8' : 'bg-white/70 hover:bg-white/100'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkPortfolio() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? allCaseStudies : allCaseStudies.filter((p) => p.filter === active);

  return (
    <>
      {/* ── FILTER TABS ────────────────────────── */}
      <div className="sticky top-[72px] z-40 bg-[var(--bg-navbar)] backdrop-blur-md border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)}
                className={`flex-shrink-0 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 font-[var(--font-display)] ${
                  active === f ? 'bg-[#1A56DB] text-white' : 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CASE STUDY LIST ────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col gap-32">
        {visible.map((cs, i) => {
          const isReversed = i % 2 !== 0; // Alternating layout
          return (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 group ${isReversed ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Carousel Side */}
              <div className="w-full lg:w-3/5">
                <CaseStudyCarousel images={cs.images} name={cs.name} />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <span
                    className="self-start text-[12px] px-3 py-1 rounded-full font-[var(--font-display)] font-semibold"
                    style={{ background: `${tagColors[cs.tag] ?? '#1A56DB'}18`, color: tagColors[cs.tag] ?? '#1A56DB' }}
                  >
                    {cs.tag}
                  </span>
                  <h3 className="font-[var(--font-display)] font-bold text-[clamp(1.75rem,3vw,2.25rem)] text-[var(--text-primary)] leading-[1.1]">{cs.name}</h3>
                  <p className="font-[var(--font-body)] text-[15px] text-[var(--text-secondary)]">Client: {cs.client}</p>
                </div>

                <p className="font-[var(--font-body)] text-[16px] text-[var(--text-secondary)] leading-[1.6]">
                  {cs.description}
                </p>

                <ul className="flex flex-col gap-3 mt-2">
                  {cs.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3">
                      <div className="mt-2 flex-shrink-0" style={{ color: tagColors[cs.tag] ?? '#1A56DB' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="8" />
                        </svg>
                      </div>
                      <span className="font-[var(--font-body)] text-[15px] text-[var(--text-secondary)]">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/work/${cs.slug}`} className="mt-6 px-7 py-3 border border-[var(--border-default)] hover:border-[var(--accent)] hover:text-[#06B6D4] text-[var(--text-primary)] transition-all inline-flex items-center justify-center gap-2 self-start font-semibold rounded-lg text-sm bg-[var(--bg-card)] shadow-[var(--shadow-card-theme)] group font-[var(--font-display)]">
                  Read Case Study
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          );
        })}

        {visible.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-[var(--font-body)] text-[16px] text-[var(--text-secondary)]">No case studies found for this category.</p>
          </div>
        )}
      </section>
    </>
  );
}
