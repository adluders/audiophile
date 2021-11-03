import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Div = styled.div`
  background-color: #0e0e0e;
  height: 200px;
`;
const IndexPage = () => {
  return (
    <Layout>
      <Div>
        <h1>Home Page</h1>
      </Div>
    </Layout>
  );
};

export default IndexPage;
