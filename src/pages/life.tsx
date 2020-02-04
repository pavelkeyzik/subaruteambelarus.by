import React from 'react';
import { css } from '@emotion/core';
import { events, IEventSection, IEvent } from './life/events';
import { EventLabel } from './life/event-label';
import ArticleLayout from '../components/layouts/article';
import { layoutConfig } from '../components/layouts/config';
import styled from '@emotion/styled';

const mainCSS = css`
  ul {
    padding: 0;
  }

  ul li {
    list-style-type: none;
    margin: 16px 0;
  }
`;

const ArticleContent = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: ${layoutConfig.small.width}) {
    padding: 0 40px;
  }
`;

function LifePage() {
  return (
    <ArticleLayout>
      <ArticleContent>
        <h2>Линия жизни</h2>
        <main css={mainCSS}>
          {events.map((event: IEventSection, index: number) => (
            <section key={index}>
              <h3>{event.headerTitle}</h3>
              <ul>
                {event.data.map((eventData: IEvent, eventDataIndex: number) => (
                  <li key={eventDataIndex}>
                    <EventLabel type={eventData.type} />
                    <span>
                      {eventData.link ? (
                        <a href={eventData.link} target="__blank">
                          {eventData.title}
                        </a>
                      ) : (
                        eventData.title
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>
      </ArticleContent>
    </ArticleLayout>
  );
}

export default LifePage;
