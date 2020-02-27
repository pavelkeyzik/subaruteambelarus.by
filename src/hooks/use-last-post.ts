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
            hasVideo
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 600) {
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
    hasVideo: post.frontmatter.hasVideo,
    excerpt: post.excerpt,
  }))[0];
}

export default useLastPost;
