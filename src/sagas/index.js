import { all, spawn } from 'redux-saga/effects';

import episodeSagas from './episodes';
import newsSagas from './news';

export default function* rootSaga() {
  yield all([spawn(episodeSagas), spawn(newsSagas)]);
}
