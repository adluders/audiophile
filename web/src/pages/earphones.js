import { graphql } from "gatsby";
import React from "react";
import Display from "../components/shared/Display";
import { Container, Header } from "../components/shared/GlobalStyles";
import Layout from "../components/shared/Layout";
import PageNav from "../components/shared/PageNav";
import Statement from "../components/shared/Statement";

const Earphones = ({ data }) => {
  return (
    <Layout title="Earphones">
      <Header>
        <h1>earphones</h1>
      </Header>

      <Container>
        {data.allSanityProduct.nodes.map((product, inx) => (
          <Display
            rotation={inx % 2 !== 0 ? "reversed" : ""}
            key={product.id}
            product={product}
            pretext="earphones"
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
      filter: { category: { name: { eq: "earphones" } } }
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

export default Earphones;
