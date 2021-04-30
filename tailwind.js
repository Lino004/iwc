const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#152237',
      grid1: '#374152',
      grid2: '#5A6A85',
      grid3: '#F9F8F6',
      secondary: '#C29C4A'
    }),
    textColor: theme => ({
      ...theme('colors'),
      primary: '#152237',
      secondary: '#C29C4A',
      grid1: '#374152',
      grid2: '#5A6A85',
      grid3: '#F9F8F6',
      grid4: '#ACB4C1'
    }),
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {
      fontFamily: {
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif]
      },
      height: {
        header: '270px'
      },
      padding: {
        '104px': '104px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
