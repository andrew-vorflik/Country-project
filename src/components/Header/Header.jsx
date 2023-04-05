import React from "react";
import { ThemeButtonStyled, TitleStyled, Wrapper } from "./Header.styled";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { MainStyled } from "../Header/Header.styled";
import { Container } from "../Container/Container";
import { APP_THEME } from "../../constants";

export const Header = ({ theme, onSwitchTheme }) => {
  const moonIcon = theme === APP_THEME.LIGHT ? <IoMoonOutline /> : <IoMoon />;

  return (
    <MainStyled>
      <Container>
        <Wrapper>
          <TitleStyled>Where is the world?</TitleStyled>
          <ThemeButtonStyled onClick={onSwitchTheme}>
            {moonIcon}
            Light mode
          </ThemeButtonStyled>
        </Wrapper>
      </Container>
    </MainStyled>
  );
};
