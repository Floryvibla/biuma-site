import React from 'react'
import { LayoutsProps } from './d'

import { Drawer, Header } from '@components'
import { useAppSelector } from '@/redux/store'

function Public({ children }: LayoutsProps) {

  // const { openDrawer } = useAppContext().state.others
  const { isDrawing } = useAppSelector(state => state.others)

  return (
    <div>
      {isDrawing && <Drawer />}
      <Header />
      {children}
    </div>
  )
}

export default Public