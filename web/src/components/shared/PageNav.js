import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import Arrow from "../../images/shared/desktop/icon-arrow-right.svg";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  margin: 8rem auto 9rem auto;
  @media screen and (max-width: 410px) {
    display: flex;
    flex-direction: column;
    gap: 6rem;
  }
`;

const LinkItem = styled(Link)``;

const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  &:hover {
    p {
      color: #d87d4a;
    }
  }
`;

const CardHeader = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 120px;
    height: 160px;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  background-color: #f1f1f1;
  padding-top: 5rem;
  padding-bottom: 1.5rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  text-transform: uppercase;
`;

const CardLeadText = styled.h2`
  color: #000000;
  font-weight: 400;
`;

const CardText = styled.p`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  text-transform: uppercase;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
`;

const Image = styled.img`
  display: inline-block;
  width: 100%;
  object-fit: cover;
`;

const PageNav = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityCategory {
        nodes {
          id
          name
          catImage {
            asset {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      {data.allSanityCategory.nodes.map(({ id, name, catImage }) => {
        return (
          <LinkItem key={id} to={`/${name}`}>
            <Card>
              <CardHeader>
                <Image src={catImage.asset.url} alt={name} />
              </CardHeader>

              <CardBody>
                <CardLeadText> {name} </CardLeadText>
                <CardText>
                  shop <Image src={Arrow} alt="shop items" />{" "}
                </CardText>
              </CardBody>
            </Card>
          </LinkItem>
        );
      })}
    </Wrapper>
  );
};

export default PageNav;
