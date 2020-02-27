import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import useLastPost from '../hooks/use-last-post';
import { css } from '@emotion/core';
import { layoutConfig } from './layouts/config';
import { routes } from '../constants';
import { VideoIcon } from './video-icon';

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

const PostImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  background: var(--imageBackground);
  border-radius: 6px;
  overflow: hidden;
`;

const PostImage = styled(Image)`
  transition: transform 0.2s;
  transform: scale(1);

  :hover {
    transform: scale(1.05);
  }
`;

const TagTitle = styled.span`
  text-transform: uppercase;
  font-size: 0.7rem;
  color: var(--tagForeground);
`;

const VideoIconContaner = styled.div`
  z-index: 0;
  position: absolute;
  top: 10px;
  right: 10px;
`;

function LastArticle() {
  const data = useLastPost();
  const postEndpoint = `${routes.news}${data.slug}`;

  return (
    <Section>
      <PostImageContainer>
        <Link
          to={postEndpoint}
          css={css`
            width: 100%;
          `}
        >
          <PostImage fluid={data.image.sharp.fluid} />
          {data.hasVideo && (
            <VideoIconContaner>
              <VideoIcon />
            </VideoIconContaner>
          )}
        </Link>
      </PostImageContainer>
      <div>
        <TagTitle>Последние новости</TagTitle>
        <h2>
          <Link to={postEndpoint}>{data.title}</Link>
        </h2>
        <p>{data.excerpt}</p>
        <Link to={postEndpoint}>Читать подробнее &rarr;</Link>
      </div>
    </Section>
  );
}

export default LastArticle;
