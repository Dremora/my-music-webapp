// @flow

import React from 'react';

import { formatFirstPlayed } from '../../utils';

import { Added, Anchor, Artist, Column1, Column2, Date, FirstPlayed, Title } from './styles';

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
