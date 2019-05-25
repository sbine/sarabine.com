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
        white: '#FFF',
        black: '#000',
        gray: {
          '100': '#FAFAFA',
          '200': '#F5F5F5',
          '300': '#E8E8E8',
          '400': '#DDDDDD',
        },
        red: {
          '600': '#DE0045',
          '700': '#CC0033',
          '800': '#770025',
        }
      },
      fontSize: {
        '3xl': '2rem',
      },
      opacity: {
        '80': '0.8',
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
