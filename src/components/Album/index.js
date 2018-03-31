// @flow

import React from 'react';

import { formatFirstPlayed } from '../../utils';

import Text from '../Text';

import { Anchor, Column1, Column2, Column3, FirstPlayed } from './styles';

export default ({ album }) => {
  const firstPlayedFormatted = formatFirstPlayed(album.firstPlayed);
  return (
    <Anchor to={`/albums/${album.id}`}>
      <Column1>
        <Text color="lighterGrey" size="small">
          {album.year}
        </Text>
      </Column1>
      <Column2>
        <Text color="grey" size="large" weight="semiBold">
          {album.title}
        </Text>

        <Text color="grey">{album.artist}</Text>
      </Column2>

      <Column3>
        <FirstPlayed>
          <Text color="lighterGrey" size="small">
            {firstPlayedFormatted ? <span>ADDED: {firstPlayedFormatted}</span> : null}
          </Text>
        </FirstPlayed>
      </Column3>
    </Anchor>
  );
};
