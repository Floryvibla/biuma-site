import React from 'react'
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus'
import { AiOutlineMinus } from '@react-icons/all-files/ai/AiOutlineMinus'
import { Text, Heading } from '@components'
import { useState } from 'react'

interface ILogoCard {
  question?: string,
  answer?: string,
}

export const FaqCard = ({
  question,
  answer
}: ILogoCard) => {

  const [state, setState] = useState<boolean>(false)

  return (
    <div className='relative flex flex-col justify-center w-full'>
      <button onClick={() => setState(!state)} className='w-full bg-secondary-300 flex items-center justify-between px-4 py-2'>
        <Text color='black' size='lg'> {question} </Text>
        <div className='bg-primary-initial rounded-full p-2 text-white'>
          {state? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </button>
      {state &&
        <div className='px-6 py-2'>
          <Text size='sm'> {answer} </Text>
        </div>
      }
    </div>
  )
}
