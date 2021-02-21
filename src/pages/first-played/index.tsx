import { useQuery } from "@apollo/client";
import React from "react";

import YearsHistogram from "components/YearsHistogram";
import ALBUM_PER_FIRST_PLAYED_YEAR_COUNT from "queries/AlbumPerFirstPlayedYearCount";
import { AlbumPerFirstPlayedYearCount } from "queries/AlbumPerFirstPlayedYearCount/types/AlbumPerFirstPlayedYearCount";

const FirstPlayedYearsPage = () => {
  const { data, error, loading } = useQuery<
    AlbumPerFirstPlayedYearCount,
    undefined
  >(ALBUM_PER_FIRST_PLAYED_YEAR_COUNT);

  if (loading || error || !data) {
    return null;
  }

  return <YearsHistogram data={data.albumPerFirstPlayedYearCount} />;
};

export default FirstPlayedYearsPage;
