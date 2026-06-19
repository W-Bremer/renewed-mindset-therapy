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
        // Coastal calm palette
        shell: {
          50: "#fbf8f3",
          100: "#f5eee2",
          200: "#ebddc6",
        },
        sand: "#e7d9c3",
        sage: {
          DEFAULT: "#7c9b8e",
          dark: "#5d7a6f",
          light: "#a9c1b6",
        },
        ocean: {
          DEFAULT: "#1f4b4d",
          deep: "#13373a",
          mid: "#2f6668",
          light: "#5b8a8b",
        },
        coral: {
          DEFAULT: "#d98a6a",
          dark: "#c4714f",
          light: "#ecb79f",
        },
        ink: "#22302f",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "drift": {
          "0%,100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-14px) translateX(8px)" },
        },
        "wave": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 1s ease both",
        "drift": "drift 9s ease-in-out infinite",
        "wave": "wave 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
