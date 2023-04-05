export const FLAGS_URL = "https://restcountries.com/v3.1/";

export const ALL_COUNTRIES = `${FLAGS_URL}/all`;

export const COUNTRY_PREVIEW = `${FLAGS_URL}/all?fields=name,population,region,capital,flags`;

export const COUNTRY_ID = `${FLAGS_URL}/name`;

export const getListOfCountries = (list) => {
  return `${FLAGS_URL}/alpha?codes=${list.join(",")}`;
};
