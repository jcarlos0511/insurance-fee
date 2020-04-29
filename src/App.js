import React from "react";
import Header from "./Components/Header";

import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
      <Header title="Insurance Fee" />
      <ContainerForm></ContainerForm>
    </Container>
  );
}

export default App;
