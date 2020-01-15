import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import MenuIcon from '../../../static/assets/menu.svg';
import CloseMenuIcon from '../../../static/assets/x.svg';
import { IconButton } from './icon-button';

const MobileNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  a {
    display: flex;
    color: #444;
    font-weight: bold;
    font-size: 1.1rem;
    text-decoration: none;
    padding: 0.3rem 0;

    &.current-page {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
`;

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  padding: 0 16px;
`;

export function NavigationMenuMobile({ onOpen, onClose, isOpened }) {
  return (
    <div>
      <IconButton onClick={onOpen}>
        <MenuIcon />
      </IconButton>
      {isOpened && (
        <MenuContainer>
          <MenuHeader>
            <IconButton onClick={onClose}>
              <CloseMenuIcon />
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
