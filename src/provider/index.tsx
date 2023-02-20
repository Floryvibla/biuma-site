import React from 'react'
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

interface ProvidersProps {
    children: React.ReactNode;
}

function AppProvider({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default AppProvider