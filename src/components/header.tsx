import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Logo from '../../static/assets/logo.svg';
import { IEmotionStyledTheme } from '../types/theme';
import { TopMenu } from '../gatsby-theme-stb/components/top-menu';
import { NavigationMenuMobile } from '../gatsby-theme-stb/components/navigation-menu-mobile';
import { NavigationMenuDesktop } from '../gatsby-theme-stb/components/navigation-menu-desktop';
import { DesktopOnly } from '../gatsby-theme-stb/components/desktop-only';
import { MobileOnly } from '../gatsby-theme-stb/components/mobile-only';

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

  function handleOpenMenu() {
    setIsNavigationOpened(true);
  }

  function handleCloseMenu() {
    setIsNavigationOpened(false);
  }

  return (
    <TopMenu isNavigationOpened={isNavigationOpened}>
      <LogoLink to="/">
        <AppLogo />
      </LogoLink>
      <React.Fragment>
        <MobileOnly>
          <NavigationMenuMobile
            isOpened={isNavigationOpened}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
          />
        </MobileOnly>
        <DesktopOnly>
          <NavigationMenuDesktop />
        </DesktopOnly>
      </React.Fragment>
    </TopMenu>
  );
}

export default Header;
