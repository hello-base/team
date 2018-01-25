import { fromJS } from 'immutable';

import * as actions from 'actions/casters';

const initialState = fromJS({
  isFetching: true,
  error: '',
  casters: []
});

const casters = (state = initialState, action) => {
  switch (action.type) {
    case actions.CASTER_FETCH.REQUEST:
      return state.merge({
        isFetching: true
      });
    case actions.CASTER_FETCH.FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error
      });
    case actions.CASTER_FETCH.SUCCESS:
      return state.merge({
        isFetching: false,
        casters: action.payload
      });
    default:
      return state;
  }
};

export default casters;
