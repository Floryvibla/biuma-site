const fonts = {
  fonts: {
    body: 'inter, sans-serif',
    heading: 'Merriweather, serif'
  }
} as const;

export type Fonts = typeof fonts;
export default fonts;
