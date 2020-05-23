import { useQuery } from "@apollo/react-hooks";
import React from "react";

import Years from "components/Years";
import ALBUM_PER_YEAR_COUNT from "queries/AlbumPerYearCount";
import { AlbumPerYearCount } from "queries/AlbumPerYearCount/types/AlbumPerYearCount";

const YearsPage = () => {
  const { data, error, loading } = useQuery<AlbumPerYearCount, undefined>(
    ALBUM_PER_YEAR_COUNT
  );

  if (loading || error || !data) {
    return null;
  }

  return <Years data={data.albumPerYearCount} />;
};

export default YearsPage;
