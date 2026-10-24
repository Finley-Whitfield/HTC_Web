import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        council: {
          navy: "#0b132b",
          "navy-soft": "#1c2541",
          blue: "#3a86ff",
          green: "#06d6a0",
          gold: "#ffd60a",
          paper: "#f8f9fa",
          ink: "#111827",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "Arial", "sans-serif"],
        display: ["Manrope", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
