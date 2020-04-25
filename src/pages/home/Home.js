import React, { memo } from 'react';
import About from './sections/About';
import Hero from 'components/hero';
import Overview from './sections/Overview';
import Service from './sections/Service';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Overview />
      <Service />
    </>
  );
};

export default memo(Home);
