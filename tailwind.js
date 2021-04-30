const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    textColor: {
      ...colors,
      primary: "#152237",
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      yellow: "#c29c4a"
    }),
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        "25": "repeat(25, minmax(0, 1fr))",
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
