/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      brightness: {
        65: '.65'
      },
      fontFamily: {
        satisy: ["'Indie Flower'", "cursive"],
        home: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
