import React from 'react';
import styled from '@emotion/styled';
import GlobalLayout from './global';

const Root = styled.div`
  max-width: 1760px;
  margin: 50px auto 0;
`;

const Inner = styled.div`
  margin: 60px 40px 0;
  padding: 10px 40px;
  background: #fff;
  border: 1px solid ${props => props.theme.colors.headerBorderColor};
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
