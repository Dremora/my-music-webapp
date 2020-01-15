import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import FindAlbums from 'queries/FindAlbums';
import Album from 'components/Album';
import Search from 'components/Search';

const IndexPage = () => {
  const [searchText, setSearchText] = useState('');
  const { data, error, loading } = useQuery(FindAlbums, {
    skip: !searchText,
    variables: { searchText }
  });

  return (
    <>
      <Search value={searchText} onChange={setSearchText} />
      <div>
        {!loading && !error && data && data.albums
          ? data.albums.map(album => <Album key={album.id} album={album} />)
          : null}
      </div>
    </>
  );
};

export default IndexPage;
