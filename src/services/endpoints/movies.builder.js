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
        url: `movie/upcoming${API_KEY}`,
      }),
    }),
    search: builder.query({
      query: (name) => ({
        url: `/search/movie${API_KEY}&query=${name}`,
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
} = moviesEndpoints;
