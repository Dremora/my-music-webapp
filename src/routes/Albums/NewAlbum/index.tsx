import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import AlbumForm from '../../../components/AlbumForm';
import { useLogin } from '../../../data/login';

import { CreateAlbumVariables } from './types/CreateAlbum';
import UpdateAlbum from './mutation';

const emptyAlbum = (): { album: CreateAlbumVariables } => ({
  album: {
    title: '',
    artist: '',
    firstPlayed: { timestamp: new Date().getTime() },
    sources: []
  }
});

export default ({ history }) => {
  const { isLoggedIn } = useLogin();

  if (!isLoggedIn) {
    return null;
  }

  const [submit, { loading, error }] = useMutation(UpdateAlbum, {
    onCompleted: ({ createAlbum: { id } }) => history.replace(`/albums/${id}`)
  });
  return <AlbumForm data={emptyAlbum()} isNew isSubmitting={loading} submit={submit} submitError={error} />;
};
