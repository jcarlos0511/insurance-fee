import React from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";

import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px 0px #000000;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
      <Header title="Insurance Fee" />
      <ContainerForm>
        <Form />
      </ContainerForm>
    </Container>
  );
}

export default App;
