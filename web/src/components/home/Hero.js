import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import Headphones from "../../images/home/desktop/image-hero.jpg";
import TabletHeadphones from "../../images/home/tablet/image-header.jpg";
import MobileHeadphones from "../../images/home/mobile/image-header.jpg";

const Wrapper = styled.section`
  background-image: url(${Headphones});
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 940px) {
    background-image: url(${TabletHeadphones});
  }

  @media screen and (max-width: 500px) {
    background-image: url(${MobileHeadphones});
  }
`;

const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  color: #fff;
  max-width: 35%;
  margin-top: 130px;
  margin-bottom: 160px;

  @media screen and (max-width: 940px) {
    align-items: center;
    text-align: center;
    margin: 120px auto 130px;
    max-width: 80%;
  }
`;

const Heading = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  @media screen and (max-width: 410px) {
    font-size: 2.3rem;
  }
`;

const Para = styled.p`
  &:first-of-type {
    color: red;
    text-transform: uppercase;
    letter-spacing: 6px;
    color: rgba(255, 255, 255, 0.5);
  }
  font-size: 1rem;
  line-height: 2rem;
  letter-spacing: 0.5px;
  font-weight: 100;

  &:last-of-type {
    margin-bottom: 2.5rem;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Para>new product</Para>

          <Heading>xx 99 mark ii headphones</Heading>

          <Para>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Para>

          <Button
            btntype="primary"
            text="see product"
            route="headphones/xx99-mark-ii-headphones"
          />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Hero;
