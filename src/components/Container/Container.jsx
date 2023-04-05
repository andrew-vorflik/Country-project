import React from "react";
import { MainStyled } from "./Container.styled";

export const Container = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};
