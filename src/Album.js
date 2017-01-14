import React from 'react';
import styled from 'styled-components';
import formatFirstPlayed from './format-first-played';

const Root = styled.div`
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
`;

const Title = styled.div`
  color: #5F5F5F;
  font-family: 'Lato';
  font-size: 20px;
  font-weight: bold
  letter-spacing: 0.5;
  line-height: 1;
`;

const Artist = styled.div`
  margin-top: 10px;
  color: #5B5B5B;
  font-family: 'Lato';
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0.5;
  line-height: 1;
  text-transform: uppercase;
`;

const Date = styled.div`
  color: #A3A3A3;
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

export default ({ album: { title, artist, year, first_played } }) => {
  const firstPlayedFormatted = formatFirstPlayed(first_played);
  return (
    <Root>
      <Column1>
        <Date>{year}</Date>
        <FirstPlayed>{firstPlayedFormatted}</FirstPlayed>
      </Column1>
      <div>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </div>
    </Root>
  );
}
