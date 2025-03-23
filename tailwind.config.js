/** @type {import('tailwindcss').Config} */

const colors = require("./src/theme/color");

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
  darkMode: "class",
}