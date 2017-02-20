// @flow

export function search(text: string) {
  return { type: 'SEARCH', text };
}

export function getAlbum(id: string) {
  return { type: 'GET_ALBUM', id };
}
