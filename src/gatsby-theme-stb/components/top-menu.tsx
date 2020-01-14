import React from 'react';
import styled from '@emotion/styled';
import { layoutConfig } from '../../components/layouts/config';
import { IEmotionStyledTheme } from '../../types/theme';

const MENU_HEIGHT = 70;

const Container = styled.div<IEmotionStyledTheme>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background: ${props => props.theme.colors.headerBackground};
  border-bottom: 1px solid ${props => props.theme.colors.headerBorderColor};
`;

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: ${MENU_HEIGHT}px;
  margin: 0 auto;
  max-width: 1760px;
  padding: 0 16px;

  @media screen and (min-width: ${layoutConfig.small.width}) {
    padding: 0 40px;
  }
`;

const MenuSpace = styled.div`
  display: flex;
  height: ${MENU_HEIGHT}px;
`;

export function TopMenu({ children }) {
  return (
    <React.Fragment>
      <Container>
        <Root>{children}</Root>
      </Container>
      <MenuSpace />
    </React.Fragment>
  );
}
