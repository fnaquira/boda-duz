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
        cream: "#F5F5DC",
        gold: "#D4AF37",
        "dark-elegant": "#2C3E50",
        "pink-pale": "#FADADD",
        // Add new tokens
        "beige-bg": "#EAE6DA",
        "beige-organic": "#D9D4C4",
        "brown-text": "#8B7355",
        "brown-light": "#A89070",
        "separator": "#C4B49A",
        "illustration": "#B5A08A",
        
        // Colores existentes actualizados
        "beige-warm": "#EDE6DD",
        "gold-soft": "#B08A57",
        "brown-warm": "#6E5A3C",
        "beige-light": "#F5F0E8",
        "white-warm": "#FAF8F5",
        
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
        script: ["'Great Vibes'", "cursive"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Cormorant Garamond'", "serif"],
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
