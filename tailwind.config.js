/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: '13px',
        md: '40px'
      },
      width: {
        width: "420px"
      }
    },
  },
  plugins: [],
}