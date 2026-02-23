import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D0D2B",
          light: "#0F1130",
          dark: "#08081A",
        },
        electric: {
          DEFAULT: "#1A56DB",
          light: "#2563EB",
          dark: "#1345B4",
        },
        cyan: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
          dark: "#0891B2",
        },
        gold: {
          DEFAULT: "#F59E0B",
          light: "#FCD34D",
          dark: "#D97706",
        },
        surface: "#F9FAFB",
        muted: "#94A3B8",
        "card-dark": "#0F1130",
        "card-border": "rgba(26, 86, 219, 0.2)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
        fadeIn: "fadeIn 0.6s ease forwards",
        slideInLeft: "slideInLeft 0.7s ease forwards",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 24px rgba(26,86,219,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(6,182,212,0.6)" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 24px rgba(26,86,219,0.4)",
        "glow-cyan": "0 0 16px rgba(6,182,212,0.3)",
        "glow-blue-lg": "0 0 48px rgba(26,86,219,0.5)",
        card: "0 4px 32px rgba(13,13,43,0.5)",
      },
      borderRadius: {
        "2xl": "16px",
        card: "20px",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(26,86,219,0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 90%, rgba(6,182,212,0.15) 0%, transparent 50%), linear-gradient(160deg, #0D0D2B 0%, #0F1130 50%, #0D0D2B 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(15,17,48,0.9) 0%, rgba(13,13,43,0.95) 100%)",
        "electric-gradient": "linear-gradient(135deg, #1A56DB 0%, #06B6D4 100%)",
        "gold-gradient": "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
