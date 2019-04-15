import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading, Paragraph, Page } from 'estyled';

const StyledArticleSection = styled(Page.Section)`
  ${({ theme }) => `
    padding: ${theme.spacing.md()};
  `}
`;
const StyledArticleSectionHeading = styled(Heading)`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing.xs()};
  `}
`;
const ArticleSection = ({ title, children }) => (
  <StyledArticleSection>
    <Page.Content>
      <StyledArticleSectionHeading h="4">{title}</StyledArticleSectionHeading>
      {children}
    </Page.Content>
  </StyledArticleSection>
);
ArticleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const StyledTopImage = styled.div`
  height: 350px;
  background-size: cover;
  ${({ theme, src }) => `
    background-image: url("${src}");
    margin-bottom: ${theme.spacing.sm()};
  `};
`;
const StyledHeading = styled(Heading)`
  text-align: center;
  width: 100%;
  display: block;
  ${({ theme }) => `
    margin-bottom: ${theme.spacing.md()};
  `}
`;
const StyledArticle = styled.div`
  ${({ theme }) => `
    ${Paragraph} + ${Paragraph} {
      margin-top: ${theme.spacing.sm()};
    }
  `}
`;
const Article = ({
  imageSrc, children, className, title,
}) => (
  <StyledArticle className={className}>
    <StyledTopImage src={imageSrc} />
    <StyledHeading h="2">{title}</StyledHeading>
    {children}
  </StyledArticle>
);
Article.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};
Article.defaultProps = {
  className: null,
  children: null,
};
Article.Image = StyledTopImage;
Article.Paragraph = Paragraph;
Article.Section = ArticleSection;
export default Article;
