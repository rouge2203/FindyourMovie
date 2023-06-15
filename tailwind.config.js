/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        cinema: "url(/src/assets/bg_cinema.png)",
      },
      fontFamily: {
        title: ["Bungee", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
