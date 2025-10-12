export default {
  content: [
    './index.html',
  ],
  corePlugins: {
    container: false,
    preflight: false,
    animation: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    blur: false,
    brightness: false,
    contrast: false,
    dropShadow: false,
    grayscale: false,
    hueRotate: false,
    invert: false,
    saturate: false,
    sepia: false,
    filter: false,
    backdropFilter: false,
    ringColor: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
  },
  experimental: {
    optimizeUniversalDefaults: true,
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
          bluesky: '#0085ff',
          github: '#181717',
          linkedin: '#0077B5',
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
        wide: '0.01em',
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
  }
}
