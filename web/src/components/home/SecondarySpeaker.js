import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import BgImage from "../../images/home/desktop/image-speaker-zx7.jpg";
import Button from "../shared/Button";

const Wrapper = styled.section`
  margin: 3rem auto;
  padding: 9rem 0 9rem 9rem;
  border-radius: 0.5rem;

  background-color: #979797;
  background-image: url(${BgImage});
  background-size: cover;
  background-repeat: no-repeat; ;
`;

const Content = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  text-transform: uppercase;
`;

const SecondarySpeaker = () => {
  const data = useStaticQuery(graphql`
    {
      sanityProduct(name: { eq: "ZX7 Speaker" }) {
        name
        slug {
          current
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Content>
        <Title>{data.sanityProduct.name}</Title>

        <Button
          btntype="secondary"
          route={`speakers/${data.sanityProduct.slug.current}`}
        />
      </Content>
    </Wrapper>
  );
};

export default SecondarySpeaker;
