// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.html", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
