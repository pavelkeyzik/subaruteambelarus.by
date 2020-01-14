import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../static/assets/logo.svg';
import styled from '@emotion/styled';
import { IEmotionStyledTheme } from '../types/theme';
import { layoutConfig } from './layouts/config';
import { TopMenu } from '../gatsby-theme-stb/components/top-menu';

const AppLogo = styled(Logo)<IEmotionStyledTheme>`
  fill: ${props => props.theme.colors.appLogoForeground};
  width: 120px;
  height: auto;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)<IEmotionStyledTheme>`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.foreground};
  text-decoration: none;
  margin: 0 0.5rem;
  padding: 0.2rem 0;
  border-bottom: 2px solid transparent;

  &.current-page {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }

  @media screen and (min-width: ${layoutConfig.small.width}) {
    margin: 0 1rem;
  }
`;

const LogoLink = styled(Link)<IEmotionStyledTheme>`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.foreground};
`;

function Header() {
  return (
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
  );
}

export default Header;
