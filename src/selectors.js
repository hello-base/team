export const errorFetchingEpisode = state => state.detail.get('error') !== '';
export const getEpisodeDate = state => state.detail.get('date');
export const getEpisodeNumber = state => state.detail.get('number');
