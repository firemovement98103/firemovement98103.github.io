import React from 'react';
import styled from 'styled-components';
import {
  Page, Heading, Button, Text,
} from 'estyled';
import PlusIcon from '../../../icons/plus.svg';
import MinusIcon from '../../../icons/minus.svg';
import DebtSelect from '../../Inputs/DebtSelect';
import AssetSelect from '../../Inputs/AssetSelect';
import AccountLineItem from '../../Inputs/AccountLineItem';

const StyledMinusIcon = styled(MinusIcon)`
  ${Button.buttonLike}
  ${({ theme }) => `
      margin-right: ${theme.spacing.xs()};
      fill: ${theme.colors.error};
  `}
`;
const StyledPlusIcon = styled(PlusIcon)`
  ${Button.buttonLike}
  ${({ theme }) => `
      margin-left: ${theme.spacing.xs()};
      fill: ${theme.colors.primary};
  `}
`;
const StyledAccountTypeTitle = styled.div`
  display: flex;
  align-items: center;
`;
const AccountLineItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAccountCollection = styled.div`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing.sm()};
    ${AccountLineItemWrapper} + ${AccountLineItemWrapper} {
      margin-top: ${theme.spacing.xs()};
    }
  `}
`;

const NEW_ASSET = {
  type: '',
  name: '',
  amount: 0,
};
const NEW_DEBT = {
  type: '',
  name: '',
  amount: 0,
};
export default class Networth extends React.Component {
  state = {
    assets: [NEW_ASSET],
    debts: [NEW_DEBT],
  }

  updateAsset = (asset, index) => {
    const { assets } = this.state;
    const dupe = assets.slice(0);
    dupe[index] = asset;
    this.setState({
      assets: dupe,
    });
  }

  updateDebt = (debt, index) => {
    const { debts } = this.state;
    const dupe = debts.slice(0);
    dupe[index] = debt;
    this.setState({
      debts: dupe,
    });
  }

  addAsset = () => {
    const { assets } = this.state;
    this.setState({
      assets: assets.slice(0).concat(NEW_ASSET),
    });
  }

  removeAsset = (index) => {
    const { assets } = this.state;
    const dupe = assets.slice(0);
    dupe.splice(index, 1);
    this.setState({
      assets: dupe,
    });
  }

  addDebt = () => {
    const { debts } = this.state;
    this.setState({
      debts: debts.slice(0).concat(NEW_DEBT),
    });
  }

  removeDebt = (index) => {
    const { debts } = this.state;
    const dupe = debts.slice(0);
    dupe.splice(index, 1);
    this.setState({
      debts: dupe,
    });
  }

  render() {
    const { assets, debts } = this.state;
    return (
      <Page.Section>
        <StyledAccountTypeTitle>
          <Heading h="5">Assets</Heading>
          <StyledPlusIcon onClick={this.addAsset} />
        </StyledAccountTypeTitle>
        <StyledAccountCollection>
          {assets.length === 0
            && <Text>You have no assets? Are you sure? Well, start saving now!</Text>}
          {assets.length > 0 && assets.map((asset, i) => {
            const key = `asset-${i}`;
            return (
              <AccountLineItemWrapper key={key}>
                <StyledMinusIcon onClick={() => this.removeAsset(i)} />
                <AccountLineItem
                  accountSelect={AssetSelect}
                  {...asset}
                  id={key}
                  onChange={account => this.updateAsset(account, i)}
                />
              </AccountLineItemWrapper>
            );
          })}
        </StyledAccountCollection>
        <StyledAccountCollection>
          <StyledAccountTypeTitle>
            <Heading h="5">Debts</Heading>
            <StyledPlusIcon onClick={this.addDebt} />
          </StyledAccountTypeTitle>
          {debts.length === 0
            && (
            <Text>
              No debts?! Not even a current credit card balance? I doubt it! If so, lucky you.
            </Text>
            )}
          {debts.length > 0 && debts.map((debt, i) => {
            const key = `debt-${i}`;
            return (
              <AccountLineItemWrapper key={key}>
                <StyledMinusIcon onClick={() => this.removeDebt(i)} />
                <AccountLineItem
                  accountSelect={DebtSelect}
                  {...debt}
                  id={key}
                  onChange={account => this.updateDebt(account, i)}
                />
              </AccountLineItemWrapper>
            );
          })}
        </StyledAccountCollection>
      </Page.Section>
    );
  }
}
