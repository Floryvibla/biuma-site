import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { HiOutlineMenuAlt3 } from "@react-icons/all-files/hi/HiOutlineMenuAlt3";

import { Heading, Text } from '@components'
import { handleBackgroundColor } from '@/utils';

export function Header() {

  const router = useRouter();
  const pathname = usePathname()

  const bg = handleBackgroundColor(pathname)

  return (
    <div className={`h-10% w-full flex items-center justify-between p-4 md:px-40 shadow-sm ${bg}`}>
      <button onClick={() => router.push('/')} className='border-4 border-primary-light p-1 rounded'>
        <Heading forLogo color='white'>Biuma</Heading>
      </button>
      <button>
        <HiOutlineMenuAlt3 color='white' size={40}/>
      </button>
    </div>
  )
}
