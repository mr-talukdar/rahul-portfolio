/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        usm:'0.7rem'
      },
      fontFamily: {
        graphik: ["Graphik", "sans-serif"],
      },
      colors: {
        secondary:"#2c3e50",
        primary:"#1abc9c",
        textMain:"#333333"
      },
      screens: {
        small: { max: "400px" },

        tablet: "576px",
        // => @media (min-width: 576px) { ... }

        laptop: "992px",
        // => @media (min-width: 992px) { ... }

        desktop: "1200px",
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

