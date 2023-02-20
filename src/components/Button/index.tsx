import { handleConvertToClassName } from '@/utils';
import React from 'react'
import { ButtonProps } from './d';
import variants, { classNamesButton } from './styles';

export function Button({
    children,
    variant = 'outline',
    type = 'button',
    title = ''
}: ButtonProps) {

    // console.log(classNamesButton[variant]);
    const classNames = handleConvertToClassName(classNamesButton[variant])
    

  return (
    <button
        type={type}
        {...classNames}
        // {...variants[variant]}
    >
        {children ?? title}
    </button>
  )
}