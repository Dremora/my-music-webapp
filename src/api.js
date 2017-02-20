import { stringify } from 'query-string';
import { fetch } from 'redux-auth';
import { Album, Albums } from './records';

function fetchJSON(url, options = {}) {
  return fetch(url, {
    headers: { Accept: 'application/json' },
    ...options
  }).then(response => response.json());
}

export function search(query) {
  return fetchJSON(`/albums?${stringify({ query })}`).then(albums =>
    Albums(albums.albums));
}

export function getAlbum(id) {
  return fetchJSON(`/albums/${id}`).then(data => {
    return Album(data.album);
  });
}
