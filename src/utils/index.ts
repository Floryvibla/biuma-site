import { ColorsTextType, PathNameType } from './d'


export const handleColorText = (color: ColorsTextType) => {
    switch (color) {
      case 'info':
        return 'primary-initial'
      case 'white':
        return 'text-primary-light'
      case 'black':
        return 'text-primary-dark'
      case'success':
        return 'text-success-400'
      case 'error':
        return 'text-error-400'
      case 'warning':
        return 'text-warning-400'
      default:
        return 'text-dark-500'
    }
}

export const handleBackgroundColor = (pathname: PathNameType) => {
    switch (pathname) {
      case '/':
        return 'bg-primary-dark'
      case '/services':
        return 'bg-primary-initial'
      default:
        return 'bg-primary-light'
    }
}

export const handleConvertToClassName = (params: {}) => {
  return {
    className: Object.values(params).join(' ')
  }
}