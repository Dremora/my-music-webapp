// @flow

import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from './api';

export function* search({ text }: { text: string }): mixed {
  if (!text) {
    yield put({ type: 'UPDATE_SOURCE_RESULTS', albums: [] });
    return;
  }
  yield delay(200);
  try {
    const albums = yield call(api.search, text);
    yield put({ type: 'UPDATE_SOURCE_RESULTS', albums });
  } catch (e) {
    yield put({ type: 'UPDATE_SOURCE_RESULTS_FAILED', message: e.message });
  }
}

export function* getAlbum({ id }: { id: string }): mixed {
  try {
    const album = yield call(api.getAlbum, id);
    yield put({ type: 'ALBUM_RECEIVED', album });
  } catch (e) {
    yield put({ type: 'ALBUM_REQUEST_FAILED', error: e.message });
  }
}

export default function* watchIncrementAsync(): mixed {
  yield takeLatest('SEARCH', search);
  yield takeLatest('GET_ALBUM', getAlbum);
}
