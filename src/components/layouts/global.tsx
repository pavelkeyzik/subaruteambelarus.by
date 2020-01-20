import React, { useContext, useEffect } from 'react';
import Header from '../header';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Helmet from 'react-helmet';
import { IEmotionTheme } from '../../types/theme';
import Footer from '../footer';
import useSiteMetadata from '../../hooks/use-sitemetadata';
import {
  ThemeContextProvider,
  ThemeContext,
} from '../../contexts/theme-context';
import { getTheme } from '../../themes/get-theme';

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

    p {
      color: ${theme.colors.foreground};
    }

    blockquote {
      display: flex;
      flex-direction: column;
      margin: 30px 0;
      padding: 16px 20px;
      border-left: 4px solid ${theme.colors.blockquoteBorderColor};
      background: ${theme.colors.blockquoteBackground};

      p {
        margin: 0;
        color: ${theme.colors.blockquoteForeground};

        &:not(:last-child) {
          margin-bottom: 0.3rem;
        }
      }
    }

    figure {
      margin: 40px 0;
      text-align: center;

      figcaption {
        font-size: 0.8rem;
        color: ${theme.colors.figureCaptionForeground};
      }
    }
  `;
}

interface ILayout {
  children?: React.ReactNode;
}

function Layout({ children }: ILayout) {
  const { siteName, title, description } = useSiteMetadata();
  const theme = useContext(ThemeContext);
  const themeSchema = getTheme(theme.currentTheme);

  return (
    <ThemeProvider theme={themeSchema}>
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

const GlobalLayout = ({ children }) => {
  return (
    <ThemeContextProvider>
      <Layout>{children}</Layout>
    </ThemeContextProvider>
  );
};

export default GlobalLayout;
