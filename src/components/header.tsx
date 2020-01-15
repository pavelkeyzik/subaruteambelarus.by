import React, { useState } from 'react';
import useMediaQuery from 'use-media-query-hook';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Logo from '../../static/assets/logo.svg';
import { IEmotionStyledTheme } from '../types/theme';
import { TopMenu } from '../gatsby-theme-stb/components/top-menu';
import { layoutConfig } from './layouts/config';
import { NavigationMenuMobile } from '../gatsby-theme-stb/components/navigation-menu-mobile';
import { NavigationMenuDesktop } from '../gatsby-theme-stb/components/navigation-menu-desktop';

const AppLogo = styled(Logo)<IEmotionStyledTheme>`
  fill: ${props => props.theme.colors.appLogoForeground};
  width: 120px;
  height: auto;
`;

const LogoLink = styled(Link)<IEmotionStyledTheme>`
  display: flex;
  align-items: center;
`;

function Header() {
  const [isNavigationOpened, setIsNavigationOpened] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${layoutConfig.small.width})`);

  function handleOpenMenu() {
    setIsNavigationOpened(true);
  }

  function handleCloseMenu() {
    setIsNavigationOpened(false);
  }

  if (isMobile === null) {
    return null;
  }

  return (
    <TopMenu isNavigationOpened={isNavigationOpened}>
      <LogoLink to="/">
        <AppLogo />
      </LogoLink>
      {isMobile ? (
        <NavigationMenuMobile
          isOpened={isNavigationOpened}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
        />
      ) : (
        <NavigationMenuDesktop />
      )}
    </TopMenu>
  );
}

export default Header;
