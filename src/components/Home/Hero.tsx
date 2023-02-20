
import React from 'react'
import { Button, Heading, Text } from '@components'
import { dataHero } from '@mocks/home.json'

export function HeroPageHome() {
  return (
    <div className='mt-8 px-6 py-10 w-full flex flex-col items-center gap-6 md:gap-10'>
        <div className='px-4 w-95% md:w-60%'>
            <Heading color='white'>{dataHero.title}</Heading>
        </div>
        <div className='text-center md:w-35% p-4'>
            <Text color='white' size='sm'> {dataHero.subtitle} </Text>
        </div>
        <div>
            <Button variant='solid' title={dataHero.cta} />
        </div>
    </div>
  )
}