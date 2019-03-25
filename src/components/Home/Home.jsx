import React from 'react';
import { Page, Anchor } from 'estyled';
import styled from 'styled-components';
import Article from '../Articles/Article';
import Contact from '../Contact/Contact';
import getImageURL from '../../common/getImageURL';
import money from '../../images/money.jpg';

const StyledArticle = styled(Article)`
  ${Article.Image} {
    background-position: center;
  }
  ${({ theme }) => `
    ${Page.Content} {
      padding-top: ${theme.spacing.xs()};
      padding-bottom: ${theme.spacing.xs()};
    }
  `};
`;
export default () => (
  <StyledArticle imageSrc={getImageURL(money)} title="FIRE Movement 98103">
    <Article.Section title="Who am I?">
      <Article.Paragraph>
        I&apos;m a software developer, with a focus on front-end
         technology. I have been passionate about the FIRE movement for about 4 years now
        and I am doing my best to spread the message! As the developer of this website,
        I will do my best to distill my knowledge via articles and by developing useful tools
         to help you visualize and track your FIRE learning &amp; progress!
      </Article.Paragraph>
    </Article.Section>
    <Article.Section title="What is FIRE?">
      <Article.Paragraph>
        Defining the FIRE movement is challenging. I&apos;m almost certain the only thing people can
        agree upon is what the acronym means! FIRE stands for &quot;Financial Independence,
        Retire Early&quot;.
        Some people choose to focuse on the Financial Independence aspects of it, others are pushing
         themselves to maximize their retirement time, and therefore the &quot;Retire Early&quot;
          aspect. Where do I stand? Well, both. I enjoy what I do, but I don&apos;t necessarily
           enjoy doing it at the behest of others to simply make a living.
      </Article.Paragraph>
    </Article.Section>
    <Article.Section title="How do you contact me?">
      <Article.Paragraph>
        I plan on continuing to add articles and tools to this site as time progresses. I am
         salaried and work full time, so we shall see what progress I&apos;m able to make!
          For now, please feel free to
        {' '}
        <Anchor body href="mailto:fire.movement.98103@gmail.com">email me</Anchor>
. I will be adding a
          new contact page eventually. Also, feel free to check out
        {' '}
        <Anchor body href="https://trello.com/b/AwQFiXVZ/fire-movement-site">
            my Trello board
        </Anchor>
        {' '}
and
        {' '}
        <Anchor body href="https://github.com/firemovement98103/firemovement98103.github.io">my github repositories</Anchor>
        {' '}
to file issues and request new features and changes.
      </Article.Paragraph>
    </Article.Section>
    <Page.Section>
      <Contact />
    </Page.Section>
  </StyledArticle>
);
