import React from 'react';
import { Mutation } from 'react-apollo';

import AlbumForm from '../../../components/AlbumForm';

import UpdateAlbum from './mutation';

const emptyAlbum = () => ({
  album: {
    firstPlayed: { timestamp: new Date().getTime() },
    sources: []
  }
});

export default ({ history }) => (
  <Mutation mutation={UpdateAlbum} onCompleted={({ createAlbum: { id } }) => history.replace(`/albums/${id}`)}>
    {(submit, { loading, error }) => (
      <AlbumForm data={emptyAlbum()} isSubmitting={loading} submit={submit} submitError={error} />
    )}
  </Mutation>
);
