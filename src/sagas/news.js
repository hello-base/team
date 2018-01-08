import axios from 'axios';

import { call, fork, put, take } from 'redux-saga/effects';

import * as actions from 'actions/news';

const { newsFetch } = actions;

function* fetchNews(id) {
  try {
    const uri = `https://hello-team-api.herokuapp.com/items/?episode__number=${id}`;
    const response = yield call(axios.get, uri);
    yield put(newsFetch.success(response.data));
  } catch (error) {
    yield put(newsFetch.failure(error));
  }
}

function* watchNewsFetchRequest() {
  const { id } = yield take(actions.NEWS_FETCH.REQUEST);
  yield call(fetchNews, id);
}

export default function* newsSagas() {
  yield fork(watchNewsFetchRequest);
}
