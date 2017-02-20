// @flow

import { AppState, LoadingAlbum, AlbumError, Album } from './records';
import type { Albums } from './records';

export const initialState = AppState({
  album: LoadingAlbum()
});

type Action =
  | { type: 'SEARCH', text: string }
  | { type: 'UPDATE_SOURCE_RESULTS', albums: Albums }
  | { type: 'GET_ALBUM' }
  | { type: 'ALBUM_RECEIVED', album: Album }
  | { type: 'ALBUM_REQUEST_FAILED', error: AlbumError };

export default function todoApp(
  state: AppState = initialState,
  action: Action
) {
  switch (action.type) {
    case 'SEARCH':
      return state.set('searchText', action.text);
    case 'UPDATE_SOURCE_RESULTS':
      return state.set('albums', action.albums);
    case 'GET_ALBUM':
      return state.set('album', LoadingAlbum());
    case 'ALBUM_RECEIVED':
      return state.set('album', action.album);
    case 'ALBUM_REQUEST_FAILED':
      return state.set('album', AlbumError({ error: action.error }));
    default:
      return state;
  }
}
