import React from 'react';
import styled from '@emotion/styled';
import GlobalLayout from './global';
import { layoutConfig } from './config';

interface IArticleLayout {
  children?: React.ReactNode;
}

const LayoutContainer = styled.div`
  max-width: 1760px;
  margin: 60px auto 0;
`;

const LayoutContainerInner = styled.main`
  background: #fff;
  margin: 0 16px;
  padding-bottom: 60px;
  border: 1px solid ${props => props.theme.colors.headerBorderColor};

  @media screen and (min-width: ${layoutConfig.small.width}) {
    margin: 0 40px;
  }
`;

function ArticleLayout({ children }: IArticleLayout) {
  return (
    <GlobalLayout>
      <LayoutContainer>
        <LayoutContainerInner>{children}</LayoutContainerInner>
      </LayoutContainer>
    </GlobalLayout>
  );
}

export default ArticleLayout;
