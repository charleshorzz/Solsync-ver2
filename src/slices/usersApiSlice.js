import { apiSlice } from "./apiSlice.js";
const USERS_URL = "http://localhost:5000/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: USERS_URL,
      }),
    }),
    getUserDetails: builder.query({
      query: (userName) => ({
        url: `${USERS_URL}/${userName}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useRegisterMutation, useGetUsersQuery, useGetUserDetailsQuery } =
  usersApiSlice;
