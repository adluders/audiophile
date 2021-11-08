import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  margin-bottom: 2.5rem;
`;

const Div = styled.div`
  border-radius: 0.5rem;

  &:last-of-type {
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;

    padding: 0rem 0 0 4rem;
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;
  text-transform: uppercase;
`;

const FeaturedEarphones = () => {
  const data = useStaticQuery(graphql`
    {
      sanityProduct(name: { eq: "YX1 Wireless Earphones" }) {
        name
        slug {
          current
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Div>
        <StaticImage
          src="../../images/home/desktop/image-earphones-yx1.jpg"
          alt="yx1 earphones"
          placeholder="blurred"
        />
      </Div>

      <Div>
        <Title> {data.sanityProduct.name} </Title>
        <Button
          btntype="secondary"
          route={`earphones/${data.sanityProduct.slug.current}`}
        />
      </Div>
    </Wrapper>
  );
};

export default FeaturedEarphones;
