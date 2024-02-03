/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins":"Poppins"
      },
      colors:{
        "primary":"#215037",
        "background":"#f9f9f9"
      }
    },
  },
  plugins: [],
}

