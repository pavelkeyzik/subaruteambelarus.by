import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Instagram from '../../static/assets/instagram.svg';
import Vk from '../../static/assets/vk.svg';
import Youtube from '../../static/assets/youtube.svg';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
`;

const SocialLink = styled(Link)`
  color: red;
`;

function StayUpdated() {
  return (
    <Section>
      <h2>Оставайся в курсе последних новостией</h2>
      <p>
        Чтобы не пропустить новости и мероприятия, подписывайтесь на наши
        социальные сети
      </p>
      <SocialLinks>
        <a href="https://instagram.com/subaruteambelarus.by" target="_blank">
          <Instagram width="34" height="34" />
        </a>
        <a href="https://vk.com/subaru_team_belarus" target="_blank">
          <Vk width="34" height="34" />
        </a>
        <a
          href="https://www.youtube.com/user/Skew4eg315/videos"
          target="_blank"
        >
          <Youtube width="34" height="34" />
        </a>
      </SocialLinks>
    </Section>
  );
}

export default StayUpdated;
