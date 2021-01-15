module.exports = {
  purge: [
    './index.html',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontFamily: {
      heading: ['BebasNeue', 'Garamond', 'serif'],
      body: ['SourceSansPro', 'Helvetica', 'sans-serif'],
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
          '100': '#FAFAFA',
          '200': '#F5F5F5',
          '300': '#E8E8E8',
        },
        red: {
          '600': '#DE0045',
          '700': '#CC0033',
          '800': '#770025',
        }
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        'xl': '1.4rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      letterSpacing: {
        wide: '0.02em',
      },
      lineHeight: {
        relaxed: '1.58',
      },
      opacity: {
        '85': '0.85',
      },
      spacing: {
        'half': '5.5rem',
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover'],
  }
}
