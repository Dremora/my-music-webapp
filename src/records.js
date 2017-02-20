// @flow

import { Record, Maybe, Union } from 'typed-immutable';
import { List } from 'immutable';

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

export type Albums = List<Album>;

export const AppState = Record({
  albums: List(),
  searchText: String(''),
  album: Union(LoadingAlbum, Album, AlbumError)
});

