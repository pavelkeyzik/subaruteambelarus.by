import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import MenuIcon from '../../../static/assets/menu.svg';
import CloseMenuIcon from '../../../static/assets/x.svg';
import { IconButton } from './icon-button';
import { ToggleThemeButton } from './toggle-theme-button';
import { routes } from '../../constants';

const MobileNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  a {
    display: flex;
    color: var(--mobileMenuLinksColor);
    font-weight: bold;
    font-size: 1.1rem;
    text-decoration: none;
    padding: 0.3rem 0;

    &.current-page {
      color: var(--primary);
    }
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--mobileMenuBackground);
`;

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  padding: 0 16px;
`;

const MenuIconThemed = styled(MenuIcon)`
  color: var(--mobileMenuIconColor);
`;

const CloseMenuIconThemed = styled(CloseMenuIcon)`
  color: var(--mobileMenuIconColor);
`;

const ToggleThemeButtonContaner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 40px;
`;

interface INavigationMenuMobile {
  onOpen: () => void;
  onClose: () => void;
  isOpened: boolean;
}

export function NavigationMenuMobile({
  onOpen,
  onClose,
  isOpened,
}: INavigationMenuMobile) {
  return (
    <div>
      <IconButton onClick={onOpen}>
        <MenuIconThemed />
      </IconButton>
      {isOpened && (
        <MenuContainer>
          <MenuHeader>
            <IconButton onClick={onClose}>
              <CloseMenuIconThemed />
            </IconButton>
          </MenuHeader>
          <MobileNavContainer>
            <Link to={routes.home} activeClassName="current-page">
              Главная
            </Link>
            <Link to={routes.news} activeClassName="current-page">
              Новости
            </Link>
          </MobileNavContainer>
          <ToggleThemeButtonContaner>
            <ToggleThemeButton withText />
          </ToggleThemeButtonContaner>
        </MenuContainer>
      )}
    </div>
  );
}
