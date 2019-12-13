import { graphql, useStaticQuery } from 'gatsby';
import { IPost } from '../types/global';

function usePosts(): IPost[] {
  const data = useStaticQuery(graphql`
    query ListOfPosts {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 500, maxHeight: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            imageAuthor
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
    imageAuthor: post.frontmatter.imageAuthor,
    excerpt: post.excerpt,
  }));
}

export default usePosts;
