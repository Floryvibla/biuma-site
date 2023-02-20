import React from 'react'

import Link from 'next/link'
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose'

import { Heading, Button } from '@components'
import { menus, cta } from '@mocks/header.json'
import { useDispatch } from 'react-redux'
import { othersActions } from '@/redux/actions'
import { useAppDispatch } from '@/redux/store'

export function Drawer() {

    const dispatch = useDispatch()

  return (
    <div className='bg-slate-500 fixed h-screen w-screen flex justify-end'>
        <div className='bg-primary-light h-full w-full shadow-lg flex flex-col items-end'>
            <button className='h-30px w-30px shadow-lg rounded-full bg-primary-initial flex items-center justify-center m-6'>
                <AiOutlineClose size={20} className='text-primary-light text-center' />
            </button>
            <div className='w-full h-50% p-10 gap-4 flex flex-col items-center justify-center'>
                <ul className='gap-4 flex flex-col items-center w-full'>
                    {menus.map(({ title, url }) => (
                        <li key={url}>
                            <Link href={url} passHref>
                                <Heading>{title}</Heading>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex items-center justify-center w-full'>
                <Button title={cta.title}/>
            </div>
        </div>
    </div>
  )
}