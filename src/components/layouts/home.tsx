import React from 'react';
import Layout from './global';
import styled from '@emotion/styled';
import FAQ from '../faq';
import StayUpdated from '../stay-updated';
import LastArticle from '../last-article';
import { layoutConfig } from './config';

const LayoutContainer = styled.main`
  max-width: 1760px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: ${layoutConfig.small.width}) {
    padding: 0 40px;
  }
`;

function HomeLayout() {
  return (
    <Layout>
      <LayoutContainer>
        <LastArticle />
      </LayoutContainer>
      <StayUpdated />
      <LayoutContainer>
        <FAQ />
      </LayoutContainer>
    </Layout>
  );
}

export default HomeLayout;
