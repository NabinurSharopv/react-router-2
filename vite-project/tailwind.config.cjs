/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        uzum: {
          DEFAULT: '#6C2BD9',
          light: '#F5EEFF',
          dark: '#5B1FB8'
        }
      }
    }
  },
  plugins: [],
}
