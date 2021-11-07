import { graphql } from "gatsby";
import React from "react";
import Display from "../components/shared/Display";
import { Container, Header } from "../components/shared/GlobalStyles";
import Layout from "../components/shared/Layout";

const Earphones = ({ data }) => {
  return (
    <Layout>
      <Header>
        <h1>earphones</h1>
      </Header>

      <Container>
        {data.allSanityProduct.nodes.map((product, inx) => (
          <Display
            rotation={inx % 2 !== 0 ? "reversed" : ""}
            key={product.id}
            product={product}
          />
        ))}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityProduct(filter: { category: { name: { eq: "earphones" } } }) {
      nodes {
        id
        name
        new
        description
        categoryImage {
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        slug {
          current
        }
      }
    }
  }
`;

export default Earphones;
