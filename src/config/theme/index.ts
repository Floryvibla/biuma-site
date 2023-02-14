import { extendTheme } from '@chakra-ui/react';

import foundations from './foundations';
import styles from './styles';

const theme = extendTheme(
  {
    ...foundations,
    styles
  },
  {
    colors: {}
  }
);

export default theme;
