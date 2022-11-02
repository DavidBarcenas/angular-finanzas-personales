/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-magic-numbers */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.blue,
          DEFAULT: colors.blue[600],
        },
        warn: {
          ...colors.red,
          DEFAULT: colors.red[600],
        },
      },
      height: {
        240: '60rem',
      },
    },
  },
  plugins: [],
};
