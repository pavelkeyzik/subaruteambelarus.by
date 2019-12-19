import React from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import styled from '@emotion/styled';

const NewsGrid = styled.section`
  display: grid;
  grid-gap: 40px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(4, 1fr);
`;

function NewsPage() {
  const posts = usePosts();
  return (
    <Layout>
      <NewsGrid>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </NewsGrid>
    </Layout>
  );
}

export default NewsPage;
