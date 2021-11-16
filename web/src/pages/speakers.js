import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/shared/Layout";
import { Container } from "../components/shared/GlobalStyles";
import { Header } from "../components/shared/GlobalStyles";
import Display from "../components/shared/Display";
import PageNav from "../components/shared/PageNav";
import Statement from "../components/shared/Statement";

const Speakers = ({ data }) => {
  return (
    <Layout>
      <Header>
        <h1>speakers</h1>
      </Header>
      <Container>
        {data.allSanityProduct.nodes.map((product, inx) => (
          <Display
            rotation={inx % 2 !== 0 ? "reversed" : ""}
            key={product.id}
            product={product}
            pretext="speakers"
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
    allSanityProduct(filter: { category: { name: { eq: "speakers" } } }) {
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

export default Speakers;
