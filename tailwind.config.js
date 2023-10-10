/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "orange": "#ff754c",
        "antiquewhite": "#ffe7d4" ,
        "lavender": "#d9ebfd" 
        }, 
        
    },
    fontSize: {
      "inherit": "inherit"
      } 
  },
  plugins: [],
}