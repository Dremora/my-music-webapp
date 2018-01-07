import styled from 'styled-components';

export const Root = styled.div`
  border-bottom: 1px solid #dddddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const Image = styled.img`
  background-color: transparent;
  margin-right: 9px;
`;

export const Input = styled.input`
  border-width: 0;
  font-family: 'Lato';
  line-height: 32px;
  font-size: 30px;
  height: 36px;
  width: 100%;
  padding: 2px 0;
  outline: none;
  font-weight: 300;
  color: #918f8f;
`;
