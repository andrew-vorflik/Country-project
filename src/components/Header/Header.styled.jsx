import styled from "styled-components";

export const MainStyled = styled.header`
  padding: 32px 0;
  display: flex;
  justify-content: center;

  box-shadow: var(--shadow);
`;

export const TitleStyled = styled.div`
  font-weight: var(--fw-bold);
`;

export const ThemeButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  background-color: transparent;
  border: none;

  font-family: var(--family);
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);
  color: var(--color-text);
  text-transform: capitalize;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
