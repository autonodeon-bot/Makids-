/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fdf4f4',
          100: '#fbe8e8',
          200: '#f7d0d0',
          300: '#f0a8a8',
          400: '#e67575',
          500: '#d94949',
          600: '#c43030',
          800: '#8b2424',
          900: '#752323',
        },
        accent: {
          purple: '#9F7AEA',
          beige: '#F5E6D3',
          green: '#68D391'
        }
      }
    }
  },
  plugins: [],
}