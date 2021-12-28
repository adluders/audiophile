import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import CheckoutForm from "../components/shared/CheckoutForm";
import { Container } from "../components/shared/GlobalStyles";
import Layout from "../components/shared/Layout";
import { Button } from "../components/templates/Category";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 3rem auto;
`;

const checkout = () => {
  return (
    <Layout checkoutPage={true}>
      <Container>
        <Header>
          <Button onClick={() => navigate(-1)}>go back</Button>{" "}
        </Header>

        <CheckoutForm />
      </Container>
    </Layout>
  );
};

export default checkout;
