const defaultTheme = require('tailwindcss/defaultTheme')

const primary = '#152237'
const secondary = '#C29C4A'
const grid1 = '#374152'
const grid2 = '#5A6A85'
const grid3 = '#F9F8F6'
const grid4 = '#ACB4C1'
const grid5 = '#D9DDE4'
const grid6 = '#707070'
const grid8 = '#8f96a3'
const grid7 = '#C4C8CD'
const grid9 = '#D2D5D9'

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary,
      secondary,
      grid1,
      grid2,
      grid3
    }),
    placeholderColor: theme => ({
      ...theme('colors'),
      primary
    }),
    borderRadius: {
      ...defaultTheme.borderRadius,
      '15px': '0.938rem'
    },
    textColor: theme => ({
      ...theme('colors'),
      primary,
      secondary,
      grid1,
      grid2,
      grid3,
      grid4,
      grid5,
      grid6,
      grid7,
      grid8,
      grid9
    }),
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    fontSize: {
      ...defaultTheme.fontSize,
      '42px': '2.625rem',
      '34px': '2.125rem'
    },
    backgroundPosition: {
      ...defaultTheme.backgroundPosition,
      '42px': '2.625rem'
    },
    fill: theme => ({
      primary,
      secondary,
      grid5,
      grid7
    }),
    stroke: theme => ({
      primary,
      secondary,
      grid5,
      grid8
    }),
    boxShadow: {
      box1: '0px 3px 6px #00000029',
      box2: '0px 3px 3px #00000029'
    },
    borderColor: theme => ({
      ...theme('colors'),
      primary,
      secondary,
      grid1,
      grid2,
      grid6,
      grid7
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
    gradientColorStops: theme => ({
      ...theme('colors'),
      primary,
      grid1
    }),
    extend: {
      fontFamily: {
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif]
      },
      height: {
        header: '270px',
        '65px': '4.063rem',
        '620px': '620px'
      },
      width: {
        '400px': '400px',
        '4/9': '45%',
        '98%': '98%',
        '1/7': '70%'
      },
      maxHeight: {
        modal: 'calc(100vh - 10px)'
      },
      minHeight: {
        188: 'calc(100vh - 188px)',
        272: 'calc(100vh - 272px)'
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
        26: '1.625rem',
        30: '1.875rem'
      },
      outline: {
        0: '0'
      },
      backgroundPosition: {
        '6%-53%': '6%-53%'
      }
    }
  },
  variants: {
    extend: {
      stroke: ['hover'],
      outline: ['hover'],
      borderWidth: ['hover']
    }
  },
  plugins: []
}
