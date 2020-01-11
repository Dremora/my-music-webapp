import React from 'react';

import { formatFirstPlayed, FirstPlayed as FirstPlayedType } from '../../utils';
import { useLogin } from '../../data/login';

import Text from '../Text';

import { Anchor, Column1, Column2, Column3, FirstPlayed } from './styles';

interface Props {
  album: {
    id: string;
    artist: string;
    year: string;
    title: string;
    firstPlayed: FirstPlayedType;
  };
}

export default ({ album }: Props) => {
  const { isLoggedIn } = useLogin();
  const firstPlayedFormatted = formatFirstPlayed(album.firstPlayed);
  return (
    <Anchor to={isLoggedIn && `/albums/${album.id}`}>
      <Column1>
        <Text color="lighterGrey" size="small">
          {album.year}
        </Text>
      </Column1>
      <Column2>
        <Text color="grey" size="large" weight="bold">
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
