import React from 'react'
import { Heading, Text, FaqCard } from '@components'
import { dataFaq } from '@mocks/faq.json'

export function SectionFaq() {

  return (
    <div className='w-full bg-primary-light py-28 px-6 md:px-44 flex flex-col items-center'>
        <div className='md:w-60% w-full text-center'>
            <Heading size='md' color='black' > perguntas frequentes </Heading>
        </div>
        <div className='w-full flex flex-wrap items-center justify-center gap-4 md:gap-10 mt-6 '>
            {dataFaq.map(({ answer, id, question }, key) => (
                <FaqCard 
                    key={id} 
                    question={question}
                    answer={answer}
                />
            ))}
        </div>
    </div>
  )
}
