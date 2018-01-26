import { all, spawn } from 'redux-saga/effects';

import castersSagas from './casters';
import cornersSagas from './corners';
import episodeSagas from './episodes';
import newsSagas from './news';
import viewingsSagas from './viewings';

export default function* rootSaga() {
  yield all([
    spawn(castersSagas),
    spawn(cornersSagas),
    spawn(episodeSagas),
    spawn(newsSagas),
    spawn(viewingsSagas)
  ]);
}
