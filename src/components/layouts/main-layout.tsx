import React from 'react';
import styled from '@emotion/styled';
import Layout from '../layout';
import { layoutConfig } from './config';

interface IMainLayout {
  children?: React.ReactNode;
}

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

function MainLayout({ children }: IMainLayout) {
  return (
    <Layout>
      <LayoutContainer>{children}</LayoutContainer>
    </Layout>
  );
}

export default MainLayout;
