import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';

const Tools = ({ match }) => (
  <Switch>
    <Route path={match.path} component={() => 'Tools home'} exact />
    <Route path={`${match.path}/coastFIDate`} component={() => 'Coast FI date'} exact />
    <Redirect to={match.path} exact />
  </Switch>
);
Tools.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
export default withRouter(Tools);
