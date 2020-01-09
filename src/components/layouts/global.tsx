import React from 'react';
import Header from '../header';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Helmet from 'react-helmet';
import { IEmotionTheme } from '../../types/theme';
import { lightTheme } from '../../themes/light-theme';
import Footer from '../footer';
import useSiteMetadata from '../../hooks/use-sitemetadata';

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

    p {
      color: #555;
    }

    figure {
      margin: 40px 0;
      text-align: center;

      figcaption {
        font-size: 0.8rem;
        color: #555;
      }
    }
  `;
}

interface ILayout {
  children?: React.ReactNode;
}

function Layout({ children }: ILayout) {
  const { siteName, title, description } = useSiteMetadata();

  return (
    <ThemeProvider theme={lightTheme}>
      <Global styles={getGlobalStyles} />
      <Helmet>
        <html lang="ru" />
        <title>
          {siteName} - {title}
        </title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
