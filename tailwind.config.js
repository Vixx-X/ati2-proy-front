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
        third: "#92d050",
        darkthird: "#9b7e16",
        red: "#ff0000",
        green: "#00b050",
        yellow: "#ffff03"
      },
      fontFamily: {
        'montserrat' : ['Montserrat'],
        'lato': ['Lato'],
      },
      gridTemplateColumns: {
        'custom': '150px 1fr 150px'
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};