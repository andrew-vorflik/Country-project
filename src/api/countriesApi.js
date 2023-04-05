import axios from "axios";
import { COUNTRY_ID, COUNTRY_PREVIEW, getListOfCountries } from "../config";

export const getAllCountriesPreview = async () => {
  const response = await axios.get(COUNTRY_PREVIEW);
  return response.data;
};

export const getCountry = async (name) => {
  const response = await axios.get(`${COUNTRY_ID}/${name}`);
  return response.data;
};

export const getBorderingCountries = async (list) => {
  const response = await axios.get(getListOfCountries(list));
  return response.data;
};
