import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useCallback } from "react";

import YearsHistogram from "components/YearsHistogram";
import ALBUM_PER_YEAR_COUNT from "queries/AlbumPerYearCount";
import { AlbumPerYearCount } from "queries/AlbumPerYearCount/types/AlbumPerYearCount";

const AlbumsByYearSelector = () => {
  const router = useRouter();

  const navigateToYear = useCallback(
    (year: number) => {
      router.push("/years/[year]", `/years/${year}`);
    },
    [router]
  );

  const { data, error, loading } = useQuery<AlbumPerYearCount, undefined>(
    ALBUM_PER_YEAR_COUNT
  );

  if (loading || error || !data) {
    return null;
  }

  return (
    <YearsHistogram
      data={data.albumPerYearCount}
      onYearClick={navigateToYear}
    />
  );
};

export default AlbumsByYearSelector;
