const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      earphones: allSanityProduct(
        filter: { category: { name: { eq: "earphones" } } }
      ) {
        nodes {
          id
          name
          graphics {
            image {
              asset {
                gatsbyImageData
              }
            }
          }
          new
          description
          features
          gallery {
            first {
              image {
                asset {
                  gatsbyImageData
                }
              }
            }
            second {
              image {
                asset {
                  gatsbyImageData
                }
              }
            }
            third {
              image {
                asset {
                  gatsbyImageData
                }
              }
            }
          }
          others {
            graphic {
              asset {
                gatsbyImageData
              }
            }
            itemName
            category {
              name
            }
            link {
              current
            }
          }
          package {
            quantity
            item
          }
          price
          slug {
            current
          }
        }
      }

      headphones: allSanityProduct(
        filter: { category: { name: { eq: "headphones" } } }
      ) {
        nodes {
          id
          name
          graphics {
            image {
              asset {
                gatsbyImageData
              }
            }
          }
          new
          description
          features
          gallery {
            first {
              image {
                asset {
                  gatsbyImageData
                }
              }
            }
            second {
              image {
                asset {
                  gatsbyImageData
                }
              }
            }
            third {
              image {
                asset {
                  gatsbyImageData
                }
              }
            }
          }
          others {
            graphic {
              asset {
                gatsbyImageData
              }
            }
            itemName
            category {
              name
            }
            link {
              current
            }
          }
          package {
            quantity
            item
          }
          price
          slug {
            current
          }
        }
      }

      speakers: allSanityProduct(
        filter: { category: { name: { eq: "speakers" } } }
      ) {
        nodes {
          id
          name
          graphics {
            image {
              asset {
                gatsbyImageData
              }
            }
          }
          new
          description
          features
          gallery {
            first {
              image {
                asset {
                  gatsbyImageData
                }
              }
            }
            second {
              image {
                asset {
                  gatsbyImageData
                }
              }
            }
            third {
              image {
                asset {
                  gatsbyImageData
                }
              }
            }
          }
          others {
            graphic {
              asset {
                gatsbyImageData
              }
            }
            itemName
            category {
              name
            }
            link {
              current
            }
          }
          package {
            quantity
            item
          }
          price
          slug {
            current
          }
        }
      }
    }
  `);

  const categoryTemplate = path.resolve(`src/components/templates/Category.js`);

  results.data.headphones.nodes.forEach((node) => {
    createPage({
      path: `/headphones/${node.slug.current}`,
      component: categoryTemplate,
      context: node,
    });
  });

  results.data.earphones.nodes.forEach((node) => {
    createPage({
      path: `/earphones/${node.slug.current}`,
      component: categoryTemplate,
      context: node,
    });
  });

  results.data.speakers.nodes.forEach((node) => {
    createPage({
      path: `/speakers/${node.slug.current}`,
      component: categoryTemplate,
      context: node,
    });
  });
};
