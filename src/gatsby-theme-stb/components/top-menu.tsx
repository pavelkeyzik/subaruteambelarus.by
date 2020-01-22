import React from 'react';
import styled from '@emotion/styled';
import { layoutConfig } from '../../components/layouts/config';
import { useMenuVisibility } from '../hooks/use-menu-visibility';

const MENU_HEIGHT = 70;

interface IContainer {
  isVisible: boolean;
}

const Container = styled.div<IContainer>`
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 300ms;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background: var(--headerBackground);
  border-bottom: 1px solid var(--headerBorderColor);

  ${({ isVisible }) =>
    isVisible
      ? `
        visibility: visible;
        top: 0px;
        opacity: 1;
        transition: visibility 0s linear 0s, opacity 300ms, top 100ms linear;
      `
      : `
        visibility: hidden;
        top: -${MENU_HEIGHT}px;
        opacity: 0;
        transition: visibility 0s linear 300ms, opacity 300ms, top 100ms linear;
      `}
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

interface ITopMenu {
  isNavigationOpened: boolean;
  children?: React.ReactNode;
}

export function TopMenu({ isNavigationOpened, children }: ITopMenu) {
  const [isVisible] = useMenuVisibility(MENU_HEIGHT);

  return (
    <React.Fragment>
      <Container isVisible={isNavigationOpened || isVisible}>
        <Root>{children}</Root>
      </Container>
      <MenuSpace />
    </React.Fragment>
  );
}
