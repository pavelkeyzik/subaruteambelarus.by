import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { IPost } from '../types/global';
import Image from 'gatsby-image';
import { layoutConfig } from './layouts/config';
import { routes } from '../constants';
import { VideoIcon } from './video-icon';

const Article = styled.article`
  background: var(--postPreviewBackground);
  box-shadow: var(--postPreviewShadow);
`;

const ArticleContent = styled.div`
  padding: 10px 20px 16px;

  @media screen and (min-width: ${layoutConfig.medium.width}) {
    padding: 10px 36px 20px;
  }
`;

const ArticleTitle = styled.h3`
  margin-bottom: 1.5rem;
`;

const PostImage = styled(Image)``;

const PostImageSection = styled.div`
  position: relative;
  overflow: hidden;

  ${PostImage} {
    transition: transform 0.2s;
    transform: scale(1);
  }

  :hover ${PostImage} {
    transform: scale(1.05);
  }
`;

const VideoIconContaner = styled.div`
  z-index: 0;
  position: absolute;
  top: 10px;
  right: 10px;
`;

interface IPostPreview {
  post: IPost;
}

function PostPreview({ post }: IPostPreview) {
  const postEndpoint = `${routes.news}${post.slug}`;

  return (
    <Article>
      <Link to={postEndpoint}>
        <PostImageSection>
          <PostImage fluid={post.image.sharp.fluid} alt={post.title} fadeIn />
          {post.hasVideo && (
            <VideoIconContaner>
              <VideoIcon />
            </VideoIconContaner>
          )}
        </PostImageSection>
      </Link>
      <ArticleContent>
        <ArticleTitle>
          <Link to={postEndpoint}>{post.title}</Link>
        </ArticleTitle>
        <p>{post.excerpt}</p>
      </ArticleContent>
    </Article>
  );
}

export default PostPreview;
