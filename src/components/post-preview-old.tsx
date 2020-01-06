import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { IEmotionStyledTheme } from '../types/theme';
import { IPost } from '../types/global';
import Image from 'gatsby-image';

const Article = styled.article<IEmotionStyledTheme>``;

interface IPostPreview {
  post: IPost;
}

function PostPreview({ post }: IPostPreview) {
  return (
    <Article>
      <Link to={`/news/${post.slug}`}>
        <Image fluid={post.image.sharp.fluid} alt={post.title} fadeIn />
      </Link>
      <h3>
        <Link to={`/news/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
    </Article>
  );
}

export default PostPreview;
