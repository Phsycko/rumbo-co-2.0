/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.ts"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f0e8dc",
        sand: "#e2d8cb",
        beige: "#d4c8b8",
        parchment: "#f0e8dc",
        mist: "#c9bfb2",
        fog: "#ebe3d7",
        ink: "#0a0908",
        "ink-soft": "#161412",
        smoke: "#2a2622",
        stone: "#5c5349",
        "terracotta-soft": "#c9916a",
        terracotta: "#a65d34",
        "terracotta-dark": "#6b3d22",
        copper: "#b8734a",
        "copper-dim": "#8a5a38",
        "dark-coffee": "#4a4239",
        "soft-gold": "#b8975e",
        charcoal: "#0a0908",
        "charcoal-soft": "#2a2622"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Outfit", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      fontSize: {
        display: ["clamp(2.75rem,6vw,4.75rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(2rem,4.5vw,3.25rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }]
      },
      boxShadow: {
        "glow-soft": "0 24px 64px rgba(10, 9, 8, 0.45)",
        "elevated-card": "0 32px 80px rgba(10, 9, 8, 0.28)",
        "copper-glow": "0 0 0 1px rgba(184, 115, 74, 0.25), 0 24px 48px rgba(10, 9, 8, 0.2)"
      },
      backgroundImage: {
        "grain-light":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        "grain-dark":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: []
};
