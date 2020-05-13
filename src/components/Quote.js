import React from "react";
import styled from "@emotion/styled";

const QuoteDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Quote = ({ quote, mainCoin }) => {
  if (Object.keys(quote).length === 0) return null;

  return (
    <QuoteDiv>
      <Price>
        The price is: <span>{quote.PRICE}</span>
      </Price>
      <Info>
        The highest price today: <span>{quote.HIGHDAY}</span>
      </Info>
      <Info>
        The lowest price today: <span>{quote.LOWDAY}</span>
      </Info>
      <Info>
        Variation in last 24 hours: <span>{quote.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Last update: <span>{quote.LASTUPDATE}</span>
      </Info>
    </QuoteDiv>
  );
};

export default Quote;
