import { handleColorText } from '@/utils'
import React, { HTMLAttributes } from 'react'




interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  color?: 'info' |'white' | 'gray' | 'black' | 'success' | 'error' | 'warning' 
  customSize?: string
}

function Text({ 
  children,
  size= 'lg',
  color='gray',
  customSize,
  ...rest
}: TextProps, ) {

  const colorText = handleColorText(color)
  
  const sizeText = customSize ?? size === 'lg' ? `text-${size} font-medium` : `text-${size}`

  return (
    <span className={`${sizeText} ${colorText}`} {...rest} >
      {children}
    </span>
  )
}

export default Text