/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        search: "inset 0 1px 2px #eee",
        "3xl": "0 2px 4px rgba(0,0,0,0.2)",
      },
      fontFamily: {
        roboto: ["Roboto Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};

