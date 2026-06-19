import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ocean-deep": "#0B3D5E",
        "ocean-mid": "#1A6B8A",
        "ocean-light": "#E8F4F8",
        sand: "#F2E8D9",
        gold: "#C9A84C",
        "gold-light": "#D4B968",
        "gold-dark": "#B89A3E",
        palm: "#2D5016",
        "off-white": "#FAFAF8",
        charcoal: "#1C1C1C",
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', "Georgia", "serif"],
        inter: ['"Inter"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-xl": ["clamp(3rem, 6vw, 6rem)", { lineHeight: "1.1" }],
        "hero-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.15" }],
        "section-title": ["clamp(2rem, 3.5vw, 3.5rem)", { lineHeight: "1.2" }],
      },
      letterSpacing: {
        "ultra-wide": "0.2em",
        wide: "0.1em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        "slide-down": "slideDown 0.3s ease-out forwards",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C9A84C 0%, #D4B968 50%, #C9A84C 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
