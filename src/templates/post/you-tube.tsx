import React from 'react';
import styled from '@emotion/styled';

const IframeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  margin: 40px 0 60px;
  background: var(--embeedBackground);

  iframe,
  object,
  embeed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

interface IYouTube {
  link: string;
}

export function YouTube(props: IYouTube) {
  return (
    <IframeContainer>
      <iframe
        src={props.link}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </IframeContainer>
  );
}
