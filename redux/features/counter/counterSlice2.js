import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue2: 0,
};

const counterSlice2 = createSlice({
  name: "counter2",
  initialState,
  reducers: {
    increment2: (state) => {
      state.counterValue2++;
    },
    decrement2: (state) => {
      state.counterValue2--;
    },

    incrementByAmount2: (state, action) => {
      state.counterValue2 += action.payload;
    },
  },
});

export default counterSlice2.reducer;
export const { increment2, decrement2, incrementByAmount2 } =
  counterSlice2.actions;
export const selectCounter2 = (store) => store.counter2.counterValue2;
