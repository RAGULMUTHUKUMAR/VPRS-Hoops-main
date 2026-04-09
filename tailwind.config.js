/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#C0392B",
        "primary-dark": "#96281B",
        "dark-bg": "#0A0A0A",
        "dark-surface": "#111111",
        "dark-card": "#1A1A1A",
        "glass-red": "rgba(192,57,43,0.08)",
        "border-glass": "rgba(255,255,255,0.10)",
        "text-muted": "#AAAAAA",
        red: {
          500: "#E74C3C",
          600: "#C0392B",
          700: "#C0392B",
          800: "#96281B",
        },
      },
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
        display: ["Teko", "sans-serif"],
      },
      boxShadow: {
        "glow-red": "0 0 60px rgba(192,57,43,0.4)",
        "card-hover": "0 20px 60px rgba(192,57,43,0.3)",
      },
    },
  },
  plugins: [],
}