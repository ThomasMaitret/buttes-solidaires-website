module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        green: "#4caf50",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
