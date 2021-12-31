import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";
import Summary from "./Summary";

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  gap: 2rem;
  margin-bottom: 7rem;

  @media screen and (max-width: 810px) {
    display: flex;
    flex-direction: column;
  }
`;

const Fieldset = styled.fieldset`
  border: none;
  margin: 2rem auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }

  &:nth-of-type(2) {
    label:first-of-type {
      grid-column: 1/3;
    }
  }

  &:last-of-type {
    p {
      font-size: 1rem;
      color: #000;
    }
  }
`;

const Legend = styled.legend`
  color: #d87d4a;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  border-radius: 0.2rem;
  border: 1px solid #cfcfcf;
  font-size: 1rem;
  padding: 1rem;

  &:focus {
    border: 1px solid #d87d4a;
    outline: #d87d4a;
  }
`;

const Div = styled.div`
  label {
    flex-direction: row;
    border: solid #cfcfcf 1px;
    border-radius: 0.5rem;
    padding: 1rem;
    align-items: center;
    cursor: pointer;
    &:last-of-type {
      margin-top: 1rem;
    }
  }
`;

const Para = styled.p`
  text-transform: capitalize;
  font-size: 0.7rem;
  color: #cd2c2c;
`;

const Section = styled.section`
  background-color: #fff;
  padding: 1rem;
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

const CheckoutForm = () => {
  const schema = z.object({
    name: z.string().nonempty({ message: "Please enter your name" }),
    email: z.string().email({ message: "Wrong format" }),
    phone: z
      .number({ message: "Not a number" })
      .lte(10, { message: "Phone too long" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [paymentOption, setPaymentOption] = useState("");
  const [eMoneyNumber, setEmoneyNumber] = useState("");
  const [eMoneyPin, setEmoneyPin] = useState("");

  const handlePaymentUpdate = (e) => setPaymentOption(e.target.value);

  const handleEmoneyUpdate = (e) => setEmoneyNumber(e.target.value);

  const handleEmoneyPin = (e) => setEmoneyPin(e.target.value);

  return (
    <Form onSubmit={handleSubmit((d) => console.log(d))}>
      <Section>
        <Title>checkout </Title>
        <Fieldset>
          <Legend>billing details</Legend>
          <Label>
            name
            <Input {...register("name")} placeholder="John Doe" />
            {errors.name?.message && <Para>{errors.name?.message}</Para>}
          </Label>

          <Label>
            email
            <Input {...register("email")} placeholder="email@example.com" />
            {errors.email?.message && <Para> {errors.email?.message} </Para>}
          </Label>

          <Label>
            phone number
            <Input {...register("phone")} placeholder="1 234 567 0000" />
          </Label>
        </Fieldset>

        <Fieldset>
          <Legend>shipping info</Legend>
          <Label>
            address
            <Input {...register("address")} placeholder="123 Baker St" />
          </Label>

          <Label>
            zip code
            <Input {...register("zip")} placeholder="10001" />
          </Label>

          <Label>
            city
            <Input {...register("city")} placeholder="New York" />
          </Label>

          <Label>
            country
            <Input {...register("country")} placeholder="United States" />
          </Label>
        </Fieldset>

        <Fieldset>
          <Legend>payment details</Legend>

          <Div>
            <p style={{ textTransform: "capitalize" }}>payment method</p>
          </Div>

          <Div>
            <Label>
              <Input
                name="payment"
                type="radio"
                value="e-Money"
                onChange={handlePaymentUpdate}
                checked={paymentOption === "e-Money"}
              />
              e-Money
            </Label>

            <Label>
              <Input
                name="payment"
                type="radio"
                value="Cash on Delivery"
                onChange={handlePaymentUpdate}
                checked={paymentOption === "Cash on Delivery"}
              />
              Cash on Delievery
            </Label>
          </Div>
        </Fieldset>

        {paymentOption === "e-Money" ? (
          <Fieldset>
            <Label>
              e-Money Number
              <Input
                type="text"
                value={eMoneyNumber}
                onChange={handleEmoneyUpdate}
                placeholder="123456789"
                maxLength={9}
              />
            </Label>

            <Label>
              e-Money Pin
              <Input
                type="text"
                value={eMoneyPin}
                onChange={handleEmoneyPin}
                placeholder="1234"
                maxLength={4}
              />
            </Label>
          </Fieldset>
        ) : (
          <Div>
            <Para style={{ color: "rgba(0,0,0,0.8)" }}>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </Para>
          </Div>
        )}
      </Section>

      <Section>
        <Summary />
      </Section>
    </Form>
  );
};

export default CheckoutForm;

/**
 * 
 *      



 */
