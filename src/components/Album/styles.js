import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Anchor = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding: 7px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export const Column1 = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  margin-right: 10px;
`;

export const Title = styled.div`
  color: #5f5f5f;
  font-family: 'Lato';
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-bottom: 10px;
`;

export const Artist = styled.div`
  color: #5b5b5b;
  font-family: 'Lato';
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Date = styled.div`
  color: #a3a3a3;
  font-family: 'Lato';
  font-size: 30px;
  font-weight: 300;
  line-height: 1;
`;

export const FirstPlayed = styled.div`
  margin-top: 3px;
  color: #666666;
  font-family: 'Lato';
  font-size: 12px;
  font-weight: 300;
  line-height: 1;
`;

export const Added = styled.span`
  color: #bbb;
  text-transform: uppercase;
`;
