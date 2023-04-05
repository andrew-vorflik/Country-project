import React from "react";
import { Search } from "../Search/Search";
import { Select } from "../Select/Select.styled";
import { FormStyled } from "./Form.styled";
import { REGIONS } from "../../constants";

const testOptions = [
  { value: REGIONS.AFRICA, label: REGIONS.AFRICA },
  { value: REGIONS.ASIA, label: REGIONS.ASIA },
  { value: REGIONS.AMERICAS, label: REGIONS.AMERICAS },
  { value: REGIONS.EUROPE, label: REGIONS.EUROPE },
  { value: REGIONS.OCEANIA, label: REGIONS.OCEANIA },
];

export const Form = ({ search, setSearch, filter, setFilter }) => {
  return (
    <FormStyled>
      <Search value={search} onChange={setSearch} />
      <Select
        options={testOptions}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={filter}
        onChange={setFilter}
      />
    </FormStyled>
  );
};
