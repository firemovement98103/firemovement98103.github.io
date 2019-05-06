import React from 'react';
import styled from 'styled-components';
import { ThemeProvider, Page, MobileNav } from 'estyled';
import { Helmet } from 'react-helmet';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import { Router } from 'react-router';
import { createHashHistory } from 'history';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Articles, { NAVIGATION_ITEMS as articlesNavigation } from '../Articles/Articles';
import Tools, { NAVIGATION_ITEMS as toolsNavigation } from '../Tools/Tools';

const history = createHashHistory();
const StyledMobileNav = styled(MobileNav)`
  position: absolute;
  top: 61px; // 60px header height, 1px border
  left: 0;
`;
const StyledPage = styled(Page)`
  position: relative;
`;

export default class App extends React.PureComponent {
  state = { isMobileOpen: false, currentHREF: window.location.href };

  componentDidMount() {
    this.unlisten = history.listen(() => this.setState({
      isMobileOpen: false,
      currentHREF: window.location.href,
    }));
  }

  componentWillUnmount() {
    this.unlisten();
  }

  toggleMobileNav = () => {
    const { isMobileOpen } = this.state;
    this.setState({
      isMobileOpen: !isMobileOpen,
    });
  }

  render() {
    const { isMobileOpen, currentHREF } = this.state;
    return (
      <ThemeProvider>
        <StyledPage>
          <Helmet>
            <link rel="canonical" href={currentHREF} />
            <meta property="og:url" content={currentHREF} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="FICarious" />
            <meta property="og:image" content="https://ficarious.com/dist/logo.png" />
            <meta property="og:description" content="FICarious, a site to learn about financial independence!" />
            <meta name="Description" content="FICarious, a site to learn about financial independence!" />
            <title>FICarious</title>
          </Helmet>
          <Router history={history}>
            <Header isMobileOpen={isMobileOpen} onHamburgerClick={this.toggleMobileNav} />
            <StyledMobileNav
              isOpen={isMobileOpen}
              items={[
                {
                  label: 'Home',
                  href: '#/',
                },
                toolsNavigation,
                articlesNavigation,
              ]}
            />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/articles" component={Articles} />
              <Route path="/tools" component={Tools} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
