'use client';

import BlogHero from './BlogHero';
import BlogGrid from './BlogGrid';
import BlogCTA from './BlogCTA';

export default function BlogPageClient() {
  return (
    <main>
      <BlogHero />
      <BlogGrid />
      <BlogCTA />
    </main>
  );
}
