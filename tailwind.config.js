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
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1366px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1920px',
        // => @media (min-width: 1280px) { ... }
        
      },
    },
  },
  plugins: [],
}

