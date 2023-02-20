import React from 'react'
import { Heading, Text, Button } from '@components'
import { dataSectionPartener } from '@mocks/home.json'

export function SectionPartener() {
  return (
    <div className='w-full bg-primary-initial py-10 px-6 md:px-44 flex flex-col gap-6'>
        <div className='w-full text-center md:px-20'>
            <Heading color='white' size='md' > {dataSectionPartener.title} </Heading>
        </div>
        <div className='text-center md:px-6'>
            <Text size='sm' color='white'> {dataSectionPartener.description} </Text>
        </div>
        <div className='w-full flex justify-center'>
            <Button variant='dark' title={dataSectionPartener.cta} />
        </div>
    </div>
  )
}
