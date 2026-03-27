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
          section: "#F1F5F9",
          primary: "#14D3D3", // Vibrant Cyan from Logo (Right side)
          accent: "#F472B6", // Soft Pink from Logo (Left side)
          text: "#111827", // Neutral Slate-900 (Replacing Navy Blue)
          subtext: "#4B5563", // Gray-600
          border: "#E2E8F0", // Slate-200
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(to right, #F472B6, #14D3D3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
