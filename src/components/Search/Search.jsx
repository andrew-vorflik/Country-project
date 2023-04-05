import React from "react";
import { SearchInputStyled, SearchLabelStyled } from "./Search.styled";
import { IoSearchOutline } from "react-icons/io5";

export const Search = ({ value, onChange }) => {
  const onChangeSearch = (event) => {
    onChange(event.target.value);
  };

  return (
    <SearchLabelStyled>
      <IoSearchOutline size="20px" />
      <SearchInputStyled
        type="search"
        value={value}
        onChange={onChangeSearch}
      />
    </SearchLabelStyled>
  );
};
