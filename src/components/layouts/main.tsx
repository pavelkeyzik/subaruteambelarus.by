import React from 'react';
import styled from '@emotion/styled';
import GlobalLayout from './global';

interface IMainLayout {
  children?: React.ReactNode;
}

const LayoutContainer = styled.main`
  max-width: 1760px;
  padding: 20px 50px;
  background: #fff;
`;

function MainLayout({ children }: IMainLayout) {
  return (
    <GlobalLayout>
      <LayoutContainer>{children}</LayoutContainer>
    </GlobalLayout>
  );
}

export default MainLayout;
