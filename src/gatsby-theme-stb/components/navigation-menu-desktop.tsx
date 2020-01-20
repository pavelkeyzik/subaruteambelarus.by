import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { layoutConfig } from '../../components/layouts/config';
import { ToggleThemeButton } from './toggle-theme-button';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  a {
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
  }
`;

export function NavigationMenuDesktop() {
  return (
    <NavContainer>
      <Link to="/" activeClassName="current-page">
        Главная
      </Link>
      <Link to="/news" activeClassName="current-page">
        Новости
      </Link>
      <ToggleThemeButton />
    </NavContainer>
  );
}
