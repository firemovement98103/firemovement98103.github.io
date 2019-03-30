import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  FormField, Label, Input, Button, TextArea, Notification,
} from 'estyled';

const StyledFormField = styled(FormField)``;
const StyledTextArea = styled(TextArea)`
  width: 100%;
`;
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
const StyledNotification = styled(Notification)`
  ${({ theme }) => `
    margin: 0 auto;
    margin-bottom: ${theme.spacing.md()};
  `}
  max-width: 800px;
`;
export default class Contact extends React.Component {
  static propTypes = {
    debug: PropTypes.shape({}).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  state = {
    showNotification: false,
  };

  onChange = (field, evt) => {
    this.setState({
      [field]: evt.target.value,
    });
  }

  get content() {
    const { name, description } = this.state;
    const { debug } = this.props;
    return `
      ${name}:

      ${description}

      Helpful developer information, this is useful to include, but feel free to delete:
      ${JSON.stringify(debug, null, 4)}

    `;
  }

  showNotification = () => {
    this.setState({
      showNotification: true,
    });
  }

  render() {
    const { className } = this.props;
    const { showNotification } = this.state;
    return (
      <>
        {showNotification && <StyledNotification level={Notification.LEVELS.SUCCESS} title="Success!" body="Thanks for contacting me, I will see your message shortly!" />}
        <StyledForm className={className} onSubmit={this.showNotification} action="mailto:fire.movement.98103@gmail.com" target="_blank" enctype="text/plain">
          <StyledFormField required>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="First Last" name="name" required onChange={evt => this.onChange('name', evt)} />
          </StyledFormField>
          <StyledFormField required>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Subject line" name="subject" required onChange={evt => this.onChange('subject', evt)} />
          </StyledFormField>
          <StyledFormField required>
            <Label htmlFor="description">Description</Label>
            <StyledTextArea id="description" placeholder="Description of the problem or request" name="description" required onChange={evt => this.onChange('description', evt)} />
            <input type="hidden" value={this.content} name="body" />
          </StyledFormField>
          <Button type="submit" primary fluid>Submit</Button>
        </StyledForm>
      </>
    );
  }
}
