import { Map } from 'immutable';

const initialState = Map({ albums: [], searchText: '' });

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH':
      return state.set('searchText', action.text);
    case 'UPDATE_ALBUMS':
      return state.set('albums', action.albums);
    default:
      return state;
  }
}
