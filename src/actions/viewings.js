import { action, createRequestTypes } from './utils';

export const VIEWINGS_FETCH = createRequestTypes('VIEWINGS_FETCH');

export const viewingsFetch = {
  request: id => action(VIEWINGS_FETCH.REQUEST, { id }),
  success: payload => action(VIEWINGS_FETCH.SUCCESS, { payload }),
  failure: error => action(VIEWINGS_FETCH.FAILURE, { error })
};
