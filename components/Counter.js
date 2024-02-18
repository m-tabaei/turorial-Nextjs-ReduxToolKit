"use client";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
  selectCounter,
} from "@/redux/features/counter/counterSlice";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const [value, setValue] = useState();

  const counter = useSelector(selectCounter);
  const dispach = useDispatch();
  return (
    <div>

        <h2>Counter is : {counter}</h2>
    <div className="form-input">
      <button onClick={() => dispach(increment())}>Increment + 1</button>
      <button onClick={() => dispach(decrement())}>Decrement - 1</button>
      <button onClick={() => dispach(reset())}>Reset</button>
      </div>
      <label htmlFor="amount">Amount:</label>
      <input
      placeholder="Enter amount"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
      <button onClick={() => dispach(incrementByAmount(+value))}>
        increment By Amount
      </button>
        </div>
  );
}

export default Counter;
