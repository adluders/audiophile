import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { GatsbyImage } from "gatsby-plugin-image";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 15rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Div = styled.div`
  img {
    border-radius: 0.5rem;
  }
`;

const Suggestions = ({ items }) => {
  return (
    <Wrapper>
      {items.map(({ itemName, link, graphic, category }, inx) => (
        <Card key={inx}>
          <Div>
            <GatsbyImage image={graphic.asset.gatsbyImageData} alt={itemName} />
          </Div>

          <h1> {itemName} </h1>

          <Button
            btntype="primary"
            route={`${category.name}/${link.current}`}
          />
        </Card>
      ))}
    </Wrapper>
  );
};

export default Suggestions;
