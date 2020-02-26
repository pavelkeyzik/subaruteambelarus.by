import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { IPost } from '../types/global';
import Image from 'gatsby-image';
import { layoutConfig } from './layouts/config';
import { routes } from '../constants';

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

const PostImage = styled(Image)`
  transition: transform 0.2s;
  transform: scale(1.02);

  :hover {
    transform: scale(1);
  }
`;

const PostImageSection = styled.div`
  overflow: hidden;
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
