'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { categoryColors, posts } from './BlogData';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function BlogGrid() {
  const [visibleCount, setVisibleCount] = useState(5);

  const visiblePosts = posts.slice(0, visibleCount);
  const sidebarPosts = posts.slice(5, 15); // The other available blogs (max 10)

  return (
    <section className="bg-[var(--bg-page)] relative w-full pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* ── LEFT COLUMN: MAIN LIST (8 COLS) ──────────────── */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {visiblePosts.map((p, i) => (
            <motion.div 
              key={p.id} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
              className="group flex flex-col-reverse sm:flex-row items-stretch rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] shadow-sm transition-all duration-300 hover:shadow-md hover:border-[var(--border-accent)] overflow-hidden"
            >
              
              {/* Content (Left side text) */}
              <div className="flex-1 flex flex-col gap-3 p-5 sm:p-6 lg:p-8 justify-center">
                <div className="flex flex-wrap gap-2">
                  {p.categories.map(cat => (
                    <span 
                      key={cat}
                      style={{ fontSize: '11px', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: categoryColors[cat] ?? '#06B6D4' }}
                      className="px-3 py-1 bg-[var(--bg-page)] rounded-sm border border-[var(--border-default)]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  <Link href={p.href} className="hover:text-[#1A56DB] transition-colors duration-200">
                    {p.title}
                  </Link>
                </h3>
                
                <p className="line-clamp-2" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {p.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-3 mt-1" style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-primary)' }}>
                  <span className="font-semibold">{p.author.name}</span>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--text-muted)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{p.date}</span>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--text-muted)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{p.readTime}</span>
                </div>

                <Link href={p.href} style={{ fontFamily: 'var(--font-display)' }} className="mt-3 font-semibold text-[13px] text-[var(--accent)] hover:text-[#06B6D4] flex items-center gap-2 group/btn self-start transition-colors duration-200">
                  Read More
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </Link>
              </div>

              {/* Image (Right side pix) */}
              <Link href={p.href} className="relative w-full sm:w-[240px] md:w-[280px] shrink-0 aspect-[3/2] sm:aspect-auto border-b sm:border-b-0 sm:border-l border-[var(--border-default)] overflow-hidden">
                <Image 
                  src={p.mainImage} 
                  alt={p.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </Link>

            </motion.div>
          ))}

          {/* Load More Button */}
          {visibleCount < posts.length && (
            <div className="flex justify-center mt-6">
              <button 
                onClick={() => setVisibleCount(v => v + 3)}
                className="px-8 py-3 rounded-xl border border-[var(--border-default)] hover:border-[#1A56DB] hover:text-[#1A56DB] text-[var(--text-primary)] font-semibold transition-all duration-200 text-sm bg-[var(--bg-card)] shadow-sm font-display flex items-center gap-2 group"
              >
                Load More Articles
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* ── RIGHT COLUMN: SIDEBAR LIST (4 COLS) ────────────── */}
        <div className="lg:col-span-4">
          <div className="sticky top-[100px] flex flex-col p-8 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] shadow-sm">
            <div className="border-b border-[var(--border-card)] pb-5 mb-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#1A56DB]" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--text-primary)' }}>
                Other Available Articles
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {sidebarPosts.map((post) => (
                <Link key={post.id} href={post.href} className="group flex flex-col gap-2">
                  <div className="flex flex-wrap gap-1">
                    {post.categories.slice(0, 2).map(cat => (
                      <span key={cat} style={{ fontSize: '10px', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: categoryColors[cat] ?? '#06B6D4' }}>
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', color: 'var(--text-primary)', lineHeight: 1.4 }} className="transition-colors duration-200 group-hover:text-[#1A56DB]">
                    {post.title}
                  </h4>
                </Link>
              ))}

              {sidebarPosts.length === 0 && (
                <p className="text-sm text-[var(--text-secondary)] font-body">No other articles available.</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
