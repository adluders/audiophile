import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { Container } from "./GlobalStyles";
import Layout from "./Layout";

const Wrapper = styled.section`
  border: solid red;
`;

const Title = styled.h1``;

const CartContent = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Title>cart (3) </Title>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default CartContent;
