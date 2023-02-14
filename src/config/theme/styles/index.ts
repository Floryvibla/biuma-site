const styles = {
  global: {
    'html, body': {
      bg: 'bg',
      height: '100%'
    },
    '#_next': {
      bg: 'bg',
      height: '100%'
    }
  }
} as const;

export type Styles = typeof styles;
export default styles;
