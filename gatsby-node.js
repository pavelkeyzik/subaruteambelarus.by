exports.createPages = async function({ actions, graphql, reporter }) {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('Failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    actions.createPage({
      path: `news/${post.frontmatter.slug}`,
      component: require.resolve('./src/templates/post.tsx'),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
