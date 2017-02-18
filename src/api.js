import { stringify } from 'query-string';
import { fetch } from 'redux-auth';

function fetchJSON(url, options = {}) {
  return fetch(url, {
    headers: { Accept: 'application/json' },
    ...options
  }).then(response => response.json());
}

export function search(query) {
  return fetchJSON(`/albums?${stringify({ query })}`);
}

export function getAlbum(id) {
  return fetchJSON(`/albums/${id}`);
}
