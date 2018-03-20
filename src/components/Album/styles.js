import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { base, small, large } from '../../styles/fonts';

export const Anchor = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  cursor: pointer;
  flex-wrap: wrap;

  &:hover {
    background-color: #eee;
  }

  @media (min-width: 600px) {
    flex-wrap: nowrap;
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
  flex-shrink: 1;
  width: calc(100% - 50px);

  @media (min-width: 600px) {
    width: auto;
  }
`;

export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  padding-left: 40px;
  padding-top: 4px;

  @media (min-width: 600px) {
    width: auto;
    padding: 9px 0 0 10px;
  }
`;

export const Title = styled.div`
  ${large};
  color: #5f5f5f;
  font-weight: 600;
`;

export const Artist = styled.div`
  ${base};
  color: #5b5b5b;
`;

export const Date = styled.div`
  ${small};
  color: #a3a3a3;
`;

export const FirstPlayed = styled.div`
  ${small};
  color: #a3a3a3;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
