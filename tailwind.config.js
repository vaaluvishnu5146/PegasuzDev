// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.html", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: {
        min: "300px",
        max: "380px",
      },
      sm: { min: "420px", max: "640px" },
      md: { min: "641px", max: "767px" },
      lg: { min: "768px", max: "1023px" },
      xl: { min: "1024px", max: "1279px" },
      "2xl": { min: "1278px", max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      // => @media (max-width: 1279px) { ... }
      // => @media (max-width: 1023px) { ... }
      // => @media (max-width: 767px) { ... }
      // => @media (max-width: 639px) { ... }
      // => @media (max-width: 400px) { ... }
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
