export const theme = {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  box: {
    shadow: '0 8px 8px rgba(0, 0, 0, 0.08)'
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  font: {
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxxxsmall: '0.8rem',
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '2rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4rem',
      xxlarge: '4.8rem',
      xxxlarge: '5.6rem',
      huge: '6.4rem'
    }
  },
  colors: {
    neutral_950: '#0a0a0a',
    neutral_900: '#171717',
    neutral_800: '#262626',
    neutral_700: '#404040',
    neutral_600: '#525252',
    neutral_500: '#6b6b6b',
    neutral_400: '#878787',
    neutral_300: '#a2a2a2',
    neutral_200: '#c1c1c1',
    neutral_100: '#e1e1e1',
    white: '#fff',
    red: '#ef4444',
    green: '#22c55e',
    accent: '#06b6d4',
    black: '#0D0D0D'
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }

}

export type Theme = typeof theme;
