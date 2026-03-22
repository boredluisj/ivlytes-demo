import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F1419",
          dark: "#080C10",
          light: "#1A3A3A",
        },
        accent: {
          DEFAULT: "#00D9FF",
          light: "#00D9FF1A",
          gold: "#D4AF37",
        },
        neutral: {
          dark: "#F5F5F5",
          DEFAULT: "#A0AEC0",
          light: "#334155",
        },
        background: "#0F1419",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "mesh-shift": "mesh-shift 10s ease infinite",
        "scroll": "scroll 40s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        "mesh-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 217, 255, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
