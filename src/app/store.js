import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../features/Posts/postsSlice";
import UsersReducers from "../features/Users/usersSlice";
export const store = configureStore({
  reducer: {
    Posts: PostReducer,
    Users: UsersReducers,
  },
});
