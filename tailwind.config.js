/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 18px 60px rgba(20, 184, 166, 0.18)",
        soft: "0 18px 50px rgba(15, 23, 42, 0.10)",
      },
      colors: {
        navy: "#07111f",
        ink: "#0f172a",
        panel: "rgba(255,255,255,0.78)",
      },
      backgroundImage: {
        "dashboard-grid":
          "linear-gradient(rgba(15,23,42,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
