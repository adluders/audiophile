import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form``;

const Fieldset = styled.fieldset`
  border: none;
  margin: 2rem auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  &:nth-of-type(2) {
    label:first-of-type {
      grid-column: 1/3;
    }
  }
  /* &:first-of-type {
  } */
`;

const Legend = styled.legend`
  color: #d87d4a;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  text-transform: capitalize;
  /* border: solid red; */
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
`;

const CheckoutForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerZip, setCustomerZip] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerCountry, setCustomerCountry] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [eMoneyNumber, setEmoneyNumber] = useState("");
  const [eMoneyPin, setEmoneyPin] = useState("");

  const handleNameUpdate = (e) => setCustomerName(e.target.value);

  const handleEmailUpdate = (e) => setCustomerEmail(e.target.value);

  const handlePhoneUpdate = (e) => setCustomerPhone(e.target.value);

  const handleAddressUpdate = (e) => setCustomerAddress(e.target.value);

  const handleZipUpdate = (e) => setCustomerZip(e.target.value);

  const handleCityUpdate = (e) => setCustomerCity(e.target.value);

  const handleCountryUpdate = (e) => setCustomerCountry(e.target.value);

  const handlePaymentUpdate = (e) => setPaymentOption(e.target.value);

  const handleEmoneyUpdate = (e) => setEmoneyNumber(e.target.value);

  const handleEmoneyPin = (e) => setEmoneyPin(e.target.value);

  // <Header>billing details</Header>
  return (
    <Form>
      <Fieldset>
        <Legend>billing details</Legend>
        <Label>
          name
          <Input
            type="text"
            placeholder="John Doe"
            value={customerName}
            onChange={handleNameUpdate}
          />
        </Label>

        <Label>
          email address
          <Input
            type="email"
            placeholder="email@example.com"
            value={customerEmail}
            onChange={handleEmailUpdate}
          />
        </Label>

        <Label>
          phone number
          <Input
            type="text"
            placeholder="1 234 567 0000"
            value={customerPhone}
            onChange={handlePhoneUpdate}
          />
        </Label>
      </Fieldset>

      <Fieldset>
        <Legend>shipping info</Legend>
        <Label>
          address
          <Input
            type="text"
            placeholder="123 Baker St"
            value={customerAddress}
            onChange={handleAddressUpdate}
          />
        </Label>

        <Label>
          zip code
          <Input
            type="text"
            placeholder="10001"
            value={customerZip}
            onChange={handleZipUpdate}
          />
        </Label>

        <Label>
          city
          <Input
            type="text"
            placeholder="New York"
            value={customerCity}
            onChnage={handleCityUpdate}
          />
        </Label>

        <Label>
          country
          <Input
            type="text"
            placeholder="United States"
            value={customerCountry}
            onChange={handleCountryUpdate}
          />
        </Label>
      </Fieldset>

      <Fieldset>
        <Legend>payment details</Legend>

        <Div>
          <Para>payment method</Para>
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
    </Form>
  );
};

export default CheckoutForm;
