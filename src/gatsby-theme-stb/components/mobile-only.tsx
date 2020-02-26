import React, { ReactNode } from 'react';
import { layoutConfig } from '../../components/layouts/config';
import { css } from '@emotion/core';

interface IMobileOnly {
  children: ReactNode;
}

export function MobileOnly({ children }: IMobileOnly) {
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
