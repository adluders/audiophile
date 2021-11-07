const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      allSanityProduct {
        nodes {
          category {
            name
          }
        }
      }
    }
  `);

  const categoryTemplate = path.resolve(`src/components/templates/Category.js`);

  results.data.allSanityProduct.nodes.forEach((node) => {
    createPage({
      path: `/headphones/i`,
      component: categoryTemplate,
      context: node,
    });
  });

  console.log(results.data);
};
