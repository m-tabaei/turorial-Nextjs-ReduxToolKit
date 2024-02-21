"use client";
import {
  decrement2,
  increment2,
  incrementByAmount2,

  selectCounter2,
} from "@/redux/features/counter/counterSlice2";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter2() {
  const [value, setValue] = useState(5);

  const counter2 = useSelector(selectCounter2);
  const dispach = useDispatch();
  return (
    <div>

        <h2>Counter2 is : {counter2}</h2>
    <div className="form-input">
      <button onClick={() => dispach(increment2())}>Increment + 1</button>
      <button onClick={() => dispach(decrement2())}>Decrement - 1</button>
      </div>
      <label htmlFor="amount">Amount:</label>
      <input
      placeholder="Enter amount"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
      <button onClick={() => dispach(incrementByAmount2(+value))}>
        increment By Amount
      </button>
        </div>
  );
}

export default Counter2;
