import styled from "styled-components";

export const CountriesListStyled = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
