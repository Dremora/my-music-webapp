import { Record, List, Union, Maybe } from 'typed-immutable';

export const Album = Record({
  artist: String,
  // firstPlayed:
  id: String,
  // //sources
  title: String,
  year: Maybe(Number)
});

export const AlbumError = Record({
  error: String('')
});

export const LoadingAlbum = Record({ loading: Boolean(true) });

export const Albums = List(Album);

export const AppState = Record({
  albums: Albums,
  searchText: String(''),
  album: Union(AlbumError, LoadingAlbum, Album)
});

