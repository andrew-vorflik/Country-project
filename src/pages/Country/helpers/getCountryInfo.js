export const getCountryInfo = (country) => {
  return [
    {
      title: "Native name",
      value: !!country.name
        ? Object.values(country.name.nativeName)[0].common
        : "",
    },
    { title: "Population", value: country.population || 0 },
    { title: "Region", value: country.region || "" },
    { title: "Capital", value: country?.capital?.[0] || "" },
    { title: "Domain", value: country?.tld?.[0] || "" },
    {
      title: "Currency",
      value: !!country.currencies
        ? Object.values(country.currencies)[0].name
        : "",
    },
    {
      title: "Languages",
      value: !!country.currencies
        ? Object.values(country.languages).join(", ")
        : [],
    },
  ];
};
