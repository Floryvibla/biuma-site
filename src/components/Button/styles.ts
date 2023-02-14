const variants = {
  solid: {
    variant: 'solid',
    bg: 'primary.initial',
    color: 'primary.light',
    borderRadius: '0.313rem',
    gap: 2,
    _hover: {
      bg: 'secondary.400'
    },
    _active: {
      bg: 'primary.dark'
    },
    _disabled: {
      bg: 'dark.300',
      color: 'dark.400',
      cursor: 'not-allowed'
    }
  },
  outline: {
    variant: 'outline',
    bg: 'primary.light',
    color: 'primary.initial',
    border: '2px',
    _active: {
      bg: 'secondary.300'
    },
    _disabled: {
      color: 'dark.200',
      cursor: 'not-allowed',
      _hover: {
        bg: 'primary.light'
      }
    }
  }
};

export default variants;
