import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../shared/Button";

const Wrapper = styled.section`
  background-color: #d87d4a;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  padding: 6rem 6rem 0 6rem;

  border-radius: 0.5rem;
`;

const Div = styled.div`
  color: #fff;
  img {
    width: 410px;
    height: 495px;
  }

  &:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 7rem;
    width: 85%;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 400;
`;

const Content = styled.p`
  font-weight: 200;
  letter-spacing: 0.1px;
  line-height: 1.8rem;
`;

const FeaturedSpeaker = () => {
  const data = useStaticQuery(graphql`
    {
      sanityProduct(name: { eq: "ZX9 Speaker" }) {
        name
        slug {
          current
        }
        adText
      }
    }
  `);

  return (
    <Wrapper>
      <Div>
        <StaticImage
          placeholder="blurred"
          src="../../images/home/desktop/image-speaker-zx9.png"
          alt="zx9 speaker"
        />
      </Div>

      <Div>
        <Title> {data.sanityProduct.name} </Title>

        <Content> {data.sanityProduct.adText} </Content>

        <Button
          route={`speakers/${data.sanityProduct.slug.current}`}
          text="see product"
        />
      </Div>
    </Wrapper>
  );
};

export default FeaturedSpeaker;
