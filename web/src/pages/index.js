import * as React from "react";
import FeaturedEarphones from "../components/home/FeaturedEarphones";
import FeaturedSpeaker from "../components/home/FeaturedSpeaker";
import Hero from "../components/home/Hero";
import { Container } from "../components/shared/GlobalStyles";
import SecondarySpeaker from "../components/home/SecondarySpeaker";
import Layout from "../components/shared/Layout";
import PageNav from "../components/shared/PageNav";
import Statement from "../components/shared/Statement";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Hero />
      <Container>
        <PageNav />
        <FeaturedSpeaker />
        <SecondarySpeaker />
        <FeaturedEarphones />
        <Statement />
      </Container>
    </Layout>
  );
};

export default IndexPage;
