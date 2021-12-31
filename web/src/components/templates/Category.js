import React, { useState, useContext } from "react";
import { navigate } from "gatsby";
import Layout from "../shared/Layout";
import { Container } from "../shared/GlobalStyles";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import Statement from "../shared/Statement";
import PageNav from "../shared/PageNav";
// import Button from "../shared/Button";
import Gallery from "../shared/Gallery";
import Suggestions from "../shared/Suggestions";
import { CartContext } from "../context/CartContext";

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem auto;
`;

const Product = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9rem;

  @media screen and (max-width: 820px) {
    gap: 3rem;
  }

  @media screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
  }
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

  @media screen and (max-width: 820px) {
    padding: 0.8rem 1rem;
  }

  @media screen and (max-width: 430px) {
    padding: 0.5rem 1rem;
  }
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

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
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

const Div = styled.div`
  &:last-of-type {
    @media screen and (min-width: 410px) and (max-width: 820px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const BoxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CartAdd = styled.button`
  border: solid 2px transparent;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  line-height: 1rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #d87d4a;
  color: #fff;

  &:hover {
    background-color: #fbaf85;
  }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  background-color: transparent;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    color: #d87d4a;
  }
`;

const Category = ({ pageContext }) => {
  const { description, features, gallery, graphics, name, others, price, id } =
    pageContext;

  const defaultState = {
    updateCart: () => {},
  };

  const [itemCount, setItemCount] = useState(0);

  const addItem = () => setItemCount(itemCount + 1);

  const removeItem = () => setItemCount(itemCount - 1);

  const { updateCart } = useContext(CartContext) || defaultState;

  return (
    <Layout title={`${name}`}>
      <Container>
        <Header>
          <Button onClick={() => navigate(-1)}>go back</Button>
        </Header>

        <Product>
          <Graphic>
            <GatsbyImage
              image={graphics.image.asset.gatsbyImageData}
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
            <Cost> $ {price.toLocaleString()} </Cost>

            <CartCTA>
              <Amount>
                <Icon onClick={itemCount > 0 ? removeItem : null}> - </Icon>
                <Para> {itemCount} </Para>
                <Icon onClick={addItem}> + </Icon>
              </Amount>
              <CartAdd
                onClick={
                  itemCount > 0
                    ? () => updateCart({ name, price, itemCount, id, graphics })
                    : null
                }
              >
                add to cart
              </CartAdd>
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
            <div>
              {pageContext.package.map(({ item, quantity }) => (
                <BoxItem key={item}>
                  <Para style={{ color: "#d87d4a", fontWeight: "bold" }}>
                    {quantity}x
                  </Para>
                  <Para> {item} </Para>
                </BoxItem>
              ))}
            </div>
          </Div>
        </Details>

        <Gallery images={gallery} />

        <Suggestions items={others} />

        <PageNav />

        <Statement />
      </Container>
    </Layout>
  );
};

export default Category;

//<CartAdd onClick={itemCount > 0 ? updateCart : null}>
