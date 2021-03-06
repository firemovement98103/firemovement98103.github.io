import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Header } from 'estyled';
import getImageURL from '../../common/getImageURL';
import logoURL from '../../images/logo.png';

const StyledLogoContainer = styled(Header.LogoContainer)`
  ${({ theme }) => `
    img {
      max-height: ${theme.sizing.headerHeight};
    }
  `};
`;
const ActiveHeader = ({ location, onHamburgerClick, isMobileOpen }) => (
  <Header onHamburgerClick={onHamburgerClick} isOpen={isMobileOpen}>
    <Header.NavSection>
      <Header.Link href="/#/articles" active={location.pathname === '/articles'}>Articles</Header.Link>
      <Header.Link href="/#/tools" active={location.pathname === '/tools'}>Tools</Header.Link>
    </Header.NavSection>
    <StyledLogoContainer
      src={getImageURL(logoURL)}
      href="#/"
      alt="FICarious"
    />
  </Header>
);
ActiveHeader.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  onHamburgerClick: PropTypes.func.isRequired,
  isMobileOpen: PropTypes.bool.isRequired,
};

export default withRouter(ActiveHeader);
