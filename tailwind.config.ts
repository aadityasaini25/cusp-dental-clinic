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
        darkGreen: "rgb(55, 81, 82)",
        lightCream: "rgb(255, 247, 229)",
        yellow: "rgb(205, 159, 82)",
        brandBlue: "#1a897f",
        "brand-cyan": "#00D7D7",
        "brand-pink": "#FF84C3",
        "brand-black": "#0f1115", // Lighter than #050505
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
