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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          blue: "var(--color-blue)",
          "near-black": "var(--color-near-black)",
          graphite: "var(--color-graphite)",
          white: "var(--color-white)",
          ice: "var(--color-ice)",
          "cool-gray": "var(--color-cool-gray)",
          "mid-gray": "var(--color-mid-gray)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 6vw, 6rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.75rem, 4.5vw, 4.5rem)", { lineHeight: "1.15", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 3.5vw, 3.25rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "heading-lg": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        "heading-md": ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        label: ["0.75rem", { letterSpacing: "0.08em" }],
      },
      boxShadow: {
        card: "0 2px 16px rgba(7, 30, 50, 0.08)",
        "card-hover": "0 8px 32px rgba(7, 30, 50, 0.14)",
        cta: "0 4px 20px rgba(59, 158, 232, 0.35)", // Styled to match electric Carolina blue
      },
    },
  },
  plugins: [],
};
export default config;
