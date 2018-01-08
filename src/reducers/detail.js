import { fromJS } from 'immutable';

import * as episodes from 'actions/episodes';
import * as news from 'actions/news';

const initialState = fromJS({
  isFetching: false,
  error: ''
});

const detail = (state = initialState, action) => {
  switch (action.type) {
    case episodes.EPISODE_FETCH.REQUEST:
      return state.merge({
        isFetching: true
      });
    case episodes.EPISODE_FETCH.FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error
      });
    case episodes.EPISODE_FETCH.SUCCESS:
      return state.merge({
        isFetching: false,
        number: action.payload.number,
        date: action.payload.date
      });
    case news.NEWS_FETCH.REQUEST:
      return state.merge({
        isFetching: true
      });
    case news.NEWS_FETCH.FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error
      });
    case news.NEWS_FETCH.SUCCESS:
      return state.merge({
        isFetching: false,
        news: action.payload
      });
    default:
      return state;
  }
};

export default detail;
