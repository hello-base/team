import { action, createRequestTypes } from './utils';

export const EPISODE_FETCH = createRequestTypes('EPISODE_FETCH');

export const episodeFetch = {
  request: id => action(EPISODE_FETCH.REQUEST, { id }),
  success: payload => action(EPISODE_FETCH.SUCCESS, { payload }),
  failure: error => action(EPISODE_FETCH.FAILURE, { error })
};
