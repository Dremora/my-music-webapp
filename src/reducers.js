import { AppState, LoadingAlbum, AlbumError } from './records';

export const initialState = AppState({
  album: LoadingAlbum()
});

export default function todoApp(state = initialState, action) {
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
      return state.update('album', AlbumError({ error: action.error }));
    default:
      return state;
  }
}
