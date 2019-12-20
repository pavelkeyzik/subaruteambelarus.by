import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import ArticleLayout from '../components/layouts/article';

export const query = graphql`
  query PostData($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

function PostTemplate({ data: { mdx: post } }) {
  return (
    <ArticleLayout>
      <Link to="/news">&larr; Все новости</Link>
      <h2>{post.frontmatter.title}</h2>
      <MDXRenderer>{post.body}</MDXRenderer>
      <div style={{ marginTop: 40 }}>
        Posted by <b>{post.frontmatter.author}</b>
      </div>
    </ArticleLayout>
  );
}

export default PostTemplate;
