import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import ContactPageSection from '../Contact/ContactPageSection';

export const NAVIGATION_ITEMS = {
  label: 'Tools',
  subItems: [{
    href: '#/tools',
    path: '',
    label: 'Tools Home',
    component: () => 'Tools Home',
  }, {
    href: '#/tools/coastFIDate',
    path: '/coastFIDate',
    label: 'Coast FI Date Calculator',
    component: () => 'Coast FI Date',
  }, {
    href: '#/tools/IRAPhaseOut',
    path: '/IRAPhaseOut',
    label: 'IRA Phase Out Calculator',
    component: () => 'IRA Phase Out Calculator',
  }, {
    href: '#/tools/HSAREVehicle',
    path: '/HSAREVehicle',
    label: 'HSA Future Value Calculator',
    component: () => 'HSA Future Value',
  }, {
    href: '#/tools/HSAEligibility',
    path: '/HSAEligibility',
    label: 'HSA Eligibility Calculator',
    component: () => 'HSA Eligibility Calculator',
  }],
};

const Tools = ({ match }) => (
  <>
    <Switch>
      {NAVIGATION_ITEMS.subItems.map(({ href, component, path }) => (
        <Route path={`${match.path}${path}`} component={component} key={href} exact />
      ))}
      <Redirect to={match.path} exact />
    </Switch>
    <ContactPageSection debug={{ Feature: 'Tools' }} />
  </>
);
Tools.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
export default withRouter(Tools);
