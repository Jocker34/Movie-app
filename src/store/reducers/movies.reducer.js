import { createSlice } from '@reduxjs/toolkit';

import { moviesEndpoints } from 'services/endpoints/movies.builder';

const initialState = [];

const updateMovies = (state, action) => [...action.payload.results];

const moviesReducers = createSlice({
  name: 'moviesReducers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      moviesEndpoints.endpoints.nowPlaying.matchFulfilled,
      updateMovies
    );
    builder.addMatcher(
      moviesEndpoints.endpoints.popular.matchFulfilled,
      updateMovies
    );
    builder.addMatcher(
      moviesEndpoints.endpoints.topRated.matchFulfilled,
      updateMovies
    );
    builder.addMatcher(
      moviesEndpoints.endpoints.upComing.matchFulfilled,
      updateMovies
    );
    builder.addMatcher(
      moviesEndpoints.endpoints.search.matchFulfilled,
      updateMovies
    );
  },
});

export default moviesReducers;
