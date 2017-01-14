import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import * as api from './api';

export function* search({ text }) {
  if (!text) {
    yield put({ type: 'UPDATE_ALBUMS', albums: [] });
    return;
  }
  yield delay(200);
  try {
    const { albums } = yield api.search(text);
    yield put({ type: 'UPDATE_ALBUMS', albums });
  } catch (e) {
    yield put({ type: 'UPDATE_ALBUMS_FAILED', message: e.message });
  }
}

export default function* watchIncrementAsync() {
  yield takeLatest('SEARCH', search);
}
