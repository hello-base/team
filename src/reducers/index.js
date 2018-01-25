import { combineReducers } from 'redux';

import casters from './casters';
import corners from './corners';
import detail from './detail';

const rootReducer = combineReducers({
  casters,
  corners,
  detail
});

export default rootReducer;
