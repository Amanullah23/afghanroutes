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
        lapis: {
          DEFAULT: "#0A3D4A",
          mid:     "#155E70",
          light:   "#1E8FA8",
          tint:    "#C8E9EE",
        },
        saffron: {
          DEFAULT: "#E8A020",
          light:   "#F5C55A",
          tint:    "#FDF3D8",
        },
        sand: {
          DEFAULT: "#F5EFE0",
          deep:    "#EDE4CE",
        },
        forest:  "#3A6B44",
        sage:    "#5C6E5A",
      },
      fontFamily: {
        inter:    ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        xl2: "20px",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;