import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de la boda - PDF Floral Orgánico Beige
        "beige-warm": "#EDE6DD",
        "gold-soft": "#B08A57",
        "brown-warm": "#6E5A3C",
        "beige-light": "#F5F0E8",
        "white-warm": "#FAF8F5",
        
        // Colores existentes actualizados
        cream: "#EDE6DD",
        gold: "#B08A57",
        "gold-light": "#C9A570",
        "dark-elegant": "#6E5A3C",
        "pink-pale": "#F5F0E8",
        background: "#EDE6DD",
        foreground: "#6E5A3C",
        primary: {
          DEFAULT: "#B08A57",
          foreground: "#FAF8F5",
        },
        secondary: {
          DEFAULT: "#F5F0E8",
          foreground: "#6E5A3C",
        },
        muted: {
          DEFAULT: "#F5F0E8",
          foreground: "#8B7355",
        },
        accent: {
          DEFAULT: "#C9A570",
          foreground: "#6E5A3C",
        },
        destructive: {
          DEFAULT: "#B85C5C",
          foreground: "#FAF8F5",
        },
        border: "#D4C4B0",
        input: "#D4C4B0",
        ring: "#B08A57",
      },
      fontFamily: {
        // Tipografía PDF - Script elegante + mayúsculas con tracking
        script: ["Playfair Display", "Allura", "cursive"],
        serif: ["Cormorant Garamond", "Cinzel", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
