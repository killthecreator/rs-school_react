import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FlickrData } from './../../../utils/FlickrAPICall';

const API_KEY = import.meta.env.VITE_API_KEY;

// Define a service using a base URL and expected endpoints
export const flickrApi = createApi({
  reducerPath: 'flickrApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.flickr.com/services/rest/' }),
  endpoints: (builder) => ({
    getFlickrByValue: builder.query<FlickrData, string>({
      query: (value) =>
        `?method=flickr.photos.search&api_key=${API_KEY}&tags=${value}&tagmode=all&per_page=6&page=1&format=json&nojsoncallback=1`,
    }),
  }),
});

export const { useGetFlickrByValueQuery } = flickrApi;
