import React, { ReactNode } from 'react';
import Header from '../header';
import { Global } from '@emotion/core';
import Helmet from 'react-helmet';
import Footer from '../footer';
import useSiteMetadata from '../../hooks/use-sitemetadata';
import { ThemeContextProvider } from '../../contexts/theme-context';
import { getTheme } from '../../themes/get-theme';
import { availableThemes, socialLinks } from '../../constants';

function getThemesForBody() {
  const themes = Object.keys(availableThemes);

  return themes
    .map(theme => {
      return `
        body.${theme} {
          ${getTheme(theme)}
        }
      `;
    })
    .join('\n');
}

function getGlobalStyles() {
  return `
    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      background: var(--bodyBackground);
      color: var(--foreground);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      font-size: 18px;
      line-height: 1.4;
    }

    ${getThemesForBody()}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--headersColor);
    }

    a {
      color: var(--linkColor);
      transition: color .2s;

      :hover {
        color: var(--linkColorHover);
      }
    }

    p {
      color: var(--foreground);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 30px 0 40px;

      td,
      th {
        border: 1px solid var(--tableBorderColor);
      }

      td, th {
        padding: 15px 20px;
      }
    }

    blockquote {
      display: flex;
      flex-direction: column;
      margin: 30px 0;
      padding: 16px 20px;
      border-left: 4px solid var(--blockquoteBorderColor);
      background: var(--blockquoteBackground);

      p {
        margin: 0;
        color: var(--blockquoteForeground);

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
        color: var(--figureCaptionForeground);
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
    <React.Fragment>
      <Global styles={getGlobalStyles} />
      <Helmet>
        <html lang="ru" />
        <title>
          {siteName} - {title}
        </title>
        <meta name="description" content={description} />
        <script type="application/ld+json">
          {`
            {
              "@context" : "http://schema.org",
              "@type" : "Organization",
              "name" : "SUBARU TEAM BELARUS",
              "url" : "${socialLinks.site}",
              "sameAs" : [
                "${socialLinks.vk}",
                "${socialLinks.youtube}",
                "${socialLinks.instagram}",
              ],
            }
        `}
        </script>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

interface IGlobalLayout {
  children: ReactNode;
}

function GlobalLayout({ children }: IGlobalLayout) {
  return (
    <ThemeContextProvider>
      <Layout>{children}</Layout>
    </ThemeContextProvider>
  );
}

export default GlobalLayout;
