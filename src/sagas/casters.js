import axios from 'axios';

import { call, fork, put, take } from 'redux-saga/effects';

import * as actions from 'actions/casters';

const { casterFetch } = actions;

function* fetchCasters() {
  try {
    const uri = `https://api.hellote.am/casters/`;
    const response = yield call(axios.get, uri);
    yield put(casterFetch.success(response.data));
  } catch (error) {
    yield put(casterFetch.failure(error));
  }
}

function* watchCasterFetchRequest() {
  yield take(actions.CASTER_FETCH.REQUEST);
  yield call(fetchCasters);
}

export default function* castersSagas() {
  yield fork(watchCasterFetchRequest);
}
