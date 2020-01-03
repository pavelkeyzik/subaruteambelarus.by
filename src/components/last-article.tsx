import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import useLastPost from '../hooks/use-last-post';
import { css } from '@emotion/core';

const Section = styled.section`
  display: grid;
  grid-template-columns: 600px 1fr;
  grid-gap: 60px;
  padding: 80px 0;
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
        <Link to={`/${data.slug}`}>Читать подробнее &rarr;</Link>
      </div>
    </Section>
  );
}

export default LastArticle;
