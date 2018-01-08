import axios from 'axios';

import { call, fork, put, take } from 'redux-saga/effects';

import * as actions from 'actions/episodes';
import { apiUri } from 'constants';

const { episodeFetch } = actions;

function* fetchEpisode(id) {
  try {
    const uri = `${apiUri}/episodes/${id}`;
    const response = yield call(axios.get, uri);
    yield put(episodeFetch.success(response.data));
  } catch (error) {
    yield put(episodeFetch.failure(error));
  }
}

function* watchEpisodeFetchRequest() {
  const { id } = yield take(actions.EPISODE_FETCH.REQUEST);
  yield call(fetchEpisode, id);
}

export default function* episodeSagas() {
  yield fork(watchEpisodeFetchRequest);
}
