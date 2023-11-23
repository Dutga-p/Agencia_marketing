/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors:{
        'orange-button':'#ff561e'
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const estendUnderline={
        '.underline':{
          'textDecoration':'underline',
          'text-decoration-color': '#ff561e',
          'transition-duration': '300 ease-in-out',
          'borderBottom': '1.5px solid #ff561e',
        },
      }
      addUtilities(estendUnderline)
    }
  ],
}