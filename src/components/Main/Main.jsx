import React from "react";
import { Container } from "../Container/Container";
import { CountriesList } from "../CountriesList/CountriesList";
import { Form } from "../Form/Form";
import { MainStyled } from "./Main.styled";

export const Main = ({ countries, filter, setFilter, search, setSearch }) => {
  return (
    <MainStyled>
      <Container>
        <Form
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />
        <CountriesList countries={countries} />
      </Container>
    </MainStyled>
  );
};
