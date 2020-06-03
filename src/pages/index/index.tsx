import { useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";

import Album from "components/Album";
import Search from "components/Search";
import FIND_ALBUMS from "queries/FindAlbums";
import {
  FindAlbums,
  FindAlbumsVariables,
} from "queries/FindAlbums/types/FindAlbums";

const IndexPage = () => {
  const [searchText, setSearchText] = useState("");

  const { data, error, loading } = useQuery<FindAlbums, FindAlbumsVariables>(
    FIND_ALBUMS,
    {
      skip: !searchText,
      variables: { filter: { query: searchText } },
    }
  );

  return (
    <>
      <Search onChange={setSearchText} value={searchText} />
      <div>
        {!loading && !error && data && data.albums
          ? data.albums.map((album) => <Album album={album} key={album.id} />)
          : null}
      </div>
    </>
  );
};

export default IndexPage;
