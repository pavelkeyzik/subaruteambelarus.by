import React from 'react';
import styled from '@emotion/styled';
import GlobalLayout from './global';
import { layoutConfig } from './config';

const Root = styled.div`
  max-width: 1760px;
  margin: 30px auto 0;

  @media screen and (min-width: ${layoutConfig.small.width}) {
    margin: 60px auto 0;
  }
`;

const Inner = styled.div`
  margin: 30px 0 0;
  padding: 0 16px;

  @media screen and (min-width: ${layoutConfig.small.width}) {
    margin: 60px 40px 0;
    padding: 0;
  }
`;

function LayoutWidth({ children }) {
  return (
    <GlobalLayout>
      <Root>
        <Inner>{children}</Inner>
      </Root>
    </GlobalLayout>
  );
}

export default LayoutWidth;
