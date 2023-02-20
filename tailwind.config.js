/** @type {import('tailwindcss').Config} */

const colors = require('./src/constants/tailwind/colors');
const height = require('./src/constants/tailwind/height');
const width = require('./src/constants/tailwind/width');
const fontSize = require('./src/constants/tailwind/fontSize');
const margin = require('./src/constants/tailwind/margin');
const border = require('./src/constants/tailwind/border');
const inset = require('./src/constants/tailwind/inset');
const minWidth = require('./src/constants/tailwind/minWidth');
const flex = require('./src/constants/tailwind/flex');


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      height,
      width,
      fontSize,
      margin,
      inset,
      minWidth,
      flex,
      border,
    },
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      colors,
    }),
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}