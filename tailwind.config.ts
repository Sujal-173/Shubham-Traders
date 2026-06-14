import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#083D77",
          foreground: "#FFFFFF"
        },
        solar: {
          DEFAULT: "#F4A300",
          foreground: "#0B1F3A"
        },
        energy: {
          DEFAULT: "#28A745",
          foreground: "#FFFFFF"
        },
        navy: "#0B1F3A",
        cloud: "#F7F9FC"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(11, 31, 58, 0.12)"
      },
      borderRadius: {
        xl: "0.75rem"
      }
    }
  },
  plugins: []
};

export default config;
