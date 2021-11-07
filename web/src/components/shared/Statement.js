import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  margin: 10rem 0 12rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 500;
  span {
    color: #d87d4a;
  }
`;

const Content = styled.p`
  line-height: 2rem;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.5);
`;

const Statement = () => {
  return (
    <Wrapper>
      <Div>
        <Title>
          bringing you the <span>best</span> audio gear
        </Title>

        <Content>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Content>
      </Div>

      <Div>
        <StaticImage
          src="../../images/shared/desktop/image-best-gear.jpg"
          alt="man with headphones"
          placeholder="blurred"
        />
      </Div>
    </Wrapper>
  );
};

export default Statement;
