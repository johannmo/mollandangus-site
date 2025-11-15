const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/pages/" } }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Error loading markdown pages", result.errors);
  }

  const pages = result.data.allMarkdownRemark.nodes;

  pages.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve("./src/templates/ContentPage.js"),
      context: {
        id: node.id,
      },
    });
  });
};
