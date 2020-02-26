import React from 'react';
import styled from '@emotion/styled';
import Instagram from '../../static/assets/instagram.svg';
import Vk from '../../static/assets/vk.svg';
import Youtube from '../../static/assets/youtube.svg';
import { socialLinks } from '../constants';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--foreground);
  padding: 40px 20px;
  text-align: center;
  background: var(--stayUpdatedBackground);
`;

const SectionTitle = styled.h2`
  color: var(--headersColor);
  margin-bottom: 0;
`;

const SocialLinks = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;

  & a {
    fill: var(--stayUpdatedSocialLinksFill);
    transition: fill 0.2s;

    :hover {
      fill: var(--stayUpdatedSocialLinksFillHover);
    }
  }
`;

function StayUpdated() {
  return (
    <Section>
      <SectionTitle>Оставайся в курсе последних новостей</SectionTitle>
      <p>
        Чтобы не пропустить новости и мероприятия, подписывайтесь на наши
        социальные сети
      </p>
      <SocialLinks>
        <a href={socialLinks.vk} target="_blank">
          <Vk width="48" height="48" />
        </a>
        <a href={socialLinks.instagram} target="_blank">
          <Instagram width="48" height="48" />
        </a>
        <a href={socialLinks.youtube} target="_blank">
          <Youtube width="48" height="48" />
        </a>
      </SocialLinks>
    </Section>
  );
}

export default StayUpdated;
