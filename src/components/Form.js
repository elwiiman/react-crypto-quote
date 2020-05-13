import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import useCoin from "../hooks/useCoin";
import useCrypto from "../hooks/useCrypto";
import axios from "axios";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {
  //state
  const [cryptoList, setCryptoList] = useState([]);

  const COINS = [
    { code: "USD", name: "US Dollar" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Pound" },
  ];
  // using the custom hook useCoin
  const [coin, SelectCoin] = useCoin("Choose you coin:", "", COINS);

  //using the custom hook useCrypto
  const [crypto, SelectCrypto] = useCrypto("Choose a crypto", "", cryptoList);

  //Execute API
  useEffect(() => {
    const consultAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const result = await axios.get(url);
      setCryptoList(result.data.Data);
    };

    consultAPI();
  }, []);

  return (
    <form>
      <SelectCoin />
      <SelectCrypto />
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Form;
