import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import counterReducer2 from "./features/counter/counterSlice2";
import usersReducer from "./features/users/usersSlice";
import numberReducer from "./features/number/numberSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2,
    number: numberReducer,
    users: usersReducer,
  },
});

export default store;
