// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://shoppingreact.onrender.com/" }),
  endpoints: (builder) => ({
    getproductsByName: builder.query({
      query: (name) => `products`,
    }),
  }),
});
export const OneproductApi = createApi({
  reducerPath: "OneproductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://shoppingreact.onrender.com/" }),
  endpoints: (builder) => ({
    getOneProduct: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproductsByNameQuery } = productsApi;
export const { useGetOneProductQuery } = OneproductApi;
