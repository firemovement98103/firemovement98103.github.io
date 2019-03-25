import React from 'react';
import styled from 'styled-components';
import {
  FormField, Label, Input, Button,
} from 'estyled';
import axios from 'axios';

const StyledFormField = styled(FormField)``;
const StyledForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  ${({ theme }) => `
    ${StyledFormField} + ${StyledFormField},
    ${Button} {
      margin-top: ${theme.spacing.xs()};
    }  
  `}
`;
const submitEmail = () => axios.post('https://api.sendgrid.com/v3/mail/send', {
  personalizations: [{ to: [{ email: 'test@example.com' }] }], from: { email: 'test@example.com' }, subject: 'Sending with SendGrid is Fun', content: [{ type: 'text/plain', value: 'and easy to do anywhere, even with cURL' }],
}, {
  headers: {
    Authorization: `Bearer ${SENDGRID_API_KEY}`,
    'Content-Type': 'application/json',
  },
});
export default class Contact extends React.Component {
  onChange = (field, evt) => {
    this.setState({
      [field]: evt.target.value,
    });
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    submitEmail();
  }

  render() {
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledFormField required>
          <Label>Name</Label>
          <Input placeholder="First Last" required onChange={evt => this.onChange('name', evt)} />
        </StyledFormField>
        <StyledFormField required>
          <Label>Subject</Label>
          <Input placeholder="Subject line" required onChange={evt => this.onChange('subject', evt)} />
        </StyledFormField>
        <StyledFormField required>
          <Label>Return Address</Label>
          <Input placeholder="email@test.com" required onChange={evt => this.onChange('email', evt)} />
        </StyledFormField>
        <StyledFormField required>
          <Label>Description</Label>
          <Input placeholder="Description of the problem or request" required onChange={evt => this.onChange('description', evt)} />
        </StyledFormField>
        <Button type="submit" primary fluid>Submit</Button>
      </StyledForm>
    );
  }
}
