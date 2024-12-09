import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

export const postSlice = createSlice({
  name: "post",
  initialState: [
    {
      id: "1",
      title: "Post 1",
      body: "This is the body of post 1",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
      id: "2",
      title: "Post 2",
      body: "This is the body of post 2",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
    },
  ],
  reducers: {
    postAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, body, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const selectAllPost = (state) => state.postReducer;

export const { postAdd } = postSlice.actions;

export default postSlice.reducer;
