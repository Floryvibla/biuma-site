interface StylesType {
  className?: React.ComponentProps<'button'>['className']
}

const variants = {
  solid: {
    // variant: 'solid',
    bg: 'bg-primary-initial',
    color: 'text-primary-light',
    borderRadius: 'rounded-md',
    gap: 'gap-2',
    padding: 'p-4 md:px-6',
    hover: 'hover:bg-secondary-400',
    active: 'active:bg-primary-dark',
    disabled: 'disabled:bg-dark-300 disabled:text-dark.400 disabled:cursor-not-allowed'
  },
  outline: {
    // variant: 'outline',
    bg: 'bg-primary.light',
    color: 'text-primary-initial',
    padding: 'p-4',
    borderRadius: 'rounded-md',
    border: 'border-2 border-primary-initial',
    gap: 'gap-2',
    // hover: 'hover:bg-secondary.400',
    active: 'active:bg-secondary.300',
    disabled: 'disabled:hover:bg-primary-light disabled:text-dark.200 disabled:cursor-not-allowed'
  },
  dark: {
    // variant: 'solid',
    bg: 'bg-primary-dark',
    color: 'text-primary-light',
    borderRadius: 'rounded-md',
    gap: 'gap-2',
    padding: 'p-4 md:px-6',
    hover: 'hover:bg-dark-800',
    active: 'active:bg-dark-700',
    disabled: 'disabled:bg-dark-300 disabled:text-dark.400 disabled:cursor-not-allowed'
  },
};

export const classNamesButton = variants

export default variants;
