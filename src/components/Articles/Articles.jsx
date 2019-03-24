import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';

const Articles = ({ match }) => (
  <Switch>
    <Route path={match.path} component={() => 'Articles Home'} exact />
    <Route path={`${match.path}/hsa`} component={() => 'Information about HSAs'} exact />
    <Redirect to={match.path} exact />
  </Switch>
);
Articles.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
export default Articles;
