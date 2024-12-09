import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: [
        {
            id: '0',
            name: 'jesus vergara'
        },
        {
            id: '1',
            name: 'archivaldo ramon'
        }
    ],
    reducers: {}
})

export const selectAllUsers = state => state.users;

export default userSlice.reducer