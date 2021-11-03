import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Logo from "../images/shared/desktop/logo.svg";
import Facebook from "../images/shared/desktop/icon-facebook.svg";
import Twitter from "../images/shared/desktop/icon-twitter.svg";
import Instagram from "../images/shared/desktop/icon-instagram.svg";

const Wrapper = styled.footer`
  background-color: #0e0e0e;
  padding-top: 75px;
  padding-bottom: 48px;
  p {
    line-height: 25px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Div = styled.div``;

const Image = styled.img``;

const FooterLink = styled(Link)`
  color: #fff;
  &:hover {
    color: #d87d4a;
  }
`;

const ListItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ListItem = styled.li`
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2rem;
  margin-bottom: 3rem;
  p {
    max-width: 55%;
  }
`;

const Footer = () => {
  const footerNavData = [
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

  const socialData = [
    {
      id: 0,
      address: "https://www.facebook.com",
      graphic: Facebook,
      text: "facebook",
    },
    {
      id: 1,
      address: "https://www.twitter.com",
      graphic: Twitter,
      text: "twitter",
    },
    {
      id: 2,
      address: "https://www.instagram.com",
      graphic: Instagram,
      text: "instagram",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Section>
          <Div>
            <FooterLink to="/">
              <Image src={Logo} alt="audiophile logo" />
            </FooterLink>
          </Div>

          <ListItems>
            {footerNavData.map(({ id, location, text }) => {
              return (
                <ListItem key={id}>
                  <FooterLink to={location}> {text} </FooterLink>
                </ListItem>
              );
            })}
          </ListItems>
        </Section>

        <Content>
          <Div>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </Div>
          <Div>
            <ListItems>
              {socialData.map(({ id, address, graphic, text }) => {
                return (
                  <ListItem key={id}>
                    <a href={address} target="_blank" rel="norefferer">
                      <Image src={graphic} alt={text} />
                    </a>
                  </ListItem>
                );
              })}
            </ListItems>
          </Div>
        </Content>

        <Section>
          <p> Copyright {new Date().getFullYear()}. All Rights Reserved </p>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default Footer;
