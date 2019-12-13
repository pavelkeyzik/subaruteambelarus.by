import React from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import styled from '@emotion/styled';

const NewsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* grid-template-rows: auto auto auto;
   */
  grid-auto-flow: dense;
  grid-gap: 40px;
`;

function NewsPage() {
  const posts = usePosts();
  return (
    <Layout>
      <h2>Новости</h2>
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
