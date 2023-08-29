/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        'search': 'inset 0 1px 2px #eee',
      }
    },
  },
  plugins: [],
}

