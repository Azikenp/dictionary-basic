/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
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

