import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import CheckoutForm from "../components/shared/CheckoutForm";
import { Container } from "../components/shared/GlobalStyles";
import Layout from "../components/shared/Layout";
import Confirmation from "../components/shared/Confirmation";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 3rem auto;
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

const checkout = () => {
  return (
    <Layout checkoutPage={true} title="Checkout">
      <Container>
        <Header>
          <Button onClick={() => navigate(-1)}>go back</Button>{" "}
        </Header>

        <CheckoutForm />

        <Confirmation />
      </Container>
    </Layout>
  );
};

export default checkout;
