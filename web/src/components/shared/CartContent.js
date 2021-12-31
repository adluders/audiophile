import { GatsbyImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import Button from "./Button";

const Wrapper = styled.section`
  position: absolute;
  background-color: #fff;
  left: 55%;
  top: 130%;
  z-index: 2;
  border-radius: 0.5rem;
  padding: 2rem;
  min-width: 500px;
  max-width: 500px;

  @media screen and (max-width: 500px) {
    top: 100px;
    left: 0;

    min-width: 375px;
    max-width: 480px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 9rem;

  p {
    &:hover {
      cursor: pointer;
      border-bottom: 1px solid #979797;
    }
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`;

const Para = styled.p`
  text-transform: capitalize;
  text-transform: capitalize;
  color: #979797;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem auto;
`;

const CheckOut = styled.div``;

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem auto;
`;

const Item = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Graphic = styled.div`
  width: 15%;
  img {
    border-radius: 0.5rem;
  }
`;

const Details = styled.div`
  h2 {
    font-size: 0.8rem;
  }
  h3 {
    font-size: 1rem;
    margin-top: 0.3rem;
  }
`;

const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background-color: #f1f1f1;
  padding: 0.5rem 1rem;
  margin-left: auto;
  border-radius: 0.5rem;
`;

const SecondaryHeader = styled.h2`
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const ThirdHeader = styled.h3`
  color: #979797;
  text-transform: uppercase;
  font-weight: 500;
`;

const Icon = styled.p`
  cursor: pointer;
`;

const CartContent = () => {
  const defaultState = {
    cartList: [],
    cartCount: 0,
    totalPrice: 0,
    addToCartItem: () => {},
    removeFromCartItem: () => {},
    updateCartOpen: () => {},
    emptyCart: () => {},
  };

  const {
    cartList,
    cartCount,
    totalPrice,
    addToCartItem,
    removeFromCartItem,
    updateCartOpen,
    emptyCart,
  } = useContext(CartContext) || defaultState;

  return (
    <Wrapper>
      <Header>
        <Title>cart ({cartCount}) </Title>

        <Para onClick={emptyCart}>remove all</Para>
      </Header>

      {cartList.length > 0 && (
        <Contents>
          {cartList.map(({ name, price, itemCount, graphics, id }) => (
            <Item key={id}>
              <Graphic>
                <GatsbyImage
                  image={graphics.image.asset.gatsbyImageData}
                  alt={name}
                />
              </Graphic>

              <Details>
                <SecondaryHeader> {name} </SecondaryHeader>
                <ThirdHeader>$ {price.toLocaleString()}</ThirdHeader>
              </Details>

              <Amount>
                <Icon onClick={() => removeFromCartItem(id)}> - </Icon>
                <Para> {itemCount} </Para>
                <Icon onClick={() => addToCartItem(id)}> + </Icon>
              </Amount>
            </Item>
          ))}
        </Contents>
      )}

      <Total>
        <ThirdHeader>total</ThirdHeader>
        <SecondaryHeader> $ {totalPrice.toLocaleString()} </SecondaryHeader>
      </Total>

      <CheckOut onClick={updateCartOpen}>
        <Button btntype="primary" text="checkout" route="checkout" />
      </CheckOut>
    </Wrapper>
  );
};

export default CartContent;
