import { fromJS } from 'immutable';

import * as episodes from 'actions/episodes';
import * as news from 'actions/news';
import * as viewings from 'actions/viewings';

const initialState = fromJS({
  isEpisodeFetching: true,
  isNewsFetching: true,
  isViewingsFetching: true,
  error: '',
  news: []
});

const detail = (state = initialState, action) => {
  switch (action.type) {
    case episodes.EPISODE_FETCH.REQUEST:
      return state.merge({
        isEpisodeFetching: true
      });
    case episodes.EPISODE_FETCH.FAILURE:
      return state.merge({
        isEpisodeFetching: false,
        error: action.error
      });
    case episodes.EPISODE_FETCH.SUCCESS:
      return state.merge({
        isEpisodeFetching: false,
        number: action.payload.number,
        date: action.payload.date,
        birthdays: action.payload.birthdays
      });
    case news.NEWS_FETCH.REQUEST:
      return state.merge({
        isNewsFetching: true
      });
    case news.NEWS_FETCH.FAILURE:
      return state.merge({
        isNewsFetching: false,
        error: action.error
      });
    case news.NEWS_FETCH.SUCCESS:
      return state.merge({
        isNewsFetching: false,
        news: action.payload
      });
    case viewings.VIEWINGS_FETCH.REQUEST:
      return state.merge({
        isViewingsFetching: true
      });
    case viewings.VIEWINGS_FETCH.FAILURE:
      return state.merge({
        isViewingsFetching: false,
        error: action.error
      });
    case viewings.VIEWINGS_FETCH.SUCCESS:
      return state.merge({
        isViewingsFetching: false,
        viewings: action.payload
      });
    default:
      return state;
  }
};

export default detail;
