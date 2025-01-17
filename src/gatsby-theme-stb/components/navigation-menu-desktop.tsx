import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { layoutConfig } from '../../components/layouts/config';
import { ToggleThemeButton } from './toggle-theme-button';
import { routes } from '../../constants';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: var(--foreground);
    text-decoration: none;
    margin: 0 0.5rem;
    padding: 0.2rem 0;
    border-bottom: 2px solid transparent;

    :hover {
      color: var(--foregroundHover);
    }

    &.current-page {
      border-bottom: 2px solid var(--primary);
      color: var(--foregroundActive);
    }

    @media screen and (min-width: ${layoutConfig.small.width}) {
      margin: 0 1rem;
    }
  }
`;

const ToggleButtonContainer = styled.div`
  margin-left: 20px;
`;

export function NavigationMenuDesktop() {
  return (
    <NavContainer>
      <Link to={routes.home} activeClassName="current-page">
        Главная
      </Link>
      <Link to={routes.news} activeClassName="current-page">
        Новости
      </Link>
      <ToggleButtonContainer>
        <ToggleThemeButton />
      </ToggleButtonContainer>
    </NavContainer>
  );
}
