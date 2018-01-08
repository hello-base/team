export const errorFetchingEpisode = state => state.episode.get('error') !== '';
export const getEpisodeDate = state => state.episode.get('date');
export const getEpisodeNumber = state => state.episode.get('number');
