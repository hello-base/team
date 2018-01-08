export const errorFetchingEpisode = state => state.detail.get('error') !== '';
export const getEpisodeDate = state => state.detail.get('date');
export const getEpisodeNumber = state => state.detail.get('number');
export const getEpisodeNewsByCategory = state => {
  const news = state.detail.get('news');
  if (!news.isEmpty()) {
    return news.groupBy(x => x.get('category'));
  }
};
