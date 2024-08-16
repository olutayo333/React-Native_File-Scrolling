import { createSlice } from '@reduxjs/toolkit';

export const counterSlice2 = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice2.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice2.reducer;