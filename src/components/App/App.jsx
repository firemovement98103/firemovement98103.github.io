import React from 'react';
import { ThemeProvider, Page } from 'estyled';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from '../Home/Home';
import Tools from '../Tools/Tools';
import Articles from '../Articles/Articles';
import Header from '../Header/Header';

export default () => (
  <ThemeProvider>
    <Page>
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/articles" component={Articles} />
          <Route path="/tools" component={Tools} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </Page>
  </ThemeProvider>
);
