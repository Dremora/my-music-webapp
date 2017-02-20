// @flow

import { stringify } from 'query-string';
import { fetch } from 'redux-auth';
import { Album } from './records';
import { List } from 'immutable';

function fetchJSON(url, options = {}) {
  return fetch(url, {
    headers: { Accept: 'application/json' },
    ...options
  }).then(response => response.json());
}

export function search(query: string) {
  return fetchJSON(`/albums?${stringify({ query })}`).then(albums =>
    List(albums.albums.map(Album)));
}

export function getAlbum(id: string) {
  return fetchJSON(`/albums/${id}`).then(data => Album(data.album));
}
