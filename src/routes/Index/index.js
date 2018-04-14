// @flow

import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { Value } from 'react-powerplug';

import FindAlbums from './query';
import Album from '../../components/Album';
import Search from '../../components/Search';

export default () => (
  <Value initial="">
    {({ value: searchText, setValue: setSearchText }) => (
      <Query skip={!searchText} query={FindAlbums} variables={{ searchText }}>
        {({ data, error, loading }) => (
          <Fragment>
            <Search value={searchText} onChange={setSearchText} />
            <div>
              {!loading && !error && data.albums
                ? data.albums.map(album => <Album key={album.id} album={album} />)
                : null}
            </div>
          </Fragment>
        )}
      </Query>
    )}
  </Value>
);
