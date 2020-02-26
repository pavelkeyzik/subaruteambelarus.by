import React, { ReactNode } from 'react';
import { layoutConfig } from '../../components/layouts/config';
import { css } from '@emotion/core';

interface IDesktopOnly {
  children: ReactNode;
}

export function DesktopOnly({ children }: IDesktopOnly) {
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
