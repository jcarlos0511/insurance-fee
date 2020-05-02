import React, { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Summary from "./Components/Summary";

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
  const [summary, saveSummary] = useState({
    quotation: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  // Extracting data
  const { data } = summary;

  return (
    <Container>
      <Header title="Insurance Fee" />
      <ContainerForm>
        <Form saveSummary={saveSummary} />
        <Summary data={data} />
      </ContainerForm>
    </Container>
  );
}

export default App;
