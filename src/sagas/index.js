import { all, spawn } from 'redux-saga/effects';

import cornersSagas from './corners';
import episodeSagas from './episodes';
import newsSagas from './news';

export default function* rootSaga() {
  yield all([spawn(cornersSagas), spawn(episodeSagas), spawn(newsSagas)]);
}
