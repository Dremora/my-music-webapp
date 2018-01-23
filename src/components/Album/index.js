// @flow

import React from 'react';

import { formatFirstPlayed } from '../../utils';

import { Anchor, Artist, Column1, Column2, Column3, Date, FirstPlayed, Title } from './styles';

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

      <Column3>
        <FirstPlayed>{firstPlayedFormatted ? <span>ADDED: {firstPlayedFormatted}</span> : null}</FirstPlayed>
      </Column3>
    </Anchor>
  );
};
