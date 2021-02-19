module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        green: "#4caf50",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
