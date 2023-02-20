import React from 'react'
import { Heading, Text, LogoCard } from '@components'
import { clients } from '@mocks/clients.json'

export function SectionClientsPageHome() {
  return (
    <div className='w-full bg-primary-light py-10 px-6 md:px-44 flex flex-col items-center'>
        <div className='md:w-60% w-full text-center'>
            <Heading size='md' color='black' > Junte-se à nossa crescente lista de clientes satisfeitos: </Heading>
        </div>
        <div className='md:w-45%'>
            {/* <Text size='md' color='black'> {.description} </Text> */}
        </div>
        <div className='md:w-full w-70% flex flex-wrap items-center justify-center gap-4 md:gap-10 mt-6 '>
            {clients.map(({ logo, name }) => (
                <LogoCard 
                    key={logo} 
                    logo={logo}
                    name={name}
                />
            ))}
        </div>
    </div>
  )
}
