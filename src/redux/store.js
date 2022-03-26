import { configureStore } from "@reduxjs/toolkit";
import { blogServices } from "./blogs/blogs.js";
const Store = configureStore({
  reducer: {
    [blogServices.reducerPath]: blogServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogServices.middleware),
});

export default Store;
