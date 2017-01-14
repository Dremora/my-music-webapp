import { stringify } from 'query-string';

export function search(query) {
  return fetch(`/api/albums?${stringify({ query })}`, {
    headers: { Accept: 'application/json' }
  }).then(response => response.json());
}
