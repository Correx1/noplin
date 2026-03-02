/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after hydration — prevents Next.js SSR mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a same-size placeholder so layout doesn't shift
    return <div style={{ width: 40, height: 40, borderRadius: 10 }} />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="group relative flex items-center justify-center transition-all duration-200"
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: isDark
          ? 'rgba(34, 211, 238, 0.10)'
          : 'rgba(255, 255, 255, 0.12)',
        border: `1.5px solid ${isDark ? 'rgba(34, 211, 238, 0.45)' : 'rgba(255,255,255,0.25)'}`,
        boxShadow: isDark
          ? '0 0 12px rgba(34,211,238,0.20), inset 0 1px 0 rgba(255,255,255,0.06)'
          : '0 0 8px rgba(255,255,255,0.10)',
      }}
    >
      {isDark ? (
        <Sun
          size={17}
          strokeWidth={2}
          style={{ color: '#FCD34D', filter: 'drop-shadow(0 0 6px #FCD34D88)' }}
        />
      ) : (
        <Moon
          size={17}
          strokeWidth={2}
          style={{ color: '#22D3EE', filter: 'drop-shadow(0 0 5px #22D3EE88)' }}
        />
      )}
    </button>
  );
}

