import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import AlbumForm from '../../../components/AlbumForm';
import { useLogin } from '../../../data/login';

import { CreateAlbumVariables } from './types/CreateAlbum';
import UpdateAlbum from './mutation';

const createEmptyAlbum = (): { album: CreateAlbumVariables } => ({
  album: {
    title: '',
    artist: '',
    firstPlayed: { timestamp: Math.floor(new Date().getTime() / 1000) },
    sources: []
  }
});

const NewAlbumRoute = ({ history }) => {
  const { isLoggedIn } = useLogin();
  const [emptyAlbum] = useState(createEmptyAlbum);

  const [submit, { loading, error }] = useMutation(UpdateAlbum, {
    onCompleted: ({ createAlbum: { id } }) => history.replace(`/albums/${id}`)
  });

  if (!isLoggedIn) {
    return null;
  }

  return <AlbumForm data={emptyAlbum} isNew isSubmitting={loading} submit={submit} submitError={error} />;
};

export default NewAlbumRoute;
