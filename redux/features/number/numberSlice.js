import { createSlice } from "@reduxjs/toolkit";
import { increment as incrementCounter, decrement as decrementCounter, incrementByAmount as Amount  } from "../counter/counterSlice";
import { increment2 as incrementCounter2, decrement2 as decrementCounter2, incrementByAmount2 as Amount2 } from "../counter/counterSlice2";

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
    builder
      .addCase(Amount, (state, action) => {
        // Use action.payload to access the specific amount from the payload
        state.numberValue += action.payload;
      })
      .addCase(Amount2, (state, action) => {
        // Use action.payload to access the specific amount from the payload
        state.numberValue += action.payload;
      });
  },
});

export default numberSlice.reducer;
export const { increment, decrement, reset } = numberSlice.actions;
export const selectNumber = (state) => state.number.numberValue;
