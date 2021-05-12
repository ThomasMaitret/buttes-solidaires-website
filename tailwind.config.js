module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        green: "#297e56",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
