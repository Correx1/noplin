/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../providers/ThemeProvider';

/**
 * DarkModeBackground
 * Decorative SVG curves + blur bubbles shown globally in dark mode.
 * Transparent overlay — does NOT replace section backgrounds.
 */
export default function DarkModeBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted || theme !== 'dark') return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <svg
        viewBox="0 0 1200 800"
        className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-[0.06]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dmCurveGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <filter id="dmGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path d="M80 40 C 520 220, 700 580, 1120 760" stroke="url(#dmCurveGrad)" strokeWidth="3" filter="url(#dmGlow)" />
        <path d="M140 0 C 560 200, 740 560, 1080 800" stroke="url(#dmCurveGrad)" strokeWidth="2" opacity="0.5" />
        <path d="M1080 20 C 640 240, 460 600, 80 780" stroke="url(#dmCurveGrad)" strokeWidth="1.5" opacity="0.3" />
      </svg>

      <div className="absolute left-[16%] top-[18%] h-32 w-32 rounded-full bg-cyan-400/8 blur-3xl" />
      <div className="absolute left-[62%] top-[46%] h-40 w-40 rounded-full bg-blue-500/8 blur-[80px]" />
      <div className="absolute left-[42%] top-[78%] h-28 w-28 rounded-full bg-cyan-400/8 blur-2xl" />
      <div className="absolute right-[10%] top-[8%] h-44 w-44 rounded-full bg-blue-600/6 blur-[100px]" />
    </div>
  );
}
