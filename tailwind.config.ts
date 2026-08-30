import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        theme: {
          base: "var(--bg-base)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-surface-elevated)",
          muted: "var(--bg-surface-muted)",
          heading: "var(--text-heading)",
          text: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          "text-muted": "var(--text-muted)",
          subtle: "var(--text-subtle)",
          border: "var(--border-subtle)",
          "border-strong": "var(--border-strong)",
          accent: "var(--accent-primary)",
          gold: "var(--accent-gold)",
          water: "var(--accent-water)",
        },
        forest: {
          950: "#06130B",
          900: "#0C2314",
          800: "#13351F",
          700: "#1A4D2E",
          600: "#246C41",
          500: "#2D6A4F",
          400: "#40916C",
          300: "#52B788",
          200: "#74C69D",
          100: "#B7E4C7",
          50: "#D8F3DC",
        },
        aqua: {
          950: "#041B1F",
          900: "#0A3A40",
          800: "#004D61",
          700: "#006680",
          600: "#0D879F",
          500: "#149ECA",
          400: "#38BDF8",
          100: "#E0F2FE",
        },
        soil: {
          950: "#121412",
          900: "#1C1E1B",
          800: "#2A2D28",
          700: "#3D2612",
          600: "#5C3A21",
          500: "#7A5030",
          400: "#996A43",
          100: "#F4EBE2",
        },
        sand: {
          950: "#111310",
          900: "#1A1D18",
          800: "#2C3028",
          700: "#444A3F",
          200: "#D4DAC9",
          100: "#ECEFE6",
          50: "#F7F9F5",
        },
        harvest: {
          600: "#B37A3B",
          500: "#D4A373",
          400: "#E9C46A",
          300: "#F4A261",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
