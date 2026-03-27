import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          bg: "#F9FBFD",
          section: "#EEF2F7",
          primary: "#2563EB", // Exact Brand Blue from Logo
          accent: "#C8A96A", // Soft Champagne Gold for premium contrast
          text: "#0B132B",
          subtext: "#6B7280",
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
