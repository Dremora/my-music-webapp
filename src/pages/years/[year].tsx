import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import AlbumList from "components/AlbumList";
import AlbumsByYearSelector from "components/AlbumsByYearSelector";
import FIND_ALBUMS from "queries/FindAlbums";
import {
  FindAlbums,
  FindAlbumsVariables,
} from "queries/FindAlbums/types/FindAlbums";

export const Spacer = styled.div`
  height: 10px;
`;

const YearsPage = () => {
  const router = useRouter();

  const year = parseInt(
    typeof router.query.year === "object"
      ? router.query.year.join("")
      : router.query.year || ""
  );

  const { data } = useQuery<FindAlbums, FindAlbumsVariables>(FIND_ALBUMS, {
    skip: isNaN(year),
    variables: { filter: { year } },
  });

  return (
    <>
      <AlbumsByYearSelector />
      <Spacer />
      {data ? <AlbumList albums={data.albums} /> : null}
    </>
  );
};

export default YearsPage;
