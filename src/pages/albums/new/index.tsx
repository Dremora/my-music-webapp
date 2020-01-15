import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import AlbumForm from 'components/AlbumForm';
import { useLogin } from 'data/login';

import { CreateAlbumVariables } from 'mutations/CreateAlbum/types/CreateAlbum';
import CreateAlbum from 'mutations/CreateAlbum';
import { useRouter } from 'next/router';

const createEmptyAlbum = (): { album: CreateAlbumVariables } => ({
  album: {
    title: '',
    artist: '',
    firstPlayed: { timestamp: Math.floor(new Date().getTime() / 1000) },
    sources: []
  }
});

const NewAlbumPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useLogin();
  const [emptyAlbum] = useState(createEmptyAlbum);

  const [submit, { loading, error }] = useMutation(CreateAlbum, {
    onCompleted: ({ createAlbum: { id } }) => router.replace('/albums/[id]', `/albums/${id}`)
  });

  if (!isLoggedIn) {
    return null;
  }

  return <AlbumForm data={emptyAlbum} isNew isSubmitting={loading} submit={submit} submitError={error} />;
};

export default NewAlbumPage;
