import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import SoftwareEngineering415 from './SoftwareEngineering-4-15';

const Articles = ({ match }) => (
  <>
    <Switch>
      <Route path={match.path} component={() => 'Careers Home'} exact />
      <Route path={`${match.path}/SoftwareEngineering-4-15`} component={SoftwareEngineering415} exact />
      <Redirect to={match.path} exact />
    </Switch>
  </>
);
Articles.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
export default Articles;
