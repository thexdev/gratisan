import React, { memo } from 'react';
import Header from 'components/header';
import Hero from 'components/hero';
import theme from 'theme';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Header />
      <Hero />
    </ThemeProvider>
  );
};

export default memo(App);
