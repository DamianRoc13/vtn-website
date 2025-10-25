import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Urbanist",
          "'SF Pro Display'",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        apple: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Display'",
          "'SF Pro Text'",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#FFE6E1",
          100: "#FFCFC3",
          200: "#FF9F8A",
          300: "#FF6F51",
          400: "#FF3F18",
          500: "#E8442E",
          600: "#C73622",
          700: "#A7281A",
          800: "#861D14",
          900: "#65130E",
          DEFAULT: "#E8442E",
        },
        surface: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          900: "#0B0B0D",
          DEFAULT: "#FFFFFF",
        },
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          300: "#CBD5F5",
          500: "#64748B",
          700: "#1F2937",
          900: "#0F172A",
        },
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, var(--brand-500), var(--brand-400))",
        "gradient-muted":
          "linear-gradient(135deg, rgba(232,68,46,0.1), rgba(15,15,16,0.6))",
      },
    },
  },
  plugins: [],
};

export default config;
