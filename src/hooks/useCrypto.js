import React, { useState, Fragment } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
`;

const useCrypto = (label, initialState, options) => {
  // Custom hook state
  const [state, setState] = useState(initialState);

  //interface UI
  const SelectCrypto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">- Select a coin -</option>
        {options.map((oneOption) => (
          <option key={oneOption.CoinInfo.Id} value={oneOption.CoinInfo.Name}>
            {oneOption.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  //return state, interface and function that modifies state
  return [state, SelectCrypto, setState];
};

export default useCrypto;
