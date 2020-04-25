import React, { memo } from 'react';
import Header from 'components/header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default memo(Layout);
