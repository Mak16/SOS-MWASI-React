/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // ✅ ajoutez cette ligne
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ ajoutez cette ligne
  ],
  theme: {
    extend: {},
  },
  screens: {
    sm: { min: "360px", max: "767px" },
    md: { min: "768px", max: "1300px" },
    lg: { min: "1301px", max: "1500px" },
    xl: { min: "1200px" },
  },
  plugins: [],
};
