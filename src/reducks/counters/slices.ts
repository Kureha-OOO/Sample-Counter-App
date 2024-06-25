import { createSlice } from "@reduxjs/toolkit";
import { iintialCounterState } from "./initializes";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: iintialCounterState,
  reducers: {
    increase: (state) => {
      state.count += 1
    }, 
    decrease: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    }
  }
})

export const {increase, decrease, reset} = counterSlice.actions

export const counter = counterSlice.reducer