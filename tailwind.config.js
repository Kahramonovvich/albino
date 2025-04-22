/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          DEFAULT: '1374px',
        },
      },
      colors: {
        'customRed': '#FF0000'
      },
    },
  },
  plugins: [],
}