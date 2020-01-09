import { graphql, useStaticQuery } from 'gatsby';
import { IPost } from '../types/global';

function usePosts(): IPost[] {
  const data = useStaticQuery(graphql`
    query ListOfPosts {
      allMdx(sort: { fields: [frontmatter___createDate], order: [DESC] }) {
        nodes {
          frontmatter {
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }));
}

export default usePosts;
