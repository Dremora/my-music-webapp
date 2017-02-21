// @flow

import { stringify } from 'query-string';
import { fetch } from 'redux-auth';
import { Album, AlbumsC } from './records';

function deserializeAlbum(album: any): Album {
  album.firstPlayed = album.first_played;
  delete album.first_played;
  return Album(album);
}

function fetchJSON(url, options = {}) {
  return fetch(url, {
    headers: { Accept: 'application/json' },
    ...options
  }).then(response => response.json());
}

export function search(query: string) {
  return fetchJSON(`/albums?${stringify({ query })}`).then(albums =>
    AlbumsC(albums.albums.map(deserializeAlbum)));
}

export function getAlbum(id: string) {
  return fetchJSON(`/albums/${id}`).then(data => deserializeAlbum(data.album));
}
