import { createSlice } from "@reduxjs/toolkit";
import { increment as incrementCounter, decrement as decrementCounter, reset as resetCounter } from "../counter/counterSlice";
import { increment2 as incrementCounter2, decrement2 as decrementCounter2, reset as resetCounter2 } from "../counter/counterSlice2";

const initialState = {
  numberValue: 0,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: (state) => {
      state.numberValue++;
    },
    decrement: (state) => {
      state.numberValue--;
    },
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    [incrementCounter, incrementCounter2, decrementCounter, decrementCounter2].forEach((action) => {
      builder.addCase(action, (state) => {
        state.numberValue += action.toString().includes("increment") ? 1 : -1;
      });
    });
  },
});

export default numberSlice.reducer;
export const { increment, decrement, reset } = numberSlice.actions;
export const selectNumber = (state) => state.number.numberValue;

// Add the reset actions from counterSlice and counterSlice2
export const resetAllCounters = () => (dispatch) => {
  dispatch(reset());
  dispatch(resetCounter());
  dispatch(resetCounter2());
};
