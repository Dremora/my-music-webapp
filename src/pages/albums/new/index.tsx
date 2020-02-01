import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import AlbumForm from 'components/AlbumForm';
import { useLogin } from 'data/login';
import CreateAlbum from 'mutations/CreateAlbum';
import { CreateAlbumVariables } from 'mutations/CreateAlbum/types/CreateAlbum';

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

  const [submit, { error, loading }] = useMutation(CreateAlbum, {
    onCompleted: ({ createAlbum: { id } }) => router.replace('/albums/[id]', `/albums/${id}`)
  });

  if (!isLoggedIn) {
    return null;
  }

  return <AlbumForm data={emptyAlbum} isNew isSubmitting={loading} submit={submit} submitError={error} />;
};

export default NewAlbumPage;
