import React from 'react';
import styled from '@emotion/styled';

const Layout = styled.div`
  padding: 0 calc((100vw - 1020px + 30px) / 2);
`;

interface ILayoutContainer {
  children?: React.ReactNode;
}

function LayoutContainer({ children }: ILayoutContainer) {
  return <Layout>{children}</Layout>;
}

export default LayoutContainer;
