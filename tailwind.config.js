module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#5b9bd5",
        light: "#EEEEEE",
        primary: "#00b0f0",
        darkprimary: "#0F56B3",
        secundary: "#ffc000",
        darksecundary: "#034e47",
        third: "#FFD43E",
        darkthird: "#9b7e16",
      },
      fontFamily: {
        'montserrat' : ['Montserrat'],
        'lato': ['Lato'],
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};