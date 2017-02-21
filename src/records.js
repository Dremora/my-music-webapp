// @flow

import { Record, Maybe, Union, List } from 'typed-immutable';

export const FirstPlayed = Union(Number, List(Number));

export const Album = Record({
  artist: String,
  firstPlayed: Maybe(FirstPlayed),
  id: String,
  // //sources
  comments: Maybe(String),
  title: String,
  year: Maybe(Number)
});

export const AlbumError = Record({
  error: String('')
});

export const LoadingAlbum = Record({ loading: Boolean(true) });

export type Albums = List<Album>;
export const AlbumsC = List(Album);

export const AppState = Record({
  albums: AlbumsC,
  searchText: String(''),
  album: Union(LoadingAlbum, Album, AlbumError)
});
