import React from 'react';
import { layoutConfig } from '../../components/layouts/config';
import { css } from '@emotion/core';

export function DesktopOnly({ children }) {
  return (
    <div
      css={css`
        display: none;

        @media screen and (min-width: ${layoutConfig.small.width}) {
          display: block;
        }
      `}
    >
      {children}
    </div>
  );
}
