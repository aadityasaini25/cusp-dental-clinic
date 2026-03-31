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
          primary: "#14D3D3",
          "primary-dark": "#0EA5A5",
          accent: "#F472B6",
          text: "#111827",
          subtext: "#4B5563",
          border: "#E2E8F0",
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
