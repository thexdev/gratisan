import React, { lazy, memo, Suspense } from 'react';
import theme from 'theme';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

const Home = lazy(() => import('pages/home'));
const Layout = lazy(() => import('components/layout'));
const PageNotFoud = lazy(() => import('pages/404'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Suspense fallback="loading..">
        <Layout>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route component={PageNotFoud} />
          </Switch>
        </Layout>
      </Suspense>
    </ThemeProvider>
  );
};

export default memo(App);
