'use client';

import { useTheme } from '../providers/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="relative flex items-center justify-center rounded-lg transition-all duration-200"
      style={{
        width: 38,
        height: 38,
        background: theme === 'light' ? '#F3F4F6' : 'rgba(26,86,219,0.12)',
        border: `1px solid ${theme === 'light' ? '#E2E8F0' : 'rgba(26,86,219,0.2)'}`,
      }}
    >
      {theme === 'light' ? (
        <Moon size={18} color="#0D0D2B" strokeWidth={1.75} />
      ) : (
        <Sun size={18} color="#F59E0B" strokeWidth={1.75} />
      )}
    </button>
  );
}
