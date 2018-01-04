// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import formatFirstPlayed from '../format-first-played';

const Anchor = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding: 7px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

const Column1 = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  margin-right: 10px;
`;

const Title = styled.div`
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

const Artist = styled.div`
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

const Date = styled.div`
  color: #a3a3a3;
  font-family: 'Lato';
  font-size: 30px;
  font-weight: 300;
  line-height: 1;
`;

const FirstPlayed = styled.div`
  margin-top: 3px;
  color: #666666;
  font-family: 'Lato';
  font-size: 12px;
  font-weight: 300;
  line-height: 1;
`;

const Added = styled.span`
  color: #bbb;
  text-transform: uppercase;
`;

export default ({ album }) => {
  const firstPlayedFormatted = formatFirstPlayed(album.firstPlayed);
  return (
    <Anchor to={`/albums/${album.id}`}>
      <Column1>
        <Date>{album.year}</Date>
      </Column1>
      <Column2>
        <Title>{album.title}</Title>
        <Artist>{album.artist}</Artist>
      </Column2>
      <FirstPlayed>
        {firstPlayedFormatted ? (
          <span>
            <Added>Added: </Added>
            {firstPlayedFormatted}
          </span>
        ) : null}
      </FirstPlayed>
    </Anchor>
  );
};
