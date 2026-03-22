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
          DEFAULT: "#0B1120",
          surface: "#111927",
          raised: "#172035",
        },
        accent: {
          DEFAULT: "#2DD4BF",
          light: "#4FE5D3",
          dark: "#0F9484",
        },
        content: {
          primary: "#F0EDE8",
          secondary: "#9BA8BB",
        },
        background: "#0B1120",
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(45, 212, 191, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(45, 212, 191, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
