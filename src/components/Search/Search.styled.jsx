import styled from "styled-components";

export const SearchStyled = styled.div``;

export const SearchLabelStyled = styled.label`
  width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: var(--color-bg);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
`;

export const SearchInputStyled = styled.input`
  padding-left: 10px;
  flex-grow: 1;
  border: none;
  outline: none;
  color: var(--color-text);
  font-family: var(--family);
  border-radius: var(--radius);
  background-color: var(--color-bg);
  font-size: var(--fs-md);

  &::-webkit-search-cancel-button {
    cursor: pointer;
  }
`;
