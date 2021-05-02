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
      grid4: '#ACB4C1',
      grid5: '#D9DDE4'
    }),
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    fontSize: {
      ...defaultTheme.fontSize,
      '42px': '2.625rem'
    },
    fill: theme => ({
      primary: '#152237',
      secondary: '#C29C4A'
    }),
    stroke: theme => ({
      primary: '#152237',
      secondary: '#C29C4A'
    }),
    boxShadow: {
      box1: '0px 3px 6px #00000029'
    },
    borderColor: theme => ({
      ...theme('colors'),
      primary: '#152237',
      secondary: '#C29C4A',
      grid1: '#374152',
      grid2: '#5A6A85'
    }),
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1330px',
      '2xl': '1536px'
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
      },
      borderWidth: {
        3: '3px'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        25: 'repeat(25, minmax(0, 1fr))'
      }
    }
  },
  variants: {
    extend: {
      stroke: ['hover']
    }
  },
  plugins: []
}
