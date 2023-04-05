import { Link } from "react-router-dom";
import styled from "styled-components";

export const CountryStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 100px;
`;

export const CountryPageContainer = styled.div``;

export const CountryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px 10px;
  border: none;
  background-color: var(--color-ui-base);
  color: var(--text-color);
  box-shadow: var(--shadow);
  font-size: var(--fs-medium);
  border-radius: 3px;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`;

export const FlagStyled = styled.div`
  flex-grow: 1;

  img {
    width: 100%;
    max-width: 600px;
    box-shadow: var(--shadow);
  }
`;

export const InfoStyled = styled.div`
  flex-grow: 1;
  max-width: 50%;
  margin-left: 50px;
`;

export const InfoContainerStyled = styled.div``;

export const InfoListsContainerStyled = styled.div`
  display: flex;
`;

export const InfoListStyled = styled.ul`
  display: flex;
  row-gap: 0;
  flex-wrap: wrap;
  flex-grow: 1;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const InfoItemStyled = styled.li`
  display: flex;
  align-items: center;
  width: 50%;
  height: 25px;
  font-size: var(--fs-md);
`;

export const InfoItemTitleStyled = styled.span`
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
`;

export const InfoItemValueStyled = styled.span`
  display: inline-block;
  margin-left: 5px;
`;

export const BordersInfoStyled = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const BorderTitleStyled = styled(InfoItemTitleStyled)`
  margin-right: 5px;
`;

export const BorderingCountryStyled = styled(Link)`
  display: inline-block;
  padding: 2px 5px;
  margin: 0 10px 10px 0;
  text-decoration: none;
  color: inherit;
  text-transform: capitalize;
  border-radius: 5px;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
`;
