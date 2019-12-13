import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { IEmotionStyledTheme } from '../types/theme';
import Image from 'gatsby-image';
import { IPost } from '../types/global';

const Article = styled.article<IEmotionStyledTheme>`
  position: relative;
  background: ${props => props.theme.colors.postPreviewBackground};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.5);
  grid-column: span 4;
  height: 350px;

  :nth-of-type(1) {
    grid-column: span 8;
    grid-row: span 2;
  }

  :nth-of-type(2) {
    grid-column: span 4;
    grid-row: span 2;
  }

  :nth-of-type(3),
  :nth-of-type(4) {
    grid-column: span 6;
    grid-row: span 1;
  }
`;

const ArticleContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 40px 40px;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1));
`;

interface IPostPreview {
  post: IPost;
}

function PostPreview({ post }: IPostPreview) {
  return (
    <Article>
      <Link
        to={post.slug}
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <Image fluid={post.image.sharp.fluid} alt={post.title} />
      </Link>
      <ArticleContent>
        <Link
          to={post.slug}
          css={css`
            color: #fff;
            font-weight: bold;
            font-size: 1.3rem;
          `}
        >
          {post.title}
        </Link>
        {/* <p>{post.excerpt}</p> */}
      </ArticleContent>
    </Article>
  );
}

export default PostPreview;
