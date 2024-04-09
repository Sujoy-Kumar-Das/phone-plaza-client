import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3A86FF",
          secondary: "#34D399",
          accent: "#FF5B5B",
          neutral: "#6B7280",
          textPrimary: "#1F2937",
          textSecondary: "#FFFFFF",
          "base-100": "#FFFFFF",
        },
        dark: {
          primary: "#6573C3",
          secondary: "#4ADE80",
          accent: "#F87171",
          neutral: "#D1D5DB",
          textPrimary: "#FFFFFF",
          textSecondary: "#D1D5DB",
          "base-100": "#1F2937",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
export default config;
