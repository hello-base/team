import { action, createRequestTypes } from './utils';

export const NEWS_FETCH = createRequestTypes('NEWS_FETCH');

export const newsFetch = {
  request: id => action(NEWS_FETCH.REQUEST, { id }),
  success: payload => action(NEWS_FETCH.SUCCESS, { payload }),
  failure: error => action(NEWS_FETCH.FAILURE, { error })
};
