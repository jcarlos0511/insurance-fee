import React, { useState } from "react";
import styled from "@emotion/styled";
import { getDifferenceYear, calculateBrand, getPlan } from "../helper";
import PropTypes from "prop-types";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  margin-top: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ saveSummary, setLoading }) => {
  // States
  const [data, saveData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  // state 'error'
  const [error, setError] = useState(false);

  // extract State values
  const { brand, year, plan } = data;

  // Read the form data and put it in the State
  const getData = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // When the user clicks on 'Go'

  const goToCalculate = (e) => {
    e.preventDefault();

    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // Starting with a 2000 base
    let result = 2000;

    // Getting the difference of years
    const difference = getDifferenceYear(year);

    // 3% must be subtracted for each year
    result -= (difference * 3 * result) / 100;

    // American 15%
    // Asian 5%
    // European 30%
    result = calculateBrand(brand) * result;

    // Basic increase 20%
    //Premium increase 50%
    const increasePlan = getPlan(plan);
    result = parseFloat(increasePlan * result).toFixed(2);

    //Show component 'Loading'
    setLoading(true);

    setTimeout(() => {
      //Hide component 'Loading'
      setLoading(false);

      //Save result
      saveSummary({
        quotation: Number(result),
        data,
      });
    }, 3000);
  };

  return (
    <form onSubmit={goToCalculate}>
      {error ? <Error>All fields are required</Error> : null}
      <Field>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={getData}>
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="asian">Asian</option>
          <option value="european">European</option>
        </Select>
      </Field>

      <Field>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={getData}>
          <option value="">-- Select --</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={getData}
        />{" "}
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="premium"
          checked={plan === "premium"}
          onChange={getData}
        />{" "}
        Premium
      </Field>
      <Button type="submit">Go</Button>
    </form>
  );
};
Form.propTypes = {
  saveSummary: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
export default Form;
