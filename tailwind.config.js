/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'rgb(19, 19, 19)',
        'hover-color':'hsl(346, 100%, 58%)',
        'page':'rgba(255, 41, 91, 0.434)',
      },
      fontFamily:{
        'simple' : "Jost",
        'some' : "Caveat"
      }
    },
  },
  plugins: [],
}

