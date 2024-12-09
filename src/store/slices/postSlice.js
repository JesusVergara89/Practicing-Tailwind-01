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
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffe: 0,
      },
    },
    {
      id: "2",
      title: "Post 2",
      body: "This is the body of post 2",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffe: 0,
      },
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
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffe: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
        const {postId, reaction } = action.payload;
        const existingPost = state.find(post => post.id === postId);
        if (existingPost) {
            existingPost.reactions[reaction]++;
        }
    },
  },
});

export const selectAllPost = (state) => state.postReducer;

export const { postAdd, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
