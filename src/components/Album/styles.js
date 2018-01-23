import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { base, small, large } from '../../styles/fonts';

export const Anchor = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export const Column1 = styled.div`
  width: 40px;
  padding-top: 9px;
  padding-right: 10px;
  flex-shrink: 0;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
`;

export const Title = styled.div`
  ${large};
  color: #5f5f5f;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Artist = styled.div`
  ${base};
  color: #5b5b5b;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Date = styled.div`
  ${small};
  color: #a3a3a3;
`;

export const FirstPlayed = styled.div`
  ${small};
  color: #a3a3a3;
  padding-top: 9px;
`;
