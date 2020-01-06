import React from 'react';
import Layout from './global';
import styled from '@emotion/styled';
import { layoutConfig } from '../../components/layouts/config';
import FAQ from '../faq';
import StayUpdated from '../stay-updated';
import LastArticle from '../last-article';

const LayoutContainer = styled.main`
  max-width: 1760px;
  margin: 0 auto;
  padding: 0 ${layoutConfig.small.padding};

  @media screen and (min-width: ${layoutConfig.medium.width}) {
    padding: 0 ${layoutConfig.medium.padding};
  }

  @media screen and (min-width: ${layoutConfig.large.width}) {
    padding: 0 ${layoutConfig.large.padding};
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
