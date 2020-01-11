import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Years from '../../components/Years';

import { AlbumPerYearCount, AlbumPerYearCount_albumPerYearCount } from './types/AlbumPerYearCount';
import ALBUM_PER_YEAR_COUNT from './query';

export default () => {
  const { data, error, loading } = useQuery<AlbumPerYearCount, {}>(ALBUM_PER_YEAR_COUNT);

  if (loading || error || !data) {
    return null;
  }

  return <Years data={data.albumPerYearCount} />;
};
