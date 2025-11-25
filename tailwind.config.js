/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // ide kell a HTML/JS fájlok elérési útja
  theme: {
    extend: {},
  },
  plugins: [],
}

theme: {
  extend: {
    fontFamily: {
      handwriting: ['"Lucida Handwriting"', 'cursive'],
    },
  },
},