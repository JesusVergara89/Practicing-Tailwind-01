import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [
    {
      id: "0",
      name: "jesus vergara",
    },
    {
      id: "1",
      name: "archivaldo ramon",
    },
  ],
  reducers: {},
});

export const selectAllUsers = (state) => state.userReducer;

export default userSlice.reducer;
