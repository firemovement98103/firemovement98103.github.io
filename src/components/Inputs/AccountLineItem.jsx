import React from 'react';
import PropTypes from 'prop-types';
import { BaseInput, WholeDollar } from 'estyled';
import styled from 'styled-components';
import AssetSelect from './AssetSelect';
import DebtSelect from './DebtSelect';

const StyledBaseInput = styled(BaseInput)``;
const StyledWholeDollar = styled(WholeDollar)``;
const StyledAccountLineItem = styled.div`
  display: flex;
  width: 100%;
  ${StyledBaseInput}, ${StyledWholeDollar}, ${AssetSelect} {
    flex-basis: 33%;
  }
`;
export default class AccountLineItem extends React.Component {
  static propTypes = {
    accountSelect: PropTypes
      .oneOfType([
        PropTypes.instanceOf(AssetSelect),
        PropTypes.instanceOf(DebtSelect),
      ]).isRequired,
    type: PropTypes.string,
    name: PropTypes.string,
    amount: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  };

  static defaultProps = {
    type: '',
    name: '',
    amount: 0,
  }

  state = { type: '', name: '', amount: 0 };

  componentDidUpdate({ name: prevName, amount: prevAmount, type: prevType }) {
    const { name, amount, type } = this.props;
    if (name !== prevName) {
      this.setState({ name });
    }
    if (amount !== prevAmount) {
      this.setState({ amount });
    }
    if (type !== prevType) {
      this.setState({ type });
    }
  }

  render() {
    const { accountSelect, id } = this.props;
    const { name, amount, type } = this.state;
    return (
      <StyledAccountLineItem>
        {React.createElement(accountSelect, {
          id: `${id}-type`,
          value: type,
          onChange: evt => this.setState({ type: evt.target.value }),
        })}
        <StyledBaseInput value={name} title="Account Name" name="account" id={`${id}-name`} onChange={val => this.setState({ name: val })} />
        <StyledWholeDollar value={amount} title="Amount" name="amount" id={`${id}-amount`} onChange={val => this.setState({ amount: val })} />
      </StyledAccountLineItem>
    );
  }
}
