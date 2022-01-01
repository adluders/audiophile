import React, { useContext, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { CartContext } from "../context/CartContext";

import styled from "styled-components";
import Button from "../shared/Button";
import { useState } from "react";

const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
`;

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 8rem auto;
  height: max-content;
`;

const Div = styled.div`
  margin: 1rem 0;
`;

const Header = styled.h1`
  font-size: 2rem;
  line-height: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const SecondHeader = styled.h3`
  @media screen and (max-width: 500px) {
    margin-bottom: 0.5rem;
  }
`;

const Para = styled.p`
  color: rgba(0, 0, 0, 0.5);
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 0.5rem;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const Items = styled.div`
  background-color: #f1f1f1;
  padding: 1rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  @media screen and (max-width: 500px) {
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 500px) {
    p {
      &:last-of-type {
        text-align: center;
        width: 55px;
      }
    }
  }
`;

const Graphic = styled.div`
  width: 50px;
`;

const Total = styled.div`
  background-color: #000000;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  @media screen and (max-width: 500px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 0.5rem;
  }
`;

const Price = styled.h4`
  color: #fff;
  margin-top: 0.5rem;
`;

const Confirmation = () => {
  const defaultState = {
    cartList: [],
    totalPrice: 0,
  };

  const { cartList, totalPrice } = useContext(CartContext) || defaultState;

  const tax = totalPrice * 0.2;

  const grandTotal = Math.round(totalPrice + tax + 50);

  const [checkoutList, setCheckoutList] = useState();

  useEffect(() => {
    setCheckoutList(cartList);
  }, [cartList]);

  const showLess = () => setCheckoutList([cartList[0]]);

  const showAll = () => setCheckoutList(cartList);

  return (
    <Section>
      <Wrapper>
        <Div></Div>

        <Div>
          <Header>thank you for your order</Header>
          <Para>You will receive an email confirmation shortly</Para>
        </Div>

        <Div>
          <Contents>
            <Items>
              {checkoutList &&
                checkoutList.map(({ name, price, itemCount, graphics, id }) => (
                  <Item key={id}>
                    <Graphic>
                      <GatsbyImage
                        image={graphics.image.asset.gatsbyImageData}
                        alt={name}
                      />
                    </Graphic>

                    <Div>
                      <SecondHeader> {name} </SecondHeader>
                      <Para>$ {price} </Para>
                    </Div>

                    <Para style={{ marginLeft: "auto" }}> x {itemCount} </Para>
                  </Item>
                ))}

              <Div
                style={{
                  borderTop: "1px solid #979797",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "1rem",
                }}
              >
                {checkoutList && checkoutList.length > 1 ? (
                  <Para onClick={showLess}>View less</Para>
                ) : (
                  <Para onClick={showAll}>and other item(s)</Para>
                )}
              </Div>
            </Items>

            <Total>
              <Para
                style={{
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                }}
              >
                grand total
              </Para>
              <Price>$ {grandTotal.toLocaleString()} </Price>
            </Total>
          </Contents>
        </Div>

        <Div>
          <Button text="back to home" btntype="primary" />
        </Div>
      </Wrapper>
    </Section>
  );
};

export default Confirmation;
