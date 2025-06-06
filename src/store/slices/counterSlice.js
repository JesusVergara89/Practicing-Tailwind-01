import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => {
      return state += 1;
    },
    decrement: state => {
      return state -= 1;
    },
    reset: state => {
        return state = 0;
    },
    incremeentByAmount: (state, action) => {
      return state += action.payload;
    },
  },
});

export const { increment, decrement, reset, incremeentByAmount } = counterSlice.actions;

export default counterSlice.reducer;
