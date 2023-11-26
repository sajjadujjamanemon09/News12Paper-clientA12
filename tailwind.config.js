/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: "'Exo', sans-serif",
      },
    },
  },
  plugins: [require("daisyui"),
  require('preline/plugin')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
