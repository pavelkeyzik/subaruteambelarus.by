import React from 'react';
import styled from '@emotion/styled';
import { layoutConfig } from './layouts/config';
import Instagram from '../../static/assets/instagram.svg';
import Vk from '../../static/assets/vk.svg';
import Youtube from '../../static/assets/youtube.svg';
import { socialLinks } from '../constants';

const FooterContainer = styled.footer`
  max-width: 1760px;
  padding: 0 16px;
  margin: 40px auto 0;

  @media screen and (min-width: ${layoutConfig.small.width}) {
    padding: 0 40px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid var(--footerBorderColor);
  padding: 30px 0 40px;

  span {
    color: var(--footerCopyrightColor);
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
    fill: var(--stayUpdatedSocialLinksFill);
    transition: fill 0.2s;

    :hover {
      fill: var(--stayUpdatedSocialLinksFillHover);
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
          <a href={socialLinks.instagram} target="_blank">
            <Instagram width="24" height="24" />
          </a>
          <a href={socialLinks.vk} target="_blank">
            <Vk width="24" height="24" />
          </a>
          <a href={socialLinks.youtube} target="_blank">
            <Youtube width="24" height="24" />
          </a>
        </SocialLinksMenu>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
