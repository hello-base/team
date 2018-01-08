import { fromJS } from 'immutable';

import * as actions from 'actions/episodes';

const initialState = fromJS({
  isFetching: false,
  error: ''
});

const episode = (state = initialState, action) => {
  switch (action.type) {
    case actions.EPISODE_FETCH.REQUEST:
      return state.merge({
        isFetching: true
      });
    case actions.EPISODE_FETCH.FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error
      });
    case actions.EPISODE_FETCH.SUCCESS:
      return state.merge({
        isFetching: false,
        number: action.payload.number,
        date: action.payload.date
      });
    default:
      return state;
  }
};

export default episode;