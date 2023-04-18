/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./node_modules/flowbite/**/*.js"],
  plugins: [require("flowbite/plugin")],

  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        bgColor: "#202020",
        hover: "#333333",
      },
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
      },
    },
  },
  plugins: [],
};
