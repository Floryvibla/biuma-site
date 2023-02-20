import { handleColorText } from '@/utils'
import { Merriweather } from '@next/font/google'
import React, { HTMLAttributes } from 'react'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: '700'
})

interface HeadingProps extends HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
  color?: 'info' |'white' | 'gray' | 'black' | 'success' | 'error' | 'warning' 
  forLogo?: boolean
  size?: 'sm' | 'md' | 'lg'
  customSize?: string
}

function Heading({ 
    children,
    color = 'black',
    forLogo = false,
    size = 'lg',
    customSize,
    ...rest
 }: HeadingProps) {

  const colorText = handleColorText(color)
  const sizeTextForLogo = forLogo ? 'text-lg md:text-sm' : ''
  const sizeText = customSize ?? size === 'sm' ? 'text-xl md:text-2xl' : size === 'md' ? 'text-2xl md:text-4xl' : 'text-4xl md:text-6xl'

  return (
    <span className={`${merriweather.className} block ${colorText} ${sizeTextForLogo} ${sizeText}`} {...rest}>
      {children}
    </span>
  )
}

export default Heading