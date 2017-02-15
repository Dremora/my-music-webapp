import { stringify } from 'query-string';

function fetchJSON(url, options = {}) {
  return fetch(url, {
    headers: { Accept: 'application/json' },
    ...options
  }).then(response => response.json());
}

export function search(query) {
  return fetchJSON(`/api/albums?${stringify({ query })}`);
}

export function getAlbum(id) {
  return fetchJSON(`/api/albums/${id}`);
}
