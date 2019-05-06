import React from 'react';
import { Select } from 'estyled';
import { DEBT_ACCOUNT_TYPES } from '../../common/accountInfo';
import sortAndMapTypes from '../../common/sortAndMapTypes';

const DEBT_OPTIONS = [{ value: '', label: 'Debt...' }].concat(sortAndMapTypes(DEBT_ACCOUNT_TYPES));

export default props => (<Select options={DEBT_OPTIONS} {...props} />);
