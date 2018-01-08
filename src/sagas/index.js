import { all, spawn } from 'redux-saga/effects';

import episodeSagas from './episodes';

export default function* rootSaga() {
  yield all([spawn(episodeSagas)]);
}
