import React from 'react';
import styled from '@emotion/styled';
import Instagram from '../../static/assets/instagram.svg';
import Vk from '../../static/assets/vk.svg';
import Youtube from '../../static/assets/youtube.svg';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.foreground};
  padding: 40px 0;
  color: #fff;
`;

const SectionTitle = styled.h2`
  color: #fff;
  margin-bottom: 0;
`;

const SocialLinks = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;

  & a {
    fill: #fff;
  }
`;

function StayUpdated() {
  return (
    <Section>
      <SectionTitle>Оставайся в курсе последних новостией</SectionTitle>
      <p>
        Чтобы не пропустить новости и мероприятия, подписывайтесь на наши
        социальные сети
      </p>
      <SocialLinks>
        <a href="https://vk.com/subaru_team_belarus" target="_blank">
          <Vk width="48" height="48" />
        </a>
        <a href="https://instagram.com/subaruteambelarus.by" target="_blank">
          <Instagram width="48" height="48" />
        </a>
        <a
          href="https://www.youtube.com/user/Skew4eg315/videos"
          target="_blank"
        >
          <Youtube width="48" height="48" />
        </a>
      </SocialLinks>
    </Section>
  );
}

export default StayUpdated;
