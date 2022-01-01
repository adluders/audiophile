import * as React from "react";
import styled from "styled-components";
import Layout from "../components/shared/Layout";

const Div = styled.div`
  text-align: center;
  margin: auto;
`;

const Text = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
`;

const NotFoundPage = () => {
  return (
    <Layout title="404 Not Found">
      <Div>
        <Text>Ooops, you've hit the wrong tune...</Text>
      </Div>
    </Layout>
  );
};

export default NotFoundPage;
