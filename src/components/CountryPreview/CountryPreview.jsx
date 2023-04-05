import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CountryInfoItem,
  CountryInfoList,
  CountryPreviewContainer,
  CountryPreviewStyled,
  CountryTitle,
  FlagImg,
} from "./CountryPreview.styled";

const CountryPreview = ({ name, capital, population, region, flags }) => {
  const navigation = useNavigate();

  const handleCountryClick = () => {
    navigation(`/${name.common.toLowerCase()}`);
  };

  return (
    <CountryPreviewStyled onClick={handleCountryClick}>
      <FlagImg src={flags.png} />
      <CountryPreviewContainer>
        <CountryTitle>{name.common}</CountryTitle>
        <CountryInfoList>
          <CountryInfoItem>
            <strong>Population:</strong>
            <span>{population}</span>
          </CountryInfoItem>
          <CountryInfoItem>
            <strong>Region:</strong>
            <span>{region}</span>
          </CountryInfoItem>
          <CountryInfoItem>
            <strong>Capital:</strong>
            <span>{capital || "No capital"}</span>
          </CountryInfoItem>
        </CountryInfoList>
      </CountryPreviewContainer>
    </CountryPreviewStyled>
  );
};

export default CountryPreview;
