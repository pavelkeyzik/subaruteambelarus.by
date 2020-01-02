import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../static/assets/logo.svg';
import styled from '@emotion/styled';
import { IEmotionStyledTheme } from '../types/theme';
import { layoutConfig } from './layouts/config';

const AppLogo = styled(Logo)<IEmotionStyledTheme>`
  fill: ${props => props.theme.colors.appLogoForeground};
  width: 120px;
  height: auto;
`;

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  margin: 0 auto;
  max-width: 1760px;
  padding: 0 ${layoutConfig.small.padding};

  @media screen and (min-width: ${layoutConfig.medium.width}) {
    padding: 0 ${layoutConfig.medium.padding};
  }

  @media screen and (min-width: ${layoutConfig.large.width}) {
    padding: 0 ${layoutConfig.large.padding};
  }
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const TopMenuContainer = styled.div<IEmotionStyledTheme>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background: ${props => props.theme.colors.bodyBackground};
  border-bottom: 1px solid ${props => props.theme.colors.headerBorderColor};
`;

const NavLink = styled(Link)<IEmotionStyledTheme>`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.foreground};
  text-decoration: none;
  margin: 0 1rem;
  padding: 0.2rem 0;
  border-bottom: 2px solid transparent;

  &.current-page {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`;

const LogoLink = styled(Link)<IEmotionStyledTheme>`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.foreground};
`;

function Header() {
  return (
    <TopMenuContainer>
      <TopMenu>
        <LogoLink to="/">
          <AppLogo />
        </LogoLink>
        <NavContainer>
          <NavLink to="/" activeClassName="current-page">
            Главная
          </NavLink>
          <NavLink to="/news" activeClassName="current-page">
            Новости
          </NavLink>
        </NavContainer>
      </TopMenu>
    </TopMenuContainer>
  );
}

export default Header;
