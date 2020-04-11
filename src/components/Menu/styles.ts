import styled from "styled-components";

export const MenuButton = styled.button`
  border: none;
  display: block;
  appearance: none;
  background: none;
  cursor: pointer;
  position: relative;
`;

export const SmallScreen = styled.div`
  display: flex;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const LargeScreen = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
  }
`;
