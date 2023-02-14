const fontSizes = {
  fontSizes: {
    body: 'inter, sans-serif',
    heading: 'Merriweather, serif'
  }
} as const;

export type FontSizes = typeof fontSizes;
export default fontSizes;
