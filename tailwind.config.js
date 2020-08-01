const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './index.html',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontFamily: {
      heading: ['BebasNeue', 'serif'],
      body: [
        'SourceSansPro',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        icon: {
          email: '#F97840',
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
        'xl': '1.4rem',
      },
      letterSpacing: {
        wide: '0.02em',
      },
      lineHeight: {
        relaxed: '1.58',
      },
      opacity: {
        '85': '0.85',
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover'],
  }
}
