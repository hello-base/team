import { fromJS } from 'immutable';

import * as actions from 'actions/corners';

const initialState = fromJS({
  isFetching: true,
  error: '',
  corners: []
});

const corners = (state = initialState, action) => {
  switch (action.type) {
    case actions.CORNER_FETCH.REQUEST:
      return state.merge({
        isFetching: true
      });
    case actions.CORNER_FETCH.FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error
      });
    case actions.CORNER_FETCH.SUCCESS:
      return state.merge({
        isFetching: false,
        corners: action.payload
      });
    default:
      return state;
  }
};

export default corners;
