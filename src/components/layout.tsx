import React from 'react';
import Header from './header';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { IEmotionTheme } from '../types/theme';
import { darkTheme } from '../themes/dark-theme';

const Main = styled.main`
  padding: 0 calc((100vw - 1020px) / 2);
`;

function getGlobalStyles(theme: IEmotionTheme) {
  return `
    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      background: ${theme.colors.bodyBackground};
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      font-size: 18px;
      line-height: 1.4;
    }
  `;
}

interface ILayout {
  children?: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Global styles={getGlobalStyles} />
      <Header />
      <Main>{children}</Main>
    </ThemeProvider>
  );
}

export default Layout;
