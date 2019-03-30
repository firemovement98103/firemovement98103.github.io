import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  FormField, Label, Input, Button, TextArea, Page, Anchor, Paragraph, Heading,
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
export default class Contact extends React.Component {
  static propTypes = {
    debug: PropTypes.shape({}).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  state = {};

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

  render() {
    const { className } = this.props;
    return (
      <StyledForm className={className} action="mailto:firemovement.98103@gmail.com" target="_blank" enctype="text/plain">
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
    );
  }
}

const StyledContactUsSection = styled(Page.Section)`
  ${Heading}, ${Paragraph} {
    text-align: center;
  }
  ${({ theme }) => `
    padding: ${theme.spacing.md()};
    ${Paragraph} {
      margin: ${theme.spacing.md()} 0;
    }
  `}
`;
export const ContactPageSection = ({ debug }) => (
  <StyledContactUsSection>
    <Heading h="4">Contact me!</Heading>
    <Paragraph>
        Thank you for visiting the site! It is (probably obvious at this point) a work in progress.
         Please, feel free to reach out to me via the contact form below!
        At the moment, it will open up your email client until I implement an email service.
         If you would like to email from an anonymous source, I recommend checking
        out
      {' '}
      <Anchor href="https://www.guerrillamail.com">Guerrilla Mail</Anchor>
      {' '}
        to generate a fake email address on your behalf.
    </Paragraph>
    <Contact debug={debug} />
  </StyledContactUsSection>
);
ContactPageSection.propTypes = {
  debug: PropTypes.shape({}).isRequired,
};
