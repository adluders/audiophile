import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
// import Button from "../components/shared/Button";
import CheckoutForm from "../components/shared/CheckoutForm";
import { Container } from "../components/shared/GlobalStyles";
import Layout from "../components/shared/Layout";
import Summary from "../components/shared/Summary";
import { Button } from "../components/templates/Category";

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem auto;
`;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  gap: 1rem;
  margin-bottom: 7rem;
  /* border: solid red; */
`;

const Div = styled.div`
  /* border: solid red; */

  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;

  &:last-of-type {
    height: max-content;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
`;

const checkout = () => {
  return (
    <Layout checkoutPage={true}>
      <Container>
        <Header>
          <Button onClick={() => navigate(-1)}>go back</Button>
        </Header>

        <Wrapper>
          <Div>
            <Title>checkout</Title>
            <CheckoutForm />
          </Div>

          <Div>
            <Summary />
          </Div>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default checkout;
