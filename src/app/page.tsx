'use client';

// import { Inter } from '@next/font/google'
import { Flex } from '@chakra-ui/react';

import { AppProvider } from '@providers';
import { Button, TextInput } from '@components';

// const inter = Inter({ subsets: ['latin'] })

// console.log(theme.colors);

export default function Home() {
  return (
    <AppProvider>
      <Flex
        gap={4}
        direction={'column'}
        align={'center'}
        justify={'center'}
        w={'100%'}
        h={'100vh'}
      >
        <Button variant="solid" title="Testando aqui!" />
        <TextInput />
      </Flex>
    </AppProvider>
  );
}
