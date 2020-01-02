import { graphql, useStaticQuery } from 'gatsby';
import { IPost } from '../types/global';

function useLastPost(): IPost {
  const data = useStaticQuery(graphql`
    query LastPost {
      allMdx(
        sort: { fields: [frontmatter___createDate], order: [DESC] }
        limit: 1
      ) {
        nodes {
          frontmatter {
            title
            slug
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 600, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
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
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }))[0];
}

export default useLastPost;
