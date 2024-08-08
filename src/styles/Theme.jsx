import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'light' ? '#f8f9fa' : '#1a202c',
      fontFamily: 'NanumSquare, sans-serif',
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;