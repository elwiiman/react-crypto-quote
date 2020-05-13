import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import img from "./cryptomonedas.png";
import axios from "axios";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import Quote from "./components/Quote";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

const Img = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

function App() {
  const [mainCoin, setMainCoin] = useState("");
  const [mainCrypto, setMainCrypto] = useState("");
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const quoteCryptoByAPI = async () => {
      //aavoid execution the first time
      if (mainCoin === "") return;

      //consult API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${mainCrypto}&tsyms=${mainCoin}`;
      const result = await axios.get(url);

      //show spinner
      setLoading(true);

      //hide spinner
      setTimeout(() => {
        //changing state of loading
        setLoading(false);
        //setting data got from the API in variable quote
        setQuote(result.data.DISPLAY[mainCrypto][mainCoin]);
      }, 3000);
    };

    quoteCryptoByAPI();
  }, [mainCoin, mainCrypto]);

  return (
    <Container>
      <div>
        <Img src={img} alt="img_crypto" />
      </div>
      <div>
        <Heading>Quote crypto instantly</Heading>
        <Form setMainCoin={setMainCoin} setMainCrypto={setMainCrypto} />
        {loading ? <Spinner /> : <Quote quote={quote} mainCoin={mainCoin} />}
      </div>
    </Container>
  );
}

export default App;
