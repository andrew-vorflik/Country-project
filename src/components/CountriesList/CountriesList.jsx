import React from "react";
import { Container } from "../Container/Container";
import CountryPreview from "../CountryPreview/CountryPreview";
import { CountriesListStyled } from "./CountriesList.styled";

export const CountriesList = ({ countries }) => {
  return (
    <Container>
      <CountriesListStyled>
        {countries.map((item, index) => (
          <CountryPreview key={`${item.name}-${index}`} {...item} />
        ))}
      </CountriesListStyled>
    </Container>
  );
};
