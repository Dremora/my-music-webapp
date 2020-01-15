import React from 'react';

import { useQuery } from '@apollo/react-hooks';

import Years from 'components/Years';

import ALBUM_PER_FIRST_PLAYED_YEAR_COUNT from 'queries/AlbumPerFirstPlayedYearCount';
import { AlbumPerFirstPlayedYearCount } from 'queries/AlbumPerFirstPlayedYearCount/types/AlbumPerFirstPlayedYearCount';

const FirstPlayedYearsPage = () => {
  const { data, error, loading } = useQuery<AlbumPerFirstPlayedYearCount, {}>(ALBUM_PER_FIRST_PLAYED_YEAR_COUNT);

  if (loading || error || !data) {
    return null;
  }

  return <Years data={data.albumPerFirstPlayedYearCount} />;
};

export default FirstPlayedYearsPage;
