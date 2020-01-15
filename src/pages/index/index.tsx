import React, { useState } from 'react';

import { useQuery } from '@apollo/react-hooks';

import Album from 'components/Album';
import Search from 'components/Search';
import FindAlbums from 'queries/FindAlbums';

const IndexPage = () => {
  const [searchText, setSearchText] = useState('');

  const { data, error, loading } = useQuery(FindAlbums, {
    skip: !searchText,
    variables: { searchText }
  });

  return (
    <>
      <Search onChange={setSearchText} value={searchText} />
      <div>
        {!loading && !error && data && data.albums
          ? data.albums.map(album => <Album album={album} key={album.id} />)
          : null}
      </div>
    </>
  );
};

export default IndexPage;
