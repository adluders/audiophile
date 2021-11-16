import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled(Link)`
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  line-height: 1rem;
  border: 2px solid;

  ${({ btntype }) => buttonScheme(btntype)};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    ${({ btntype }) => handleHover(btntype)}
  }

  @media screen and (max-width: 820px) {
    padding: 0.8rem 1rem;
  }

  @media screen and (max-width: 410px) {
    padding: 0.5rem 1rem;
  }
`;

const buttonScheme = (btntype) => {
  switch (btntype) {
    default:
      return `
      background-color: #000; color: #fff; border-color: #000;
      `;
    case "primary":
      return `
      background-color: #d87d4a; color: #fff; border-color: transparent`;
    case "secondary":
      return `background-color: transparent; color: #000; border-color: #000`;
  }
};

const handleHover = (btntype) => {
  switch (btntype) {
    default:
      return `background-color: #4c4c4c; border-color: #4c4c4c`;
    case "primary":
      return `background-color: #fbaf85; color: #fff`;
    case "secondary":
      return `background-color: #000; color: #fff`;
  }
};

const Button = ({ btntype, text, route }) => {
  return (
    <Wrapper btntype={btntype} to={`/${route}`}>
      {text}
    </Wrapper>
  );
};

Button.proptype = {
  btntype: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

Button.defaultProps = { btntype: "", text: "see product", route: "" };

export default Button;
