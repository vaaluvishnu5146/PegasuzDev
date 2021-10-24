module.exports = {
  purge: ["./pages/**/*.html", "./pages/**/*.js", "./Components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: { min: "320px", max: "390px" },
      },
    },
    screens: {
      sm: { min: "400px", max: "640px" },
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [],
};
