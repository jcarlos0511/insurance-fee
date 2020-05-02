import React from "react";
import styled from "@emotion/styled";
import { firstCapital } from "../helper";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Summary = ({ data }) => {
  // Extracting data
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") {
    return null;
  }

  return (
    <Container>
      <h2>Summary</h2>
      <ul>
        <li>Brand: {firstCapital(brand)} </li>
        <li>Year: {year} </li>
        <li>Plan: {firstCapital(plan)} </li>
      </ul>
    </Container>
  );
};
Summary.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Summary;
