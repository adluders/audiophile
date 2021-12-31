import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Hamburger from "../../images/shared/tablet/icon-hamburger.svg";
import Logo from "../../images/shared/desktop/logo.svg";
import Cart from "../../images/shared/desktop/icon-cart.svg";
import Speakers from "../../images/shared/desktop/image-category-thumbnail-speakers.png";
import Headphones from "../../images/shared/desktop/image-category-thumbnail-headphones.png";
import Earphones from "../../images/shared/desktop/image-category-thumbnail-earphones.png";
import Arrow from "../../images/shared/desktop/icon-arrow-right.svg";
import { ModalContext } from "../context/ModalContext";
import { CartContext } from "../context/CartContext";
import CartContent from "./CartContent";

const Header = styled.header`
  background-color: #0e0e0e;
`;

const Section = styled.section`
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Div = styled.div`
  &:last-of-type {
    margin-left: auto;
  }
`;

const NavLink = styled(Link)``;

const NavItems = styled.ul`
  max-width: 100%;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 6rem 2.5rem 2.5rem;
  position: absolute;
  top: 93px;
  width: 100%;
  z-index: 2;
  @media screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
`;

const NavItem = styled.li`
  background-color: #f1f1f1;
  position: relative;
  text-align: center;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Image = styled.img`
  display: inline-block;
  width: 100%;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardHeader = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 80px;
    height: 104px;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;

  h2 {
    color: #000;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    img {
      width: 8px;
    }
  }
`;

const ItemCount = styled.p`
  border-radius: 50%;
  background-color: #db784a;
  color: #fff;
  padding: 0.3rem;
  width: 25px;
  text-align: center;

  position: absolute;
  top: -100%;
  right: -85%;
`;

const MobileNav = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const showMenu = () => {
    setMenuStatus(!menuStatus);
    updateModalOpen();
  };

  const mobileNavData = [
    {
      id: 0,
      location: "/headphones",
      text: "headphones",
      graphic: Headphones,
    },
    {
      id: 1,
      location: "/speakers",
      text: "speakers",
      graphic: Speakers,
    },
    {
      id: 2,
      location: "/earphones",
      text: "earphones",
      graphic: Earphones,
    },
  ];

  const { setModalOpen, isModalOpen, updateModalOpen } =
    useContext(ModalContext);

  const { cartCount, updateCartOpen, isCartOpen } = useContext(CartContext);

  return (
    <Header>
      <Section>
        <Div>
          <Button onClick={showMenu}>
            <Image src={Hamburger} alt="hamburger menue" />
          </Button>
        </Div>

        <Link to="/">
          <Image src={Logo} alt="Audiophile Logo" />
        </Link>

        <Div style={{ position: "relative" }} onClick={updateCartOpen}>
          <Image src={Cart} alt="User Cart" />

          <ItemCount> {cartCount} </ItemCount>
        </Div>

        {isCartOpen && <CartContent />}
      </Section>

      {menuStatus && (
        <NavItems>
          {mobileNavData.map(({ id, location, text, graphic }) => {
            return (
              <NavItem key={id}>
                <NavLink to={location}>
                  <Card>
                    <CardHeader>
                      <Image src={graphic} alt={text} />
                    </CardHeader>
                    <CardBody>
                      <h2> {text} </h2>
                      <p>
                        shop <Image src={Arrow} alt="shop items" />{" "}
                      </p>
                    </CardBody>
                  </Card>
                </NavLink>
              </NavItem>
            );
          })}
        </NavItems>
      )}
    </Header>
  );
};

export default MobileNav;
