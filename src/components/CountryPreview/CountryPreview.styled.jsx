import styled from "styled-components";

export const CountryPreviewStyled = styled.div`
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  cursor: pointer;
`;

export const FlagImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  position: center center;
  border-radius: var(--radius) var(--radius) 0 0;
  box-shadow: var(--shadow);
`;

export const CountryPreviewContainer = styled.div`
  padding: 20px;
`;

export const CountryTitle = styled.h3`
  margin: 0;
  margin-bottom: 15px;
  font-size: var(--fs-md);
`;

export const CountryInfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CountryInfoItem = styled.li`
  & + & {
    margin-top: 5px;
  }

  strong {
    margin-right: 5px;
  }
`;
