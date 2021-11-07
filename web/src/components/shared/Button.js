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

const Button = ({ btntype }) => {
  return (
    <Wrapper btntype={btntype} to="/">
      see product
    </Wrapper>
  );
};

Button.proptype = { btntype: PropTypes.string.isRequired };

Button.defaultProps = { btntype: "" };

export default Button;
