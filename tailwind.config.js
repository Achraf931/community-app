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
        'custom-light-gray': '#F2F2F2',
        'custom-pink': '#FF2D87',
        'custom-white': '#FEFEFF',
        'default': '#0F0F11',
        'custom-gray': '#2B2D2E',
        'mid-gray': '#3E3F41',
        'light-gray': '#97979E'
      },
      fontFamily: {
        poppins: ['Poppins']
      }
    }
  },
  plugins: [],
}
