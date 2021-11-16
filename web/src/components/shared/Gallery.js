import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 7rem;
`;

const Div = styled.div`
  display: flex;

  img {
    object-fit: cover;
    border-radius: 0.5rem;
    width: 100%;
  }
  &:first-of-type {
    grid-row: 1/2;
  }

  &:nth-of-type(2) {
    grid-row: 2/3;
  }

  &:last-of-type {
    grid-row: 1/3;
  }
`;

const Gallery = ({ images }) => {
  return (
    <Wrapper>
      <Div>
        <GatsbyImage
          alt="item gallery"
          image={images.first.image.asset.gatsbyImageData}
        />
      </Div>
      <Div>
        <GatsbyImage
          alt="item gallery"
          image={images.second.image.asset.gatsbyImageData}
        />
      </Div>
      <Div>
        <GatsbyImage
          alt="item gallery"
          image={images.third.image.asset.gatsbyImageData}
        />
      </Div>
    </Wrapper>
  );
};

export default Gallery;
