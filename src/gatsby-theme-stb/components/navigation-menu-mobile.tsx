import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import MenuIcon from '../../../static/assets/menu.svg';
import CloseMenuIcon from '../../../static/assets/x.svg';
import { IconButton } from './icon-button';
import { IEmotionStyledTheme } from '../../types/theme';

const MobileNavContainer = styled.nav<IEmotionStyledTheme>`
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  a {
    display: flex;
    color: ${props => props.theme.colors.mobileMenuLinksColor};
    font-weight: bold;
    font-size: 1.1rem;
    text-decoration: none;
    padding: 0.3rem 0;

    &.current-page {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const MenuContainer = styled.div<IEmotionStyledTheme>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.mobileMenuBackground};
`;

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  padding: 0 16px;
`;

const MenuIconThemed = styled(MenuIcon)<IEmotionStyledTheme>`
  color: ${props => props.theme.colors.mobileMenuIconColor};
`;

const CloseMenuIconThemed = styled(CloseMenuIcon)<IEmotionStyledTheme>`
  color: ${props => props.theme.colors.mobileMenuIconColor};
`;

export function NavigationMenuMobile({ onOpen, onClose, isOpened }) {
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
            <Link to="/" activeClassName="current-page">
              Главная
            </Link>
            <Link to="/news" activeClassName="current-page">
              Новости
            </Link>
          </MobileNavContainer>
        </MenuContainer>
      )}
    </div>
  );
}
