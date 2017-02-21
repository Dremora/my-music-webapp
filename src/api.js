// @flow

import { stringify } from 'query-string';
import { fetch } from 'redux-auth';
import { Album, AlbumsC, Source } from './records';

function deserializeAlbum(album: any): Album {
  album.firstPlayed = album.first_played;
  delete album.first_played;
  album.sources = album.sources.map(deserializeSource);
  return Album(album);
}

function deserializeSource(source: any): Source {
  source.accurateRip = source.accurate_rip;
  source.cueIssues = source.cue_issues;
  source.tagIssues = source.tag_issues;
  return Source(source);
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
