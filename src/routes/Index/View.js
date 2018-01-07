import React from 'react';
import Album from '../../components/Album';

import Search from '../../components/Search';
import { Contents } from './styles';

export default ({ data, searchText, setSearchText }) => (
  <Contents>
    <Search value={searchText} onChange={setSearchText} />
    <div>
      {data && !data.loading && !data.error && data.albums
        ? data.albums.map(album => <Album key={album.id} album={album} />)
        : ''}
    </div>
  </Contents>
);
