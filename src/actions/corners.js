import { action, createRequestTypes } from './utils';

export const CORNER_FETCH = createRequestTypes('CORNER_FETCH');

export const cornerFetch = {
  request: id => action(CORNER_FETCH.REQUEST, { id }),
  success: payload => action(CORNER_FETCH.SUCCESS, { payload }),
  failure: error => action(CORNER_FETCH.FAILURE, { error })
};
