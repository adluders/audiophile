import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "../../images/shared/desktop/logo.svg";
import Cart from "../../images/shared/desktop/icon-cart.svg";
import { ModalContext } from "../context/ModalContext";
import CartContent from "./CartContent";
import { CartContext } from "../context/CartContext";

const Header = styled.header`
  background-color: #0e0e0e;
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;
  padding: 2.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Div = styled.div``;

const LinkItem = styled(Link)`
  color: #fff;
  &:hover {
    color: #db704a;
  }
`;

const Image = styled.img``;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavItem = styled.li`
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
`;

const CartBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const ItemCount = styled.p`
  color: #fff;
  background-color: #db704a;
  padding: 0.3rem;
  border-radius: 50%;
  font-size: 0.8rem;
  width: 25px;
  text-align: center;

  position: absolute;
  top: -90%;
  left: 70%;
`;

const Navbar = () => {
  const pagesData = [
    {
      id: 0,
      location: "/",
      text: "home",
    },
    {
      id: 1,
      location: "/headphones",
      text: "headphones",
    },
    {
      id: 2,
      location: "/speakers",
      text: "speakers",
    },
    {
      id: 3,
      location: "/earphones",
      text: "earphones",
    },
  ];

  const defaultState = {
    updateModalOpen: () => {},
    updateCartOpen: () => {},
    isCartOpen: false,
    cartCount: 0,
  };

  const { updateModalOpen } = useContext(ModalContext) || defaultState;
  const { updateCartOpen, isCartOpen, cartCount } =
    useContext(CartContext) || defaultState;

  const openCart = () => {
    updateModalOpen();
    updateCartOpen();
  };

  return (
    <Header>
      <Nav>
        <Div>
          <LinkItem to="/">
            <Image src={Logo} alt="audiophile logo" />
          </LinkItem>
        </Div>

        <NavItems>
          {pagesData.map(({ id, location, text }) => {
            return (
              <NavItem key={id}>
                <LinkItem to={location}> {text} </LinkItem>
              </NavItem>
            );
          })}
        </NavItems>

        <CartBox onClick={openCart}>
          <ItemCount> {cartCount} </ItemCount>
          <Image src={Cart} allt="cart item" />
        </CartBox>
      </Nav>

      {isCartOpen && <CartContent />}
    </Header>
  );
};

export default Navbar;
