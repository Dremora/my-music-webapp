import { useQuery } from "@apollo/client";
import React, { useState } from "react";

import AlbumList from "components/AlbumList";
import Search from "components/Search";
import FIND_ALBUMS from "queries/FindAlbums";
import {
  FindAlbums,
  FindAlbumsVariables,
} from "queries/FindAlbums/types/FindAlbums";

const IndexPage = () => {
  const [searchText, setSearchText] = useState("");

  const { data } = useQuery<FindAlbums, FindAlbumsVariables>(FIND_ALBUMS, {
    skip: !searchText,
    variables: { filter: { query: searchText } },
  });

  return (
    <>
      <Search onChange={setSearchText} value={searchText} />
      {data ? <AlbumList albums={data.albums} /> : null}
    </>
  );
};

export default IndexPage;
