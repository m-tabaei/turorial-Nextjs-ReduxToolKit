import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counterValue++;
    },
    decrement: (state) => {
      state.counterValue--;
    },
    reset: (state) => {
      return initialState;
      
    },
    incrementByAmount: (state, action) => {
      state.counterValue += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export const selectCounter = (store) => store.counter.counterValue;
