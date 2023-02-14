import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import { ReactNode } from 'react';

import theme from '@theme';

interface ProvidersProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: ProvidersProps) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ChakraProvider>
  );
};
