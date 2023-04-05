import React, { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { getBorderingCountries, getCountry } from "../../api/countriesApi";
import { Container } from "../../components/Container/Container";
import {
  BordersInfoStyled,
  CountryContainer,
  CountryStyled,
  FlagStyled,
  InfoContainerStyled,
  InfoItemStyled,
  InfoItemTitleStyled,
  InfoItemValueStyled,
  InfoListsContainerStyled,
  InfoListStyled,
  InfoStyled,
  BorderTitleStyled,
  BorderingCountryStyled,
  CountryPageContainer,
  ButtonStyled,
} from "./Country.styled";
import { getCountryInfo } from "./helpers/getCountryInfo";

export const Country = () => {
  const { countryId } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState({});
  const [borderingCountries, setBorderingCountries] = useState([]);

  const countryInfo = getCountryInfo(country);

  const { borders: borderingCountriesCodes } = country;

  const onClickBackButton = () => {
    navigate(`/`);
  };

  // Get country info
  useEffect(() => {
    const fetchCountry = async () => {
      const response = await getCountry(countryId);
      setCountry(response[0]);
    };

    fetchCountry();
  }, [countryId]);

  // Get bordering country info
  useEffect(() => {
    if (!borderingCountriesCodes) {
      return;
    }

    const fetchBorderingCountries = async () => {
      const response = await getBorderingCountries(borderingCountriesCodes);
      setBorderingCountries(
        response.map((country) => ({
          name: country.name.common.toLowerCase(),
          icon: country.flag,
        }))
      );
    };

    fetchBorderingCountries();
  }, [borderingCountriesCodes]);

  return (
    <CountryStyled>
      <Container>
        <CountryPageContainer>
          <ButtonStyled onClick={onClickBackButton}>
            <IoArrowBackOutline /> Countries list
          </ButtonStyled>
          <CountryContainer>
            <FlagStyled>
              <img src={country?.flags?.svg} alt={country?.flags?.alt} />
            </FlagStyled>
            <InfoStyled>
              <h1>{country?.name?.common}</h1>
              <InfoContainerStyled>
                <InfoListsContainerStyled>
                  <InfoListStyled>
                    {countryInfo.map((item) => (
                      <InfoItemStyled key={item.title}>
                        <InfoItemTitleStyled>{item.title}:</InfoItemTitleStyled>
                        <InfoItemValueStyled>{item.value}</InfoItemValueStyled>
                      </InfoItemStyled>
                    ))}
                  </InfoListStyled>
                </InfoListsContainerStyled>
                <BordersInfoStyled>
                  <BorderTitleStyled>Border:</BorderTitleStyled>
                  <div>
                    {borderingCountries.map((country) => (
                      <BorderingCountryStyled
                        key={country.name}
                        to={`/${country.name}`}
                      >
                        {country.name} {country.icon}
                      </BorderingCountryStyled>
                    ))}
                  </div>
                </BordersInfoStyled>
              </InfoContainerStyled>
            </InfoStyled>
          </CountryContainer>
        </CountryPageContainer>
      </Container>
    </CountryStyled>
  );
};
