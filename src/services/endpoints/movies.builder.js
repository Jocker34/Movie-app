import { movieApi } from 'services/api.service';
import { API_KEY } from 'constants';

export const moviesEndpoints = movieApi.injectEndpoints({
  endpoints: (builder) => ({
    nowPlaying: builder.query({
      query: () => ({
        url: `movie/now_playing${API_KEY}`,
      }),
    }),
    popular: builder.query({
      query: () => ({
        url: `movie/popular${API_KEY}`,
      }),
    }),
    topRated: builder.query({
      query: () => ({
        url: `movie/top_rated${API_KEY}`,
      }),
    }),
    upComing: builder.query({
      query: () => ({
        url: `movie/upcoming${API_KEY}&`,
      }),
    }),
    search: builder.query({
      query: (name) => ({
        url: `/search/movie${API_KEY}&query=${name}`,
      }),
    }),
    video: builder.query({
      query: (id) => ({
        url: `/movie/${id}/videos${API_KEY}`,
      }),
    }),
    topBilledCast: builder.query({
      query: (id) => ({
        url: `/movie/${id}/credits${API_KEY}`,
      }),
    }),
    movieImages: builder.query({
      query: (id) => ({
        url: `/movie/${id}/images${API_KEY}`,
      }),
    }),
    movieDetails: builder.query({
      query: (args) => {
        const { id, lang } = args;
        return { url: `/movie/${id}${API_KEY}&language=${lang}` };
      },
    }),
    movieRecommendations: builder.query({
      query: (id) => ({
        url: `/movie/${id}/recommendations${API_KEY}`,
      }),
    }),
    personKnownBy: builder.query({
      query: (id) => ({
        url: `/person/${id}/movie_credits${API_KEY}`,
      }),
    }),
    personDetails: builder.query({
      query: (args) => {
        const { id, lang } = args;
        return { url: `/person/${id}${API_KEY}&language=${lang}` };
      },
    }),
    personImages: builder.query({
      query: (id) => ({
        url: `/person/${id}/images${API_KEY}`,
      }),
    }),
    movieGenres: builder.query({
      query: () => ({
        url: `/genre/movie/list${API_KEY}`,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLazyNowPlayingQuery,
  useLazyPopularQuery,
  useLazyTopRatedQuery,
  useLazyUpComingQuery,
  useLazySearchQuery,
  useLazyVideoQuery,
  useLazyTopBilledCastQuery,
  useLazyMovieImagesQuery,
  useLazyMovieDetailsQuery,
  useLazyMovieRecommendationsQuery,
  useLazyPersonKnownByQuery,
  useLazyPersonDetailsQuery,
  useLazyPersonImagesQuery,
  useLazyMovieGenresQuery,
} = moviesEndpoints;
