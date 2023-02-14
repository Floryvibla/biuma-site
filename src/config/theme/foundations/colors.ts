const colors = {
  bg: '#FDF5EC',

  primary: {
    initial: '#3769F1',
    dark: '#12192C',
    light: '#ffffff'
  },
  secondary: {
    200: '#eef3ff',
    300: '#cad8ff',
    400: '#7b9fff',
    500: '#3769f1',
    600: '#0e40c7',
    700: '#04257e'
  },
  clarity: {
    200: '#E7FEFA',
    300: '#B0F3F4',
    400: '#83DEE0',
    500: '#59C3C4',
    600: '#479EA8',
    700: '#306F7D'
  },
  succes: {
    200: '#F3FFD2',
    300: '#C9FA9B',
    400: '#9DE67E',
    500: '#6DC872',
    600: '#4EA45A',
    700: '#337653'
  },
  ambition: {
    200: '#ECEFFE',
    300: '#B2BDF7',
    400: '#848DF0',
    500: '#6060E9',
    600: '#453DBF',
    700: '#2D268C'
  },
  playful: {
    200: '#F9DFDE',
    300: '#F09EA9',
    400: '#EE869F',
    500: '#EB6190',
    600: '#A73775',
    700: '#6F1C5B'
  },
  error: {
    200: '#FCF1F2',
    300: '#EFAAA8',
    400: '#E97D7A',
    500: '#E05048',
    600: '#C7332A',
    700: '#9E1421'
  },
  warning: {
    200: '#FDF5EC',
    300: '#F3C387',
    400: '#F6AF45',
    500: '#E97B37',
    600: '#C64E19',
    700: '#9E3012'
  },
  dark: {
    100: '#ECEDEF',
    200: '#DFE1E4',
    300: '#D4D6DA',
    400: '#B2BBBD',
    500: '#757C86',
    600: '#585E6C',
    700: '#39404F',
    800: '#182233'
  }
} as const;

export type Colors = typeof colors;
export default colors;
