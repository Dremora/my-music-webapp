import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 5px 0;
`;

export const Label = styled.span`
  font-weight: bold;
  width: 25%;
  font-size: 16px;
  line-height: 2;
  font-family: 'Lato';
  text-align: right;
  padding: 3px 20px 3px 0;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`;
