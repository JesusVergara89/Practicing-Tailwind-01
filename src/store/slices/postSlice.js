import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: [
        {
            id: '1',
            title: 'Post 1',
            body: 'This is the body of post 1'
        },
        {
            id: '2',
            title: 'Post 2',
            body: 'This is the body of post 2'
        }, 
    ],
    reducers: {
        postAdd(state, action) {
            state.push(action.payload);
        }
    }
});

export const selectAllPost = (state) => state.postReducer;

export const { postAdd } = postSlice.actions;

export default postSlice.reducer;