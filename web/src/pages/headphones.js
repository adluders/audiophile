import { graphql } from "gatsby";
import React from "react";
import Display from "../components/shared/Display";
import { Container, Header } from "../components/shared/GlobalStyles";
import Layout from "../components/shared/Layout";
import PageNav from "../components/shared/PageNav";
import Statement from "../components/shared/Statement";

const HeadPhones = ({ data }) => {
  return (
    <Layout>
      <Header>
        <h1>headphones</h1>
      </Header>

      <Container>
        {data.allSanityProduct.nodes.map((product, inx) => (
          <Display
            rotation={inx % 2 !== 0 ? "reversed" : ""}
            key={product.id}
            product={product}
            pretext="headphones"
          />
        ))}
        <PageNav />
        <Statement />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityProduct(
      filter: { category: { name: { eq: "headphones" } } }
      sort: { fields: new, order: DESC }
    ) {
      nodes {
        id
        name
        new
        description
        graphics {
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
export default HeadPhones;
