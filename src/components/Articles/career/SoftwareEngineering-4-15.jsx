import React from 'react';
import {
  Page, Anchor, Emphasis, Heading, List,
} from 'estyled';
import styled from 'styled-components';
import Article from '../Article';
import getImageURL from '../../../common/getImageURL';
import code from '../../../images/code-background.png';

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
const StyledSourceAnchor = styled(Anchor)`
    display: block;
`;
export default () => (
  <StyledArticle imageSrc={getImageURL(code)} title="Software Development, an Easy Pivot to FI?">
    <Article.Section title="Anyone can do it!">
      <Article.Paragraph>
        As a long time browser of
        {' '}
        <Anchor href="https://www.reddit.com/r/financialindependence" body>Financial Independence</Anchor>
        {' '}
        on reddit, I see a very common thread among posters. An obvious piece of advice to
         subscribers of the subreddit is to pursue higher paying careers, both from the get
         go, but also to pivot into a new career if the current career has a low income
         potential. While it is great advice, it&apos;s very common for people to throw out
         software engineering as the go-to career to pivot into. The most common thing I see
         is &quot;Become a software engineer and make six figures right out of college&quot;. The
         other common myth is that software engineering is simply writing code, without regard
         to quality (think Code Camps).
      </Article.Paragraph>
      <Article.Paragraph>
        I fully support software development as a career. I actively suggest people, especially
        teenagers, try their hand at simple programming tasks and courses. Part of my early
        retirement plan is to continue teaching front end development skills. However, I have a
        firm stance on suggesting the career purely from a financial perspective. Just like any
        other career, there are those that are good at it and enjoy it, as well as people who are
        not suited for the career. To me, promoting the idea of a healthy six figure salary with
        just a Code Camp education and no applicable work experience is extremely misleading.
      </Article.Paragraph>
      <Article.Paragraph>
        This mindset that I have had, and has also been reinforced by my peers, has lingered
        quietly under the surface. I have had conversations with my peers around this set of
        thoughts, but haven&apos;t had much to back these thoughts in the realm of statistics
        and data. Any good computer science graduate would want to back their opinion with data!
        Then, the
        {' '}
        <Anchor href="https://insights.stackoverflow.com/survey/2019" body>Stack Overflow survey</Anchor>
        {' '}
        came out. Reading it was, at first, for fun. I then, however, noticed that it helped back
        some of the thoughts I have had in relation to the annoyances I&apos;ve had about the
        subreddit&apos;s tendency to suggest software development to everyone and their mothers.
      </Article.Paragraph>
    </Article.Section>
    <Article.Section title="Stack Overflow 2019 Survey">
      <Article.Paragraph>
        I had several key takeaways from the survey as it pertains to Financial Independence.
        <List unordered>
          <List.Item>
            Less than 6.2% of professional developers have 0 college experience (world wide)
          </List.Item>
          <List.Item>
            Less than a quarter of professional developers wrote their first line of code
            after age 19. Only 3.3% after 26 years of age
          </List.Item>
          <List.Item>
            80% of respondents view coding as a hobby, as well as a profession (to me,
            this reads &quot;are passionate about code&quot;)
          </List.Item>
          <List.Item>
            61% of respondents don&apos;t have children
            (also consider age of respondents skews young)
          </List.Item>
          <List.Item>
            Career satisfaction is extremely high (73% are satisfied or very satisfied)
          </List.Item>
          <List.Item>Over half of respondents have 2 or less years at their current job</List.Item>
          <List.Item>
            The highest median dev role (back end) was $116k. (
            <Anchor href="https://insights.stackoverflow.com/survey/2019#salary" body>Salary table</Anchor>
            . The median salaries listed are irrespective of experience or location).
          </List.Item>
          <List.Item>Average US work hours is 42 hrs/wk</List.Item>
        </List>
      </Article.Paragraph>
      <Article.Paragraph>
        My biggest takeaways from the data are that the people who are geared for the job are
        already in it. The statistics back that &quot;just learn to code&quot; doesn&apos;t
        succeed often, and the older you are it&apos;s even more unlikely. In addition, the
        six figure salary with no formal education appears to be a myth, based on the results.
        These are the median salaries across all of the roles in the survey. The US market is
        clearly higher paid than the rest, but even so, the median is just barely above six
        figures, without taking experience into account. The vast majority of respondents have
        been professional developers for more than five years (only 13.4% of developers have
        less than five years of professional experience). &quot;But what about FAANG, those
        guys make bank!?&quot; The median tenure at Amazon in the tech world is
        {' '}
        <Emphasis>1 year</Emphasis>
        . Their RSU vesting schedule is 5%, 5%, 15%, 40%. That means most of these workers
        will see only 5% of their RSUs, which is where a large amount of the compensation numbers
        you see comes from. Google has a median tenure of 1.1 years. Apple is the best among them,
        at 2 years! We need to stop pushing coding as the best way to reach financial Independence
        without regard to the individual&apos;s passions or abilities. I also feel that there is
        a lot of misinformation about the career prospects for a non-formal approach to development.
        There will always be outliers that will prove it is possible to do so, but the statistics
        in the survey results seem to back my vantage point that it is not as
        easy, or common, as people make it sound. I truly believe the key to success in
        tech is passion and motivation for technology.
      </Article.Paragraph>
    </Article.Section>
    <Article.Section title="Shortcomings of the Survey, Personal Biases">
      <Article.Paragraph>
        The statistics are self-reported survey results from stack overflow, which does
         not necessarily cover the broader scope of tech workers as a whole. For instance,
         those developers who do not have a stack overflow account, those not willing to take
         23 minutes to answer a survey, those who don&apos;t use stack overflow.
      </Article.Paragraph>
      <Article.Paragraph>
        In addition, there is a good argument that the survey under-reports entry level workers.
        Considering the growth of the career field (by graduation numbers), one would expect that
        the 0-5 years of professional experience group would be roughly the same, or larger, than
        that of the 5-9 years of experience group. The percentage of 0-5 years was 13.4%, compared
        to 5-9 years reporting at 31.3%. This leads to a number of issues, potentially, in the
        survey results being skewed and my conclusions being affected as such. I want to be
        as transparent as possible. If I find any information that negates the above article, I will
        be updating this as such.
      </Article.Paragraph>
      <Article.Paragraph>
        Am I a software development elitist? Probably. I obviously come off as such based on
         this post, but also other posts that are likely to come. It&apos;s not that I think
         software developers are some special breed of human. My experience has biased me
         against a specific type of software developer. In my roughly 10 year career, this
         bias has been continuously reinforced. The best developers are the passionate ones,
         driven by a desire to be better. They&apos;re the ones who tinkered
         as kids, had or have side projects, read blogs, and continually ask questions.
         What they are not is solely there to earn a larger paycheck. Those types of
         developers, in my opinion, are no the ones who keep their jobs. Do they exist?
         Absolutely. Just like any other job, there are those that earn their pay and those
         that do the bare minimum.
      </Article.Paragraph>
      <Article.Paragraph>
        What I do not want to see is people from outside the career to push software development
         as a career simply because of the earning potential. It can be a demanding job with
         high stress and ample amounts of frustration. In addition, many of the people pushing
         tech as a career path
        {' '}
        <Emphasis>are not software developers themselves</Emphasis>
        . If you are interested in software development as a career, do the research! Take a class,
        develop a project, write some code! There are dozens upon dozens of sources to choose from.
      </Article.Paragraph>
      <Article.Paragraph>
        I love my career. It has provided me with ample challenge and has evolved so quickly that I
         am almost always interested in what I am doing any given day. Many of the perks and
         benefits are unrivaled. In addition, there is a reason it is touted as a job to get into
         as a result of its earning potential! Software development has given me a huge leg up on
         my financial goals and also continues to make those goals seemingly achievable.
      </Article.Paragraph>
    </Article.Section>
    <Page.Section>
      <Heading h="5">Sources</Heading>
      <StyledSourceAnchor href="https://insights.stackoverflow.com/survey/2019" body fontSize="sm">2019 Stack overflow survey</StyledSourceAnchor>
      <StyledSourceAnchor href="https://www.forbes.com/sites/forbesbusinessdevelopmentcouncil/2018/06/29/the-real-problem-with-tech-professionals-high-turnover/#f7c6f8242014" body fontSize="sm">Tech worker tenure</StyledSourceAnchor>
    </Page.Section>
  </StyledArticle>
);
