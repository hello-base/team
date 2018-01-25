import { action, createRequestTypes } from './utils';

export const CASTER_FETCH = createRequestTypes('CASTER_FETCH');

export const casterFetch = {
  request: id => action(CASTER_FETCH.REQUEST, { id }),
  success: payload => action(CASTER_FETCH.SUCCESS, { payload }),
  failure: error => action(CASTER_FETCH.FAILURE, { error })
};
