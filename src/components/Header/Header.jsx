import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Header } from 'estyled';
import getImageURL from '../../common/getImageURL';
import logoURL from '../../images/logo.png';

const ActiveHeader = ({ location }) => (
  <Header>
    <Header.NavSection>
      <Header.Link href="/#/articles" active={location.pathname === '/articles'}>Articles</Header.Link>
      <Header.Link href="/#/tools" active={location.pathname === '/tools'}>Tools</Header.Link>
    </Header.NavSection>
    <Header.LogoContainer
      src={getImageURL(logoURL)}
      href="#/"
    />
  </Header>
);
ActiveHeader.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(ActiveHeader);
