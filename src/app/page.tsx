"use client"

import { 
  HeroPageHome, 
  SectionPageHome, 
  SectionPartener,
  SectionClientsPageHome,
  SectionFaq
} from '@/components'
import React from 'react'


export default function Home() {
  return (
    <div className='flex flex-col'>
      <HeroPageHome />
      <SectionPageHome />
      <SectionPartener />
      <SectionClientsPageHome />
      <SectionFaq />
    </div>
  )
}
