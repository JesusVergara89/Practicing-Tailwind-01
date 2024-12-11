import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import postReducer from "./slices/postSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    counterReducer,
    posts: postReducer,
    users: userReducer,
  },
});
