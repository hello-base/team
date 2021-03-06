/* eslint-disable consistent-return */

export const isEpisodeFetching = state =>
  state.detail.get('isEpisodeFetching') && state.detail.get('isNewsFetching');
export const errorFetchingEpisode = state => state.detail.get('error') !== '';

export const getEpisodeDate = state => state.detail.get('date');
export const getEpisodeNumber = state => state.detail.get('number');
export const getEpisodeNewsByCategory = state => {
  const news = state.detail.get('news');
  if (!news.isEmpty()) {
    return news.groupBy(x => x.get('category'));
  }
};
export const getEpisodeViewings = state => state.detail.get('viewings');

export const getBirthdays = state => state.detail.get('birthdays');
export const getCasters = state => state.casters.get('casters');
export const getCorners = state => state.corners.get('corners');
