import React from 'react';
import Icon from '../../static/assets/video.svg';
import styled from '@emotion/styled';

const VideoIconContaner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  background: rgb(255, 0, 59, 0.7);
  border-radius: 4px;
`;

const VideoIconStyled = styled(Icon)`
  color: white;
`;

export function VideoIcon() {
  return (
    <VideoIconContaner>
      <VideoIconStyled width="16" height="16" />
    </VideoIconContaner>
  );
}
