/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1120',
          light: '#1E293B',
        },
        accent: {
          DEFAULT: '#14B8A6',
          light: '#2DD4BF',
          dark: '#0D9488',
        }
      }
    },
  },
  plugins: [],
};