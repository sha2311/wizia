import { color } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
const {nextui, colors} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          primary: "#0FF1F6",
          secondary: "#002228"
      },
    fontFamily: {work: ' "Work Sans", sans-serif'},
    fontFamily: {montserrat: '"Montserrat", sans-serif'},
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

