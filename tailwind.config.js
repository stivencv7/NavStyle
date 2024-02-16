/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow:{
        "box-header":"-143px 0px 0px #191E25"
      },
      textColor:{
        'body':'#EFF0F1',
        'gray-link':'#A1A1A1',
        'color-icons':'#D4D4D5'

      },
      fontFamily:{
        'type':'PP Object Sans'
      }
    },
  },
  plugins: [],
}

