import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import useLastPost from '../hooks/use-last-post';
import { css } from '@emotion/core';
import { layoutConfig } from './layouts/config';
import { IEmotionStyledTheme } from '../types/theme';

const Section = styled.section`
  display: grid;
  align-items: flex-start;
  grid-gap: 30px;
  padding: 30px 0;

  @media screen and (min-width: ${layoutConfig.small.width}) {
    grid-template-columns: 6fr 6fr;
    grid-gap: 60px;
    padding: 60px 0;
  }
`;

const ImageContainer = styled.div<IEmotionStyledTheme>`
  display: flex;
  justify-content: flex-start;
  background: ${props => props.theme.colors.imageBackground};
`;

const TagTitle = styled.span<IEmotionStyledTheme>`
  text-transform: uppercase;
  font-size: 0.7rem;
  color: ${props => props.theme.colors.tagForeground};
`;

function LastArticle() {
  const data = useLastPost();

  return (
    <Section>
      <ImageContainer>
        <Link
          to={`/news/${data.slug}`}
          css={css`
            width: 100%;
          `}
        >
          <Image fluid={data.image.sharp.fluid} />
        </Link>
      </ImageContainer>
      <div>
        <TagTitle>Последние новости</TagTitle>
        <h2>
          <Link to={`/news/${data.slug}`}>{data.title}</Link>
        </h2>
        <p>{data.excerpt}</p>
        <Link to={`/news/${data.slug}`}>Читать подробнее &rarr;</Link>
      </div>
    </Section>
  );
}

export default LastArticle;
