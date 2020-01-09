import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';
import ArticleLayout from '../components/layouts/article';
import useSiteMetadata from '../hooks/use-sitemetadata';
import styled from '@emotion/styled';

export const query = graphql`
  query PostData($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
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
  padding: 0 40px;
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
  padding: 0 20%;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;

  h1 {
    color: #fff;
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
          <MDXRenderer>{post.body}</MDXRenderer>
        </ArticleContent>
      </ArticleLayout>
    </React.Fragment>
  );
}

export default PostTemplate;
