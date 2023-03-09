/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#FEFEFF',
        'default': '#1A1A1D',
        'custom-gray': '#2B2D2E',
        'mid-gray': '#3E3F41',
        'light-gray': '#A1A3A5'
      },
      fontFamily: {
        poppins: ['Poppins'],
        questrial: ['Questrial']
      }
    }
  },
  plugins: [],
}
