import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jimmy-api-library.herokuapp.com/api/",
  }),
  endpoints(build) {
    return {
      getProducts: build.query({
        query() {
          return "foodeliveries?populate=*";
        },
        transformResponse(baseQueryReturnValue, meta, arg) {
          return baseQueryReturnValue.data;
        },
      }),
    };
  },
});

export const { useGetProductsQuery } = productApi;

export default productApi;
