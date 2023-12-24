/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        background: "url('/public/assets/img/hero/background.svg')",
      },
      colors: {
        primary: "#99449F",
        secondary: "#FFFFFF",
        dark: "#131313",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
