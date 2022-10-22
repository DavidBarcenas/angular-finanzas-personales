/* eslint-disable no-magic-numbers */
/** @type {import('tailwindcss').Config} */
const colors = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
};

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors,
          DEFAULT: colors[600],
        },
      },
      height: {
        240: '60rem',
      },
    },
  },
  plugins: [],
};
