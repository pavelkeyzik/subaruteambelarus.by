import React from 'react';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import { layoutConfig } from '../components/layouts/config';
import useSiteMetadata from '../hooks/use-sitemetadata';
import LayoutWidth from '../components/layouts/layout-width';

const NewsGrid = styled.section`
  display: grid;
  grid-gap: 40px;
  grid-auto-flow: dense;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${layoutConfig.medium.width}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${layoutConfig.large.width}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NewsTitle = styled.h2`
  margin-top: 0;
`;

function NewsPage() {
  const pageTitle = 'Новости';
  const posts = usePosts();
  const { siteName } = useSiteMetadata();

  return (
    <LayoutWidth>
      <Helmet>
        <title>
          {siteName} - {pageTitle}
        </title>
      </Helmet>
      <NewsTitle>{pageTitle}</NewsTitle>
      <NewsGrid>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </NewsGrid>
    </LayoutWidth>
  );
}

export default NewsPage;
