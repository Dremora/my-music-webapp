export function search(text) {
  return { type: 'SEARCH', text };
}

export function getAlbum(id) {
  return { type: 'GET_ALBUM', id };
}
