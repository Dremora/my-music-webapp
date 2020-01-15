import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Years from 'components/Years';

import { AlbumPerYearCount } from 'queries/AlbumPerYearCount/types/AlbumPerYearCount';
import ALBUM_PER_YEAR_COUNT from 'queries/AlbumPerYearCount';

const YearsPage = () => {
  const { data, error, loading } = useQuery<AlbumPerYearCount, {}>(ALBUM_PER_YEAR_COUNT);

  if (loading || error || !data) {
    return null;
  }

  return <Years data={data.albumPerYearCount} />;
};

export default YearsPage;
