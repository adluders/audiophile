import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { GatsbyImage } from "gatsby-plugin-image";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 15rem;

  @media screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const Div = styled.div`
  img {
    border-radius: 0.5rem;
  }
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4rem;
`;

const Suggestions = ({ items }) => {
  return (
    <>
      <Heading>you may also like</Heading>
      <Wrapper>
        {items.map(({ itemName, link, graphic, category }, inx) => (
          <Card key={inx}>
            <Div>
              <GatsbyImage
                image={graphic.asset.gatsbyImageData}
                alt={itemName}
              />
            </Div>

            <h1> {itemName} </h1>

            <Button
              btntype="primary"
              route={`${category.name}/${link.current}`}
            />
          </Card>
        ))}
      </Wrapper>
    </>
  );
};

export default Suggestions;
