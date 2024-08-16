import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice2';

export const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });