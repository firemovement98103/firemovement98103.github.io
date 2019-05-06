import React from 'react';
import { Select } from 'estyled';
import { ACCOUNT_TYPES, ASSET_TYPES } from '../../common/accountInfo';
import sortAndMapTypes from '../../common/sortAndMapTypes';

const ASSETS = ACCOUNT_TYPES.merge(ASSET_TYPES);
const ASSET_OPTIONS = [{ value: '', label: 'Asset...' }].concat(sortAndMapTypes(ASSETS));
export default props => (<Select options={ASSET_OPTIONS} {...props} />);
