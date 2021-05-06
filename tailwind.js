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
    placeholderColor: theme => ({
      ...theme('colors'),
      primary: '#152237'
    }),
    borderRadius: {
      ...defaultTheme.borderRadius,
      '15px': '0.938rem'
    },
    textColor: theme => ({
      ...theme('colors'),
      primary: '#152237',
      secondary: '#C29C4A',
      grid1: '#374152',
      grid2: '#5A6A85',
      grid3: '#F9F8F6',
      grid4: '#ACB4C1',
      grid5: '#D9DDE4',
      grid6: '#707070'
    }),
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    fontSize: {
      ...defaultTheme.fontSize,
      '42px': '2.625rem'
    },
    backgroundPosition: {
      ...defaultTheme.backgroundPosition,
      '42px': '2.625rem'
    },
    fill: theme => ({
      primary: '#152237',
      secondary: '#C29C4A',
      grid5: '#D9DDE4'
    }),
    stroke: theme => ({
      primary: '#152237',
      secondary: '#C29C4A',
      grid5: '#D9DDE4'
    }),
    boxShadow: {
      box1: '0px 3px 6px #00000029'
    },
    borderColor: theme => ({
      ...theme('colors'),
      primary: '#152237',
      secondary: '#C29C4A',
      grid1: '#374152',
      grid2: '#5A6A85',
      grid6: '#707070',
      grid7: '#C4C8CD'
    }),
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1330px',
      '2xl': '1536px'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      'auto-100': '4rem'
    },
    extend: {
      fontFamily: {
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif]
      },
      height: {
        header: '270px',
        '65px': '4.063rem'
      },
      padding: {
        '104px': '104px'
      },
      margin: {
        '30px': '30.5px',
        '10px': '10px'
      },
      borderWidth: {
        3: '3px',
        30: '1.875rem'
      },
      outline: {
        0: '0'
      }
    }
  },
  variants: {
    extend: {
      stroke: ['hover'],
      outline: ['hover']
    }
  },
  plugins: []
}
