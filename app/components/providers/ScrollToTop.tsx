'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scrolls the page to the very top whenever the route changes.
 * Compensates for Lenis not resetting scroll position on navigation.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Small timeout to let Next.js complete the route transition
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
