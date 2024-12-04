/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B75BB',
          dark: '#155c91',
          light: '#3389c9',
        },
        secondary: {
          DEFAULT: '#E86144',
          dark: '#d94b2b',
          light: '#ec7961',
        },
      },
    },
  },
  plugins: [],
}