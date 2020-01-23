import React from 'react';
import { EventType } from './events';
import styled from '@emotion/styled';

interface IEventType {
  type: EventType;
}

const Label = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 20px;
  width: 100px;
  padding: 6px 0;
  font-size: 0.8rem;
  color: #fff;
`;

const GreenLabel = styled(Label)`
  background: #36ab71;
`;

const PurpleLabel = styled(Label)`
  background: #ff4b4d;
`;

const BlueLabel = styled(Label)`
  background: #1e90ff;
`;

export function EventLabel({ type }: IEventType) {
  switch (type) {
    case 'carmeet':
      return <GreenLabel>Сходка</GreenLabel>;
    case 'trip':
      return <PurpleLabel>Поездка</PurpleLabel>;
    case 'competition':
      return <BlueLabel>Гонки</BlueLabel>;
  }
}
