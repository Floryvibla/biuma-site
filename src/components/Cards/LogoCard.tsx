import Image from 'next/image'
import React from 'react'

interface ILogoCard {
  logo?: string,
  name?: string
}

export const LogoCard = ({
  logo,
  name=''
}: ILogoCard) => {
  return (
    <div className='relative flex justify-center w-50px h-25px md:w-100px md:h-50px grayscale'>
      <Image
        priority
        alt={name} 
        className=""
        src={`/icons/clients/${logo}`}
        fill
      />
  </div>
  )
}
