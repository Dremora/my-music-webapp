import styled from 'styled-components';
import { white } from 'styles/colors';

export const Items = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: ${white};
  box-shadow: 0px 2px 8px 3px rgba(0, 0, 0, 0.09);
  border-radius: 5px;

  @media (min-width: 600px) {
    flex-direction: row;
    box-shadow: none;
    background: none;
  }
`;

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
