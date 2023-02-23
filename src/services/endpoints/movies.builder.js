import { movieApi } from 'services/api.service';
import { API_KEY } from 'constants';

export const moviesEndpoints = movieApi.injectEndpoints({
  endpoints: (builder) => ({
    nowPlaying: builder.query({
      query: (page) => ({
        url: `movie/now_playing`,
        params: { api_key: API_KEY, page: page },
      }),
    }),
    popular: builder.query({
      query: (page) => ({
        url: `movie/popular`,
        params: { api_key: API_KEY, page: page },
      }),
    }),
    topRated: builder.query({
      query: (page) => ({
        url: `movie/top_rated`,
        params: { api_key: API_KEY, page: page },
      }),
    }),
    upComing: builder.query({
      query: (page) => ({
        url: `movie/upcoming`,
        params: { api_key: API_KEY, page: page },
      }),
    }),
    search: builder.query({
      query: (name) => ({
        url: `/search/movie`,
        params: { api_key: API_KEY, query: name },
      }),
    }),
    video: builder.query({
      query: (id) => ({
        url: `/movie/${id}/videos`,
        params: { api_key: API_KEY },
      }),
    }),
    topBilledCast: builder.query({
      query: (id) => ({
        url: `/movie/${id}/credits`,
        params: { api_key: API_KEY },
      }),
    }),
    movieImages: builder.query({
      query: (id) => ({
        url: `/movie/${id}/images`,
        params: { api_key: API_KEY },
      }),
    }),
    movieDetails: builder.query({
      query: (args) => {
        const { id, lang } = args;
        return {
          url: `/movie/${id}`,
          params: { api_key: API_KEY, language: lang },
        };
      },
    }),
    movieRecommendations: builder.query({
      query: (id) => ({
        url: `/movie/${id}/recommendations`,
        params: { api_key: API_KEY },
      }),
    }),
    personKnownBy: builder.query({
      query: (id) => ({
        url: `/person/${id}/movie_credits`,
        params: { api_key: API_KEY },
      }),
    }),
    personDetails: builder.query({
      query: (args) => {
        const { id, lang } = args;
        return {
          url: `/person/${id}`,
          params: { api_key: API_KEY, language: lang },
        };
      },
    }),
    personImages: builder.query({
      query: (id) => ({
        url: `/person/${id}/images`,
        params: { api_key: API_KEY },
      }),
    }),
    movieGenres: builder.query({
      query: () => ({
        url: `/genre/movie/list`,
        params: { api_key: API_KEY },
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
