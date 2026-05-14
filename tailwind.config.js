/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#fbf6ea",
          100: "#f5ebd6",
          200: "#ebdcb5",
        },
        clay: {
          400: "#c97b4a",
          500: "#b85c38",
          600: "#9c4a2a",
        },
        bark: {
          700: "#5a3a22",
          800: "#3f2917",
          900: "#2a1a0d",
        },
        moss: {
          600: "#5b6b3a",
          700: "#3f4a26",
        },
        gold: {
          400: "#d6b15a",
          500: "#c8a052",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
