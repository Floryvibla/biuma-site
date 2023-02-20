import React from 'react'
import { Heading, Text, ServiceCard } from '@components'
import { dataSection } from '@mocks/home.json'
import { dataServices } from '@mocks/services.json'

export function SectionPageHome() {
  return (
    <div className='w-full bg-primary-light py-10 px-6 md:px-44 flex flex-col gap-6'>
        <div className='md:w-30% w-80%'>
            <Heading size='md' > {dataSection.title} </Heading>
        </div>
        <div className='md:w-45%'>
            <Text size='md' color='black'> {dataSection.description} </Text>
        </div>
        <div className='w-full flex flex-col md:flex-row flex-wrap items-center md:gap-10 mt-6 '>
            {dataServices.map(({ url, icon, title, description }) => (
                <ServiceCard 
                    key={url} 
                    icon={icon} 
                    title={title}
                    description={description}
                />
            ))}
        </div>
    </div>
  )
}
