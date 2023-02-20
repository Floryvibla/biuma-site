import React from 'react'
import Image from 'next/image'
import { Text, Heading } from '@components'

interface ICardService {
    title?: string,
    description?: string,
    icon?: string,
    url?: string
}

export const ServiceCard = ({
    title =  '',
    description,
    icon,
    url
}: ICardService) => {
  return (
    <button className='flex flex-col gap-2 hover:bg-secondary-300 p-5 rounded-tl-3xl rounded-br-3xl md:w-300px'>
        <div className='flex flex-col md:flex-row justify-center w-full items-center gap-4'>
            <div className='relative flex justify-center w-30px h-30px md:w-40px md:h-40px'>
                <Image
                    priority
                    alt={title} 
                    src={`/icons/services/${icon}`}
                    fill
                />
            </div>
            <div className='md:w-70% w-90% md:text-left'>
                <Text className='font-bold' color='black' size='lg'> {title} </Text>
            </div>
        </div>
        <div className='text-left'>
            <Text size='sm'> {description} </Text>
        </div>
    </button>
  )
}
