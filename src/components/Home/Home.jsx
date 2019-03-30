import React from 'react';
import { Page } from 'estyled';
import styled from 'styled-components';
import Article from '../Articles/Article';
import getImageURL from '../../common/getImageURL';
import money from '../../images/money.jpg';
import ContactPageSection from '../Contact/ContactPageSection';

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
  <StyledArticle imageSrc={getImageURL(money)} title="FIRE 98103">
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
    <ContactPageSection debug={{ Feature: 'Home' }} />
  </StyledArticle>
);
