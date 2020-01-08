import { graphql, useStaticQuery } from 'gatsby';

function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query SiteData {
      site {
        siteMetadata {
          title
          description
          siteName
        }
      }
    }
  `);

  return data.site.siteMetadata;
}

export default useSiteMetadata;
