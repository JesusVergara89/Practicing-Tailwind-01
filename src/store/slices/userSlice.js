import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(USER_URL);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
