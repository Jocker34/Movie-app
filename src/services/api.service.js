import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from 'constants';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API,
  }),
  endpoints: () => ({}),
});
