import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogServices = createApi({
  reducerPath: "Blogs",
  tagTypes: ["blogs"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: "blogs",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `blogs/${id}`,
        method: "GET",
      }),
    }),
    postBlog: builder.mutation({
      query: (blog) => ({
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        url: "blogs",
        body: blog,
      }),
      invalidatesTags: ["blogs"],
    }),
    updateBlog: builder.mutation({
      query: () => ({
        url: `blog/id`,
        method: "PUT",
        body: "This is update data",
      }),
      invalidatesTags: ["blogs"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `blogs/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  usePostBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useGetSingleBlogQuery,
} = blogServices;
