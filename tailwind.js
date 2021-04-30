const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    fontSize: {
      h1: "72px",
      h3: "42px",
      body1: "18px",
      body2: "20px",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem"
    },
    textColor: {
      ...colors,
      primary: "#152237",
      secondary: "#ffed4a",
      danger: "#e3342f"
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      yellow: "#c29c4a"
    }),
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      custom: "0px 4px 5px 1px rgba(0,0,0,0.44)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none"
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        "25": "repeat(25, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px"
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "9/10": "90%"
      },
      backgroundImage: theme => ({
        "touth-pattern": "url('/src/assets/img/LikeAToothInTheNight.png')",
        "footer-texture": "url('/img/footer-texture.png')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
