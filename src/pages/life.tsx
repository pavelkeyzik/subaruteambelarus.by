import React from 'react';
import LayoutWidth from '../components/layouts/layout-width';
import { css } from '@emotion/core';
import { events, IEventSection, IEvent } from './life/events';
import { EventLabel } from './life/event-label';

const mainCSS = css`
  ul {
    padding: 0;
  }

  ul li {
    list-style-type: none;
    margin: 16px 0;
  }
`;

function LifePage() {
  return (
    <LayoutWidth>
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
    </LayoutWidth>
  );
}

export default LifePage;
