import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import ContactPageSection from '../Contact/ContactPageSection';
import Career from './career/Career';

export const NAVIGATION_ITEMS = {
  label: 'Articles',
  subItems: [{
    href: '#/articles',
    label: 'Articles Home',
    path: '',
    component: () => 'Articles Home',
  }, {
    href: '#/articles/career',
    label: 'Career',
    path: '/career',
    component: Career,
  }, {
    href: '#/articles/vehicles',
    label: 'Investment Vehicles',
    path: '/vehicles',
    component: () => 'Investment Vehicles',
  }],
};

const Articles = ({ match }) => (
  <>
    <Switch>
      {NAVIGATION_ITEMS.subItems.map(({ path, component }) => (
        <Route path={`${match.path}${path}`} component={component} key={path} exact />
      ))}
      <Redirect to={match.path} exact />
    </Switch>
    <ContactPageSection debug={{ Feature: 'Article', path: match.path }} />
  </>
);
Articles.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
export default Articles;
