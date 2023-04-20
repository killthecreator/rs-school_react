import * as toolkitQueryRaw from '@reduxjs/toolkit/dist/query/react';
const { createApi, fetchBaseQuery } = (
  'default' in toolkitQueryRaw ? toolkitQueryRaw.default : toolkitQueryRaw
) as typeof toolkitQueryRaw;
import { FlickrData } from './../../../utils/FlickrAPICall';

const API_KEY = import.meta.env.VITE_API_KEY;

export const flickrApi = createApi({
  reducerPath: 'flickrApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.flickr.com/services/rest/' }),
  endpoints: (builder) => ({
    getFlickrByValue: builder.query<FlickrData, string>({
      query: (value) =>
        `?method=flickr.photos.${
          value ? 'search' : 'getRecent'
        }&api_key=${API_KEY}&text=${value}&safe_search=1&content_type=1&per_page=6&page=1&format=json&nojsoncallback=1`,
    }),
  }),
});

export const { useGetFlickrByValueQuery } = flickrApi;
