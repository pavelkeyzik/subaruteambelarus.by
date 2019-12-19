import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../static/assets/logo.svg';
import styled from '@emotion/styled';
import { IEmotionStyledTheme } from '../types/theme';

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
  padding: 0 80px;
  margin: 0 auto;
  max-width: 1760px;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const HeaderContainer = styled.div<IEmotionStyledTheme>`
  border-bottom: 1px solid ${props => props.theme.colors.headerBorderColor};
  margin-bottom: 40px;
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
    <HeaderContainer>
      <TopMenu>
        <LogoLink>
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
    </HeaderContainer>
  );
}

export default Header;
