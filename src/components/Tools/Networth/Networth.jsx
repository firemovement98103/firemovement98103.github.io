import React from 'react';
import { Page } from 'estyled';
import DebtSelect from '../../Inputs/DebtSelect';
import AssetSelect from '../../Inputs/AssetSelect';
import AccountLineItem from '../../Inputs/AccountLineItem';

export default class Networth extends React.Component {
  state = {
    fields: {
      willSellHome: false,
      hasSeenHomeValueGag: false,
    },
  }

  render() {
    return (
      <Page.Section>
        <AccountLineItem accountSelect={AssetSelect} type="401K" name="Aviture 401k" amount={78000} id="Aviture" />
      </Page.Section>
    );
  }
}
