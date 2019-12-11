import React from 'react';
import Header from './header';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { IEmotionTheme } from '../types/theme';
import { darkTheme } from '../themes/dark-theme';

const Main = styled.main`
  padding: 0 calc((100vw - 1020px) / 2);
  margin: 0 1rem;
`;

function getGlobalStyles(theme: IEmotionTheme) {
  return `
    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      background: ${theme.colors.bodyBackground};
      color: ${theme.colors.bodyForeground};
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      font-size: 18px;
      line-height: 1.4;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.headersColor};
    }

    a {
      color: ${theme.colors.linkColor};
    }

    blockquote {
      display: flex;
      flex-direction: column;
      margin: 30px 0;
      padding: 16px 20px;
      border-left: 4px solid ${theme.colors.blockquoteBorderColor};
      background: ${theme.colors.blockquoteBackground};
      color: ${theme.colors.blockquoteForeground};

      p {
        margin: 0;

        &:not(:last-child) {
          margin-bottom: 0.3rem;
        }
      }
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
