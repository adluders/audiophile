import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../shared/Button";
import useResizer from "../../hooks/useResizer";

const Wrapper = styled.section`
  background-color: #d87d4a;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 3rem;

  border-radius: 0.5rem;

  @media screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 4.5rem 1rem;
  }
`;

const Div = styled.div`
  color: #fff;
  img {
    min-width: 10rem;
  }

  &:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    @media screen and (max-width: 430px) {
      margin-bottom: 0;
      align-items: center;
    }
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

  const screenSize = useResizer();

  return (
    <Wrapper>
      <Div>
        {(() => {
          if (screenSize > 768) {
            return (
              <StaticImage
                placeholder="blurred"
                src="../../images/home/desktop/image-speaker-zx9.png"
                alt="zx9 speaker"
              />
            );
          } else if (screenSize > 410) {
            return (
              <StaticImage
                placeholder="blurred"
                src="../../images/home/tablet/image-speaker-zx9.png"
                alt="zx9 speaker"
              />
            );
          } else {
            return (
              <StaticImage
                placeholder="blurred"
                src="../../images/home/mobile/image-speaker-zx9.png"
                alt="zx9 speaker"
              />
            );
          }
        })()}
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
