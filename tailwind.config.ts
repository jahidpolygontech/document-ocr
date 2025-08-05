import type { Config } from "tailwindcss";

const { heroui } = require("@heroui/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",    
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "background-primary": "#FFFFFF",
        "background-secondary": "#bea5cf",
        "purple-start": "#8e4eb5", 
        "purple-end": "#ae8adb",
        "disabled-start": "#dacae3", 
        "disabled-end": "#d1b8e0",
    
      
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
