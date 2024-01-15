import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const RTkDemoSlice = createApi({
  reducerPath: 'rtk_demo',
  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
  endpoints: builder => ({
    getAllProductsByRtk: builder.query({
      query: () => ({
        url: 'products',
      }),
    }),
    getProductById: builder.query({
      query: id => ({
        url: `products/${id}`,
      }),
    }),
  }),
});

export const {useGetAllProductsByRtkQuery, useGetProductByIdQuery} =
  RTkDemoSlice;
export default RTkDemoSlice;
