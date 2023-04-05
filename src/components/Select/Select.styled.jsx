import styled from "styled-components";
import ReactSelect from "react-select";

export const Select = styled(ReactSelect).attrs({
  styles: {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "var(--color-bg)",
      borderColor: "gray",
      boxShadow: "var(--shadow)",
      borderRadius: "var(--radius)",
      border: "none",
      color: "var(--color-text)",
      height: "50px",
      paddingLeft: "15px",
      fontSize: "var(--fs-md)",
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: "var(--color-bg)",
      color: "var(--color-text)",
      cursor: "pointer",
    }),
  },
  classNamePrefix: "react-select",
})`
  width: 200px;

  .react-select__menu {
    box-shadow: var(--shadow);
    background-color: var(--color-bg);
  }

  .react-select__single-value {
    color: var(--color-text);
  }
`;
