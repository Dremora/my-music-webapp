import React, { Fragment } from 'react';
import Album from '../../components/Album';

import Search from '../../components/Search';

export default ({ data, searchText, setSearchText }) => (
  <Fragment>
    <Search value={searchText} onChange={setSearchText} />
    <div>
      {data && !data.loading && !data.error && data.albums
        ? data.albums.map(album => <Album key={album.id} album={album} />)
        : ''}
    </div>
  </Fragment>
);
