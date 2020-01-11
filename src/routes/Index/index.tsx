import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import FindAlbums from './query';
import Album from '../../components/Album';
import Search from '../../components/Search';

export default () => {
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
