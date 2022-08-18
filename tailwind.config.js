/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        18: '3.5rem'
      },
      fontFamily: {
        inter: ['Inter']
      },
      colors: {
        wpu: '#bada55',
      }
    },
  },
  plugins: [],
}
