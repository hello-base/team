import { combineReducers } from 'redux';

import corners from './corners';
import detail from './detail';

const rootReducer = combineReducers({
  corners,
  detail
});

export default rootReducer;
