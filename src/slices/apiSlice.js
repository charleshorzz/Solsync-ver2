import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "http://localhost:5000";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  //Use to define type of data fetching from API
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
