/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    colors: {
      midnightBlue: "#100E1D",
      darkBlue: "#1E213A",
      goldYellow: "#FFEC65",
      gray: "#6E707A",
      mutedGray: "#88869D",
      nearWhite: "#E7E7EB",
      lightGray: "#A09FB1",
      lightBlue: "#585676",
      blue: "#3C47E9",
    },
    extend: {
      boxShadow:{
        '2':'0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
};
