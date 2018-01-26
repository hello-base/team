import axios from 'axios';

import { call, fork, put, take } from 'redux-saga/effects';

import * as actions from 'actions/viewings';

const { viewingsFetch } = actions;

function* fetchViewings(id) {
  try {
    const uri = `https://api.hellote.am/viewings/?episode__number=${id}`;
    const response = yield call(axios.get, uri);
    yield put(viewingsFetch.success(response.data));
  } catch (error) {
    yield put(viewingsFetch.failure(error));
  }
}

function* watchViewingsFetchRequest() {
  const { id } = yield take(actions.VIEWINGS_FETCH.REQUEST);
  yield call(fetchViewings, id);
}

export default function* viewingsSagas() {
  yield fork(watchViewingsFetchRequest);
}
