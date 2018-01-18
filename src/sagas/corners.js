import axios from 'axios';

import { call, fork, put, take } from 'redux-saga/effects';

import * as actions from 'actions/corners';

const { cornerFetch } = actions;

function* fetchCorners() {
  try {
    const uri = `https://api.hellote.am/corners/`;
    const response = yield call(axios.get, uri);
    yield put(cornerFetch.success(response.data));
  } catch (error) {
    yield put(cornerFetch.failure(error));
  }
}

function* watchCornerFetchRequest() {
  yield take(actions.CORNER_FETCH.REQUEST);
  yield call(fetchCorners);
}

export default function* cornersSagas() {
  yield fork(watchCornerFetchRequest);
}
