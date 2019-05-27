const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontFamily: {
      heading: ['Lobster', 'serif'],
      synopsis: ['Playfair Display', 'serif'],
      body: ['Georgia', 'sans-serif'],
    },
    extend: {
      colors: {
        icon: {
          email: '#E2A832',
          github: '#181717',
          linkedin: '#0077B5',
          twitter: '#1DA1F2',
        },
        gray: {
          ...colors.gray,
          '100': '#FAFAFA',
          '200': '#F5F5F5',
          '300': '#E8E8E8',
          '400': '#DDDDDD',
        },
        red: {
          ...colors.red,
          '600': '#DE0045',
          '700': '#CC0033',
          '800': '#770025',
        }
      },
      fontSize: {
        '3xl': '2rem',
      },
      opacity: {
        '85': '0.85',
      },
      width: {
        '128': '32rem',
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover'],
  }
}
