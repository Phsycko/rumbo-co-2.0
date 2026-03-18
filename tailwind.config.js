/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f5f1eb",
        sand: "#ede6dc",
        beige: "#e8dfd3",
        "terracotta-soft": "#d18b57",
        terracotta: "#c46a3a",
        "terracotta-dark": "#954726",
        "dark-coffee": "#6b4f3a",
        "soft-gold": "#c9a96e",
        charcoal: "#1a1a1a",
        "charcoal-soft": "#3a3a3a"
      },
      fontFamily: {
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "glow-soft": "0 20px 45px rgba(0, 0, 0, 0.35)",
        "elevated-card": "0 25px 50px rgba(0, 0, 0, 0.3)"
      }
    }
  },
  plugins: []
};
