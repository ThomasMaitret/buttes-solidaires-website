module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
