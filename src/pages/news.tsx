import React from 'react';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import styled from '@emotion/styled';
import MainLayout from '../components/layouts/main';
import { layoutConfig } from '../components/layouts/config';

const NewsGrid = styled.section`
  display: grid;
  grid-gap: 40px;
  grid-auto-flow: dense;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${layoutConfig.medium.width}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${layoutConfig.large.width}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function NewsPage() {
  const posts = usePosts();
  return (
    <MainLayout>
      <NewsGrid>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </NewsGrid>
    </MainLayout>
  );
}

export default NewsPage;
