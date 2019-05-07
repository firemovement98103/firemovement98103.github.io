import React from 'react';
import PropTypes from 'prop-types';
import { BaseInput, WholeDollar } from 'estyled';
import styled from 'styled-components';
import AssetSelect from './AssetSelect';
import DebtSelect from './DebtSelect';

const StyledInputWrapper = styled.div``;
const StyledAccountLineItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${StyledInputWrapper} {
    flex-basis: 32%;
  }
`;
export default class AccountLineItem extends React.Component {
  static propTypes = {
    accountSelect: PropTypes
      .oneOf([
        AssetSelect,
        DebtSelect,
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

  // eslint-disable-next-line react/destructuring-assignment
  state = { type: this.props.type, name: this.props.name, amount: this.props.amount };

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

  onChange = (key, val) => {
    this.setState({
      [key]: val,
    }, () => {
      const { onChange } = this.props;
      const { name, amount, type } = this.state;
      onChange({ name, amount, type });
    });
  };

  render() {
    const { accountSelect, id } = this.props;
    const { name, amount, type } = this.state;
    return (
      <StyledAccountLineItem>
        <StyledInputWrapper>
          {React.createElement(accountSelect, {
            id: `${id}-type`,
            value: type,
            onChange: evt => this.onChange('type', evt.target.value),
          })}
        </StyledInputWrapper>
        <StyledInputWrapper>
          <BaseInput value={name} title="Account Name" placeholder="Account Name" name="account" id={`${id}-name`} onBlur={val => this.onChange('name', val)} />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <WholeDollar value={amount} title="Amount" name="amount" id={`${id}-amount`} onBlur={val => this.onChange('amount', val)} />
        </StyledInputWrapper>
      </StyledAccountLineItem>
    );
  }
}
