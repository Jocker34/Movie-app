import { configureStore } from '@reduxjs/toolkit';

import { movieApi } from 'services/api.service';
import moviesReducers from './reducers/movies.reducer';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movies: moviesReducers.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

const moviesActions = moviesReducers.actions;

export { moviesActions };

export default store;
