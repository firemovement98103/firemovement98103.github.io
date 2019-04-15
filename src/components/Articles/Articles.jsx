import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import ContactPageSection from '../Contact/ContactPageSection';
import Career from './career/Career';

const Articles = ({ match }) => (
  <>
    <Switch>
      <Route path={match.path} component={() => 'Articles Home'} exact />
      <Route path={`${match.path}/hsa`} component={() => 'Information about HSAs'} exact />
      <Route path={`${match.path}/career`} component={Career} />
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
