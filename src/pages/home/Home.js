import React, { memo } from 'react';
import About from './sections/About';
import Hero from 'components/hero';
import Overview from './sections/Overview';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Overview />
    </>
  );
};

export default memo(Home);
