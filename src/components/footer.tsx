import React from 'react';
import styled from '@emotion/styled';
import { layoutConfig } from './layouts/config';
import Instagram from '../../static/assets/instagram.svg';
import Vk from '../../static/assets/vk.svg';
import Youtube from '../../static/assets/youtube.svg';

const FooterContainer = styled.footer`
  max-width: 1760px;
  padding: 0 40px;
  margin: 40px auto 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.footerBorderColor};
  padding: 30px 0 40px;

  span {
    color: ${props => props.theme.colors.footerCopyrightColor};
    font-size: 0.75rem;
    margin-bottom: 20px;
    text-align: center;
  }

  @media screen and (min-width: ${layoutConfig.small.width}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;

    span {
      margin-bottom: 0;
    }
  }
`;

const SocialLinksMenu = styled.nav`
  display: flex;

  a {
    margin: 0 0.7rem;

    svg {
      fill: ${props => props.theme.colors.socialsColor};
    }

    :last-child {
      margin-right: 0;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <span>Все права защищены &copy; 2014-{new Date().getFullYear()}</span>
        <SocialLinksMenu>
          <a href="https://instagram.com/subaruteambelarus.by" target="_blank">
            <Instagram width="24" height="24" />
          </a>
          <a href="https://vk.com/subaru_team_belarus" target="_blank">
            <Vk width="24" height="24" />
          </a>
          <a
            href="https://www.youtube.com/user/Skew4eg315/videos"
            target="_blank"
          >
            <Youtube width="24" height="24" />
          </a>
        </SocialLinksMenu>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
