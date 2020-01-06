import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import useLastPost from '../hooks/use-last-post';
import { css } from '@emotion/core';
import { layoutConfig } from './layouts/config';

const Section = styled.section`
  display: grid;
  align-items: flex-start;
  grid-gap: 30px;
  padding: 110px 0 80px;

  @media screen and (min-width: ${layoutConfig.small.width}) {
    grid-template-columns: 6fr 6fr;
    grid-gap: 60px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 16px;
  background: #e9e9ec;
  box-shadow: 9px 9px 9px #ddd, -9px -9px 9px #fff;
`;

const TagTitle = styled.span`
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #777;
`;

function LastArticle() {
  const data = useLastPost();

  return (
    <Section>
      <ImageContainer>
        <Link
          to={`/${data.slug}`}
          css={css`
            width: 100%;
          `}
        >
          <Image fluid={data.image.sharp.fluid} style={{ borderRadius: 16 }} />
        </Link>
      </ImageContainer>
      <div>
        <TagTitle>Последние новости</TagTitle>
        <h2>{data.title}</h2>
        <p>{data.excerpt}</p>
        <Link to={`/news/${data.slug}`}>Читать подробнее &rarr;</Link>
      </div>
    </Section>
  );
}

export default LastArticle;
