import React from "react";
import Layout from "../shared/Layout";
import { Container } from "../shared/GlobalStyles";
import Button from "../shared/Button";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem auto;
`;

const Product = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9rem;
`;

const Graphic = styled.div`
  border-radius: 0.5rem;
  img {
    border-radius: 0.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 1.4px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Para = styled.p`
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.3rem;
`;

const Cost = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 1.3px;
`;

const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: #f1f1f1;
  padding: 1rem 2rem;
`;

const Icon = styled.p`
  cursor: pointer;
  font-size: 1.1rem;
`;

const Details = styled.section`
  margin: 6rem 0 6rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 7rem;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-weight: 500;
`;

const CartCTA = styled.div`
  display: flex;
  align-items: center;
  gap: 2.3rem;
`;

const Div = styled.div``;

const BoxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Category = ({ pageContext }) => {
  const { description, features, gallery, graphics, name, others, price } =
    pageContext;

  return (
    <Layout>
      <Container>
        <Header>
          <Button to="/" text="back" />
        </Header>

        <Product>
          <Graphic>
            <GatsbyImage
              image={graphics[0].image.asset.gatsbyImageData}
              alt={name}
              placeholder="blurred"
            />
          </Graphic>

          <Content>
            {pageContext.new && (
              <Para style={{ textTransform: "uppercase", color: "#d87d4a" }}>
                new product
              </Para>
            )}
            <Heading> {name} </Heading>
            <Para> {description} </Para>
            <Cost> $ {price} </Cost>

            <CartCTA>
              <Amount>
                <Icon> - </Icon>
                <Para> 1 </Para>
                <Icon> + </Icon>
              </Amount>
              <Button btntype="primary" text="add to cart" to="/" />
            </CartCTA>
          </Content>
        </Product>

        <Details>
          <Div>
            <SubHeading>features</SubHeading>
            <Para> {features} </Para>
          </Div>

          <Div>
            <SubHeading>in the box</SubHeading>
            {pageContext.package.map(({ item, quantity }) => (
              <BoxItem>
                <Para style={{ color: "#d87d4a", fontWeight: "bold" }}>
                  {" "}
                  {quantity}x{" "}
                </Para>
                <Para> {item} </Para>
              </BoxItem>
            ))}
          </Div>
        </Details>
      </Container>
    </Layout>
  );
};

export default Category;
