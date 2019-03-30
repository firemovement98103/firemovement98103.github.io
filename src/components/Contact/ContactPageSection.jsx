import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Page, Anchor, Paragraph, Heading,
} from 'estyled';
import Contact from './Contact';

const ContactMe = styled(Heading)`
  text-align: center;
`;
const StyledContactUsSection = styled(Page.Section)`
${Paragraph} {
  text-align: center;
}
${({ theme }) => `
  padding: ${theme.spacing.md()};
  ${Paragraph} {
    margin: ${theme.spacing.md()} 0;
  }
`}
`;
export default class ContactPageSection extends React.PureComponent {
  static propTypes = {
    debug: PropTypes.shape({}).isRequired,
  };

  render() {
    const { debug } = this.props;
    return (
      <StyledContactUsSection>
        <ContactMe h="4">Contact me!</ContactMe>
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
  }
}
