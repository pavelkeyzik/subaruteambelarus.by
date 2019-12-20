import React from 'react';
import Layout from './global';
import Header from '../main-header';
import styled from '@emotion/styled';
import { layoutConfig } from '../../components/layouts/config';

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

function HomeLayout({ children }) {
  return (
    <Layout>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </Layout>
  );
}

export default HomeLayout;
