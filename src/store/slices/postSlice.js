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

    }
});

export const {  } = postSlice.actions;

export default postSlice.reducer;