import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import MenuIcon from '../../../static/assets/menu.svg';
import CloseMenuIcon from '../../../static/assets/x.svg';
import Instagram from '../../../static/assets/instagram.svg';
import Vk from '../../../static/assets/vk.svg';
import Youtube from '../../../static/assets/youtube.svg';
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

const MenuContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  padding: 0 16px;
`;

const SocialLinksMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  a {
    display: flex;
    align-items: center;
    margin: 0 1rem;

    :last-of-type {
      margin-right: 0;
    }

    :first-of-type {
      margin-left: 0;
    }
  }
`;

export function NavigationMenuMobile({ onOpen, onClose, isOpened }) {
  return (
    <div>
      <IconButton onClick={onOpen}>
        <MenuIcon />
      </IconButton>
      {isOpened && (
        <MenuContainer>
          <MenuContainerContent>
            <div>
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
            </div>
            <SocialLinksMenu>
              <a
                href="https://instagram.com/subaruteambelarus.by"
                target="_blank"
              >
                <Instagram width="40" height="40" />
              </a>
              <a href="https://vk.com/subaru_team_belarus" target="_blank">
                <Vk width="40" height="40" />
              </a>
              <a
                href="https://www.youtube.com/user/Skew4eg315/videos"
                target="_blank"
              >
                <Youtube width="40" height="40" />
              </a>
            </SocialLinksMenu>
          </MenuContainerContent>
        </MenuContainer>
      )}
    </div>
  );
}
