/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          200: "#0AF762",
          500: "#08E65A",
          800: "#03CC4D",
        },
        secondary: {
          200: "#604F77",
          500: "#403351",
          800: "#352A44",
        },
      },
    },
  },
  plugins: [],
};
