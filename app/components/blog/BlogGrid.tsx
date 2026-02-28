'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { categoryColors } from './BlogData';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function BlogGrid({ posts = [] }: { posts?: any[] }) {
  const [visibleCount, setVisibleCount] = useState(5);

  const visiblePosts = posts.slice(0, visibleCount);
  const sidebarPosts = posts.slice(5, 15); // The other available blogs (max 10)

  return (
    <section className="bg-(--bg-page) relative w-full pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* ── LEFT COLUMN: MAIN LIST (8 COLS) ──────────────── */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {posts.length === 0 ? (
            <div className="py-16 px-6 text-center border border-dashed border-[var(--border-default)] rounded-2xl bg-(--bg-card) shadow-sm">
              <h3 className="text-xl font-display font-semibold text-(--text-primary) mb-3">No posts available right now</h3>
              <p className="text-(--text-secondary) font-body">Check back later for new updates and insights.</p>
            </div>
          ) : visiblePosts.map((p, i) => (
            <motion.div 
              key={p.id} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
              className="group flex flex-col-reverse sm:flex-row items-stretch rounded-2xl border border-[var(--border-card)] bg-(--bg-card) shadow-sm transition-all duration-300 hover:shadow-md hover:border-[var(--border-accent)] overflow-hidden"
            >
              
              {/* Content (Left side text) */}
              <div className="flex-1 flex flex-col gap-3 p-5 sm:p-6 lg:p-8 justify-center">
                <div className="flex flex-wrap gap-2">
                  {p.categories?.map((cat: string) => (
                    <span 
                      key={cat}
                      style={{ color: categoryColors[cat] ?? 'var(--color-cyan)' }}
                      className="px-3 py-1 bg-(--bg-page) rounded-sm border border-[var(--border-default)] font-semibold text-[11px] font-semibold tracking-widest uppercase"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-semibold font-bold text-[clamp(1.15rem,2vw,1.35rem)] text-(--text-primary) leading-[1.3]">
                  <Link href={p.href} className="hover:text-electric transition-colors duration-200">
                    {p.title}
                  </Link>
                </h3>
                
                <p className="line-clamp-2 font-(--font-body) text-[14px] text-(--text-secondary) leading-[1.6]">
                  {p.excerpt || 'Read this article to learn more.'}
                </p>
                
                <div className="flex flex-wrap items-center gap-3 mt-1 font-(--font-body) text-[12px] text-(--text-primary)">
                  <span className="font-semibold">{p.author?.name || 'Noplin Team'}</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                  <span className="text-(--text-secondary)">
                    {p.date ? new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Unknown Date'}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                  <span className="text-(--text-secondary)">{p.readTime || '5 min read'}</span>
                </div>

                <Link href={p.href} className="mt-3 font-semibold font-semibold text-[13px] text-[var(--accent)] hover:text-cyan flex items-center gap-2 group/btn self-start transition-colors duration-200">
                  Read More
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </Link>
              </div>

              {/* Image (Right side pix) */}
              <Link href={p.href} className="relative w-full sm:w-[240px] md:w-[280px] shrink-0 aspect-[3/2] sm:aspect-auto border-b sm:border-b-0 sm:border-l border-[var(--border-default)] overflow-hidden">
                {p.mainImage && (
                  <Image 
                    src={p.mainImage} 
                    alt={p.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                )}
              </Link>

            </motion.div>
          ))}

          {/* Load More Button */}
          {visibleCount < posts.length && (
            <div className="flex justify-center mt-6">
              <button 
                onClick={() => setVisibleCount(v => v + 3)}
                className="px-8 py-3 rounded-xl border border-[var(--border-default)] hover:border-electric hover:text-electric text-(--text-primary) font-semibold font-semibold transition-all duration-200 text-sm bg-(--bg-card) shadow-sm flex items-center gap-2 group"
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
          <div className="sticky top-[100px] flex flex-col p-8 rounded-2xl border border-[var(--border-card)] bg-(--bg-card) shadow-sm">
            <div className="border-b border-[var(--border-card)] pb-5 mb-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-electric" />
              <h3 className="font-semibold font-bold text-[18px] text-(--text-primary)">
                Other Available Articles
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {sidebarPosts.map((post) => (
                <Link key={post.id} href={post.href} className="group flex flex-col gap-2">
                  <div className="flex flex-wrap gap-1">
                    {post.categories?.slice(0, 2).map((cat: string) => (
                      <span key={cat} className="font-semibold font-semibold text-[10px] tracking-widest uppercase" style={{ color: categoryColors[cat] ?? 'var(--color-cyan)' }}>
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-semibold font-semibold text-[15px] text-(--text-primary) leading-[1.4] transition-colors duration-200 group-hover:text-electric">
                    {post.title}
                  </h4>
                </Link>
              ))}

              {sidebarPosts.length === 0 && (
                <p className="text-sm text-(--text-secondary) font-body">No other articles available.</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
