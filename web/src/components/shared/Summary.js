import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const Wrapper = styled.aside`
  /* display: flex; */
`;

const Title = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
`;

const Contents = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  gap: 1rem;
  align-items: center;
`;

const Graphic = styled.div`
  width: 65px;
  img {
    border-radius: 0.5rem;
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr 0.25fr;
  align-items: center;
`;

const Name = styled.h3`
  grid-row: 1/2;
  font-weight: 400;
`;

const Price = styled.h4`
  grid-row: 2/3;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
`;

const Div = styled.div`
  grid-column: 2/3;
  margin-left: auto;
`;

const Para = styled.p``;

const PriceDetail = styled.div``;

const PriceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  p:first-of-type {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
  }

  p:nth-of-type(2) {
    font-weight: 700;
  }
`;

const Input = styled.input`
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  line-height: 1rem;
  border: 2px solid;
  cursor: pointer;
  background-color: #d87d4a;
  color: #fff;
  border: 1px solid transparent;
  width: 100%;

  &:hover {
    background-color: #fbaf85;
    color: #fff;
  }
`;

const Summary = () => {
  const defaultState = {
    cartList: [],
    totalPrice: 0,
  };

  const { cartList, totalPrice } = useContext(CartContext) || defaultState;
  const tax = totalPrice * 0.2;
  const grandTotal = totalPrice + tax + 50;

  return (
    <Wrapper>
      <Title>summary</Title>

      <Contents>
        {cartList.map(({ name, price, itemCount, graphics, id }) => (
          <Content key={id}>
            <Graphic>
              <GatsbyImage
                image={graphics.image.asset.gatsbyImageData}
                alt={name}
              />
            </Graphic>

            <Details>
              <Name> {name} </Name>

              <Price>$ {price} </Price>

              <Div>
                <Para> x{itemCount} </Para>
              </Div>
            </Details>
          </Content>
        ))}
      </Contents>

      <PriceDetail>
        <PriceItem>
          <Para>total</Para>
          <Para> $ {totalPrice.toLocaleString()} </Para>
        </PriceItem>

        <PriceItem>
          <Para>shipping</Para>
          <Para>$ 50</Para>
        </PriceItem>

        <PriceItem>
          <Para>vat (included)</Para>
          <Para>$ {tax.toLocaleString()} </Para>
        </PriceItem>

        <PriceItem>
          <Para>grand total</Para>
          <Para style={{ color: "#d87d4a" }}>
            $ {grandTotal.toLocaleString()}
          </Para>
        </PriceItem>
      </PriceDetail>

      <Input type="submit" value="continue & pay" />
    </Wrapper>
  );
};

export default Summary;
// <Button text="continue & pay" btntype="primary" />
