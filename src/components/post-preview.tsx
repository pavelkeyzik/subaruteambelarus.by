import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { IEmotionStyledTheme } from '../types/theme';
import BackgroundImage from 'gatsby-background-image';
import { IPost } from '../types/global';
import { layoutConfig } from './layouts/config';

const Article = styled.article<IEmotionStyledTheme>`
  position: relative;
  background: ${props => props.theme.colors.postPreviewBackground};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.headerBorderColor};
  overflow: hidden;
  height: 250px;

  :nth-of-type(1) {
    @media screen and (min-width: ${layoutConfig.medium.width}) {
      height: 550px;
      grid-column: span 2;
    }

    @media screen and (min-width: ${layoutConfig.large.width}) {
      grid-column: span 4;
    }
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
`;

interface IPostPreview {
  post: IPost;
}

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  background-position: center;
  background-size: cover;
  height: 100%;
`;

function PostPreview({ post }: IPostPreview) {
  return (
    <Article>
      <ImageBackground
        Tag="section"
        fluid={post.image.sharp.fluid}
        alt={post.title}
        fadeIn="soft"
      >
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
        </ArticleContent>
      </ImageBackground>
    </Article>
  );
}

export default PostPreview;
