// @flow

import { Record, Maybe, Union, List, Typed } from 'typed-immutable';

export const FirstPlayed = Union(Number, List(Number));

const locations = ['foobar2000', 'google-music', 'spotify', 'apple-music'];

const Location = Typed('Location', value => {
  if (typeof value !== 'string') {
    return TypeError(`"${value}" is not a string`);
  }

  if (locations.indexOf(value) === -1) {
    return TypeError(`"${value}" isn't a known location`);
  }

  return value;
});

export const Source = Record({
  accurateRip: Maybe(String),
  comments: Maybe(String),
  cueIssues: Maybe(String),
  discs: Maybe(Number),
  download: Union(Maybe(String), List(String)),
  edition: Maybe(String),
  format: Maybe(String),
  location: Location,
  mbid: Maybe(String),
  tagIssues: Maybe(String)
});

export const Album = Record({
  artist: String,
  firstPlayed: Maybe(FirstPlayed),
  id: String,
  sources: List(Source),
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
