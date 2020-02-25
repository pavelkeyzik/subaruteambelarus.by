import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';
import ArticleLayout from '../components/layouts/article';
import useSiteMetadata from '../hooks/use-sitemetadata';
import styled from '@emotion/styled';
import { layoutConfig } from '../components/layouts/config';
import { YouTube } from './post/you-tube';

export const query = graphql`
  query PostData($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt
      frontmatter {
        title
        author
        image {
          sharp: childImageSharp {
            fluid(
              maxWidth: 1760
              duotone: { shadow: "#001932", highlight: "#f6faff" }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;

const ArticleContent = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: ${layoutConfig.small.width}) {
    padding: 0 40px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

const ImageContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 5%;
  font-size: 0.6rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;

  @media screen and (min-width: ${layoutConfig.small.width}) {
    padding: 0 10%;
    font-size: 1rem;
  }

  h1 {
    color: var(--articleBigTitleForeground);
  }
`;

function PostTemplate({ data: { mdx: post } }) {
  const { siteName } = useSiteMetadata();

  return (
    <React.Fragment>
      <Helmet>
        <title>
          {siteName} - {post.frontmatter.title}
        </title>
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:image"
          content={post.frontmatter.image.sharp.fluid.src}
        />
        <script type="application/ld+json">
          {`{
            '@context': 'https://schema.org/',
            '@type': 'NewsArticle',
            'email': 'subaruteambelarus.by@gmail.com',
            'headline': '${post.frontmatter.title}',
          }`}
        </script>
      </Helmet>
      <ArticleLayout>
        <ImageContainer>
          <Image
            style={{ maxHeight: 450 }}
            fluid={post.frontmatter.image.sharp.fluid}
          />
          <ImageContent>
            <h1>{post.frontmatter.title}</h1>
          </ImageContent>
        </ImageContainer>
        <ArticleContent>
          <MDXProvider components={{ YouTube }}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </ArticleContent>
      </ArticleLayout>
    </React.Fragment>
  );
}

export default PostTemplate;
