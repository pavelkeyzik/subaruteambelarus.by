import React from 'react';
import { layoutConfig } from '../../components/layouts/config';
import { css } from '@emotion/core';

export function MobileOnly({ children }) {
  return (
    <div
      css={css`
        display: block;

        @media screen and (min-width: ${layoutConfig.small.width}) {
          display: none;
        }
      `}
    >
      {children}
    </div>
  );
}
