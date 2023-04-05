import { useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAllCountriesPreview } from "./api/countriesApi";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { APP_THEME } from "./constants";
import { Country } from "./pages/Country/Country";

const filterCountries = (filter, allCountries) => {
  if (!filter) {
    return allCountries;
  }

  return allCountries.filter((country) => {
    return country.region === filter.value;
  });
};

const sortCountries = (countries) => {
  return countries.sort((a, b) => {
    return a.name.common > b.name.common ? 1 : -1;
  });
};

const onSearch = (search, countries) => {
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
};

function App() {
  const [theme, setTheme] = useState(APP_THEME.LIGHT);
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState("");

  const onSwitchTheme = () => {
    setTheme(theme === APP_THEME.LIGHT ? APP_THEME.DARK : APP_THEME.LIGHT);
  };

  const filteredCountries = useMemo(() => {
    return filterCountries(filter, countries);
  }, [filter, countries]);

  const searchedFilteredCountries = useMemo(() => {
    return onSearch(search, filteredCountries);
  }, [filteredCountries, search]);

  // Set theme
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Get countries response
  useEffect(() => {
    const fetchCountriesList = async () => {
      const countriesResp = await getAllCountriesPreview();
      setCountries(sortCountries(countriesResp));
    };

    fetchCountriesList();
  }, []);

  return (
    <div>
      <Header onSwitchTheme={onSwitchTheme} theme={theme} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              countries={searchedFilteredCountries}
              filter={filter}
              setFilter={setFilter}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route path="/:countryId" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
