import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.section`
  display: flex;
  ${({ rotation }) => handleReverse(rotation)};
  gap: 1rem;
  margin: 7rem auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media screen and (max-width: 410px) {
    flex-direction: column;
    margin: 3rem auto;
    gap: 2rem;
  }
`;

const Graphic = styled.div`
  background-color: #f1f1f1;
  border-radius: 0.5rem;
  flex-grow: 1;
  width: 0;
  img {
    border-radius: 0.5rem;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    img {
      width: 70%;
      margin: auto;
    }
  }
`;

const Content = styled.div`
  width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  flex-grow: 1;

  padding: 4rem;

  @media screen and (max-width: 820px) {
    padding: 0;
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const Heading = styled.h2``;

const Paragraph = styled.p`
  line-height: 1.5rem;
  color: rgba(0, 0, 0, 0.5);
`;

const handleReverse = (rotation) => {
  switch (rotation) {
    default:
      return `flex-direction: row;`;
    case "reversed":
      return `flex-direction: row-reverse;`;
  }
};

const Display = ({ rotation, product, pretext }) => {
  const { name, description, graphics, slug } = product;

  return (
    <Wrapper rotation={rotation}>
      <Graphic>
        <GatsbyImage
          image={graphics.image.asset.gatsbyImageData}
          alt={name}
          placeholder="blurred"
        />
      </Graphic>

      <Content>
        {product.new && (
          <Paragraph style={{ textTransform: "uppercase", color: "#d87d4a" }}>
            new product
          </Paragraph>
        )}

        <Heading>{name}</Heading>

        <Paragraph>{description}</Paragraph>

        <Button btntype="primary" route={`${pretext}/${slug.current}`} />
      </Content>
    </Wrapper>
  );
};

export default Display;
